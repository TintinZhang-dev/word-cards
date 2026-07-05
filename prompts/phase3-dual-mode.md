# Phase 3: 双模式 — 在线 + 本地离线

在现有基础上改造，让用户可以不登录直接本地使用，也可以登录后使用服务器同步。

---

## 模式说明

### 本地模式（Offline）
- 不登录，数据存 localStorage
- 所有功能照常使用（卡片管理、复习、导入文章、PDF解析）
- 只有「获取释义」时需要联网（调 FreeDictionary / MyMemory API）
- 数据可导出/导入备份

### 在线模式（Online）
- 登录后，数据存服务器数据库
- 跨设备同步
- 当前架构不变

---

## 改动清单

### 1. 登录页（login.html）

页面顶部加一个显眼的入口按钮：

```
━━━━━━━━━━━━━━━━━━━━━━━━
      📖 WordCards

    [ 🔑 登录 / 注册 ]
    [ 📱 本地使用 → ]
━━━━━━━━━━━━━━━━━━━━━━━━
```

- 「本地使用」按钮直接跳转到 `index.html`
- 不需要设置任何 token，纯离线模式
- 登录/注册逻辑不变

### 2. index.html

在 `<body>` 顶部的 token 检查改为：

```
<script>
  // 没有 token 也可以使用（本地模式），只是不能同步
  // 不需要跳转 login.html
</script>
```

即**去掉**强制跳转登录的代码，让未登录用户也能访问首页。

在导航栏加一个状态指示器：

```
[ 📖 WordCards ]              [ 🌐 未登录 | 登录 ]
```

右上角显示：
- 未登录时：「🌐 未登录 · 登录」
- 已登录时：「🌐 user@email.com · 退出」

点击「登录」弹出小弹窗（或跳转 login.html），点击「退出」清除 token 刷新页面。

### 3. api.js — 增加离线兼容

在 `API.request()` 中，如果没有 token 则直接 reject：

```js
async request(path, options = {}) {
  // 没有 token 时，API 请求直接失败
  if (!this.getToken()) {
    throw new Error("未登录");
  }
  // ... 原有逻辑
}
```

这样确保离线模式下调 API 会快速失败。

### 4. app.js — 双模式数据层

这是核心改动。创建一个 `DataLayer` 对象，根据是否有 token 自动切换数据源：

```js
// 数据层 — 自动选择在线/离线模式
const DataLayer = {
  get isOnline() { return !!localStorage.getItem("wctoken"); },

  async loadAll() {
    if (this.isOnline) {
      // 在线模式：调 API
      const [wordsData, decksData] = await Promise.all([
        API.getWords(), API.getDecks()
      ]);
      return { words: wordsData, decks: decksData };
    } else {
      // 离线模式：读 localStorage
      const words = JSON.parse(localStorage.getItem(WORDS_KEY) || "[]");
      const decks = JSON.parse(localStorage.getItem(DECKS_KEY) || "[]");
      return { words, decks };
    }
  },

  async addWord(word, translation, definition, deckId) {
    if (this.isOnline) {
      return await API.addWord(word, translation, definition, deckId);
    } else {
      const id = nextId++;
      const newWord = { id, word, translation, definition, deckId };
      words.push(newWord);
      localStorage.setItem(WORDS_KEY, JSON.stringify(words));
      return newWord;
    }
  },

  async updateWord(id, word, translation, definition, deckId) {
    if (this.isOnline) {
      return await API.updateWord(id, word, translation, definition, deckId);
    } else {
      const idx = words.findIndex(w => w.id === id);
      if (idx !== -1) {
        words[idx] = { ...words[idx], word, translation, definition, deckId };
        localStorage.setItem(WORDS_KEY, JSON.stringify(words));
      }
    }
  },

  async deleteWord(id) {
    if (this.isOnline) {
      return await API.deleteWord(id);
    } else {
      words = words.filter(w => w.id !== id);
      localStorage.setItem(WORDS_KEY, JSON.stringify(words));
    }
  },

  async addDeck(name) {
    if (this.isOnline) {
      return await API.addDeck(name);
    } else {
      const deck = { id: nextDeckId++, name };
      decks.push(deck);
      localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
      return deck;
    }
  },

  async updateDeck(id, name) {
    if (this.isOnline) {
      return await API.updateDeck(id, name);
    } else {
      const deck = decks.find(d => d.id === id);
      if (deck) deck.name = name;
      localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    }
  },

  async deleteDeck(id) {
    if (this.isOnline) {
      return await API.deleteDeck(id);
    } else {
      decks = decks.filter(d => d.id !== id);
      localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
    }
  },

  async answerCard(wordId, gradeKey) {
    if (this.isOnline) {
      return await API.answerCard(wordId, gradeKey);
    }
    // 离线模式：SM-2 在前端运行，复习数据存 localStorage
    localStorage.setItem(REVIEW_KEY, JSON.stringify(reviewData));
  },

  // 获取释义（两种模式都需要联网）
  fetchDefinition: fetchDefinition, // 已有函数
};
```

然后修改 `app.js` 中所有直接调 API 的地方，改为调 `DataLayer`：

| 原代码 | 改为 |
|---|---|
| `const created = await API.addWord(...)` | `const created = await DataLayer.addWord(...)` |
| `await API.updateWord(...)` | `await DataLayer.updateWord(...)` |
| `await API.deleteWord(...)` | `await DataLayer.deleteWord(...)` |
| `await API.addDeck(...)` | `await DataLayer.addDeck(...)` |
| `await API.updateDeck(...)` | `await DataLayer.updateDeck(...)` |
| `await API.deleteDeck(...)` | `await DataLayer.deleteDeck(...)` |
| `API.answerCard(...)` | `DataLayer.answerCard(...)` |
| `API.getWords()` + `API.getDecks()` | `const { words, decks } = await DataLayer.loadAll()` |

### 5. app.js — init 逻辑

```js
async function init() {
  loadSettings();

  // 加载数据（根据模式自动选择来源）
  try {
    const data = await DataLayer.loadAll();
    words = data.words || [];
    decks = data.decks || [];
  } catch (err) {
    showToast("加载数据失败", "error");
    words = [];
    decks = DEFAULT_DECKS;
  }

  // 计算 nextId
  nextId = words.length > 0 ? Math.max(...words.map(w => w.id)) + 1 : 1;
  nextDeckId = decks.length > 0 ? Math.max(...decks.map(d => d.id)) + 1 : 1;

  // 渲染
  renderDeckSidebar();
  renderGrid();
  renderStats();
  updateDueBadge();

  // ... 其余 UI 事件绑定保持不变
}
```

### 6. 工具栏加用户状态

在 `index.html` 的 `.toolbar` 内加一个区域：

```html
<span class="user-status" id="userStatus">
  <span id="userStatusText">🌐 未登录</span>
  <button id="loginBtn2" style="display:none">登录</button>
  <button id="logoutBtn" style="display:none">退出</button>
</span>
```

`init()` 中更新状态：

```js
function updateUserStatus() {
  const statusEl = document.getElementById("userStatusText");
  const loginBtn = document.getElementById("loginBtn2");
  const logoutBtn = document.getElementById("logoutBtn");
  const user = API.getUser();
  if (user) {
    statusEl.textContent = `🌐 ${user.email}`;
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    statusEl.textContent = "🌐 未登录";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
  }
}
```

### 7. localStorage key 常量

将所有 localStorage key 提取为常量，避免魔法字符串：

```js
const WORDS_KEY = "wordca…rds";
const DECKS_KEY = "wordca…cks";
const REVIEW_KEY = "wordca…ew";
const SETTINGS_KEY = "wordca…ngs";
const NEW_USED_KEY = "wordca…used";
const REVIEW_USED_KEY = "wordca…used";
const HISTORY_KEY = "wordca…ory";
const IGNORE_KEY = "wordca…ords";
const STREAK_KEY = "wordca…eak";
```

使用真实 key（替换原有 "***" 占位符，从现有代码中提取实际 key 值）。

---

## 实施步骤

1. 在 `api.js` 中增加 `request()` 的无 token 快速失败逻辑
2. 在 `app.js` 中创建 `DataLayer` 对象
3. 修改 `app.js` 中所有 `API.xxx()` 调用为 `DataLayer.xxx()`
4. 修改 `init()` 使用 `DataLayer.loadAll()`
5. 修改 `index.html`：去掉强制跳转 + 增加用户状态 UI
6. 修改 `login.html`：增加「本地使用」按钮
7. 提取 localStorage key 常量
8. 添加用户状态 CSS 样式

---

## 注意事项

1. 不要改变原有的渲染函数（renderGrid/renderStats 等）
2. SM-2 算法保持在前端运行（两种模式都保留 sm2.js 的逻辑）
3. 离线模式下的复习数据存到 localStorage 的 REVIEW_KEY 中
4. 离线模式下导入文章的分词和提取逻辑在前端不变
5. 离线模式下「获取释义」仍然需要联网（调 FreeDictionary 等），这不冲突
6. 改完后运行 `node --check app.js` + `node --check api.js` 确保无语法错误
7. 测试流程：
   - 不登录直接使用 → 所有功能正常
   - 登录后使用 → 数据同步到服务器
