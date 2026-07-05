# Phase 2: 前端对接后端

把现有的单页面 WordCards 改为调用后端 API 的全栈应用。

---

## 项目结构

现有前端文件：
- `index.html`
- `app.js` (~2500 行)
- `style.css`

后端在 `server/` 目录（已完成），监听 `http://localhost:3001`。

新增文件：
- `api.js` — 封装所有 API 调用
- `login.html` — 登录/注册页面
- `login.css` — 登录页样式

---

## 改动概述

### 1. 新增 `api.js`

封装所有后端 API 调用，统一处理 token 和错误。

```js
const API = {
  baseUrl: "http://localhost:3001",

  // Token 管理
  getToken() { return localStorage.getItem("wctoken"); },
  setToken(t) { localStorage.setItem("wctoken", t); },
  clearToken() { localStorage.removeItem("wctoken"); localStorage.removeItem("wcuser"); },

  // 通用请求方法
  async request(path, options = {}) {
    const headers = { "Content-Type": "application/json" };
    const token = this.getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(this.baseUrl + path, { ...options, headers });
    const data = await res.json();

    if (!res.ok) {
      // 401 → token 过期，跳转登录
      if (res.status === 401) {
        this.clearToken();
        window.location.href = "/login.html";
        return;
      }
      throw new Error(data.error || "请求失败");
    }
    return data;
  },

  // === Auth ===
  register(email, password) {
    return this.request("/api/register", {
      method: "POST", body: JSON.stringify({ email, password })
    });
  },
  login(email, password) {
    return this.request("/api/login", {
      method: "POST", body: JSON.stringify({ email, password })
    });
  },

  // === Words ===
  getWords() { return this.request("/api/words"); },
  addWord(word, translation, definition, deckId) {
    return this.request("/api/words", {
      method: "POST", body: JSON.stringify({ word, translation, definition, deckId })
    });
  },
  updateWord(id, word, translation, definition, deckId) {
    return this.request(`/api/words/${id}`, {
      method: "PUT", body: JSON.stringify({ word, translation, definition, deckId })
    });
  },
  deleteWord(id) {
    return this.request(`/api/words/${id}`, { method: "DELETE" });
  },

  // === Decks ===
  getDecks() { return this.request("/api/decks"); },
  addDeck(name) {
    return this.request("/api/decks", {
      method: "POST", body: JSON.stringify({ name })
    });
  },
  updateDeck(id, name) {
    return this.request(`/api/decks/${id}`, {
      method: "PUT", body: JSON.stringify({ name })
    });
  },
  deleteDeck(id) {
    return this.request(`/api/decks/${id}`, { method: "DELETE" });
  },

  // === Review ===
  getDueCards() { return this.request("/api/review/due"); },
  answerCard(wordId, gradeKey) {
    return this.request("/api/review/answer", {
      method: "POST", body: JSON.stringify({ wordId, gradeKey })
    });
  },

  // === Import ===
  extractWords(text) {
    return this.request("/api/import/extract", {
      method: "POST", body: JSON.stringify({ text })
    });
  },
  batchAddWords(words, deckId) {
    return this.request("/api/import/batch-add", {
      method: "POST", body: JSON.stringify({ words, deckId })
    });
  },
};
```

---

### 2. 新增 `login.html`

一个独立的登录/注册页面，CSS 复用深色风格。

**功能：**
- 登录表单（email + password）
- 注册表单（切 tab 切换）
- 登录成功后存 token + 用户信息到 localStorage，跳转到 `index.html`

**样式要点：**
- 居中卡片，深色主题，跟 WordCards 风格一致
- 切 tab 时表单切换
- 错误信息显示在表单下方（不要 alert）
- 登录按钮有 loading 状态

---

### 3. 修改 `index.html`

在 `<script src="app.js"></script>` 之前加载 `api.js`：
```html
<script src="api.js"></script>
<script src="app.js"></script>
```

并在 body 顶部（或 head 中内联）加一个检查：
```html
<script>
  if (!localStorage.getItem("wctoken")) {
    window.location.href = "/login.html";
  }
</script>
```

---

### 4. 修改 `app.js` — 核心数据流改造

需要改动以下函数，把 localStorage 读写换成 API 调用。

#### 4.1 加载数据（启动时）

原来的 `loadWords()` / `loadDecks()` / `loadReviewData()` 合并为一个异步初始化：

```js
async function initApp() {
  try {
    const [wordsData, decksData] = await Promise.all([
      API.getWords(),
      API.getDecks(),
    ]);
    words = wordsData;
    decks = decksData;
    // reviewData 不需要单独加载，getDueCards 时从 API 获取
    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();
  } catch (err) {
    showToast("加载数据失败：" + err.message, "error");
  }
}
```

`init()` 中不再调用 `loadWords()` 等，改为调用 `initApp()`。但 `init()` 中的 UI 事件绑定要保留。

#### 4.2 增删改

| 函数 | 原来 | 改为 |
|---|---|---|
| addWord() | words.push + saveWords | await API.addWord() + 本地 push 结果 |
| updateWord() | 本地修改 + saveWords | await API.updateWord() + 本地更新 |
| deleteWord() | words.filter + saveWords | await API.deleteWord() + 本地删除 |

修改原则：
1. 先调 API
2. API 成功后再更新本地数组（用 API 返回的结果，确保 id 一致）
3. 然后渲染

#### 4.3 卡组管理

| 函数 | 改为 |
|---|---|
| addDeckBtn click | await API.addDeck(name) |
| renameDeck() | await API.updateDeck() |
| deleteDeck() | await API.deleteDeck() + 本地清理 |

#### 4.4 复习模式

`getDueCards()` 改为从 API 获取：
```js
async function fetchDueCards() {
  const due = await API.getDueCards();
  reviewQueue = due.map(d => d.word_id);
  // reviewData 从返回数据中构建
  for (const d of due) {
    reviewData[d.word_id] = {
      nextReview: d.next_review,
      interval: d.interval,
      reps: d.reps,
      ef: d.ef,
      cardState: d.card_state,
      learningStep: d.learning_step,
    };
  }
  return due;
}
```

`enterReviewMode()` 改为 async，先 await fetchDueCards()。

`answerCard()` 中在本地 SM-2 逻辑后，加：
```js
await API.answerCard(wordId, gradeKey);
```
（后端已经跑了 SM-2，前端保留本地的 UI 即时反馈，API 调用作为持久化）

#### 4.5 导入功能

`handleExtract()` — 将本地分词改为：
```js
const result = await API.extractWords(text);
extractedWords = result;
```

`handleBatchAdd()` — 直接调 API：
```js
const result = await API.batchAddWords(selectedWords, importSelectedDeckId);
// 用 result 中的已添加单词更新本地数组
```

---

### 5. 修改 `style.css`

不需要大的改动。可以加一个 `.loading-spinner` 样式，给登录按钮等地方用。

---

## 测试方式

```bash
# 启动后端
cd server && node src/index.js

# 在另一个终端启动前端静态服务器
cd /home/tintinzhang/word-cards && python3 -m http.server 8080

# 浏览器访问 http://localhost:8080/login.html
```

确保整个流程跑通：注册 → 登录 → 首页加载卡片 → 增删改 → 复习 → 导入。

---

## 注意事项

1. **不要删除 localStorage 的读取代码**，保留一个数据迁移入口：如果 localStorage 中有旧数据且首次加载时提示导入
2. `loadSettings()` 仍从 localStorage 读（settings 在用户设置里管理，不是后端数据）
3. 所有 API 调用都要 try-catch，失败时用 `showToast()` 提示
4. `deleteWord()` 调 API 前保留 `confirm()` 确认
5. `init()` 函数中的 UI 事件绑定逻辑一点都不要动——只改数据读写部分
6. 保持 `nextId` 逻辑：API 返回的 id 覆盖本地自增
7. `renderGrid()` / `renderStats()` / `renderDeckSidebar()` / `updateDueBadge()` 四个渲染函数不要改
8. 改完后运行 `node --check app.js` 确保没有语法错误
