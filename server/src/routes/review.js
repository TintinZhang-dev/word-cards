const express = require("express");
const db = require("../db");
const { sm2, calcNextReviewDate, answerLearningCard, GRADE_MAP } = require("../lib/sm2");

const router = express.Router();

// GET /api/review/due?deckId=&newLimit=10&reviewLimit=50
// 获取待复习卡片队列
router.get("/due", (req, res) => {
  try {
    const deckId = req.query.deckId || null;
    const newLimit = parseInt(req.query.newLimit, 10) || 10;
    const reviewLimit = parseInt(req.query.reviewLimit, 10) || 50;

    // 获取当前用户的单词（可选卡组过滤）
    let words;
    if (deckId) {
      words = db.prepare(
        "SELECT * FROM words WHERE user_id = ? AND deck_id = ? ORDER BY created_at ASC"
      ).all(req.user.id, deckId);
    } else {
      words = db.prepare(
        "SELECT * FROM words WHERE user_id = ? ORDER BY created_at ASC"
      ).all(req.user.id);
    }

    const now = new Date();
    const learningDue = [];
    const reviewDue = [];
    const newCards = [];

    for (const w of words) {
      // 获取或创建复习数据
      let rd = db.prepare(
        "SELECT * FROM review_data WHERE word_id = ? AND user_id = ?"
      ).get(w.id, req.user.id);

      if (!rd) {
        db.prepare(
          "INSERT INTO review_data (word_id, user_id) VALUES (?, ?)"
        ).run(w.id, req.user.id);
        rd = { word_id: w.id, card_state: "new", learning_step: 0, next_review: null };
      }

      if (rd.card_state === "learning") {
        if (!rd.next_review || new Date(rd.next_review) <= now) {
          learningDue.push(w.id);
        }
      } else if (rd.card_state === "review") {
        if (!rd.next_review || new Date(rd.next_review) <= now) {
          reviewDue.push(w.id);
        }
      } else if (rd.card_state === "new") {
        newCards.push(w.id);
      }
      // mastered 卡片不进入队列
    }

    // 今日已用额度
    const today = new Date().toISOString().split("T")[0];
    const usedNew = getTodayCount(req.user.id, deckId, "new", today);
    const usedReview = getTodayCount(req.user.id, deckId, "review", today);

    const remainingNew = Math.max(0, newLimit - usedNew);
    const remainingReview = Math.max(0, reviewLimit - usedReview);

    const cappedNew = newCards.slice(0, remainingNew);
    const cappedReview = reviewDue.slice(0, remainingReview);

    // 合并队列：学习到期 → 复习到期 → 新卡片
    const queueIds = [...learningDue, ...cappedReview, ...cappedNew];

    // 查询完整卡片信息
    const queue = queueIds.map((wordId, index) => {
      // 因为我们是按顺序 push 的，需要保持顺序查找
      return null; // placeholder
    });

    // 构建一个映射来保持顺序
    const wordMap = new Map(words.map(w => [w.id, w]));
    const result = queueIds.map(wordId => {
      const w = wordMap.get(wordId);
      const rd = db.prepare(
        "SELECT * FROM review_data WHERE word_id = ? AND user_id = ?"
      ).get(wordId, req.user.id);
      return {
        word_id: w.id,
        word: w.word,
        translation: w.translation,
        definition: w.definition,
        deck_id: w.deck_id,
        card_state: rd ? rd.card_state : "new",
        learning_step: rd ? rd.learning_step : 0,
        reps: rd ? rd.reps : 0,
        interval: rd ? rd.interval : 0,
      };
    });

    res.json(result);
  } catch (err) {
    console.error("get due cards error:", err);
    res.status(500).json({ error: "获取复习队列失败" });
  }
});

// POST /api/review/answer
// Body: { wordId, gradeKey: "again"|"hard"|"good"|"easy" }
router.post("/answer", (req, res) => {
  try {
    const { wordId, gradeKey } = req.body;

    if (!wordId || !gradeKey) {
      return res.status(400).json({ error: "wordId 和 gradeKey 不能为空" });
    }

    if (!["again", "hard", "good", "easy"].includes(gradeKey)) {
      return res.status(400).json({ error: "gradeKey 无效" });
    }

    // 确认单词属于当前用户
    const word = db.prepare(
      "SELECT * FROM words WHERE id = ? AND user_id = ?"
    ).get(wordId, req.user.id);

    if (!word) {
      return res.status(404).json({ error: "单词不存在" });
    }

    // 获取复习数据
    let rd = db.prepare(
      "SELECT * FROM review_data WHERE word_id = ? AND user_id = ?"
    ).get(wordId, req.user.id);

    if (!rd) {
      db.prepare(
        "INSERT INTO review_data (word_id, user_id) VALUES (?, ?)"
      ).run(wordId, req.user.id);
      rd = {
        word_id: wordId,
        user_id: req.user.id,
        next_review: null,
        interval: 0,
        reps: 0,
        ef: 2.5,
        card_state: "new",
        learning_step: 0,
      };
    }

    const today = new Date().toISOString().split("T")[0];
    const deckId = word.deck_id;

    if (rd.card_state === "new" || rd.card_state === "learning") {
      // 新卡片首次学习，计入每日额度
      if (rd.card_state === "new") {
        incrementTodayCount(req.user.id, deckId, "new", today);
      }
      answerLearningCard(rd, gradeKey);
    } else {
      // 复习模式 — SM-2
      const grade = GRADE_MAP[gradeKey];
      sm2(rd, grade);
      rd.next_review = calcNextReviewDate(rd);

      // 如果已掌握的卡片忘了，降级回复习
      if (gradeKey === "again" && rd.card_state === "mastered") {
        rd.card_state = "review";
      }

      // 成功复习，计入每日额度
      if (gradeKey !== "again") {
        incrementTodayCount(req.user.id, deckId, "review", today);
      }

      // 检查是否达到已掌握条件
      if (rd.reps >= 3 && rd.interval >= 21) {
        rd.card_state = "mastered";
      }
    }

    rd.last_reviewed = new Date().toISOString();

    // 更新数据库
    db.prepare(`
      UPDATE review_data
      SET next_review = ?, interval = ?, reps = ?, ef = ?,
          card_state = ?, learning_step = ?, last_reviewed = ?
      WHERE word_id = ? AND user_id = ?
    `).run(
      rd.next_review, rd.interval, rd.reps, rd.ef,
      rd.card_state, rd.learning_step, rd.last_reviewed,
      wordId, req.user.id
    );

    res.json({ ok: true });
  } catch (err) {
    console.error("answer card error:", err);
    res.status(500).json({ error: "提交答案失败" });
  }
});

// ---- 每日计数辅助函数 ----

function getTodayCount(userId, deckId, type, today) {
  const key = deckId == null ? "__global__" : String(deckId);
  const row = db.prepare(
    "SELECT count FROM daily_counts WHERE user_id = ? AND date = ? AND type = ? AND deck_key = ?"
  ).get(userId, today, type, key);
  return row ? row.count : 0;
}

function incrementTodayCount(userId, deckId, type, today) {
  const key = deckId == null ? "__global__" : String(deckId);
  db.prepare(`
    INSERT INTO daily_counts (user_id, date, type, deck_key, count)
    VALUES (?, ?, ?, ?, 1)
    ON CONFLICT(user_id, date, type, deck_key)
    DO UPDATE SET count = count + 1
  `).run(userId, today, type, key);
}

module.exports = router;
