const express = require("express");
const db = require("../db");

const router = express.Router();

// GET /api/decks — 获取当前用户所有卡组（含单词数量）
router.get("/", (req, res) => {
  try {
    const decks = db.prepare(`
      SELECT d.*, COUNT(w.id) AS word_count
      FROM decks d
      LEFT JOIN words w ON w.deck_id = d.id AND w.user_id = d.user_id
      WHERE d.user_id = ?
      GROUP BY d.id
      ORDER BY d.created_at ASC
    `).all(req.user.id);
    res.json(decks);
  } catch (err) {
    console.error("get decks error:", err);
    res.status(500).json({ error: "获取卡组列表失败" });
  }
});

// POST /api/decks — 创建卡组
router.post("/", (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "卡组名称不能为空" });
    }

    const result = db.prepare(
      "INSERT INTO decks (user_id, name) VALUES (?, ?)"
    ).run(req.user.id, name.trim());

    const created = db.prepare("SELECT * FROM decks WHERE id = ?").get(result.lastInsertRowid);
    created.word_count = 0;
    res.status(201).json(created);
  } catch (err) {
    console.error("create deck error:", err);
    res.status(500).json({ error: "创建卡组失败" });
  }
});

// PUT /api/decks/:id — 重命名卡组
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const existing = db.prepare(
      "SELECT * FROM decks WHERE id = ? AND user_id = ?"
    ).get(id, req.user.id);

    if (!existing) {
      return res.status(404).json({ error: "卡组不存在" });
    }

    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "卡组名称不能为空" });
    }

    db.prepare(
      "UPDATE decks SET name = ? WHERE id = ? AND user_id = ?"
    ).run(name.trim(), id, req.user.id);

    const updated = db.prepare("SELECT * FROM decks WHERE id = ?").get(id);
    res.json(updated);
  } catch (err) {
    console.error("update deck error:", err);
    res.status(500).json({ error: "更新卡组失败" });
  }
});

// DELETE /api/decks/:id — 删除卡组（级联清空单词的 deck_id）
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const existing = db.prepare(
      "SELECT * FROM decks WHERE id = ? AND user_id = ?"
    ).get(id, req.user.id);

    if (!existing) {
      return res.status(404).json({ error: "卡组不存在" });
    }

    // 将卡组内所有单词的 deck_id 置为 NULL
    db.prepare(
      "UPDATE words SET deck_id = NULL WHERE deck_id = ? AND user_id = ?"
    ).run(id, req.user.id);

    // 删除卡组
    db.prepare("DELETE FROM decks WHERE id = ? AND user_id = ?").run(id, req.user.id);

    res.json({ ok: true });
  } catch (err) {
    console.error("delete deck error:", err);
    res.status(500).json({ error: "删除卡组失败" });
  }
});

module.exports = router;
