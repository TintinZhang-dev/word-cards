const express = require("express");
const db = require("../db");
const { stem } = require("../lib/stemmer");
const { fetchDefinition } = require("../lib/dictionary");
const { STOP_WORDS, COMMON_WORDS } = require("../lib/stopwords");

const router = express.Router();

// POST /api/import/extract
// Body: { text, skipExisting: true }
// Response: [{ word, count, length, exists, score, isProper }]
router.post("/extract", (req, res) => {
  try {
    const { text, skipExisting } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "文章内容不能为空" });
    }

    // 加载用户忽略列表
    let ignoreWords = [];
    try {
      const row = db.prepare(
        "SELECT ignore_words FROM settings WHERE user_id = ?"
      ).get(req.user.id);
      if (row && row.ignore_words) {
        ignoreWords = JSON.parse(row.ignore_words);
      }
    } catch { /* ignore */ }

    const ignoreSet = new Set(ignoreWords.map(w => w.toLowerCase()));

    // === 分词 ===
    let rawTokens = text
      .replace(/[^a-zA-Z]/g, " ")
      .split(/\s+/)
      .filter(t => t.length > 2);

    // 过滤纯数字
    rawTokens = rawTokens.filter(t => !/^\d+$/.test(t));

    // 过滤停用词 + 忽略列表
    rawTokens = rawTokens.filter(t => {
      const lower = t.toLowerCase();
      return !STOP_WORDS.has(lower) && !ignoreSet.has(lower);
    });

    if (rawTokens.length === 0) {
      return res.status(400).json({ error: "未提取到任何有效单词" });
    }

    // === 统计频率 ===
    const freqMap = new Map();
    for (const t of rawTokens) {
      const key = t.toLowerCase();
      if (!freqMap.has(key)) {
        freqMap.set(key, { count: 0, forms: new Map() });
      }
      const entry = freqMap.get(key);
      entry.count++;
      entry.forms.set(t, (entry.forms.get(t) || 0) + 1);
    }

    // === 现有单词集合（含词形还原） ===
    const existingWords = db.prepare(
      "SELECT word FROM words WHERE user_id = ?"
    ).all(req.user.id);

    const existingSet = new Set();
    for (const w of existingWords) {
      const lower = w.word.toLowerCase();
      existingSet.add(lower);
      const stemmed = stem(lower);
      if (stemmed !== lower) {
        existingSet.add(stemmed);
      }
    }

    // === 构建词列表 ===
    const wordList = [];
    for (const [key, entry] of freqMap) {
      // 选择最佳显示形式
      let displayForm = key;
      let bestFreq = 0;
      let hasCapitalized = false;
      let hasLowercase = false;
      for (const [form, freq] of entry.forms) {
        const isCap = /^[A-Z]/.test(form);
        if (isCap && (!hasCapitalized || freq > bestFreq)) {
          displayForm = form;
          bestFreq = freq;
          hasCapitalized = true;
        } else if (!hasCapitalized && freq > bestFreq) {
          displayForm = form;
          bestFreq = freq;
        }
        if (!isCap) hasLowercase = true;
      }

      const matched = existingSet.has(key) || existingSet.has(stem(key));
      const isProper = hasCapitalized && !hasLowercase && !STOP_WORDS.has(key);

      wordList.push({
        word: displayForm,
        wordLower: key,
        count: entry.count,
        length: key.length,
        exists: matched,
        isProper: isProper,
      });
    }

    // === 过滤 + 评分排序 ===
    let filtered = skipExisting !== false
      ? wordList.filter(w => !w.exists)
      : wordList;

    if (filtered.length === 0) {
      return res.json([]);
    }

    for (const w of filtered) {
      const lenScore = Math.min(1, w.length / 20);
      const rarityScore = COMMON_WORDS.has(w.wordLower) ? 0.2 : 1.0;
      const freshScore = w.exists ? 0 : 1;
      w.score = lenScore * 0.4 + rarityScore * 0.4 + freshScore * 0.2;
    }

    filtered.sort((a, b) => b.score - a.score);

    // 返回精简字段
    const result = filtered.map(w => ({
      word: w.word,
      count: w.count,
      length: w.length,
      exists: w.exists,
      score: w.score,
      isProper: w.isProper,
    }));

    res.json(result);
  } catch (err) {
    console.error("extract error:", err);
    res.status(500).json({ error: "提取单词失败" });
  }
});

// POST /api/import/batch-add
// Body: { words: ["word1", "word2", ...], deckId, defLang: "en"|"zh"|"none" }
// Response: { added, skipped, results: [{ word, translation, definition }] }
router.post("/batch-add", async (req, res) => {
  try {
    const { words: selectedWords, deckId, defLang } = req.body;

    if (!Array.isArray(selectedWords) || selectedWords.length === 0) {
      return res.status(400).json({ error: "请提供要导入的单词列表" });
    }

    const lang = defLang || "en";
    const results = [];
    let added = 0;
    let skipped = 0;

    // 分批获取释义，每批 5 个
    const BATCH_SIZE = 5;

    for (let i = 0; i < selectedWords.length; i += BATCH_SIZE) {
      const batch = selectedWords.slice(i, i + BATCH_SIZE);

      // 并发获取释义（仅在非 none 模式下）
      let defResults = [];
      if (lang !== "none") {
        defResults = await Promise.allSettled(
          batch.map(word => fetchDefinition(word, lang))
        );
      }

      for (let j = 0; j < batch.length; j++) {
        const word = batch[j];

        // 检查是否已存在
        const existing = db.prepare(
          "SELECT id FROM words WHERE user_id = ? AND word = ?"
        ).get(req.user.id, word);

        if (existing) {
          skipped++;
          results.push({ word, translation: "", definition: "", skipped: true });
          continue;
        }

        let translation = "";
        let definition = "";

        if (lang !== "none" && defResults[j] && defResults[j].status === "fulfilled") {
          if (lang === "zh") {
            translation = defResults[j].value;
          } else {
            definition = defResults[j].value;
          }
        }

        // 创建单词
        const result = db.prepare(
          "INSERT INTO words (user_id, deck_id, word, translation, definition) VALUES (?, ?, ?, ?, ?)"
        ).run(req.user.id, deckId || null, word, translation, definition);

        // 创建 review_data
        db.prepare(
          "INSERT OR IGNORE INTO review_data (word_id, user_id) VALUES (?, ?)"
        ).run(result.lastInsertRowid, req.user.id);

        added++;
        results.push({ word, translation, definition, skipped: false, id: result.lastInsertRowid });
      }
    }

    res.json({ added, skipped, results });
  } catch (err) {
    console.error("batch-add error:", err);
    res.status(500).json({ error: "批量添加失败" });
  }
});

module.exports = router;
