# Round 2 — 卡组系统 (Decks)

## 项目信息

- 项目路径：`/home/tintinzhang/word-cards/`
- 文件结构：`index.html` / `style.css` / `app.js`
- 当前功能：SM-2 间隔重复、学习模式、卡片状态、统计、搜索、每日上限
- 设计原则：深色主题、增量修改、不重构现有代码

---

## 需求概述

为 WordCards 增加 Anki 风格的卡组系统，让用户可以分门别类管理单词。

---

## 数据模型

### app.js — 新增全局变量

```js
// ---------- 卡组数据 ----------
let decks = [];
let nextDeckId = 1;
let selectedDeckId = null; // null = 显示所有卡片

const DECKS_KEY = "wordca…ys";  // 注意：用实际不冲突的 key
```

### 数据结构

```js
// decks 数组中每个元素：
{
  id: number,
  name: string,
}

// 每张卡片新增字段：
{
  id: number,
  word: string,
  translation: string,
  definition: string,
  deckId: number | null,  // null = 未分类
}
```

### 默认卡组

首次使用时自动创建三个默认卡组：
```js
const DEFAULT_DECKS = [
  { id: 1, name: "SAT 词汇" },
  { id: 2, name: "学术词汇" },
  { id: 3, name: "生活用语" },
];
```

### 向后兼容

已有卡片的 `deckId` 为 `undefined`，加载时视为 `null`（未分类）。

---

## 具体实现

### 1. 卡组数据读写（app.js）

```js
function loadDecks() {
  const stored = localStorage.getItem(DECKS_KEY);
  if (stored) {
    try { decks = JSON.parse(stored); }
    catch { decks = [...DEFAULT_DECKS]; }
  } else {
    decks = [...DEFAULT_DECKS];
  }
  nextDeckId = decks.length > 0 ? Math.max(...decks.map(d => d.id)) + 1 : 1;
}

function saveDecks() {
  localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
}
```

在 `init()` 中添加 `loadDecks()` 调用。

### 2. 侧边栏 HTML（index.html）

在 `<main>` 内部添加侧边栏结构，放在 `#cardGrid` 左侧：

```html
<main>
  <aside class="deck-sidebar" id="deckSidebar">
    <div class="deck-sidebar-header">
      <h3>📂 卡组</h3>
      <button id="addDeckBtn" class="deck-add-btn" title="新建卡组">+</button>
    </div>
    <div class="deck-list" id="deckList">
      <!-- 动态渲染 -->
    </div>
  </aside>
  
  <!-- 原本的 cardGrid 区域保持不变 -->
  <div class="main-content">
    <!-- stats, controls, search, cardGrid 全部在这里 -->
  </div>
</main>
```

将原有的 `<main id="cardGrid">` 改为 `<div class="main-content">`，内部包含原来的 stats、controls、search bar、cardGrid。

注意：
- 修改 `index.html` 中的 `<main>` 结构，不要破坏原有元素的 id
- `#cardGrid` 仍然可以作为 id 存在，只是被包裹在 `.main-content` 内
- 所有对 `document.getElementById("cardGrid")` 的 JS 引用仍然有效

### 3. 侧边栏样式（style.css）

```css
/* 布局 */
main {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.deck-sidebar {
  width: 200px;
  min-width: 200px;
  background: #1a1a1a;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
}

.deck-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #333;
}

.deck-sidebar-header h3 {
  margin: 0;
  font-size: 14px;
  color: #aaa;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.deck-add-btn {
  background: none;
  border: 1px dashed #555;
  color: #888;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.deck-add-btn:hover {
  border-color: #4a9eff;
  color: #4a9eff;
}

.deck-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.deck-item {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  color: #ccc;
  font-size: 14px;
  transition: background 0.15s;
  gap: 8px;
  position: relative;
}

.deck-item:hover {
  background: rgba(255,255,255,0.05);
}

.deck-item.active {
  background: rgba(74,158,255,0.15);
  color: #4a9eff;
  font-weight: 500;
}

.deck-item .deck-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.deck-item .deck-count {
  font-size: 11px;
  color: #666;
  background: rgba(255,255,255,0.08);
  padding: 1px 6px;
  border-radius: 8px;
}

.deck-item .deck-actions {
  display: none;
  gap: 2px;
}

.deck-item:hover .deck-actions {
  display: flex;
}

.deck-item .deck-rename-btn,
.deck-item .deck-delete-btn {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;
  transition: color 0.15s;
}

.deck-item .deck-rename-btn:hover {
  color: #4a9eff;
}

.deck-item .deck-delete-btn:hover {
  color: #f44336;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
```

### 4. 渲染侧边栏（app.js）

新增函数：

```js
function renderDeckSidebar() {
  const list = document.getElementById("deckList");
  if (!list) return;

  // "所有卡片" — 固定在第一行
  let html = `
    <div class="deck-item ${selectedDeckId === null ? 'active' : ''}" 
         data-deck-id="all" onclick="selectDeck(null)">
      <span>📚 所有卡片</span>
      <span class="deck-count">${words.length}</span>
    </div>
  `;

  // 各卡组
  for (const deck of decks) {
    const count = words.filter(w => (w.deckId === undefined ? null : w.deckId) === deck.id).length;
    html += `
      <div class="deck-item ${selectedDeckId === deck.id ? 'active' : ''}" 
           data-deck-id="${deck.id}" onclick="selectDeck(${deck.id})">
        <span class="deck-name">📁 ${escapeHtml(deck.name)}</span>
        <span class="deck-count">${count}</span>
        <span class="deck-actions">
          <button class="deck-rename-btn" title="重命名" onclick="event.stopPropagation(); renameDeck(${deck.id})">✏️</button>
          <button class="deck-delete-btn" title="删除" onclick="event.stopPropagation(); deleteDeck(${deck.id})">🗑️</button>
        </span>
      </div>
    `;
  }

  list.innerHTML = html;
}
```

### 5. 选择卡组（app.js）

```js
function selectDeck(deckId) {
  selectedDeckId = deckId;
  renderDeckSidebar();
  renderGrid();
  renderStats();
  updateDueBadge();
}
```

### 6. 修改卡片渲染 — 按卡组过滤（app.js）

在 `renderGrid()` 中，在搜索过滤之前添加卡组过滤：

```js
// 在 renderGrid() 中，在搜索筛选之前
let visibleWords = words;

// 按卡组过滤
if (selectedDeckId !== null) {
  visibleWords = visibleWords.filter(w => (w.deckId === undefined ? null : w.deckId) === selectedDeckId);
}

// 按搜索过滤（已有代码）
if (searchQuery.trim()) {
  const q = searchQuery.trim().toLowerCase();
  visibleWords = visibleWords.filter(w =>
    w.word.toLowerCase().includes(q) ||
    w.translation.toLowerCase().includes(q) ||
    w.definition.toLowerCase().includes(q)
  );
}
```

### 7. 添加/编辑卡片 — 卡组选择（app.js）

修改 `openAddModal()` 和 `openEditModal()`：

在模态框中新增卡组选择下拉框。需要在 `index.html` 的模态框表单中添加：

```html
<div class="form-group">
  <label>卡组</label>
  <select id="modalDeck">
    <option value="">未分类</option>
    <!-- 动态渲染 -->
  </select>
</div>
```

位置：在 `modalDefinition` 下方、`modalConfirm` 上方。

添加函数：

```js
function populateDeckSelect(selectedDeckId) {
  const select = document.getElementById("modalDeck");
  if (!select) return;
  let html = '<option value="">未分类</option>';
  for (const deck of decks) {
    html += `<option value="${deck.id}" ${(selectedDeckId !== null && selectedDeckId !== undefined && selectedDeckId === deck.id) ? 'selected' : ''}>${escapeHtml(deck.name)}</option>`;
  }
  select.innerHTML = html;
}
```

在 `openAddModal()` 中调用 `populateDeckSelect(null)`。
在 `openEditModal(id)` 中调用 `populateDeckSelect(w.deckId)`。

修改 `handleModalConfirm()` 保存时读取 `modalDeck.value`：
```js
const deckId = document.getElementById("modalDeck").value;
const finalDeckId = deckId ? parseInt(deckId, 10) : null;
// 在 addWord / updateWord 时保存 finalDeckId
```

### 8. 添加卡组（app.js）

```js
document.getElementById("addDeckBtn").addEventListener("click", () => {
  const name = prompt("请输入新卡组名称：");
  if (name && name.trim()) {
    decks.push({ id: nextDeckId++, name: name.trim() });
    saveDecks();
    renderDeckSidebar();
  }
});
```

### 9. 重命名卡组（app.js）

```js
function renameDeck(deckId) {
  const deck = decks.find(d => d.id === deckId);
  if (!deck) return;
  const name = prompt("重命名卡组：", deck.name);
  if (name && name.trim() && name.trim() !== deck.name) {
    deck.name = name.trim();
    saveDecks();
    renderDeckSidebar();
    renderGrid(); // 如果当前选中卡组，卡片组名变了
  }
}
```

### 10. 删除卡组（app.js）

```js
function deleteDeck(deckId) {
  if (!confirm("确定删除「" + (decks.find(d => d.id === deckId)?.name || "") + "」？\n该卡组中的单词将移回「未分类」。")) return;
  
  // 将卡片移回未分类
  for (const w of words) {
    if ((w.deckId === undefined ? null : w.deckId) === deckId) {
      w.deckId = null;
    }
  }
  
  // 移除卡组
  decks = decks.filter(d => d.id !== deckId);
  
  // 如果当前选中的就是被删除的卡组，回到所有卡片
  if (selectedDeckId === deckId) {
    selectedDeckId = null;
  }
  
  saveWords();
  saveDecks();
  renderDeckSidebar();
  renderGrid();
  renderStats();
  updateDueBadge();
}
```

### 11. 复习模式 — 卡组过滤（app.js）

修改 `enterReviewMode()`：

在构建复习队列之前，添加可选参数，用户可以选择复习"当前卡组"还是"所有卡片"。

实现方式：在复习按钮附近添加一个简单提示，或者在点击复习时如果选中了具体卡组，就只复习该卡组的到期卡片。

最简单的方式：**当选中某个具体卡组时，`getDueCards()` 自动只返回该卡组的卡片。**

修改 `getDueCards()`：
在遍历 `words` 之前，先过滤：如果 `selectedDeckId !== null`，只考虑该卡组的单词：

```js
function getDueCards() {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let eligibleWords = words;
  if (selectedDeckId !== null) {
    eligibleWords = words.filter(w => (w.deckId === undefined ? null : w.deckId) === selectedDeckId);
  }

  const learningDue = [];
  const reviewDue = [];
  const newCards = [];

  for (const w of eligibleWords) {
    // ... 原有逻辑不变
  }
  // ... 剩余逻辑不变
}
```

注意：不影响 "所有卡片"（`selectedDeckId === null`）时的行为。

### 12. 修改 `renderStats()` — 显示当前卡组范围

在 stats 中提示当前范围：如果选中了某个卡组，显示 "📁 卡组名" 而不是 "📚 总张数"；或者在原有基础上添加卡组信息。

简单做法：在统计文本开头添加当前卡组信息：
```js
let text = selectedDeckId !== null
  ? `📁 ${decks.find(d => d.id === selectedDeckId)?.name || "未知卡组"} · ${visibleCount} 张`
  : `📚 ${words.length} 张`;
```
其中 `visibleCount` 是当前卡组的卡片数。

### 13. 修改 `init()` 初始化顺序

```js
function init() {
  loadWords();
  loadDecks();    // 新增
  loadReviewData();
  renderDeckSidebar(); // 新增
  renderGrid();
  renderStats();
  updateDueBadge();
}
```

### 14. 默认卡组分配（可选）

为 50 个默认单词分配卡组。在 `DEFAULT_WORDS` 中添加 `deckId` 字段：
- id 1-15 → deckId: 1（SAT 词汇）
- id 16-35 → deckId: 2（学术词汇）
- id 36-50 → deckId: 3（生活用语）

如果是新用户首次加载，这段逻辑自动生效。如果是已有用户（已有旧的 DEFAULT_WORDS 数据），这个字段不会加载，因为 localStorage 中已经是旧的 6 个单词。

所以还需要在 `loadWords()` 中做一次兼容处理：如果单词的 `deckId` 为 undefined，保持 `null`。

---

## 实现顺序

1. 数据层：`decks` 数组 + `DECKS_KEY` + `loadDecks/saveDecks`
2. HTML 结构：`index.html` 侧边栏 + 模态框卡组选择
3. 样式：侧边栏 CSS
4. 渲染侧边栏：`renderDeckSidebar()` + `selectDeck()`
5. 卡片过滤：`renderGrid()` 中按卡组过滤
6. 模态框联动：`populateDeckSelect()` + 保存 `deckId`
7. 卡组管理：增/删/改卡组
8. 复习过滤：`getDueCards()` 按卡组过滤
9. 默认词分配 + 统计显示

## 测试要点

1. 首次加载应出现三个默认卡组和"所有卡片"
2. 点击不同卡组 → 只显示该组卡片
3. 添加卡片时选择卡组 → 卡片出现在对应卡组
4. 删除卡组 → 卡片移回未分类
5. 复习时选中某个卡组 → 只复习该组到期卡片
6. 切换 tab 后数据不丢失（localStorage 持久化）
