const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../db");
const { signToken } = require("../auth");

const router = express.Router();

// POST /api/register
router.post("/register", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "邮箱和密码不能为空" });
    }

    if (typeof email !== "string" || !email.includes("@") || email.length > 255) {
      return res.status(400).json({ error: "邮箱格式不正确" });
    }

    if (typeof password !== "string" || password.length < 6) {
      return res.status(400).json({ error: "密码至少 6 位" });
    }

    // 检查邮箱是否已注册
    const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
    if (existing) {
      return res.status(409).json({ error: "该邮箱已注册" });
    }

    const passwordHash = bcrypt.hashSync(password, 10);
    const result = db.prepare(
      "INSERT INTO users (email, password_hash) VALUES (?, ?)"
    ).run(email, passwordHash);

    const user = { id: result.lastInsertRowid, email };
    const token = signToken(user);

    res.status(201).json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error("register error:", err);
    res.status(500).json({ error: "注册失败，请稍后重试" });
  }
});

// POST /api/login
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "邮箱和密码不能为空" });
    }

    const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    if (!user) {
      return res.status(401).json({ error: "邮箱或密码错误" });
    }

    const valid = bcrypt.compareSync(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: "邮箱或密码错误" });
    }

    const token = signToken(user);
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ error: "登录失败，请稍后重试" });
  }
});

module.exports = router;
