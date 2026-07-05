const express = require("express");
const cors = require("cors");
const { authMiddleware } = require("./auth");

const app = express();
const PORT = process.env.PORT || 3001;

// ---- 中间件 ----
app.use(cors());
app.use(express.json({ limit: "5mb" }));

// ---- 健康检查 ----
app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ---- 无需认证的路由 ----
app.use("/api", require("./routes/auth"));

// ---- 需要认证的路由 ----
app.use("/api/words", authMiddleware, require("./routes/words"));
app.use("/api/decks", authMiddleware, require("./routes/decks"));
app.use("/api/review", authMiddleware, require("./routes/review"));
app.use("/api/import", authMiddleware, require("./routes/import"));

// ---- 404 ----
app.use((req, res) => {
  res.status(404).json({ error: "接口不存在" });
});

// ---- 全局错误处理 ----
app.use((err, req, res, next) => {
  console.error("unhandled error:", err);
  res.status(500).json({ error: "服务器内部错误" });
});

// ---- 启动 ----
app.listen(PORT, () => {
  console.log(`WordCards server running at http://localhost:${PORT}`);
});
