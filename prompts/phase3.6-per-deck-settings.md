# Phase 3.6 — 卡组独立设置（每日新词 + 每日复习）

## 背景
当前只有一个全局设置 `settings.newCardsPerDay`（默认 10），没有每日复习上限，也没有按卡组独立设置的能力。

## 需求

### 1. 数据结构改造

**settings 对象**扩展到支持卡组独立覆盖：

```javascript
let settings = {
  newCardsPerDay: 10,        // 全局默认
  reviewCardsPerDay: 50,     // 全局默认，新增
  deckOverrides: {}          // { deckId: { newCardsPerDay, reviewCardsPerDay } }
};
```

`storage key` 不变，但读取/写入时需要兼容旧数据（没有 `reviewCardsPerDay` 和 `deckOverrides` 字段的补默认值）。

### 2. 设置界面

在设置对话框新增：

```
─────────────────────────
📊 每日额度
每日新卡片上限: [___] 张（全局默认）
每日复习上限:   [___] 张（全局默认）
─────────────────────────
```

### 3. 卡组独立覆盖

在**侧边栏右键卡组**（或卡组名称旁边增加一个小齿轮/设置图标），点击后弹出卡组设置弹窗：

```
📁 [卡组名称] 独立设置
□ 自定义本卡组的每日限额
  每日新卡片: [___] 张（留空=使用全局默认）
  每日复习:   [___] 张（留空=使用全局默认）
[取消] [保存]
```

### 4. 逻辑变化

**获取当前卡组的有效限额**，新增辅助函数：

```javascript
function getEffectiveLimit(deckId, type) {
  // type: "new" | "review"
  const deckOverride = settings.deckOverrides && settings.deckOverrides[deckId];
  const overrideKey = type === "new" ? "newCardsPerDay" : "reviewCardsPerDay";
  if (deckOverride && deckOverride[overrideKey] !== undefined) {
    return deckOverride[overrideKey];
  }
  return settings[overrideKey];
}
```

### 5. 影响范围

以下地方需要改：

**a. 每日新卡额度追踪**
- `getNewCardsUsedToday()` — 只追踪全局使用量，不需要改
- `incrementNewCardsUsed()` — 同上

但注意：如果卡组 A 设置了新卡上限 5，卡组 B 设置了 20，用户从卡组 B 复习时用了 15 张新卡——这 15 张计入了全局额度，但"还能学多少"应该按**卡组自己的上限**算。

修复：将每日额度追踪改为按卡组记录：

```javascript
// 数据结构
// localStorage key: "wordca…used"
// { date: "2026-06-28", deckUsed: { "1": 5, "2": 10 } }

function getNewCardsUsedToday(deckId) {
  const today = new Date().toISOString().split("T")[0];
  try {
    const data = JSON.parse(localStorage.getItem(NEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
    if (data.date !== today) return 0;
    return data.deckUsed[deckId] || 0;
  } catch { return 0; }
}

function incrementNewCardsUsed(deckId) {
  const today = new Date().toISOString().split("T")[0];
  const data = JSON.parse(localStorage.getItem(NEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
  if (data.date !== today) {
    data.date = today;
    data.deckUsed = {};
  }
  data.deckUsed[deckId] = (data.deckUsed[deckId] || 0) + 1;
  localStorage.setItem(NEW_USED_KEY, JSON.stringify(data));
}
```

所有调用 `getNewCardsUsedToday()` 和 `incrementNewCardsUsed()` 的地方需要传入当前卡组 ID。

**b. 待复习卡片生成（getDueCards）**
- `getDueCards()` 中，新卡片数量受 `getEffectiveLimit(deckId, "new")` 限制
- 新增复习上限逻辑：复习队列中的 review 状态卡片数量受 `getEffectiveLimit(deckId, "review")` 限制

```javascript
function getDueCards() {
  // ...原有逻辑...

  // 新卡片受每日上限限制（按卡组独立）
  const remainingNew = Math.max(0, getEffectiveLimit(selectedDeckId, "new") - getNewCardsUsedToday(selectedDeckId));
  const cappedNewCards = newCards.slice(0, remainingNew);
  
  // 复习卡片受每日复习上限限制
  const remainingReview = Math.max(0, getEffectiveLimit(selectedDeckId, "review") - getReviewCardsUsedToday(selectedDeckId));
  const cappedReview = reviewDue.slice(0, remainingReview);

  return [...learningDue, ...cappedReview, ...cappedNewCards];
}
```

新增 `getReviewCardsUsedToday(deckId)` 和 `incrementReviewCardsUsed(deckId)`，逻辑和新卡额度追踪一致，只是 key 不同。

**c. 统计显示**
- `renderStats()` 和其他显示每日配额的地方，改为显示当前卡组的有效限额
- "今日剩余 N 张新卡" → 按 `getEffectiveLimit(selectedDeckId, "new")` 算

### 6. 兼容旧数据
- `loadSettings()` 中补默认值：`settings.reviewCardsPerDay = settings.reviewCardsPerDay || 50; settings.deckOverrides = settings.deckOverrides || {};`
- `saveSettingsData()` 不变
- 旧版每日额度数据（`{ date, used }`）在第一次按卡组写入时会自动覆盖

### 7. 卡组设置 UI

在侧边栏每个卡组的操作按钮组中新增「⚙️」按钮（与重命名、删除并列）：

```javascript
// 在 renderDeckSidebar 的 deck-item 中
<span class="deck-actions">
  <button class="deck-settings-btn" title="卡组设置" onclick="event.stopPropagation(); openDeckSettings(${deck.id})">⚙️</button>
  <button class="deck-rename-btn" title="重命名" onclick="event.stopPropagation(); renameDeck(${deck.id})">✏️</button>
  <button class="deck-delete-btn" title="删除" onclick="event.stopPropagation(); deleteDeck(${deck.id})">🗑️</button>
</span>
```

右键/点击该按钮弹出卡组设置模态框（复用 `.modal-overlay`）：

```javascript
function openDeckSettings(deckId) {
  const deck = decks.find(d => d.id === deckId);
  // ...创建/显示模态框，包含两个输入框
  // 读取现有覆盖值（如果有）
  const override = settings.deckOverrides && settings.deckOverrides[deckId];
  // ...显示并保存
}
```

## 实现要求
- 所有逻辑写在 app.js 中
- 不修改 index.html 结构
- 新增的 CSS 写在 style.css 末尾
- 保持深色主题、中文界面
- 兼容旧数据格式，不破坏 localStorage
- 退出卡组设置后刷新侧边栏（数字变化）和统计

## 验收标准
- [ ] 设置中可设置每日新卡片上限和每日复习上限（全局默认）
- [ ] 侧边栏每个卡组新增 ⚙️ 按钮
- [ ] 点击 ⚙️ 可设置该卡组的独立限额（为空则使用全局默认）
- [ ] 进入复习模式时，某卡组的新卡受该卡组上限限制
- [ ] 复习卡片受该卡组的复习上限限制
- [ ] 统计面板显示当前卡组的限额剩余情况
- [ ] 旧数据兼容：升级不丢配置
