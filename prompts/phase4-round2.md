# WordCards — Phase 4 Round 2: 多语言支持

## 前置

项目路径：`/home/tintinzhang/word-cards/`
要改的文件：`index.html`、`style.css`、`app.js`
纯前端 + localStorage。不引入外部库。
Round 1（PWA + 难度分级）已完成，此轮只在现有代码上做增量修改。

---

## 1. UI 多语言切换

### 1.1 i18n 文本对象

在 app.js 顶部（`const DEFAULT_WORDS` 之前）新增：

```js
// ---- i18n 多语言 ----
const i18n = {
  zh: {
    // 工具栏
    addWord: "＋ 添加单词",
    startReview: "📋 开始复习",
    stats: "📊 统计",
    settings: "⚙️",
    importArticle: "📄 导入文章",
    toggleBrowser: "📋 列表",
    toggleGrid: "🔲 网格",
    // 侧边栏
    allCards: "📚 所有卡片",
    tags: "🏷️ 标签",
    addTag: "＋",
    suspended: "🚫 已挂起",
    flagged: "🚩 标记",
    newDeck: "+",
    // 搜索
    searchPlaceholder: "🔍 搜索单词、翻译或释义...（tag:xxx 按标签过滤）",
    // 浏览器
    status: "状态",
    due: "到期",
    all: "全部",
    newCards: "新卡片",
    learning: "学习中",
    review: "复习",
    mastered: "已掌握",
    today: "今天",
    tomorrow: "明天",
    week: "本周",
    overdue: "过期",
    none: "无安排",
    selected: "已选",
    delete: "🗑️ 删除",
    moveTo: "📁 移至卡组",
    addTagShort: "🏷️ 添加标签",
    suspend: "🚫 挂起",
    unsuspend: "✅ 恢复",
    setDifficulty: "🎯 设置难度",
    word: "单词",
    translation: "翻译",
    deck: "卡组",
    tags: "标签",
    flag: "标记",
    nextReview: "下次复习",
    actions: "操作",
    // 模态框
    addWordTitle: "添加单词",
    editWordTitle: "编辑单词",
    wordLabel: "单词（英文）",
    translationLabel: "翻译（中文）",
    definitionLabel: "释义（选填）",
    deckLabel: "卡组",
    tagsLabel: "🏷️ 标签",
    difficultyLabel: "难度",
    easy: "😊 简单",
    medium: "🤔 中等",
    hard: "😰 困难",
    cancel: "取消",
    confirm: "确认",
    addTagLabel: "+ 添加标签",
    // 卡片信息
    cardInfoTitle: "ℹ️ 卡片信息",
    reps: "复习次数",
    easeFactor: "难度系数 (EF)",
    interval: "当前间隔",
    nextReview: "下次复习",
    cardState: "状态",
    reviewHistory: "答题历史",
    adjust: "人工调整",
    reschedule: "重排（输入天数）",
    resetCard: "🔄 重置卡片",
    markMastered: "✅ 设已掌握",
    setDifficulty: "🎯 设置难度",
    // 复习
    tapToReveal: "点击翻转查看答案",
    again: "完全忘了",
    hardBtn: "有点难",
    good: "记住了",
    easyBtn: "超简单",
    reviewComplete: "🎉 复习完成！",
    backToList: "返回卡片列表",
    exitReview: "✕ 退出复习",
    learningStep: "学习步骤",
    newCardLabel: "🆕 新卡片",
    learningLabel: "💛 学习中",
    reviewLabel: "🔵 复习",
    masteredLabel: "✅ 已掌握",
    shortAgain: "完全忘了",
    shortHard: "有点难",
    shortGood: "记住了",
    shortEasy: "超简单",
    spaceToFlip: "空格 翻转",
    keysGrade: "1-4 评分",
    keySuspend: "S 挂起",
    keyFlag: "F 标记",
    keyUndo: "Ctrl+Z 撤销",
    secondsRemaining: "秒后再次出现",
    // 统计
    statsTitle: "📊 学习统计",
    cardDistribution: "📊 卡片分布",
    retentionRate: "📈 保留率",
    studyTrend: "📉 学习趋势",
    forecastTitle: "🔮 到期预测",
    dailyReview: "每日复习记录",
    hardestCards: "🏆 最难卡片 Top 10",
    goalAchievement: "🎯 目标达成率",
    days7: "7 天",
    days30: "30 天",
    cardsTotal: "共",
    cards: "张",
    streak: "连续",
    days: "天",
    // 设置
    settingsTitle: "⚙️ 设置",
    dailyNewLimit: "每日新卡片上限",
    dailyReviewLimit: "每日复习上限",
    uiLanguage: "界面语言",
    translationLanguage: "释义语言",
    save: "保存",
    // 设置 - 导出
    exportJson: "📥 导出 JSON",
    exportCsv: "📊 导出 CSV",
    importCsv: "📊 导入 CSV",
    // 空状态
    noCards: "还没有单词卡片",
    addFirstCard: "点击「＋ 添加单词」开始吧",
    noResults: "没有找到匹配的卡片",
    // Toast 消息
    cardAdded: "卡片已添加",
    cardUpdated: "卡片已更新",
    cardDeleted: "卡片已删除",
    undoDone: "已撤销",
    cardSuspended: "已挂起",
    cardUnsuspended: "已恢复",
    flagSet: "标记已设置",
    flagCleared: "标记已清除",
    csvExported: "CSV 已导出",
    csvImported: "CSV 已导入",
    csvImportCancelled: "CSV 导入已取消",
    // 页脚
    footer: "点击卡片翻转查看释义 · 空格键翻转 · 1-4评分 · S挂起 · F标记 · Ctrl+Z撤销",
  },
  en: {
    addWord: "＋ Add Word",
    startReview: "📋 Start Review",
    stats: "📊 Stats",
    settings: "⚙️",
    importArticle: "📄 Import Article",
    toggleBrowser: "📋 List",
    toggleGrid: "🔲 Grid",
    allCards: "📚 All Cards",
    tags: "🏷️ Tags",
    addTag: "＋",
    suspended: "🚫 Suspended",
    flagged: "🚩 Flagged",
    newDeck: "+",
    searchPlaceholder: "🔍 Search words, translations, or definitions... (tag:xxx to filter)",
    status: "Status",
    due: "Due",
    all: "All",
    newCards: "New",
    learning: "Learning",
    review: "Review",
    mastered: "Mastered",
    today: "Today",
    tomorrow: "Tomorrow",
    week: "This Week",
    overdue: "Overdue",
    none: "None",
    selected: "Selected",
    delete: "🗑️ Delete",
    moveTo: "📁 Move to Deck",
    addTagShort: "🏷️ Add Tag",
    suspend: "🚫 Suspend",
    unsuspend: "✅ Unsuspend",
    setDifficulty: "🎯 Set Difficulty",
    word: "Word",
    translation: "Translation",
    deck: "Deck",
    tags: "Tags",
    flag: "Flag",
    nextReview: "Next Review",
    actions: "Actions",
    addWordTitle: "Add Word",
    editWordTitle: "Edit Word",
    wordLabel: "Word",
    translationLabel: "Translation",
    definitionLabel: "Definition (optional)",
    deckLabel: "Deck",
    tagsLabel: "🏷️ Tags",
    difficultyLabel: "Difficulty",
    easy: "😊 Easy",
    medium: "🤔 Medium",
    hard: "😰 Hard",
    cancel: "Cancel",
    confirm: "Confirm",
    addTagLabel: "+ Add Tag",
    cardInfoTitle: "ℹ️ Card Info",
    reps: "Reviews",
    easeFactor: "Ease Factor",
    interval: "Interval",
    nextReview: "Next Review",
    cardState: "State",
    reviewHistory: "Review History",
    adjust: "Adjust",
    reschedule: "Reschedule (days)",
    resetCard: "🔄 Reset",
    markMastered: "✅ Mark Mastered",
    setDifficulty: "🎯 Set Difficulty",
    tapToReveal: "Tap to reveal",
    again: "Again",
    hardBtn: "Hard",
    good: "Good",
    easyBtn: "Easy",
    reviewComplete: "🎉 Review Complete!",
    backToList: "Back to List",
    exitReview: "✕ Exit Review",
    learningStep: "Learning Step",
    newCardLabel: "🆕 New",
    learningLabel: "💛 Learning",
    reviewLabel: "🔵 Review",
    masteredLabel: "✅ Mastered",
    shortAgain: "Again",
    shortHard: "Hard",
    shortGood: "Good",
    shortEasy: "Easy",
    spaceToFlip: "Space Flip",
    keysGrade: "1-4 Grade",
    keySuspend: "S Suspend",
    keyFlag: "F Flag",
    keyUndo: "Ctrl+Z Undo",
    secondsRemaining: "s remaining",
    statsTitle: "📊 Study Stats",
    cardDistribution: "📊 Card Distribution",
    retentionRate: "📈 Retention Rate",
    studyTrend: "📉 Study Trend",
    forecastTitle: "🔮 Forecast",
    dailyReview: "Daily Reviews",
    hardestCards: "🏆 Hardest Cards Top 10",
    goalAchievement: "🎯 Goal Achievement",
    days7: "7 Days",
    days30: "30 Days",
    cardsTotal: "Total",
    cards: "cards",
    streak: "Streak",
    days: "days",
    settingsTitle: "⚙️ Settings",
    dailyNewLimit: "Daily New Card Limit",
    dailyReviewLimit: "Daily Review Limit",
    uiLanguage: "UI Language",
    translationLanguage: "Translation Language",
    save: "Save",
    exportJson: "📥 Export JSON",
    exportCsv: "📊 Export CSV",
    importCsv: "📊 Import CSV",
    noCards: "No cards yet",
    addFirstCard: "Click「＋ Add Word」to get started",
    noResults: "No matching cards found",
    cardAdded: "Card added",
    cardUpdated: "Card updated",
    cardDeleted: "Card deleted",
    undoDone: "Undone",
    cardSuspended: "Suspended",
    cardUnsuspended: "Unsuspended",
    flagSet: "Flag set",
    flagCleared: "Flag cleared",
    csvExported: "CSV exported",
    csvImported: "CSV imported",
    csvImportCancelled: "CSV import cancelled",
    footer: "Tap card to flip · Space to flip · 1-4 Grade · S Suspend · F Flag · Ctrl+Z Undo",
  },
};

// 当前 UI 语言
function t(key) {
  const lang = (settings && settings.uiLang) || "zh";
  return (i18n[lang] || i18n.zh)[key] || key;
}
```

`t()` 函数放在 `settings` 初始化之后，确保读取 `settings.uiLang` 时 settings 已加载。

在 `loadSettings()` 里加 `if (settings.uiLang === undefined) settings.uiLang = "zh";`

### 1.2 替换所有硬编码文本

**方法：** 搜索 app.js 中所有用户可见的硬编码字符串，替换为 `t('key')`。

需要特别注意的地方：

**渲染函数**（用 innerHTML 或 textContent 的地方）：
- `renderDeckSidebar()` — 所有侧边栏文字
- `renderGrid()` — 卡片上的文字（状态标签、难度标签、按钮文字）
- `renderStats()` — 统计栏文字
- `renderBrowserView()` — 表头文字、分页文字、空状态文字
- `renderTagList()` — 标签区域文字
- `renderCardInfo()`（showCardInfo 里的 HTML）
- `renderStatsPage()` — 所有统计页标题
- `renderSettings*()` — 所有设置页面文字
- `finishReview()` — 复习完成页面文字
- `showNextCard()` — 复习卡片上的文字

**事件绑定**（直接设置 textContent 的地方）：
- `init()` 里创建的导入按钮文字
- 任何 `button.textContent = ...` 的地方

**showToast() 调用** — 所有 `showToast` 里的消息文本

**复习模式文字**：
- 四个评分按钮的文字（"完全忘了" "有点难" "记住了" "超简单"）
- 快捷键提示文字
- 页面底部 footer

**空状态/无结果文字**

⚠️ **HTML 结构中的硬编码文本**（index.html 中）：
index.html 里有大量硬编码文本（按钮文字、placeholder、提示等）。有两种改法：
- 方案 A：将 index.html 中的文本改为 `{{key}}` 占位符，在 JS 初始化时动态填充 — 更彻底
- 方案 B：保留 HTML 中文本，在切换语言时更新 — 更简单

**建议用方案 B**：在 `index.html` 中保留中文，切换语言时 JS 遍历有 `data-i18n` 属性的元素并更新 textContent。

方法：
1. 在 index.html 中给所有需要翻译的元素加 `data-i18n="key"` 属性
2. 写一个 `function applyI18n()` 函数：
   ```js
   function applyI18n() {
     document.querySelectorAll('[data-i18n]').forEach(el => {
       const key = el.dataset.i18n;
       el.textContent = t(key);
     });
   }
   ```
3. 在切换语言时调用 `applyI18n()`
4. placeholder 需要用 `data-i18n-placeholder`

**但有些动态创建的元素没有 `data-i18n`**（如 innerHTML 中的按钮），只能用方案 A 替换。

**推荐混合方案：**
- HTML 静态元素 → `data-i18n` 属性
- JS innerHTML 中的文本 → 直接 `t('key')`
- `showToast` 中的文本 → 封装到 `showToast(t('key'), type)`

### 1.3 设置 — UI 语言切换

在设置模态框中加"界面语言"选择（中文/English）：
- 位置：在"每日新卡片上限"上面
- 下拉框：中文 / English
- 保存后立即调用 `applyI18n()` + `renderGrid()` + `renderDeckSidebar()` + `renderStats()`

### 1.4 翻译语言对扩展

**现状：** MyMemory API 调用时写死了 `langpair=en|zh-CN`，释义获取也用中文。

**改动：**

在设置加"释义语言"下拉框（在 UI 语言下面），选项：
- 中文 (zh-CN)
- 日文 (ja)
- 法文 (fr)
- 德文 (de)
- 韩文 (ko)
- 西班牙文 (es)

`settings.defLang` 存储语言代码，默认 `zh-CN`。

找到 `fetchDef()` 或调用 MyMemory API 的地方，将 `langpair` 改为动态：
```js
const targetLang = settings.defLang || "zh-CN";
const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|${targetLang}`);
```

TTS 语言跟随 `settings.defLang`：
```js
const langMap = { "zh-CN": "zh-CN", ja: "ja-JP", fr: "fr-FR", de: "de-DE", ko: "ko-KR", es: "es-ES" };
const ttsLang = langMap[settings.defLang] || "en-US";
```

---

## 2. 更新 PROJECT.md

在文件头部把 Phase 4 标记改为完成。

---

## 实现注意事项

1. **不要改原有功能的逻辑** — 只替换文本，不改功能
2. **替换要彻底** — 每个硬编码字符串都要找出来替换
3. **测试切换** — 切换 中文 → English → 中文，确保所有文字正确切换
4. **控制台无报错** — `t('不存在的key')` 返回 key 本身而不是崩溃
5. **settings 初始化顺序** — `loadSettings()` 必须在 `t()` 被调用之前执行
6. **复习中的文字** — 复习进行中切换语言？不支持，退出复习再切

---

## 最终步骤

```bash
cp app.js www/app.js
cp index.html www/index.html
cp style.css www/style.css
```
