const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "wordcards-dev-secret";

/**
 * Express 中间件 — 验证 JWT，将 user 信息注入 req.user
 */
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "未登录，请先注册或登录" });
  }

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { id: payload.id, email: payload.email };
    next();
  } catch {
    return res.status(401).json({ error: "登录已过期，请重新登录" });
  }
}

/**
 * 签发 JWT token
 */
function signToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "30d" });
}

module.exports = { authMiddleware, signToken, JWT_SECRET };
