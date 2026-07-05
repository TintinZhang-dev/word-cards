# WordCards — 全栈 App 路线图

## 核心理念

最小可行路径，每一步都有产出，不走回头路。

---

## Phase 0: 原地加固（本周）

> 不改架构，把现在的版本收拾好，为迁移做准备。

### 0.1 数据导出功能
- 设置页加一个"导出数据"按钮
- 导出 JSON 包含：words, decks, reviewData, settings
- 以后导入新后端时直接用这个文件

### 0.2 修复剩下的几个小问题
- 搜索防抖 — 改起来顺手
- Toast 替代 alert — 这个小重构不亏，以后前端重构时少改一处

**产出：** 一个稳定的 v1.0，数据可导出，不会被锁死。

---

## Phase 1: 后端搭建（1-2 周）

> 搭好 API 服务器，核心逻辑从浏览器搬到服务器。

### 1.1 技术选型确认
- **后端：** Node.js + Express（不用学新语言）
- **数据库：** SQLite（起步最简单，不用装数据库服务器）
- **ORM：** 可选 better-sqlite3 直接写 SQL，或 Prisma 自动迁移
- **认证：** JWT token（最简单，无 session 管理）
- **部署：** Railway / Fly.io 或你自己的 VPS

### 1.2 数据库设计
建几张表：
| 表 | 字段 |
|---|---|
| users | id, email, password_hash, created_at |
| decks | id, user_id, name, created_at |
| words | id, user_id, deck_id, word, translation, definition, created_at |
| review_data | word_id, next_review, interval, reps, ef, card_state, learning_step, last_reviewed |

### 1.3 API 设计
```
POST   /api/register          — 注册
POST   /api/login             — 登录
GET    /api/words             — 获取单词列表
POST   /api/words             — 添加单词
PUT    /api/words/:id         — 更新单词
DELETE /api/words/:id         — 删除单词
GET    /api/decks             — 获取卡组
POST   /api/decks             — 新建卡组
GET    /api/review/due        — 获取待复习卡片
POST   /api/review/answer     — 提交复习结果（后端跑 SM-2）
POST   /api/import/extract    — 提交文章，后端返回生词列表
POST   /api/import/batch-add  — 后端获取释义 + 批量添加
```

### 1.4 核心逻辑搬到后端
- SM-2 算法 → 后端实现
- 词形还原 → 后端用更完善的库
- 获取释义（FreeDictionary / MyMemory）→ 后端做，前端只管显示结果

**产出：** 可用的后端 API，Postman / curl 可测试。

---

## Phase 2: 前端对接（1 周）

> 现有前端从 localStorage 改为调后端 API。

### 2.1 前端架构调整
- 加一个 `api.js` 封装所有 API 调用
- 状态管理：简单的 fetch + 本地缓存，不需要 React/Vue
- 登录/注册页面

### 2.2 替换数据源
- loadWords() → GET /api/words
- saveWords() → POST/PUT/DELETE 对应 API
- review → GET /api/review/due + POST /api/review/answer
- import → POST /api/import/extract + POST /api/import/batch-add

### 2.3 数据迁移工具
- 在设置页加"导入 JSON"功能，自动上传到新后端
- 或者直接在新建账户时提示导入旧数据

**产出：** 完整的全栈 App，你一个人能用，别人也能注册使用。

---

## Phase 3: 完善 & 上公网（1 周）

### 3.1 部署
- 买域名（可选）
- 部署后端 + 静态前端到 Railway / Fly.io
- 配 HTTPS

### 3.2 打磨
- 登录/注册页 UI 美化
- Toast 替代 alert（之前的）
- 错误处理（网络错误、登录过期重定向）

### 3.3 面向他人的优化
- Landing page 说明这是做什么的
- 现成用户：初始默认卡组（SAT 词汇/学术词汇）
- 隐私说明（不会存你的文章原文，只存提取的单词）

**产出：** 任何人都能访问的在线单词卡工具。

---

## Phase 4: 进阶（按需）

- 手机端适配（响应式 + PWA）
- 文章导入增强（支持 URL 输入，后端爬取）
- 更多语种（日/法/德词卡）
- 分享卡组 / 公共词库
- 多端同步

---

## 优先级总结

```
现在     → 0.1 数据导出 + 0.2 小优化
这周     → 1.1~1.2 技术选型 + 数据库设计
下周     → 1.3~1.4 API + 后端逻辑
再下周   → 2.1~2.3 前端对接 + 上线
之后     → 3.x 打磨 + Phase 4 按需
```

要不要先从 **0.1 数据导出** 开始？10 分钟搞定，这样不管你后面怎么重构，数据都在自己手里。
