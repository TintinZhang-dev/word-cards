# Phase 1: 后端搭建

在项目根目录 `/home/tintinzhang/word-cards/` 下新建 `server/` 目录，搭建 Node.js + Express + SQLite 后端。

---

## 技术栈

- Node.js + Express
- SQLite (better-sqlite3)
- JWT (jsonwebtoken) 认证
- bcryptjs 密码加密
- cors 跨域

---

## 目录结构

```
word-cards/
├── server/
│   ├── package.json
│   ├── src/
│   │   ├── index.js          # 入口，Express 配置
│   │   ├── db.js             # SQLite 连接 + 建表
│   │   ├── auth.js           # JWT 中间件
│   │   ├── routes/
│   │   │   ├── auth.js       # 注册 / 登录
│   │   │   ├── words.js      # 单词 CRUD
│   │   │   ├── decks.js      # 卡组管理
│   │   │   ├── review.js     # 复习相关
│   │   │   └── import.js     # 文章导入
│   │   └── lib/
│   │       ├── sm2.js        # SM-2 算法
│   │       ├── stemmer.js    # 词形还原
│   │       └── dictionary.js # 获取释义
│   └── data/                 # SQLite 数据库文件目录（自动创建）
├── index.html
├── app.js
└── style.css
```

---

## 数据库设计

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE decks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  name TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE words (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  deck_id INTEGER REFERENCES decks(id),
  word TEXT NOT NULL,
  translation TEXT DEFAULT '',
  definition TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE review_data (
  word_id INTEGER PRIMARY KEY REFERENCES words(id),
  user_id INTEGER NOT NULL REFERENCES users(id),
  next_review TEXT,
  interval REAL DEFAULT 0,
  reps INTEGER DEFAULT 0,
  ef REAL DEFAULT 2.5,
  card_state TEXT DEFAULT 'new',
  learning_step INTEGER DEFAULT 0,
  last_reviewed TEXT
);
```

---

## API 设计

所有 `/api/*` 路由（除 register/login）都需要 JWT 验证，user_id 从 token 中获取。

### Auth

```
POST /api/register
  Body: { email, password }
  Response: { token, user: { id, email } }

POST /api/login
  Body: { email, password }
  Response: { token, user: { id, email } }
```

### Words

```
GET    /api/words              → [{ id, word, translation, definition, deck_id, ... }]
POST   /api/words              → { id, ... }  (Body: { word, translation, definition, deckId })
PUT    /api/words/:id          → { ... }      (Body: 同上)
DELETE /api/words/:id          → { ok: true }
```

### Decks

```
GET    /api/decks              → [{ id, name, word_count, ... }]
POST   /api/decks              → { id, name } (Body: { name })
PUT    /api/decks/:id          → { ... }      (Body: { name })
DELETE /api/decks/:id          → { ok: true } (级联删除卡组内所有单词)
```

### Review

```
GET    /api/review/due
  → [{ word_id, word, translation, definition, card_state, learning_step, ... }]
  逻辑：筛选当前用户待复习的卡片（同前端 getDueCards() 逻辑）
  排序：学习中到期 > 复习到期（每日上限） > 新卡片（每日上限）

POST   /api/review/answer
  Body: { wordId, gradeKey: "again"|"hard"|"good"|"easy" }
  Response: { ok: true }
  后端运行 SM-2 算法，更新 review_data
```

### Import

```
POST   /api/import/extract
  Body: { text }
  Response: [{ word, count, length, exists, score, isProper }]
  分词逻辑：参考前端 handleExtract()，保留停用词过滤 + 专有名词判断 + 综合评分

POST   /api/import/batch-add
  Body: { words: ["word1", "word2", ...], deckId }
  Response: { added: 5, skipped: 0, results: [{ word, translation, definition }] }
  后端分批获取释义（每批5个），返回已添加的单词列表
```

---

## SM-2 算法

从前端 `app.js` 中搬运 `sm2()` 和 `calcNextReviewDate()` 函数到 `server/src/lib/sm2.js`，保持逻辑一致：

- `sm2(rd, grade)` — 更新 interval / reps / ef
- `calcNextReviewDate(rd)` — 计算下次复习时间
- 学习模式 (`answerLearningCard`) 也搬到后端

参考前端代码中 `sm2()`、`calcNextReviewDate()`、`answerLearningCard()` 三个函数。

---

## 词形还原

从前端 `app.js` 搬运 `stem()` 函数到 `server/src/lib/stemmer.js`，并增强：
- 保持现有 irregular 表和规则
- 增加 -ly → -y 还原逻辑（如 happily → happy）

---

## 获取释义

从前端 `handleBatchAdd()` 中的 fetchDefinition 逻辑搬运到 `server/src/lib/dictionary.js`：
- `getDefinition(word)` — 调用 FreeDictionary API，返回英文释义
- `getTranslation(word)` — 调用 MyMemory API，返回中文翻译
- 都有错误处理，失败返回空字符串

---

## 启动方式

创建的 server 要能通过以下命令启动：

```bash
cd server && npm install && node src/index.js
```

监听端口 3001，CORS 允许 localhost 端口不限。

---

## 注意事项

1. 所有路由处理错误时返回 `{ error: "错误信息" }` + 对应 HTTP 状态码
2. JWT 密钥用环境变量 `JWT_SECRET`，没有则用默认值 `wordcards-dev-secret`
3. SQLite 数据库文件存储在 `server/data/wordcards.db`，自动创建目录和表
4. 代码风格保持简洁一致，不加不必要的依赖
5. 创建完成后运行 `node src/index.js` 确认启动无报错
