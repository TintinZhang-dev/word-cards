const express = require("express");
const db = require("../db");

const router = express.Router();

// GET /api/words — 获取当前用户所有单词
router.get("/", (req, res) => {
  try {
    const words = db.prepare(
      "SELECT * FROM words WHERE user_id = ? ORDER BY created_at DESC"
    ).all(req.user.id);
    res.json(words);
  } catch (err) {
    console.error("get words error:", err);
    res.status(500).json({ error: "获取单词列表失败" });
  }
});

// POST /api/words — 创建单词
router.post("/", (req, res) => {
  try {
    const { word, translation, definition, deckId } = req.body;

    if (!word || !word.trim()) {
      return res.status(400).json({ error: "单词不能为空" });
    }

    const trimmed = word.trim();
    const result = db.prepare(
      "INSERT INTO words (user_id, deck_id, word, translation, definition) VALUES (?, ?, ?, ?, ?)"
    ).run(req.user.id, deckId || null, trimmed, (translation || "").trim(), (definition || "").trim());

    // 同时创建 review_data 记录
    db.prepare(
      "INSERT OR IGNORE INTO review_data (word_id, user_id) VALUES (?, ?)"
    ).run(result.lastInsertRowid, req.user.id);

    const created = db.prepare("SELECT * FROM words WHERE id = ?").get(result.lastInsertRowid);
    res.status(201).json(created);
  } catch (err) {
    console.error("create word error:", err);
    res.status(500).json({ error: "创建单词失败" });
  }
});

// PUT /api/words/:id — 更新单词
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;

    // 确认单词属于当前用户
    const existing = db.prepare(
      "SELECT * FROM words WHERE id = ? AND user_id = ?"
    ).get(id, req.user.id);

    if (!existing) {
      return res.status(404).json({ error: "单词不存在" });
    }

    const { word, translation, definition, deckId } = req.body;

    if (!word || !word.trim()) {
      return res.status(400).json({ error: "单词不能为空" });
    }

    db.prepare(
      "UPDATE words SET word = ?, translation = ?, definition = ?, deck_id = ? WHERE id = ? AND user_id = ?"
    ).run(word.trim(), (translation || "").trim(), (definition || "").trim(), deckId || null, id, req.user.id);

    const updated = db.prepare("SELECT * FROM words WHERE id = ?").get(id);
    res.json(updated);
  } catch (err) {
    console.error("update word error:", err);
    res.status(500).json({ error: "更新单词失败" });
  }
});

// DELETE /api/words/:id — 删除单词
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const existing = db.prepare(
      "SELECT * FROM words WHERE id = ? AND user_id = ?"
    ).get(id, req.user.id);

    if (!existing) {
      return res.status(404).json({ error: "单词不存在" });
    }

    // review_data 通过 ON DELETE CASCADE 自动删除
    db.prepare("DELETE FROM words WHERE id = ? AND user_id = ?").run(id, req.user.id);
    res.json({ ok: true });
  } catch (err) {
    console.error("delete word error:", err);
    res.status(500).json({ error: "删除单词失败" });
  }
});

module.exports = router;
