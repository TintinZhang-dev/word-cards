/* ===============================
   WordCards — Phase 1 + 2 + 3 + 4
   localStorage 持久化 + 单词管理 + SM-2 + 学习模式 + 多语言
   =============================== */

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
    decks: "📂 卡组",
    tagsSidebar: "🏷️ 标签",
    filter: "🔍 筛选",
    addTag: "+",
    suspendedFilter: "🚫 已挂起",
    flaggedFilter: "🚩 有标记",
    newDeck: "+",
    noTags: "暂无标签",
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
    setDifficulty: "📊 批量设置难度",
    difficulty: "难度",
    word: "单词",
    translation: "翻译",
    deck: "卡组",
    actions: "操作",
    // 模态框
    addWordTitle: "添加单词",
    editWordTitle: "编辑单词",
    wordLabel: "单词（英文）",
    wordPlaceholder: "输入英文单词",
    translationLabel: "翻译（中文）",
    translationPlaceholder: "输入中文翻译",
    definitionLabel: "释义（选填）",
    definitionPlaceholder: "输入详细释义或例句",
    deckLabel: "卡组",
    uncategorized: "未分类",
    tagsLabel: "🏷️ 标签",
    difficultyLabel: "📊 难度",
    easy: "😊 简单",
    medium: "🤔 中等",
    hard: "😰 困难",
    cancel: "取消",
    confirm: "确认",
    addTagLabel: "+ 添加标签",
    noMoreTags: "没有更多标签",
    // 标签编辑
    addTagTitle: "🏷️ 添加标签",
    tagNameLabel: "标签名称",
    tagNamePlaceholder: "输入标签名称",
    color: "颜色",
    save: "保存",
    // 卡片信息
    cardInfoTitle: "ℹ️ 卡片信息",
    basicInfo: "基本信息",
    reviewStats: "复习统计",
    reps: "复习次数 (reps)",
    easeFactor: "难度系数 (EF)",
    interval: "间隔 (interval)",
    currentInterval: "当前间隔",
    nextReviewDate: "下次复习",
    cardState: "状态",
    learningStep: "学习步骤",
    suspendedStatus: "挂起",
    reviewHistory: "答题历史（最近）",
    noHistory: "暂无答题记录",
    difficultySection: "📊 难度",
    speak: "🔊 朗读",
    reschedule: "📅 重排",
    resetCard: "🔄 重置",
    markMastered: "✅ 设为已掌握",
    toggleSuspend: "🚫 挂起",
    toggleUnsuspend: "▶️ 取消挂起",
    close: "关闭",
    setFlag: "设置标记",
    // 卡片状态
    statusNew: "新",
    statusLearning: "学习中",
    statusReview: "复习",
    statusMastered: "✅",
    // 复习
    tapToReveal: "点击翻转查看答案",
    again: "完全忘了",
    hardBtn: "有点难",
    good: "记住了",
    easyBtn: "超简单",
    reviewComplete: "🎉 复习完成！",
    reviewDoneMsg1: "继续加油，下次一定记得更好！",
    accuracyLabel: "正确率",
    loadMore: "加载更多",
    allLoaded: "全部已加载",
    // 拼写模式
    spellingMode: "✍️ 拼写模式",
    spellingPlaceholder: "在此输入单词...",
    spellingSubmit: "提交",
    spellingCorrect: "✅ 正确！",
    spellingWrong: "❌ 不对，正确答案是：",
    spellingNext: "下一个",
    spellingExit: "退出拼写",
    spellingTypeAnswer: "输入答案",
    spellingScore: "拼写正确率",
    spellingNoCards: "🥳 没有待拼写的卡片",
    spellingWrongGrade: "✗ 记错",
    spellingCorrectGrade: "✓ 记住了",
    spellingSummary: "拼写统计",
    backToList: "返回卡片列表",
    exitReview: "✕ 退出复习",
    newCardLabel: "🆕 新卡片",
    learningLabel: "💛 学习中",
    reviewLabel: "🔵 复习",
    masteredLabel: "✅ 已掌握",
    spaceToFlip: "空格 翻转",
    keysGrade: "1-4 评分",
    keySuspend: "S 挂起",
    keyFlag: "F 标记",
    keyUndo: "Ctrl+Z 撤销",
    noDueCards: "所有卡片都已掌握，暂无需要复习的卡片。",
    // 统计
    statsTitle: "📊 学习统计",
    back: "← 返回",
    cardDistribution: "📊 卡片分布",
    retentionRate: "📈 保留率",
    studyTrend: "📉 学习趋势",
    forecastTitle: "🔮 到期预测",
    dailyReview: "每日复习记录",
    hardestCards: "🏆 最难卡片 Top 10",
    goalAchievement: "🎯 目标达成率",
    days7: "7 天",
    days30: "30 天",
    totalCards: "总卡片",
    masteredCards: "已掌握",
    learningCards: "学习中",
    reviewCards: "复习中",
    newCardCount: "新卡片",
    streakLabel: "连续学习",
    todayRemainingNew: "今日剩余新卡",
    todayRemainingReview: "今日剩余复习",
    noReviewData: "暂无复习数据",
    // 设置
    settingsTitle: "⚙️ 设置",
    dailyNewLimit: "每日新卡片上限",
    dailyReviewLimit: "每日复习上限",
    dailyLimits: "📊 每日额度",
    reviewQueueSettings: "🔄 复习队列",
    newPerReview: "每轮新卡插入数量",
    dailyGoals: "🎯 每日目标",
    dailyNewGoal: "每日新卡片目标",
    dailyReviewGoal: "每日复习目标",
    dataManagement: "💾 数据管理",
    exportJson: "📥 导出 JSON",
    importJson: "📤 导入 JSON",
    exportCsv: "📊 导出 CSV",
    importCsv: "📊 导入 CSV",
    ignoreList: "📝 忽略列表",
    ignoreListHint: "以下单词导入文章时将自动跳过：",
    ignorePlaceholder: "输入要忽略的单词",
    ignoreAdd: "添加",
    noIgnoreWords: "暂无忽略词",
    // 设置 - 释义语言
    defLangLabel: "🌐 导入时自动获取释义",
    defLangEn: "英文释义（来自 FreeDictionary）",
    defLangZh: "中文翻译（来自 MyMemory）",
    defLangNone: "不获取，留空自行填写",
    defLangHint: "需要联网。英文释义取词典定义，中文翻译取常见译法。",
    // 设置 - UI 语言
    uiLanguage: "🌐 界面语言",
    translationLanguage: "🌐 释义语言",
    // 导入
    importTitle: "📄 导入文章提取生词",
    importPdfBtn: "📎 上传 PDF",
    importPasteHint: "在此粘贴英文文章，或上传 PDF 自动填入...",
    importTargetDeck: "目标卡组",
    importSkipExisting: "跳过已有卡片中的单词",
    importExtractBtn: "提取生词",
    importResultTitle: "📊 提取结果",
    importToggleAll: "全选 / 取消全选",
    importBack: "返回编辑",
    importBatchAdd: "批量添加",
    // 空状态
    noCards: "还没有单词卡片",
    addFirstCard: "点击「添加单词」开始创建",
    noResults: "未找到匹配的单词",
    noResultsHint: "试试其他关键词或筛选条件",
    // Toast 消息
    cardAdded: "卡片已添加",
    cardUpdated: "卡片已更新",
    cardDeleted: "卡片已删除",
    undoDone: "已撤销 ↩️",
    cardSuspended: "已挂起 🚫",
    cardUnsuspended: "已恢复 ▶️",
    flagSet: "标记已设置",
    flagCleared: "标记已清除",
    csvExported: "CSV 导出成功 ✅",
    csvImported: "CSV 导入完成",
    csvImportCancelled: "CSV 导入已取消",
    difficultyUpdated: "难度已更新",
    rescheduled: "已重排",
    cardReset: "卡片已重置",
    cardMastered: "已设为已掌握 ✅",
    deckRenamed: "卡组已重命名",
    deckDeleted: "卡组已删除",
    tagCreated: "标签已创建 🏷️",
    tagDeleted: "标签已删除",
    batchMoved: "已移动选中卡片",
    batchTagAdded: "已添加标签",
    batchSuspended: "已挂起选中卡片",
    batchUnsuspended: "已恢复选中卡片",
    batchDifficultySet: "已设置难度",
    batchDeleted: "已删除选中卡片",
    noUndo: "没有可撤销的操作",
    loadFailed: "加载数据失败",
    addFailed: "添加失败",
    updateFailed: "更新失败",
    deleteFailed: "删除失败",
    importFailed: "导入失败",
    extractFailed: "提取失败",
    batchAddFailed: "批量添加失败",
    renameFailed: "重命名失败",
    deckDeleteFailed: "删除卡组失败",
    createDeckFailed: "创建卡组失败",
    getDueFailed: "获取复习队列失败",
    migrationDetected: "检测到本地旧数据，正在迁移...",
    migrationDone: "数据迁移完成！",
    migrationFailed: "数据迁移失败",
    importDone: "导入完成",
    noWordsExtracted: "未提取到任何新单词",
    wordTranslationRequired: "单词和翻译不能为空",
    invalidBackup: "无效的备份文件",
    // 页脚
    footer: "点击卡片翻转查看释义 · 空格键翻转 · 1-4评分 · S挂起 · F标记 · Ctrl+Z撤销",
  },
  en: {
    // Toolbar
    addWord: "＋ Add Word",
    startReview: "📋 Start Review",
    stats: "📊 Stats",
    settings: "⚙️",
    importArticle: "📄 Import Article",
    toggleBrowser: "📋 List",
    toggleGrid: "🔲 Grid",
    // Sidebar
    allCards: "📚 All Cards",
    decks: "📂 Decks",
    tagsSidebar: "🏷️ Tags",
    filter: "🔍 Filter",
    addTag: "+",
    suspendedFilter: "🚫 Suspended",
    flaggedFilter: "🚩 Flagged",
    newDeck: "+",
    noTags: "No tags",
    // Search
    searchPlaceholder: "🔍 Search words, translations, or definitions... (tag:xxx to filter)",
    // Browser
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
    setDifficulty: "📊 Set Difficulty",
    difficulty: "Difficulty",
    word: "Word",
    translation: "Translation",
    deck: "Deck",
    actions: "Actions",
    // Modals
    addWordTitle: "Add Word",
    editWordTitle: "Edit Word",
    wordLabel: "Word",
    wordPlaceholder: "Enter English word",
    translationLabel: "Translation",
    translationPlaceholder: "Enter translation",
    definitionLabel: "Definition (optional)",
    definitionPlaceholder: "Enter detailed definition or example",
    deckLabel: "Deck",
    uncategorized: "Uncategorized",
    tagsLabel: "🏷️ Tags",
    difficultyLabel: "📊 Difficulty",
    easy: "😊 Easy",
    medium: "🤔 Medium",
    hard: "😰 Hard",
    cancel: "Cancel",
    confirm: "Confirm",
    addTagLabel: "+ Add Tag",
    noMoreTags: "No more tags",
    // Tag editing
    addTagTitle: "🏷️ Add Tag",
    tagNameLabel: "Tag Name",
    tagNamePlaceholder: "Enter tag name",
    color: "Color",
    save: "Save",
    // Card info
    cardInfoTitle: "ℹ️ Card Info",
    basicInfo: "Basic Info",
    reviewStats: "Review Stats",
    reps: "Reviews (reps)",
    easeFactor: "Ease Factor (EF)",
    interval: "Interval",
    currentInterval: "Current Interval",
    nextReviewDate: "Next Review",
    cardState: "State",
    learningStep: "Learning Step",
    suspendedStatus: "Suspended",
    reviewHistory: "Review History (recent)",
    noHistory: "No review history",
    difficultySection: "📊 Difficulty",
    speak: "🔊 Speak",
    reschedule: "📅 Reschedule",
    resetCard: "🔄 Reset",
    markMastered: "✅ Mark Mastered",
    toggleSuspend: "🚫 Suspend",
    toggleUnsuspend: "▶️ Unsuspend",
    close: "Close",
    setFlag: "Set Flag",
    // Card states
    statusNew: "New",
    statusLearning: "Learning",
    statusReview: "Review",
    statusMastered: "✅",
    // Review
    tapToReveal: "Tap to reveal",
    again: "Again",
    hardBtn: "Hard",
    good: "Good",
    easyBtn: "Easy",
    reviewComplete: "🎉 Review Complete!",
    reviewDoneMsg1: "Keep going, you'll remember better next time!",
    accuracyLabel: "Accuracy",
    loadMore: "Load More",
    allLoaded: "All loaded",
    // Spelling mode
    spellingMode: "✍️ Spelling Mode",
    spellingPlaceholder: "Type the word...",
    spellingSubmit: "Submit",
    spellingCorrect: "✅ Correct!",
    spellingWrong: "❌ Wrong. The answer is:",
    spellingNext: "Next",
    spellingExit: "Exit Spelling",
    spellingTypeAnswer: "Type your answer",
    spellingScore: "Spelling Accuracy",
    spellingNoCards: "🥳 No cards to spell!",
    spellingWrongGrade: "✗ Missed",
    spellingCorrectGrade: "✓ Got it",
    spellingSummary: "Spelling Results",
    backToList: "Back to List",
    exitReview: "✕ Exit Review",
    newCardLabel: "🆕 New",
    learningLabel: "💛 Learning",
    reviewLabel: "🔵 Review",
    masteredLabel: "✅ Mastered",
    spaceToFlip: "Space Flip",
    keysGrade: "1-4 Grade",
    keySuspend: "S Suspend",
    keyFlag: "F Flag",
    keyUndo: "Ctrl+Z Undo",
    noDueCards: "All cards mastered, no cards to review.",
    // Stats
    statsTitle: "📊 Study Stats",
    back: "← Back",
    cardDistribution: "📊 Card Distribution",
    retentionRate: "📈 Retention Rate",
    studyTrend: "📉 Study Trend",
    forecastTitle: "🔮 Forecast",
    dailyReview: "Daily Reviews",
    hardestCards: "🏆 Hardest Cards Top 10",
    goalAchievement: "🎯 Goal Achievement",
    days7: "7 Days",
    days30: "30 Days",
    totalCards: "Total",
    masteredCards: "Mastered",
    learningCards: "Learning",
    reviewCards: "Reviewing",
    newCardCount: "New",
    streakLabel: "Streak",
    todayRemainingNew: "New remaining",
    todayRemainingReview: "Review remaining",
    noReviewData: "No review data",
    // Settings
    settingsTitle: "⚙️ Settings",
    dailyNewLimit: "Daily New Card Limit",
    dailyReviewLimit: "Daily Review Limit",
    dailyLimits: "📊 Daily Limits",
    reviewQueueSettings: "🔄 Review Queue",
    newPerReview: "New cards per round",
    dailyGoals: "🎯 Daily Goals",
    dailyNewGoal: "Daily New Card Goal",
    dailyReviewGoal: "Daily Review Goal",
    dataManagement: "💾 Data Management",
    exportJson: "📥 Export JSON",
    importJson: "📤 Import JSON",
    exportCsv: "📊 Export CSV",
    importCsv: "📊 Import CSV",
    ignoreList: "📝 Ignore List",
    ignoreListHint: "The following words will be skipped during import:",
    ignorePlaceholder: "Enter word to ignore",
    ignoreAdd: "Add",
    noIgnoreWords: "No ignored words",
    // Settings - translation language
    defLangLabel: "🌐 Auto-fetch definition on import",
    defLangEn: "English definition (FreeDictionary)",
    defLangZh: "Chinese translation (MyMemory)",
    defLangNone: "Skip, leave blank",
    defLangHint: "Requires internet. English fetches dictionary definition, Chinese fetches common translation.",
    // Settings - UI language
    uiLanguage: "🌐 UI Language",
    translationLanguage: "🌐 Translation Language",
    // Import
    importTitle: "📄 Import Article & Extract Words",
    importPdfBtn: "📎 Upload PDF",
    importPasteHint: "Paste an English article here, or upload a PDF...",
    importTargetDeck: "Target Deck",
    importSkipExisting: "Skip existing words",
    importExtractBtn: "Extract Words",
    importResultTitle: "📊 Extraction Results",
    importToggleAll: "Select All / Deselect All",
    importBack: "Back to Edit",
    importBatchAdd: "Batch Add",
    // Empty states
    noCards: "No cards yet",
    addFirstCard: "Click「＋ Add Word」to get started",
    noResults: "No matching cards found",
    noResultsHint: "Try different keywords or filters",
    // Toast messages
    cardAdded: "Card added",
    cardUpdated: "Card updated",
    cardDeleted: "Card deleted",
    undoDone: "Undone ↩️",
    cardSuspended: "Suspended 🚫",
    cardUnsuspended: "Unsuspended ▶️",
    flagSet: "Flag set",
    flagCleared: "Flag cleared",
    csvExported: "CSV exported ✅",
    csvImported: "CSV import complete",
    csvImportCancelled: "CSV import cancelled",
    difficultyUpdated: "Difficulty updated",
    rescheduled: "Rescheduled",
    cardReset: "Card reset",
    cardMastered: "Marked as mastered ✅",
    deckRenamed: "Deck renamed",
    deckDeleted: "Deck deleted",
    tagCreated: "Tag created 🏷️",
    tagDeleted: "Tag deleted",
    batchMoved: "Cards moved",
    batchTagAdded: "Tags added",
    batchSuspended: "Cards suspended",
    batchUnsuspended: "Cards unsuspended",
    batchDifficultySet: "Difficulty set",
    batchDeleted: "Cards deleted",
    noUndo: "Nothing to undo",
    loadFailed: "Failed to load data",
    addFailed: "Failed to add",
    updateFailed: "Failed to update",
    deleteFailed: "Failed to delete",
    importFailed: "Import failed",
    extractFailed: "Extraction failed",
    batchAddFailed: "Batch add failed",
    renameFailed: "Rename failed",
    deckDeleteFailed: "Failed to delete deck",
    createDeckFailed: "Failed to create deck",
    getDueFailed: "Failed to get review queue",
    migrationDetected: "Local legacy data detected, migrating...",
    migrationDone: "Data migration complete!",
    migrationFailed: "Data migration failed",
    importDone: "Import complete",
    noWordsExtracted: "No new words extracted",
    wordTranslationRequired: "Word and translation are required",
    invalidBackup: "Invalid backup file",
    // Footer
    footer: "Tap card to flip · Space to flip · 1-4 Grade · S Suspend · F Flag · Ctrl+Z Undo",
  },
};

// ---------- 默认数据（第一次使用时加载） ----------
const DEFAULT_WORDS = [
  { id: 1, word: "ubiquitous", translation: "无处不在的", definition: "存在于各个地方、无处不在的", deckId: 1 },
  { id: 2, word: "ephemeral", translation: "短暂的", definition: "转瞬即逝、存在时间极短的事物", deckId: 1 },
  { id: 3, word: "ethereal", translation: "空灵的", definition: "极其精致、轻盈、超凡脱俗的气质", deckId: 1 },
  { id: 4, word: "resilience", translation: "韧性", definition: "从困境中迅速恢复的能力", deckId: 1 },
  { id: 5, word: "nostalgia", translation: "怀旧", definition: "对过去美好时光的思念与眷恋", deckId: 1 },
  { id: 6, word: "euphoria", translation: "狂喜", definition: "极度强烈的幸福与兴奋感", deckId: 1 },
  { id: 7, word: "ambiguous", translation: "模棱两可的", definition: "有不止一种含义或解释的", deckId: 1 },
  { id: 8, word: "paradigm", translation: "范式", definition: "一套思维模式或理论框架", deckId: 1 },
  { id: 9, word: "eloquent", translation: "雄辩的", definition: "口才好、表达清晰有说服力的", deckId: 1 },
  { id: 10, word: "tenacious", translation: "顽强的", definition: "坚持不懈、绝不放弃的", deckId: 1 },
  { id: 11, word: "paradox", translation: "悖论", definition: "看似矛盾但可能包含真理的陈述", deckId: 1 },
  { id: 12, word: "catalyst", translation: "催化剂", definition: "加速变化或引发事件的人或物", deckId: 1 },
  { id: 13, word: "pragmatic", translation: "务实的", definition: "注重实际效果而非理论的", deckId: 1 },
  { id: 14, word: "cryptic", translation: "隐秘的", definition: "含义隐晦、难以理解的", deckId: 1 },
  { id: 15, word: "scrutiny", translation: "仔细审查", definition: "严密细致的检查或审视", deckId: 1 },
  { id: 16, word: "alleviate", translation: "缓解", definition: "减轻痛苦或问题的严重程度", deckId: 2 },
  { id: 17, word: "diligent", translation: "勤奋的", definition: "认真努力、坚持不懈的", deckId: 2 },
  { id: 18, word: "plausible", translation: "貌似合理的", definition: "听起来可信或看似真实的", deckId: 2 },
  { id: 19, word: "conundrum", translation: "难题", definition: "令人困惑的复杂问题", deckId: 2 },
  { id: 20, word: "empirical", translation: "经验性的", definition: "基于观察或实验而非纯粹理论的", deckId: 2 },
  { id: 21, word: "innovative", translation: "创新的", definition: "引入新想法或新方法的", deckId: 2 },
  { id: 22, word: "perpetual", translation: "永久的", definition: "持续不断、永无止境的", deckId: 2 },
  { id: 23, word: "reciprocal", translation: "互惠的", definition: "双方互相给予和接受的", deckId: 2 },
  { id: 24, word: "substantial", translation: "大量的", definition: "规模大、数量多或意义重大的", deckId: 2 },
  { id: 25, word: "validate", translation: "验证", definition: "确认某事物的准确性或有效性", deckId: 2 },
  { id: 26, word: "compelling", translation: "令人信服的", definition: "具有强烈说服力或吸引力的", deckId: 2 },
  { id: 27, word: "deteriorate", translation: "恶化", definition: "逐渐变差或退化", deckId: 2 },
  { id: 28, word: "inevitable", translation: "不可避免的", definition: "一定会发生的事情", deckId: 2 },
  { id: 29, word: "legitimate", translation: "合法的", definition: "符合法律规定或可以被接受的", deckId: 2 },
  { id: 30, word: "negligible", translation: "可忽略不计的", definition: "数量或重要性极小到可以无视的", deckId: 2 },
  { id: 31, word: "optimistic", translation: "乐观的", definition: "对未来的结果持积极态度", deckId: 2 },
  { id: 32, word: "profound", translation: "深刻的", definition: "含义深远的、知识渊博的", deckId: 2 },
  { id: 33, word: "rigorous", translation: "严谨的", definition: "严格、精确、一丝不苟的", deckId: 2 },
  { id: 34, word: "spontaneous", translation: "自发的", definition: "未经事先安排而自然发生的", deckId: 2 },
  { id: 35, word: "thorough", translation: "彻底的", definition: "全面细致、不遗漏任何细节的", deckId: 2 },
  { id: 36, word: "underestimate", translation: "低估", definition: "对某事物的价值或能力判断过低", deckId: 3 },
  { id: 37, word: "versatile", translation: "多才多艺的", definition: "具备多种技能或用途的", deckId: 3 },
  { id: 38, word: "withstand", translation: "承受", definition: "经受压力或攻击而不被破坏", deckId: 3 },
  { id: 39, word: "accumulate", translation: "积累", definition: "逐渐聚集或增加", deckId: 3 },
  { id: 40, word: "benevolent", translation: "仁慈的", definition: "善意的、慷慨助人的", deckId: 3 },
  { id: 41, word: "commodity", translation: "商品", definition: "可以买卖的基本产品或原材料", deckId: 3 },
  { id: 42, word: "discrepancy", translation: "差异", definition: "本应一致的二者间不应有的差异", deckId: 3 },
  { id: 43, word: "elaborate", translation: "精心制作的", definition: "包含复杂细节、精心设计的", deckId: 3 },
  { id: 44, word: "fluctuate", translation: "波动", definition: "在数值或程度上不规则地变化", deckId: 3 },
  { id: 45, word: "hypothesis", translation: "假说", definition: "作为推理起点的暂时性解释", deckId: 3 },
  { id: 46, word: "implement", translation: "实施", definition: "将计划或决定付诸行动", deckId: 3 },
  { id: 47, word: "juxtapose", translation: "并列对比", definition: "并列放置以突显差异或对比", deckId: 3 },
  { id: 48, word: "metaphor", translation: "隐喻", definition: "用一种事物比喻另一种事物的修辞手法", deckId: 3 },
  { id: 49, word: "plummet", translation: "暴跌", definition: "快速且大幅度地下降", deckId: 3 },
  { id: 50, word: "synthesize", translation: "综合", definition: "将不同元素组合成一个整体", deckId: 3 },
];

// ---- localStorage key 常量 ----
const WORDS_KEY        = "wordcards_words";
const DECKS_KEY        = "wordcards_decks";
const REVIEW_KEY       = "wordcards_review";
const SETTINGS_KEY     = "wordcards_settings";
const NEW_USED_KEY     = "wordcards_new_used";
const REVIEW_USED_KEY  = "wordcards_review_used";
const HISTORY_KEY      = "wordcards_history";
const IGNORE_KEY       = "wordcards_ignore_words";
const STREAK_KEY       = "wordcards_streak";
const MIGRATION_DONE_KEY = "wordcards_migrated";
const TAGS_KEY         = "wordcards_tags";

// 向后兼容别名
const STORAGE_KEY = WORDS_KEY;

// ---- 离线模式 localStorage 读写 ----
function saveWordsLocal()   { localStorage.setItem(WORDS_KEY, JSON.stringify(words)); }
function saveDecksLocal()   { localStorage.setItem(DECKS_KEY, JSON.stringify(decks)); }
function saveReviewLocal()  { localStorage.setItem(REVIEW_KEY, JSON.stringify(reviewData)); }
function loadReviewLocal() {
  try { return JSON.parse(localStorage.getItem(REVIEW_KEY) || "{}"); }
  catch { return {}; }
}

// ---------- Toast 提示 ----------
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  // CSS 动画自动处理淡入/淡出，2.7s 后移除元素
  setTimeout(() => {
    if (toast.parentNode) toast.remove();
  }, 3100);
}

// ---------- 默认卡组 ----------
const DEFAULT_DECKS = [
  { id: 1, name: "SAT 词汇" },
  { id: 2, name: "学术词汇" },
  { id: 3, name: "生活用语" },
];

// ---------- 数据 ----------
let words = [];
let nextId = 1;
let searchQuery = "";
let decks = [];
let nextDeckId = 1;
let selectedDeckId = null; // null = 显示所有卡片
let tags = [];             // [{ id, name, color }]
let nextTagId = 1;
let selectedTagIds = [];   // 多选标签过滤

// ---- 浏览器视图状态 ----
let viewMode = "grid";  // "grid" | "browser"
let browserSortField = "word";
let browserSortDir = "asc";
let browserStatusFilter = "all";
let browserDueFilter = "all";
let browserSelectedCards = new Set();
let browserPage = 1;
const BROWSER_PAGE_SIZE = 50;
let suspendedFilter = false;
let flagFilter = null;  // null | 1 | 2 | 3 | 4
let browserDisplayLimit = 100;  // 大批量分批显示的已加载数量
let browserIsLoadingMore = false;  // 标记是否正在「加载更多」

// ---- 撤销栈 ----
let undoStack = [];

// ---------- DOM 引用 ----------
const grid = document.getElementById("cardGrid");
const statsEl = document.getElementById("stats");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const addBtn = document.getElementById("addBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalWord = document.getElementById("modalWord");
const modalTranslation = document.getElementById("modalTranslation");
const modalDefinition = document.getElementById("modalDefinition");
const modalCancel = document.getElementById("modalCancel");
const modalConfirm = document.getElementById("modalConfirm");

let editingId = null; // null = 新增模式，数字 = 编辑模式

// ---------- 连续学习天数 ----------
function getStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
  } catch { return {}; }
}

function saveStreak(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}

function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  const data = getStreak();
  
  if (data.lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (data.lastDate === yesterdayStr) {
      data.count = (data.count || 0) + 1;
    } else {
      data.count = 1;
    }
    data.lastDate = today;
    saveStreak(data);
  }
  return data.count || 0;
}

// ---------- 用户状态 ----------
function updateUserStatus() {
  const statusText = document.getElementById("userStatusText");
  const loginBtn = document.getElementById("headerLoginBtn");
  const logoutBtn = document.getElementById("headerLogoutBtn");
  if (!statusText) return;

  const user = API.getUser();
  if (user && API.getToken()) {
    statusText.textContent = `🌐 ${user.email}`;
    if (loginBtn) loginBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline";
  } else {
    statusText.textContent = "🌐 未登录";
    if (loginBtn) loginBtn.style.display = "inline";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
}

// ---------- 初始化 ----------
async function init() {
  await initApp();
  loadSettings();
  updateUserStatus();

  // ---- 欢迎横幅（首次使用）----
  const welcomeBanner = document.getElementById("welcomeBanner");
  if (welcomeBanner && !settings.welcomeDismissed) {
    welcomeBanner.style.display = "flex";
    document.getElementById("welcomeStartBtn")?.addEventListener("click", () => {
      settings.welcomeDismissed = true;
      saveSettingsData();
      welcomeBanner.style.opacity = "0";
      welcomeBanner.style.transition = "opacity 0.3s";
      setTimeout(() => { welcomeBanner.style.display = "none"; }, 300);
    });
    document.getElementById("welcomeDismissCheck")?.addEventListener("change", function () {
      if (this.checked) {
        settings.welcomeDismissed = true;
        saveSettingsData();
      }
    });
  }

  // 登录/退出按钮事件
  const headerLoginBtn = document.getElementById("headerLoginBtn");
  const headerLogoutBtn = document.getElementById("headerLogoutBtn");
  if (headerLoginBtn) {
    headerLoginBtn.addEventListener("click", () => {
      window.location.href = "/login.html";
    });
  }
  if (headerLogoutBtn) {
    headerLogoutBtn.addEventListener("click", () => {
      API.clearToken();
      window.location.reload();
    });
  }

  // 添加导入文章按钮到工具栏
  const importBtn = document.createElement("button");
  importBtn.id = "importBtn";
  importBtn.textContent = t("importArticle");
  importBtn.setAttribute("data-i18n", "importArticle");
  importBtn.addEventListener("click", openImportModal);
  const statsBtnEl = document.getElementById("statsBtn");
  if (statsBtnEl && statsBtnEl.parentNode) {
    statsBtnEl.parentNode.insertBefore(importBtn, statsBtnEl);
  }

  // 搜索事件绑定（带防抖）
  let searchDebounce = null;
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    searchClear.classList.toggle("hidden", !searchQuery);
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      if (viewMode === "grid") { renderGrid(); renderStats(); }
      else { browserPage = 1; renderBrowserView(); renderStats(); }
    }, 150);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.classList.add("hidden");
    if (viewMode === "grid") renderGrid();
    else { browserPage = 1; renderBrowserView(); }
    searchInput.focus();
  });

  // 搜索输入时回车直接刷新
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(searchDebounce);
      if (viewMode === "grid") renderGrid();
      else { browserPage = 1; renderBrowserView(); }
    }
  });
}

async function initApp() {
  try {
    const data = await DataLayer.loadAll();
    words = data.words || [];
    // 在线模式：API 返回 deck_id 字段映射到 deckId
    for (const w of words) {
      if (w.deck_id !== undefined) w.deckId = w.deck_id;
    }
    decks = data.decks || [];

    // 计算 nextId
    nextId = words.length > 0 ? Math.max(...words.map(w => w.id)) + 1 : 1;
    nextDeckId = decks.length > 0 ? Math.max(...decks.map(d => d.id)) + 1 : 1;

    // 首次使用：加载默认词包
    if (words.length === 0) {
      decks = [...DEFAULT_DECKS];
      words = DEFAULT_WORDS.map(dw => ({
        id: dw.id,
        word: dw.word,
        translation: dw.translation,
        definition: dw.definition,
        deckId: dw.deckId,
      }));
      nextId = Math.max(...words.map(w => w.id)) + 1;
      nextDeckId = Math.max(...decks.map(d => d.id)) + 1;
      saveWordsLocal();
      saveDecksLocal();
      console.log(`📚 已加载默认词包 (${words.length} words, ${decks.length} decks)`);
    }

    // 加载复习数据
    reviewData = {};
    if (DataLayer.isOnline) {
      // 在线模式：从 API 返回的字段构建
      for (const w of words) {
        if (w.card_state !== undefined) {
          reviewData[w.id] = {
            nextReview: w.next_review || null,
            interval: w.interval || 0,
            reps: w.reps || 0,
            ef: w.ef || 2.5,
            cardState: w.card_state || "new",
            learningStep: w.learning_step || 0,
          };
        }
      }
    } else {
      // 离线模式：从 localStorage 加载
      reviewData = loadReviewLocal();
    }

    // 加载标签
    loadTags();

    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();
  } catch (err) {
    showToast("加载数据失败：" + err.message, "error");
    // 回退到空数据
    words = [];
    decks = [];
    renderDeckSidebar();
    renderGrid();
    renderStats();
  }
}

// ---------- 数据读写（保留用于数据迁移）----------
function legacyLoadWords() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { return null; }
  }
  return null;
}

function legacyLoadDecks() {
  const stored = localStorage.getItem(DECKS_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { return null; }
  }
  return null;
}

// 数据迁移：如果 localStorage 中有旧数据，异步导入到后端
async function migrateLegacyData() {
  const legacyWords = legacyLoadWords();
  const legacyDecks = legacyLoadDecks();

  if (!legacyWords && !legacyDecks) return;
  if (localStorage.getItem(MIGRATION_DONE_KEY)) return;

  showToast("检测到本地旧数据，正在迁移...", "info");

  try {
    // 先迁移卡组
    const deckIdMap = {}; // 旧 id → 新 id
    if (legacyDecks && legacyDecks.length > 0) {
      for (const deck of legacyDecks) {
        const created = await DataLayer.addDeck(deck.name);
        deckIdMap[deck.id] = created.id;
      }
    }

    // 再迁移单词
    if (legacyWords && legacyWords.length > 0) {
      for (const w of legacyWords) {
        const newDeckId = w.deckId ? (deckIdMap[w.deckId] || null) : null;
        await DataLayer.addWord(w.word, w.translation, w.definition || "", newDeckId);
      }
    }

    localStorage.setItem(MIGRATION_DONE_KEY, "1");
    showToast("数据迁移完成！", "info");
    // 重新加载
    await initApp();
  } catch (err) {
    showToast("数据迁移失败：" + err.message, "error");
  }
}

// ---------- 渲染 ----------
function renderGrid() {
  if (words.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>📭 ${t('noCards')}</p>
        <p style="font-size: 0.9rem; color: #666;">${t('addFirstCard')}</p>
      </div>
    `;
    return;
  }

  let visibleWords = words;

  // 按卡组过滤（含子卡组）
  if (selectedDeckId !== null) {
    const deckIds = getDeckAndChildIds(selectedDeckId);
    visibleWords = visibleWords.filter(w => {
      const dId = w.deckId === undefined ? null : w.deckId;
      return deckIds.includes(dId);
    });
  }

  // 按标签过滤
  if (selectedTagIds.length > 0) {
    visibleWords = visibleWords.filter(w => {
      const wordTags = w.tags || [];
      return selectedTagIds.every(tid => wordTags.includes(tid));
    });
  }

  // 挂起筛选
  if (suspendedFilter) {
    visibleWords = visibleWords.filter(w => {
      const rd = getReviewData(w.id);
      return rd.suspended;
    });
  }

  // 标记筛选
  if (flagFilter !== null) {
    visibleWords = visibleWords.filter(w => {
      const rd = getReviewData(w.id);
      return rd.flag === flagFilter;
    });
  }

  // 按搜索过滤
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    // tag:xxx 语法
    if (q.startsWith("tag:")) {
      const tagName = q.slice(4).toLowerCase();
      visibleWords = visibleWords.filter(w => {
        const wordTagIds = w.tags || [];
        return wordTagIds.some(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t && t.name.toLowerCase().includes(tagName);
        });
      });
    } else {
      visibleWords = visibleWords.filter(w => {
        const wordTags = (w.tags || []).map(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t ? t.name.toLowerCase() : "";
        });
        return w.word.toLowerCase().includes(q) ||
          w.translation.toLowerCase().includes(q) ||
          w.definition.toLowerCase().includes(q) ||
          wordTags.some(tn => tn.includes(q));
      });
    }
  }

  if (visibleWords.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>🔍 ${t('noResults')}</p>
        <p style="font-size: 0.9rem; color: #666;">${t('noResultsHint')}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = visibleWords.map(w => {
    const status = getCardStatusLabel(w.id);
    const rd = getReviewData(w.id);
    const wordTags = (w.tags || []).map(tid => tags.find(tg => tg.id === tid)).filter(Boolean);
    const tagDots = wordTags.slice(0, 3).map(t => `<span class="card-tag-dot" style="background:${t.color}" title="${escapeHtml(t.name)}"></span>`).join("");
    const tagMore = wordTags.length > 3 ? `<span class="card-tag-more">+${wordTags.length - 3}</span>` : "";
    const flagClass = rd.flag ? `flag-${rd.flag}` : "";
    const isSuspended = rd.suspended;
    const deckName = decks.find(d => d.id === w.deckId)?.name || "";

    return `
    <div class="card-scene ${isSuspended ? 'card-suspended' : ''}">
      ${rd.flag ? `<div class="card-flag ${flagClass}"></div>` : ""}
      <div class="card" onclick="this.classList.toggle('flipped')">
        <div class="card-front">
          ${isSuspended ? '<div class="card-suspended-marker">🚫</div>' : ''}
          <div class="card-status ${status.class}">${status.text}</div>
          ${(wordTags.length > 0) ? `<div class="card-tags">${tagDots}${tagMore}</div>` : ""}
          <div class="card-actions">
            <button class="edit-btn" data-id="${w.id}" onclick="event.stopPropagation(); openEditModal(${w.id})">✏️</button>
            <button class="delete-btn" data-id="${w.id}" onclick="event.stopPropagation(); deleteWord(${w.id})">🗑️</button>
          </div>
          <div class="word">${escapeHtml(w.word)}</div>
          ${getDifficultyLabel(rd.difficulty)}
          <button class="card-tts-btn" onclick="event.stopPropagation(); speakWord('${escapeHtml(w.word)}')" title="${t('speak')}">🔊</button>
          <div class="hint">${t('tapToReveal')}</div>
          <button class="card-info-btn" data-id="${w.id}" onclick="event.stopPropagation(); showCardInfo(${w.id})">ℹ️</button>
        </div>
        <div class="card-back">
          <div class="translation">${escapeHtml(w.translation)}</div>
          <div class="definition">${escapeHtml(w.definition)}</div>
          ${deckName ? `<div style="font-size:0.7rem;color:#666;margin-top:4px;">📁 ${escapeHtml(deckName)}</div>` : ""}
        </div>
      </div>
    </div>
  `}).join("");
}

function renderStats() {
  let learningCount = 0;
  let masteredCount = 0;
  let newCount = 0;
  const dueCards = getDueCards();

  const scopeWords = selectedDeckId !== null
    ? words.filter(w => (w.deckId === undefined ? null : w.deckId) === selectedDeckId)
    : words;

  for (const w of scopeWords) {
    const rd = reviewData[w.id];
    if (!rd || rd.cardState === "new") newCount++;
    if (rd && rd.cardState === "learning") learningCount++;
    if (rd && rd.cardState === "mastered") masteredCount++;
  }

  const streak = getStreak();
  const dId = selectedDeckId;
  const usedNewToday = getNewCardsUsedToday(dId);
  const remainingNew = Math.min(newCount, Math.max(0, getEffectiveLimit(dId, "new") - usedNewToday));
  const usedReviewToday = getReviewCardsUsedToday(dId);
  const remainingReview = Math.max(0, getEffectiveLimit(dId, "review") - usedReviewToday);
  const lang = settings.uiLang || "zh";
  let text = selectedDeckId !== null
    ? `📁 ${decks.find(d => d.id === selectedDeckId)?.name || "?"} · ${scopeWords.length} ${t('cards')}`
    : `📚 ${words.length} ${t('cards')}`;
  if (streak.count > 0) text += ` 🔥 ${streak.count} ${t('days')}`;
  if (learningCount > 0) text += ` · ${t('learningLabel')} ${learningCount}`;
  if (masteredCount > 0) text += ` · ${t('masteredLabel')} ${masteredCount}`;
  if (dueCards.length > 0) text += ` · 🔴 ${dueCards.length} ${t('overdue')}`;
  text += ` · 🆕 ${remainingNew} ${t('newCards')} · 📋 ${remainingReview} ${t('review')}`;
  statsEl.textContent = text;
}

// ---------- 侧边栏 ----------
function getDeckAndChildIds(deckId) {
  const ids = [deckId];
  for (const d of decks) {
    if (d.parentId === deckId) {
      ids.push(...getDeckAndChildIds(d.id));
    }
  }
  return ids;
}

function getDeckChildren(deckId) {
  return decks.filter(d => d.parentId === deckId);
}

function renderDeckSidebar() {
  const list = document.getElementById("deckList");
  if (!list) return;

  // 构建树形 HTML
  function renderDeckTree(parentId, depth) {
    const children = decks.filter(d => (d.parentId || null) === parentId);
    if (children.length === 0) return "";
    let html = "";
    for (const deck of children) {
      const count = words.filter(w => (w.deckId === undefined ? null : w.deckId) === deck.id).length;
      const childIds = getDeckAndChildIds(deck.id);
      const totalCount = words.filter(w => childIds.includes(w.deckId === undefined ? null : w.deckId)).length;
      const countDisplay = totalCount > count ? `${count}+${totalCount - count}` : count;
      const hasChildren = getDeckChildren(deck.id).length > 0;
      html += `
        <div class="deck-item ${selectedDeckId === deck.id ? 'active' : ''} ${depth > 0 ? 'deck-child' : ''}"
             data-deck-id="${deck.id}" onclick="selectDeck(${deck.id})">
          <span class="deck-name">${depth > 0 ? '' : '📁 '}${escapeHtml(deck.name)}${hasChildren ? ' ▸' : ''}</span>
          <span class="deck-count">${countDisplay}</span>
          <span class="deck-actions">
            <button class="deck-settings-btn" title="卡组设置" onclick="event.stopPropagation(); openDeckSettings(${deck.id})">⚙️</button>
            <button class="deck-rename-btn" title="重命名" onclick="event.stopPropagation(); renameDeck(${deck.id})">✏️</button>
            <button class="deck-delete-btn" title="删除" onclick="event.stopPropagation(); deleteDeck(${deck.id})">🗑️</button>
          </span>
        </div>
        ${renderDeckTree(deck.id, depth + 1)}
      `;
    }
    return html;
  }

  let html = `
    <div class="deck-item ${selectedDeckId === null ? 'active' : ''}"
         data-deck-id="all" onclick="selectDeck(null)">
      <span>📚 所有卡片</span>
      <span class="deck-count">${words.length}</span>
    </div>
  `;

  // 渲染顶级卡组 + 子卡组
  html += renderDeckTree(null, 0);

  list.innerHTML = html;

  // 渲染标签列表
  renderTagList();
  updateFilterCounts();
}

// ---- 标签系统 ----
function loadTags() {
  try {
    const stored = localStorage.getItem(TAGS_KEY);
    if (stored) {
      tags = JSON.parse(stored);
    }
  } catch { tags = []; }
  if (tags.length > 0) {
    nextTagId = Math.max(...tags.map(t => t.id)) + 1;
  }
}

function saveTags() {
  localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
}

function renderTagList() {
  const list = document.getElementById("tagList");
  if (!list) return;
  if (tags.length === 0) {
    list.innerHTML = `<div style="padding:8px 16px;font-size:0.75rem;color:#555;">${t('noTags')}</div>`;
    return;
  }
  list.innerHTML = tags.map(t => {
    const count = words.filter(w => (w.tags || []).includes(t.id)).length;
    const isActive = selectedTagIds.includes(t.id);
    return `
      <div class="tag-item ${isActive ? 'active' : ''}" onclick="toggleTagFilter(${t.id})">
        <span class="tag-dot" style="background:${t.color}"></span>
        <span class="tag-name">${escapeHtml(t.name)}</span>
        <span class="tag-count">${count}</span>
        <button class="tag-delete-btn" onclick="event.stopPropagation(); deleteTag(${t.id})" title="删除标签">✕</button>
      </div>
    `;
  }).join("");
}

function toggleTagFilter(tagId) {
  const idx = selectedTagIds.indexOf(tagId);
  if (idx >= 0) {
    selectedTagIds.splice(idx, 1);
  } else {
    selectedTagIds.push(tagId);
  }
  renderTagList();
  if (viewMode === "grid") {
    renderGrid();
    renderStats();
  } else {
    renderBrowserView();
  }
}

function addTag(name, color) {
  const tag = { id: nextTagId++, name, color };
  tags.push(tag);
  saveTags();
  renderTagList();
}

function deleteTag(tagId) {
  if (!confirm("确定删除此标签？卡片上的标签关联也会移除。")) return;
  // 从所有卡片中移除此标签
  for (const w of words) {
    if (w.tags) {
      w.tags = w.tags.filter(tid => tid !== tagId);
    }
  }
  saveWordsLocal();
  tags = tags.filter(t => t.id !== tagId);
  // 从选中标签中移除
  selectedTagIds = selectedTagIds.filter(tid => tid !== tagId);
  saveTags();
  renderTagList();
  if (viewMode === "grid") {
    renderGrid();
  } else {
    renderBrowserView();
  }
}

// ---- 筛选 ----
function toggleSuspendedFilter() {
  suspendedFilter = !suspendedFilter;
  updateFilterUI();
  if (viewMode === "grid") {
    renderGrid();
    renderStats();
  } else {
    browserPage = 1;
    renderBrowserView();
  }
}

function cycleFlagFilter() {
  if (flagFilter === null) flagFilter = 1;
  else if (flagFilter < 4) flagFilter++;
  else flagFilter = null;
  updateFilterUI();
  if (viewMode === "grid") {
    renderGrid();
    renderStats();
  } else {
    browserPage = 1;
    renderBrowserView();
  }
}

function updateFilterUI() {
  const suspendedEl = document.querySelector('.filter-item[data-filter="suspended"]');
  const flaggedEl = document.querySelector('.filter-item[data-filter="flagged"]');
  if (suspendedEl) suspendedEl.classList.toggle("active", suspendedFilter);
  if (flaggedEl) {
    flaggedEl.classList.toggle("active", flagFilter !== null);
    if (flagFilter !== null) {
      const emojis = { 1: "🔴", 2: "🟠", 3: "🟢", 4: "🔵" };
      flaggedEl.querySelector("span:first-child").textContent = `${emojis[flagFilter]} 有标记`;
    } else {
      flaggedEl.querySelector("span:first-child").textContent = "🚩 有标记";
    }
  }
}

function updateFilterCounts() {
  const suspendedCount = words.filter(w => getReviewData(w.id).suspended).length;
  const flaggedCount = words.filter(w => getReviewData(w.id).flag !== null).length;
  const sc = document.getElementById("suspendedCount");
  const fc = document.getElementById("flaggedCount");
  if (sc) sc.textContent = suspendedCount;
  if (fc) fc.textContent = flaggedCount;
}

function selectDeck(deckId) {
  selectedDeckId = deckId;
  renderDeckSidebar();
  if (viewMode === "grid") {
    renderGrid();
    renderStats();
  } else {
    browserPage = 1;
    renderBrowserView();
    renderStats();
  }
  updateDueBadge();
}

async function renameDeck(deckId) {
  const deck = decks.find(d => d.id === deckId);
  if (!deck) return;
  const name = prompt("重命名卡组：", deck.name);
  if (name && name.trim() && name.trim() !== deck.name) {
    try {
      await DataLayer.updateDeck(deckId, name.trim());
      deck.name = name.trim();
      renderDeckSidebar();
      renderGrid();
    } catch (err) {
      showToast("重命名失败：" + err.message, "error");
    }
  }
}

async function deleteDeck(deckId) {
  if (!confirm("确定删除「" + (decks.find(d => d.id === deckId)?.name || "") + "」？\n该卡组中的单词将移回「未分类」。")) return;

  try {
    await DataLayer.deleteDeck(deckId);

    for (const w of words) {
      if ((w.deckId === undefined ? null : w.deckId) === deckId) {
        w.deckId = null;
      }
    }

    decks = decks.filter(d => d.id !== deckId);

    if (selectedDeckId === deckId) {
      selectedDeckId = null;
    }

    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();
  } catch (err) {
    showToast("删除卡组失败：" + err.message, "error");
  }
}

// ---------- 卡组独立设置模态框 ----------
let deckSettingsOverlay = null;

function ensureDeckSettingsModal() {
  if (deckSettingsOverlay) return;
  deckSettingsOverlay = document.createElement("div");
  deckSettingsOverlay.className = "modal-overlay";
  deckSettingsOverlay.id = "deckSettingsOverlay";
  deckSettingsOverlay.innerHTML = `<div class="modal" id="deckSettingsModal"></div>`;
  document.body.appendChild(deckSettingsOverlay);

  deckSettingsOverlay.addEventListener("click", (e) => {
    if (e.target === deckSettingsOverlay) closeDeckSettings();
  });
  deckSettingsOverlay.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDeckSettings();
  });
}

function openDeckSettings(deckId) {
  ensureDeckSettingsModal();
  const deck = decks.find(d => d.id === deckId);
  if (!deck) return;

  const override = (settings.deckOverrides && settings.deckOverrides[deckId]) || {};
  const modal = document.getElementById("deckSettingsModal");
  modal.innerHTML = `
    <h2>📁 ${escapeHtml(deck.name)} 独立设置</h2>
    <label class="import-check-label">
      <input type="checkbox" id="deckOverrideEnabled" ${override.newCardsPerDay !== undefined || override.reviewCardsPerDay !== undefined ? "checked" : ""}>
      自定义本卡组的每日限额
    </label>
    <div id="deckOverrideFields" style="${override.newCardsPerDay !== undefined || override.reviewCardsPerDay !== undefined ? "" : "display:none;"}">
      <label for="deckNewCardsLimit">每日新卡片</label>
      <input id="deckNewCardsLimit" type="number" min="0" max="999" value="${override.newCardsPerDay !== undefined ? override.newCardsPerDay : ""}" placeholder="留空=使用全局默认(${settings.newCardsPerDay})">
      <label for="deckReviewCardsLimit">每日复习</label>
      <input id="deckReviewCardsLimit" type="number" min="0" max="999" value="${override.reviewCardsPerDay !== undefined ? override.reviewCardsPerDay : ""}" placeholder="留空=使用全局默认(${settings.reviewCardsPerDay})">
    </div>
    <div class="modal-actions">
      <button class="btn-cancel" id="deckSettingsCancel">取消</button>
      ${override.newCardsPerDay !== undefined || override.reviewCardsPerDay !== undefined ? '<button class="btn-cancel" id="deckSettingsClear" style="margin-right:auto;">清除覆盖</button>' : ''}
      <button class="btn-confirm" id="deckSettingsSave">保存</button>
    </div>
  `;

  // 切换自定义开关
  document.getElementById("deckOverrideEnabled").addEventListener("change", (e) => {
    document.getElementById("deckOverrideFields").style.display = e.target.checked ? "" : "none";
  });

  document.getElementById("deckSettingsCancel").addEventListener("click", closeDeckSettings);

  const clearBtn = document.getElementById("deckSettingsClear");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      delete settings.deckOverrides[deckId];
      saveSettingsData();
      closeDeckSettings();
      renderDeckSidebar();
      renderStats();
    });
  }

  document.getElementById("deckSettingsSave").addEventListener("click", () => {
    const enabled = document.getElementById("deckOverrideEnabled").checked;
    if (!enabled) {
      delete settings.deckOverrides[deckId];
    } else {
      const newVal = document.getElementById("deckNewCardsLimit").value.trim();
      const reviewVal = document.getElementById("deckReviewCardsLimit").value.trim();
      const override = {};
      if (newVal !== "") {
        const n = parseInt(newVal, 10);
        if (!isNaN(n) && n >= 0) override.newCardsPerDay = Math.min(n, 999);
      }
      if (reviewVal !== "") {
        const r = parseInt(reviewVal, 10);
        if (!isNaN(r) && r >= 0) override.reviewCardsPerDay = Math.min(r, 999);
      }
      if (Object.keys(override).length > 0) {
        settings.deckOverrides[deckId] = override;
      } else {
        delete settings.deckOverrides[deckId];
      }
    }
    saveSettingsData();
    closeDeckSettings();
    renderDeckSidebar();
    renderStats();
  });

  deckSettingsOverlay.classList.add("show");
}

function closeDeckSettings() {
  if (deckSettingsOverlay) deckSettingsOverlay.classList.remove("show");
}

// ---------- 复习按钮待复习数量标记 ----------
function updateDueBadge() {
  const dueCards = getDueCards();
  reviewBtn.textContent = dueCards.length > 0
    ? `📋 ${t('startReview')} (${dueCards.length})`
    : `📋 ${t('startReview')}`;
}

// ---------- 工具函数 ----------
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ---------- 增删改 ----------
async function addWord(word, translation, definition, deckId) {
  try {
    const created = await DataLayer.addWord(word, translation, definition, deckId);
    words.push({ ...created, deckId: created.deck_id });
    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();
  } catch (err) {
    showToast("添加失败：" + err.message, "error");
  }
}

async function updateWord(id, word, translation, definition, deckId) {
  try {
    const updated = await DataLayer.updateWord(id, word, translation, definition, deckId);
    const idx = words.findIndex(w => w.id === id);
    if (idx !== -1) {
      words[idx] = { ...updated, deckId: updated.deck_id };
    }
    renderDeckSidebar();
    renderGrid();
    renderStats();
  } catch (err) {
    showToast("更新失败：" + err.message, "error");
  }
}

async function deleteWord(id) {
  if (!confirm("确定删除这张卡片？")) return;
  try {
    await DataLayer.deleteWord(id);
    words = words.filter(w => w.id !== id);
    delete reviewData[id];
    browserSelectedCards.delete(id);
    renderDeckSidebar();
    if (viewMode === "grid") renderGrid();
    else renderBrowserView();
    renderStats();
  } catch (err) {
    showToast("删除失败：" + err.message, "error");
  }
}

// ---------- 模态框 ----------
function populateDeckSelect(selectedId) {
  const select = document.getElementById("modalDeck");
  if (!select) return;

  function renderDeckOptions(parentId, depth) {
    const children = decks.filter(d => (d.parentId || null) === parentId);
    if (children.length === 0) return "";
    let html = "";
    for (const deck of children) {
      const indent = "　".repeat(depth);
      html += `<option value="${deck.id}" ${(selectedId !== null && selectedId !== undefined && selectedId === deck.id) ? 'selected' : ''}>${indent}${depth > 0 ? '└ ' : ''}${escapeHtml(deck.name)}</option>`;
      html += renderDeckOptions(deck.id, depth + 1);
    }
    return html;
  }

  select.innerHTML = '<option value="">未分类</option>' + renderDeckOptions(null, 0);
}

// ---- 模态框标签编辑 ----
let modalEditingTags = [];
let modalEditingDifficulty = 2;

function openAddModal() {
  editingId = null;
  modalEditingTags = [];
  modalEditingDifficulty = 2;
  modalTitle.textContent = "添加单词";
  modalWord.value = "";
  modalTranslation.value = "";
  modalDefinition.value = "";
  populateDeckSelect(null);
  renderModalTags();
  updateModalDifficultyUI();
  modalOverlay.classList.add("show");
  modalWord.focus();
}

function openEditModal(id) {
  const w = words.find(word => word.id === id);
  if (!w) return;
  editingId = id;
  modalEditingTags = [...(w.tags || [])];
  modalEditingDifficulty = getReviewData(id).difficulty || 2;
  modalTitle.textContent = "编辑单词";
  modalWord.value = w.word;
  modalTranslation.value = w.translation;
  modalDefinition.value = w.definition;
  populateDeckSelect(w.deckId);
  renderModalTags();
  updateModalDifficultyUI();
  modalOverlay.classList.add("show");
  modalWord.focus();
}

function renderModalTags() {
  const chipsEl = document.getElementById("modalTagsChips");
  if (!chipsEl) return;
  const selectedTags = modalEditingTags.map(tid => tags.find(t => t.id === tid)).filter(Boolean);
  chipsEl.innerHTML = selectedTags.map(t => `
    <span class="modal-tag-chip">
      <span class="tag-chip-dot" style="background:${t.color}"></span>
      ${escapeHtml(t.name)}
      <span class="tag-chip-remove" onclick="event.stopPropagation(); removeModalTag(${t.id})">✕</span>
    </span>
  `).join("");

  // 更新下拉
  renderModalTagsDropdown();
}

function renderModalTagsDropdown() {
  const listEl = document.getElementById("modalTagsDropdownList");
  if (!listEl) return;
  const available = tags.filter(t => !modalEditingTags.includes(t.id));
  if (available.length === 0) {
    listEl.innerHTML = '<div class="modal-tags-dropdown-item" style="color:#555;">没有更多标签</div>';
  } else {
    listEl.innerHTML = available.map(t => `
      <div class="modal-tags-dropdown-item" onclick="addModalTag(${t.id})">
        <span class="tag-dot" style="background:${t.color}"></span>
        ${escapeHtml(t.name)}
      </div>
    `).join("");
  }
}

function toggleModalTagsDropdown() {
  const dd = document.getElementById("modalTagsDropdown");
  if (!dd) return;
  const isOpen = dd.style.display !== "none";
  dd.style.display = isOpen ? "none" : "block";
  if (!isOpen) renderModalTagsDropdown();
}

function addModalTag(tagId) {
  if (!modalEditingTags.includes(tagId)) {
    modalEditingTags.push(tagId);
    renderModalTags();
  }
  document.getElementById("modalTagsDropdown").style.display = "none";
}

function removeModalTag(tagId) {
  modalEditingTags = modalEditingTags.filter(tid => tid !== tagId);
  renderModalTags();
}

function selectModalDifficulty(diff, el) {
  modalEditingDifficulty = diff;
  document.querySelectorAll("#modalDifficultySelector .diff-btn").forEach(b => b.classList.remove("active"));
  if (el) el.classList.add("active");
}

function updateModalDifficultyUI() {
  document.querySelectorAll("#modalDifficultySelector .diff-btn").forEach(b => {
    b.classList.remove("active");
    if (parseInt(b.dataset.diff) === modalEditingDifficulty) b.classList.add("active");
  });
}

function closeModal() {
  modalOverlay.classList.remove("show");
  editingId = null;
  modalEditingTags = [];
  document.getElementById("modalTagsDropdown").style.display = "none";
}

async function handleModalConfirm() {
  const word = modalWord.value.trim();
  const translation = modalTranslation.value.trim();
  const definition = modalDefinition.value.trim();
  const deckSelect = document.getElementById("modalDeck");
  const deckId = deckSelect && deckSelect.value ? parseInt(deckSelect.value, 10) : null;

  if (!word || !translation) {
    showToast("单词和翻译不能为空", "error");
    return;
  }

  if (editingId !== null) {
    await updateWordWithTags(editingId, word, translation, definition || "", deckId, modalEditingTags);
  } else {
    await addWordWithTags(word, translation, definition || "", deckId, modalEditingTags);
  }

  closeModal();
}

async function addWordWithTags(word, translation, definition, deckId, tagIds) {
  try {
    const created = await DataLayer.addWord(word, translation, definition, deckId);
    // DataLayer.addWord 在离线模式已 push 到 words（在线模式没有）
    if (!DataLayer.isOnline) {
      const existing = words.find(w => w.id === created.id);
      if (existing) existing.tags = tagIds;
    } else {
      words.push({ ...created, deckId: created.deck_id, tags: tagIds });
    }
    // 保存难度
    if (created && created.id) {
      getReviewData(created.id).difficulty = modalEditingDifficulty;
      saveReviewLocal();
    }
    saveWordsLocal();
    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();
  } catch (err) {
    showToast("添加失败：" + err.message, "error");
  }
}

async function updateWordWithTags(id, word, translation, definition, deckId, tagIds) {
  try {
    await DataLayer.updateWord(id, word, translation, definition, deckId);
    const idx = words.findIndex(w => w.id === id);
    if (idx !== -1) {
      words[idx].word = word;
      words[idx].translation = translation;
      words[idx].definition = definition;
      words[idx].deckId = deckId;
      words[idx].tags = tagIds;
      saveWordsLocal();
    }
    // 保存难度
    getReviewData(id).difficulty = modalEditingDifficulty;
    saveReviewLocal();
    renderDeckSidebar();
    renderGrid();
    renderStats();
  } catch (err) {
    showToast("更新失败：" + err.message, "error");
  }
}

// ---------- 事件绑定 ----------
addBtn.addEventListener("click", openAddModal);
modalCancel.addEventListener("click", closeModal);
modalConfirm.addEventListener("click", handleModalConfirm);

// 新建卡组
const addDeckBtn = document.getElementById("addDeckBtn");
if (addDeckBtn) {
  addDeckBtn.addEventListener("click", async () => {
    const name = prompt("请输入新卡组名称：");
    if (name && name.trim()) {
      try {
        const created = await DataLayer.addDeck(name.trim());
        decks.push(created);
        renderDeckSidebar();
      } catch (err) {
        showToast("创建卡组失败：" + err.message, "error");
      }
    }
  });
}

// 点击蒙层关闭
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// 回车提交
modalOverlay.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
    handleModalConfirm();
  }
  if (e.key === "Escape") closeModal();
});

/* ===============================
   复习数据 & 学习模式
   =============================== */

// SM-2 等级映射：按钮 → 实际评分
const GRADE_MAP = { again: 0, hard: 1, good: 3, easy: 5 };

// 学习步骤（分钟）
const LEARNING_STEPS = { 1: 1, 2: 10 };

let reviewData = {};        // { [wordId]: { nextReview, interval, reps, ef, cardState, learningStep } }
let reviewQueue = [];       // 当前复习队列（word ID 数组）
let reviewSessionCount = 0; // 本次复习完成的卡片数
let reviewStartTime = null; // 复习开始时间
let gradeDistribution = { again: 0, hard: 0, good: 0, easy: 0 }; // 评分分布
let pendingReviewTip = ""; // 下一张卡片提示

// ---- 拼写模式状态 ----
let spellingMode = false;           // 是否在拼写模式
let spellingQueue = [];             // 拼写队列（word ID 数组）
let spellingIndex = 0;              // 当前位置
let spellingCorrectCount = 0;       // 本轮正确数
let spellingWrongCount = 0;         // 本轮错误数
let spellingAnsweredWords = new Set(); // 本轮已答的词（用于去重）

let settings = { newCardsPerDay: 10, reviewCardsPerDay: 50, deckOverrides: {}, defLang: "zh-CN", uiLang: "zh" };

// ---- i18n 翻译函数 ----
function t(key) {
  const lang = (settings && settings.uiLang) || "zh";
  return (i18n[lang] || i18n.zh)[key] || key;
}

// ---- 应用 i18n 到 HTML 静态元素 ----
function applyI18n() {
  // data-i18n 属性：替换 textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  // data-i18n-placeholder 属性：替换 placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = t(key);
  });
  // data-i18n-title 属性：替换 title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    el.title = t(key);
  });
}

// ---- 双模式数据层（在线 / 离线）----
const DataLayer = {
  get isOnline() { return !!localStorage.getItem("wctoken"); },

  async loadAll() {
    if (this.isOnline) {
      const [wordsData, decksData] = await Promise.all([
        API.getWords(), API.getDecks()
      ]);
      return { words: wordsData, decks: decksData };
    } else {
      const w = JSON.parse(localStorage.getItem(WORDS_KEY) || "[]");
      const d = JSON.parse(localStorage.getItem(DECKS_KEY) || "[]");
      return { words: w, decks: d };
    }
  },

  async addWord(word, translation, definition, deckId) {
    if (this.isOnline) {
      return await API.addWord(word, translation, definition, deckId);
    } else {
      const newWord = { id: nextId++, word, translation, definition, deckId: deckId || null };
      words.push(newWord);
      saveWordsLocal();
      return newWord;
    }
  },

  async updateWord(id, word, translation, definition, deckId) {
    if (this.isOnline) {
      return await API.updateWord(id, word, translation, definition, deckId);
    } else {
      const idx = words.findIndex(w => w.id === id);
      if (idx !== -1) {
        words[idx] = { ...words[idx], word, translation, definition, deckId: deckId || null };
        saveWordsLocal();
      }
    }
  },

  async deleteWord(id) {
    if (this.isOnline) {
      return await API.deleteWord(id);
    } else {
      words = words.filter(w => w.id !== id);
      delete reviewData[id];
      saveWordsLocal();
      saveReviewLocal();
    }
  },

  async addDeck(name) {
    if (this.isOnline) {
      return await API.addDeck(name);
    } else {
      const deck = { id: nextDeckId++, name };
      decks.push(deck);
      saveDecksLocal();
      return deck;
    }
  },

  async updateDeck(id, name) {
    if (this.isOnline) {
      return await API.updateDeck(id, name);
    } else {
      const deck = decks.find(d => d.id === id);
      if (deck) { deck.name = name; saveDecksLocal(); }
    }
  },

  async deleteDeck(id) {
    if (this.isOnline) {
      return await API.deleteDeck(id);
    } else {
      for (const w of words) {
        if ((w.deckId === undefined ? null : w.deckId) === id) w.deckId = null;
      }
      decks = decks.filter(d => d.id !== id);
      saveWordsLocal();
      saveDecksLocal();
    }
  },

  async getDueCards(params) {
    if (this.isOnline) {
      return await API.getDueCards(params);
    } else {
      // 离线模式：返回本地 ID 数组（格式与 API 一致）
      const due = getDueCards();
      return due.map(wordId => {
        const w = words.find(w => w.id === wordId);
        const rd = getReviewData(wordId);
        return {
          word_id: wordId,
          word: w ? w.word : "",
          translation: w ? w.translation : "",
          definition: w ? w.definition : "",
          deck_id: w ? w.deckId : null,
          card_state: rd.cardState,
          learning_step: rd.learningStep,
          reps: rd.reps,
          interval: rd.interval,
        };
      });
    }
  },

  async answerCard(wordId, gradeKey) {
    if (this.isOnline) {
      return await API.answerCard(wordId, gradeKey);
    } else {
      saveReviewLocal();
    }
  },

  async extractWords(text, skipExisting) {
    if (this.isOnline) {
      return await API.extractWords(text, skipExisting);
    } else {
      // 离线模式：使用本地分词逻辑
      return localExtractWords(text, skipExisting);
    }
  },

  async batchAddWords(selectedWords, deckId, defLang) {
    if (this.isOnline) {
      return await API.batchAddWords(selectedWords, deckId, defLang);
    } else {
      return await localBatchAddWords(selectedWords, deckId, defLang);
    }
  },
};

// DOM 引用 — 复习模式
const reviewBtn = document.getElementById("reviewBtn");
const reviewContainer = document.getElementById("reviewContainer");
const reviewExitBtn = document.getElementById("reviewExitBtn");
const reviewProgress = document.getElementById("reviewProgress");
const reviewCard = document.getElementById("reviewCard");
const reviewWord = document.getElementById("reviewWord");
const reviewTranslation = document.getElementById("reviewTranslation");
const reviewDefinition = document.getElementById("reviewDefinition");
const reviewActions = document.getElementById("reviewActions");
const reviewComplete = document.getElementById("reviewComplete");
const reviewSummary = document.getElementById("reviewSummary");
const reviewBackBtn = document.getElementById("reviewBackBtn");
const btnAgain = document.getElementById("btnAgain");
const btnHard = document.getElementById("btnHard");
const btnGood = document.getElementById("btnGood");
const btnEasy = document.getElementById("btnEasy");
const reviewLearningStep = document.getElementById("reviewLearningStep");
const reviewQueueStats = document.getElementById("reviewQueueStats");

// DOM 引用 — 设置 / 统计
const settingsBtn = document.getElementById("settingsBtn");
const settingsOverlay = document.getElementById("settingsOverlay");
const settingsNewCards = document.getElementById("settingsNewCards");
const settingsSaveBtn = document.getElementById("settingsSave");
const settingsCancelBtn = document.getElementById("settingsCancel");
const statsBtn = document.getElementById("statsBtn");
const statsPage = document.getElementById("statsPage");
const statsBackBtn = document.getElementById("statsBackBtn");
const statsOverview = document.getElementById("statsOverview");
const statsChart = document.getElementById("statsChart");

// ---------- 复习数据（从 API 获取，本地缓存即时状态）----------
function getReviewData(wordId) {
  if (!reviewData[wordId]) {
    reviewData[wordId] = {
      nextReview: null,
      interval: 0,
      reps: 0,
      ef: 2.5,
      cardState: "new",
      learningStep: 0,
      suspended: false,
      flag: null,
      history: [],
      difficulty: 2,
    };
  }
  // 兼容旧数据：补默认字段
  const rd = reviewData[wordId];
  if (rd.suspended === undefined) rd.suspended = false;
  if (rd.flag === undefined) rd.flag = null;
  if (!rd.history) rd.history = [];
  if (rd.difficulty === undefined) rd.difficulty = 2;
  return rd;
}

// ---------- 难度标签 ----------
function getDifficultyLabel(difficulty) {
  const diff = difficulty || 2;
  if (diff === 1) return `<div class="card-difficulty diff-easy">${t('easy')}</div>`;
  if (diff === 3) return `<div class="card-difficulty diff-hard">${t('hard')}</div>`;
  return `<div class="card-difficulty diff-medium">${t('medium')}</div>`;
}

function getDifficultyEmoji(difficulty) {
  const diff = difficulty || 2;
  if (diff === 1) return '😊';
  if (diff === 3) return '😰';
  return '🤔';
}

// ---------- 卡片状态标签 ----------
function getCardStatusLabel(wordId) {
  const rd = reviewData[wordId];
  if (!rd) return { text: t("statusNew"), class: "status-new" };
  switch (rd.cardState) {
    case "new":      return { text: t("statusNew"), class: "status-new" };
    case "learning": return { text: t("statusLearning"), class: "status-learning" };
    case "review":   return { text: t("statusReview"), class: "status-review" };
    case "mastered": return { text: t("statusMastered"), class: "status-mastered" };
    default:         return { text: t("statusNew"), class: "status-new" };
  }
}

// ---------- 待复习卡片 ----------
function getDueCards() {
  // 基于本地缓存的 reviewData 返回待复习 ID 列表（用于显示标记）
  const now = new Date();
  let eligibleWords = words;
  if (selectedDeckId !== null) {
    eligibleWords = words.filter(w => (w.deckId === undefined ? null : w.deckId) === selectedDeckId);
  }

  const due = [];
  for (const w of eligibleWords) {
    const rd = reviewData[w.id];
    if (!rd) continue;
    if (rd.cardState === "learning" || rd.cardState === "review") {
      if (!rd.nextReview || new Date(rd.nextReview) <= now) {
        due.push(w.id);
      }
    } else if (rd.cardState === "new") {
      due.push(w.id);
    }
  }
  return due;
}

// 从 API 获取复习队列（用于进入复习模式）
async function fetchDueCards() {
  const params = {};
  if (selectedDeckId !== null) params.deckId = selectedDeckId;
  params.newLimit = getEffectiveLimit(selectedDeckId, "new");
  params.reviewLimit = getEffectiveLimit(selectedDeckId, "review");

  const due = await DataLayer.getDueCards(params);
  let cards = due.map(d => {
    const rd = reviewData[d.word_id] || {};
    return {
      word_id: d.word_id,
      next_review: d.next_review || rd.nextReview || null,
      card_state: d.card_state || rd.cardState || "new",
      learning_step: d.learning_step || rd.learningStep || 0,
      interval: d.interval || rd.interval || 0,
      reps: d.reps || rd.reps || 0,
      ef: d.ef || rd.ef || 2.5,
      suspended: rd.suspended || false,
    };
  });

  // 过滤掉挂起的卡片
  cards = cards.filter(c => !c.suspended);

  // 排序：学习中 > 过期复习 > 新卡片，交错排列
  reviewQueue = buildReviewQueue(cards);

  // 从返回数据构建 reviewData
  for (const c of cards) {
    const existing = reviewData[c.word_id];
    reviewData[c.word_id] = {
      nextReview: c.next_review || null,
      interval: c.interval || 0,
      reps: c.reps || 0,
      ef: c.ef || 2.5,
      cardState: c.card_state || "new",
      learningStep: c.learning_step || 0,
      suspended: c.suspended || false,
      flag: existing ? existing.flag : null,
      history: existing ? (existing.history || []) : [],
      difficulty: existing ? (existing.difficulty || 2) : 2,
    };
  }
  return cards;
}

// ---- 更好的复习队列排序 ----
function buildReviewQueue(cards) {
  const now = new Date();
  const learning = [];  // 学习中的卡片
  const review = [];    // 复习卡片
  const newCards = [];  // 新卡片

  for (const c of cards) {
    if (c.card_state === "learning") {
      learning.push(c);
    } else if (c.card_state === "review") {
      review.push(c);
    } else {
      newCards.push(c);
    }
  }

  // 学习中的卡片优先（按到期时间排序）
  learning.sort((a, b) => {
    const aTime = a.next_review ? new Date(a.next_review).getTime() : 0;
    const bTime = b.next_review ? new Date(b.next_review).getTime() : 0;
    return aTime - bTime;
  });

  // 复习卡片按到期时间排序（越早过期越前面）
  review.sort((a, b) => {
    const aTime = a.next_review ? new Date(a.next_review).getTime() : Infinity;
    const bTime = b.next_review ? new Date(b.next_review).getTime() : Infinity;
    return aTime - bTime;
  });

  // 交错排列：学习 → 复习 + 新卡交错
  const newPerReview = settings.newCardsPerReview || 2;
  const result = [...learning.map(c => c.word_id)];

  let reviewIdx = 0, newIdx = 0;
  while (reviewIdx < review.length || newIdx < newCards.length) {
    // 每轮插入 newPerReview 张新卡
    for (let i = 0; i < newPerReview && newIdx < newCards.length; i++) {
      result.push(newCards[newIdx].word_id);
      newIdx++;
    }
    // 再插入 2 张复习卡
    for (let i = 0; i < 2 && reviewIdx < review.length; i++) {
      result.push(review[reviewIdx].word_id);
      reviewIdx++;
    }
    // 如果新卡没了，把复习卡全放进去
    if (newIdx >= newCards.length) {
      while (reviewIdx < review.length) {
        result.push(review[reviewIdx].word_id);
        reviewIdx++;
      }
    }
    // 如果复习卡没了，把新卡全放进去
    if (reviewIdx >= review.length) {
      while (newIdx < newCards.length) {
        result.push(newCards[newIdx].word_id);
        newIdx++;
      }
    }
  }

  return result;
}

// ---------- 学习模式时间计算 ----------
function calcLearningNextReview(minutes) {
  const next = new Date();
  next.setMinutes(next.getMinutes() + minutes);
  return next.toISOString();
}

// ---------- SM-2 算法核心 ----------
/*
  SM-2 (SuperMemo 2) — Anki 使用的核心算法
  grade 评分：again=0(完全忘记), hard=1(错了但面熟), good=3(答对但费力), easy=5(轻松答对)
  仅用于 review 状态的卡片
*/
function sm2(rd, grade) {
  if (grade >= 3) {
    // 答对了：按连续正确次数调整间隔
    if (rd.reps === 0) {
      rd.interval = 1;
    } else if (rd.reps === 1) {
      rd.interval = 6;
    } else {
      rd.interval = Math.round(rd.interval * rd.ef);
    }
    rd.reps += 1;
  } else {
    // 答错了：重置连续性
    rd.reps = 0;
    rd.interval = grade === 0 ? 0 : 1;
  }

  // 更新难度系数 EF
  rd.ef = rd.ef + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  rd.ef = Math.max(1.3, rd.ef);
}

function calcNextReviewDate(rd) {
  const next = new Date();
  if (rd.interval === 0) {
    next.setMinutes(next.getMinutes() + 30);
  } else {
    next.setDate(next.getDate() + rd.interval);
    next.setHours(0, 0, 0, 0);
  }
  return next.toISOString();
}

// ---------- 难度系数应用到初始间隔 ----------
function applyDifficultyToInterval(rd) {
  const diff = rd.difficulty || 2;
  if (diff === 1) {
    rd.interval = Math.max(1, Math.round(rd.interval * 1.5));
  } else if (diff === 3) {
    rd.interval = Math.max(1, Math.round(rd.interval * 0.5));
  }
}

// ---------- 学习卡片回答逻辑 ----------
// 返回 true = 放回队列末尾，false = 移除（已毕业或进入下一步）
function answerLearningCard(wordId, gradeKey) {
  const rd = getReviewData(wordId);

  // 新卡片首次被学习，计入每日额度（按卡组）
  if (rd.cardState === "new") {
    const w = words.find(w => w.id === wordId);
    const dId = w ? (w.deckId === undefined ? null : w.deckId) : null;
    incrementNewCardsUsed(dId);
  }

  const isFirstStep = rd.cardState === "new" || rd.learningStep === 1;

  if (isFirstStep) {
    // Step 1 / 新卡片第一次看
    if (gradeKey === "again" || gradeKey === "hard") {
      rd.cardState = "learning";
      rd.learningStep = 1;
      rd.nextReview = calcLearningNextReview(LEARNING_STEPS[1]);
      return false; // 等到期后由 getDueCards() 重新筛选
    } else if (gradeKey === "good") {
      rd.cardState = "learning";
      rd.learningStep = 2;
      rd.nextReview = calcLearningNextReview(LEARNING_STEPS[2]);
      return false; // 移除，等 10 分钟后再出现
    } else if (gradeKey === "easy") {
      // 直接毕业进入复习
      rd.cardState = "review";
      rd.learningStep = 0;
      rd.interval = 1;
      rd.reps = 0;
      rd.ef = 2.5;
      applyDifficultyToInterval(rd);
      rd.nextReview = calcNextReviewDate(rd);
      return false;
    }
  } else {
    // Step 2
    if (gradeKey === "again" || gradeKey === "hard") {
      rd.learningStep = 1;
      rd.nextReview = calcLearningNextReview(LEARNING_STEPS[1]);
      return false; // 等到期后由 getDueCards() 重新筛选
    } else if (gradeKey === "good") {
      rd.cardState = "review";
      rd.learningStep = 0;
      rd.interval = 1;
      rd.reps = 0;
      rd.ef = 2.5;
      applyDifficultyToInterval(rd);
      rd.nextReview = calcNextReviewDate(rd);
      return false;
    } else if (gradeKey === "easy") {
      rd.cardState = "review";
      rd.learningStep = 0;
      rd.interval = 4;
      rd.reps = 0;
      rd.ef = 2.5;
      applyDifficultyToInterval(rd);
      rd.nextReview = calcNextReviewDate(rd);
      return false;
    }
  }
}

// ---------- 复习模式 ----------
async function enterReviewMode() {
  // 防止重复进入
  if (reviewContainer.style.display === "flex") return;

  // 隐藏统计页面（如果打开）
  if (statsPage.style.display === "flex") {
    hideStatsPage();
  }

  // 从 API 获取复习队列
  try {
    await fetchDueCards();
  } catch (err) {
    showToast("获取复习队列失败：" + err.message, "error");
    return;
  }

  if (reviewQueue.length === 0) {
    // 没有需要复习的卡片
    document.querySelector("main").style.display = "none";
    reviewContainer.style.display = "flex";
    document.querySelector(".review-stage").style.display = "none";
    reviewComplete.style.display = "block";
    reviewSummary.innerHTML = `<div class="summary-line">${t('noDueCards')}</div>`;
    document.querySelector("footer").style.display = "none";
    return;
  }

  reviewSessionCount = 0;
  reviewStartTime = new Date();
  gradeDistribution = { again: 0, hard: 0, good: 0, easy: 0 };
  document.querySelector("main").style.display = "none";
  reviewContainer.style.display = "flex";
  document.querySelector(".review-stage").style.display = "flex";
  reviewComplete.style.display = "none";
  document.querySelector("footer").style.display = "none";

  updateQueueStats();
  showNextCard();
}

function exitReviewMode() {
  clearReviewCountdown();
  reviewQueue = [];
  undoStack = [];
  reviewContainer.style.display = "none";
  document.querySelector("main").style.display = "";
  document.querySelector("footer").style.display = "";
  renderStats();
  updateDueBadge();
  if (viewMode === "grid") renderGrid();
  else { browserPage = 1; renderBrowserView(); }
}

// ══════════════════════════════════════
//  拼写模式 (Spelling Mode)
// ══════════════════════════════════════

function enterSpellingMode() {
  spellingMode = true;

  // 构建拼写队列：选取学习中的 + 待复习的卡片（排除已掌握 & 挂起）
  const candidates = words.filter(w => {
    const rd = getReviewData(w.id);
    if (rd.suspended) return false;
    if (rd.cardState === "mastered") return false;
    return true;
  });

  if (candidates.length === 0) {
    showToast(t("spellingNoCards"), "info");
    return;
  }

  // 打乱顺序
  spellingQueue = shuffleArray(candidates.map(w => w.id));
  spellingIndex = 0;
  spellingCorrectCount = 0;
  spellingWrongCount = 0;
  spellingAnsweredWords = new Set();

  // 隐藏主界面，显示拼写容器
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
  const container = document.getElementById("spellingContainer");
  if (container) container.style.display = "block";

  showSpellingCard();
}

function showSpellingCard() {
  if (spellingIndex >= spellingQueue.length) {
    exitSpellingMode();
    return;
  }

  const wordId = spellingQueue[spellingIndex];
  const w = words.find(w => w.id === wordId);
  if (!w) {
    spellingIndex++;
    showSpellingCard();
    return;
  }

  // 更新进度
  const countEl = document.getElementById("spellingCount");
  if (countEl) countEl.textContent = `${spellingIndex + 1}/${spellingQueue.length}`;

  // 显示翻译和定义
  const transEl = document.getElementById("spellingTranslation");
  const defEl = document.getElementById("spellingDefinition");
  if (transEl) transEl.textContent = w.translation || "";
  if (defEl) defEl.textContent = w.definition || "";

  // 清空输入框和反馈
  const inputEl = document.getElementById("spellingInput");
  const feedbackEl = document.getElementById("spellingFeedback");
  const gradeBtns = document.getElementById("spellingGradeButtons");
  const nextBtn = document.getElementById("spellingNextBtn");
  const submitBtn = document.getElementById("spellingSubmitBtn");

  if (inputEl) { inputEl.value = ""; inputEl.disabled = false; inputEl.focus(); }
  if (feedbackEl) { feedbackEl.textContent = ""; feedbackEl.className = "spelling-feedback"; }
  if (gradeBtns) gradeBtns.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";
  if (submitBtn) submitBtn.style.display = "inline-block";
}

function submitSpellingAnswer() {
  if (spellingIndex >= spellingQueue.length) return;

  const wordId = spellingQueue[spellingIndex];
  const w = words.find(w => w.id === wordId);
  if (!w) return;

  const inputEl = document.getElementById("spellingInput");
  const feedbackEl = document.getElementById("spellingFeedback");
  const gradeBtns = document.getElementById("spellingGradeButtons");
  const nextBtn = document.getElementById("spellingNextBtn");
  const submitBtn = document.getElementById("spellingSubmitBtn");

  const userAnswer = (inputEl?.value || "").trim().toLowerCase();
  const correctAnswer = (w.word || "").trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    // ✅ 正确
    spellingCorrectCount++;
    if (feedbackEl) {
      feedbackEl.textContent = t("spellingCorrect");
      feedbackEl.className = "spelling-feedback correct";
    }
    if (gradeBtns) gradeBtns.style.display = "flex";
    if (nextBtn) nextBtn.style.display = "none";
    if (submitBtn) submitBtn.style.display = "none";
    if (inputEl) inputEl.disabled = true;
  } else {
    // ❌ 错误
    spellingWrongCount++;
    if (feedbackEl) {
      feedbackEl.textContent = `${t("spellingWrong")} ${w.word}`;
      feedbackEl.className = "spelling-feedback wrong";
    }
    if (gradeBtns) gradeBtns.style.display = "none";
    if (nextBtn) nextBtn.style.display = "inline-block";
    if (submitBtn) submitBtn.style.display = "none";
    if (inputEl) inputEl.disabled = true;

    // 拼错自动计为 again
    const rd = getReviewData(wordId);
    const prevState = rd.cardState;
    sm2(rd, 0); // grade = again
    rd.nextReview = calcNextReviewDate(rd);
    rd.cardState = rd.cardState === "mastered" ? "review" : rd.cardState;
    // 把当前词放回队列末尾（稍后再试）
    spellingQueue.push(wordId);

    // 记录答题历史
    if (!rd.history) rd.history = [];
    rd.history.unshift({ date: new Date().toISOString(), gradeKey: "again", state: prevState });
    if (rd.history.length > 20) rd.history = rd.history.slice(0, 20);

    gradeDistribution["again"] = (gradeDistribution["again"] || 0) + 1;
    saveReviewLocal();
    DataLayer.answerCard(wordId, "again").catch(err => console.error("spelling answerCard API error:", err));
  }

  spellingAnsweredWords.add(wordId);
}

function handleSpellingGrade(grade) {
  // grade: "correct" → good, "wrong" → again
  if (spellingIndex >= spellingQueue.length) return;

  const wordId = spellingQueue[spellingIndex];
  const rd = getReviewData(wordId);
  const prevState = rd.cardState;

  const gradeKey = grade === "correct" ? "good" : "again";

  // 记录答题历史
  if (!rd.history) rd.history = [];
  rd.history.unshift({ date: new Date().toISOString(), gradeKey, state: prevState });
  if (rd.history.length > 20) rd.history = rd.history.slice(0, 20);

  if (grade === "correct") {
    const g = GRADE_MAP["good"];
    sm2(rd, g);
    rd.nextReview = calcNextReviewDate(rd);
    if (rd.reps >= 3 && rd.interval >= 21) {
      rd.cardState = "mastered";
    } else {
      rd.cardState = rd.cardState === "new" ? "learning" : (rd.cardState === "learning" ? "review" : rd.cardState);
    }
    gradeDistribution["good"] = (gradeDistribution["good"] || 0) + 1;
  } else {
    // 用户拼对了但自评不熟 → SM-2 again，重新放入队列
    sm2(rd, 0);
    rd.nextReview = calcNextReviewDate(rd);
    rd.cardState = rd.cardState === "mastered" ? "review" : rd.cardState;
    spellingQueue.push(wordId); // 重新放回队列末尾
    gradeDistribution["again"] = (gradeDistribution["again"] || 0) + 1;
    // 注意：不改变 spellingCorrectCount / spellingWrongCount，因为用户输入是正确拼写
  }

  saveReviewLocal();
  DataLayer.answerCard(wordId, gradeKey).catch(err => console.error("spelling grade API error:", err));

  // 移动到下一张
  spellingIndex++;
  showSpellingCard();
}

function exitSpellingMode() {
  spellingMode = false;

  const container = document.getElementById("spellingContainer");
  if (container) container.style.display = "none";
  document.querySelector("main").style.display = "";
  document.querySelector("footer").style.display = "";

  const total = spellingCorrectCount + spellingWrongCount;
  if (total > 0) {
    const acc = Math.round((spellingCorrectCount / total) * 100);
    const accColor = acc >= 90 ? "#2ecc71" : (acc < 70 ? "#e67e22" : "");
    showToast(
      `${t("spellingSummary")}: ✅ ${spellingCorrectCount} / ❌ ${spellingWrongCount} | ${t("spellingScore")} ${acc}%`,
      "info"
    );
  }

  // 清理
  spellingQueue = [];
  spellingIndex = 0;
  updateDueBadge();
  renderStats();
  if (viewMode === "grid") renderGrid();
  else { browserPage = 1; renderBrowserView(); }
}

function goToNextSpelling() {
  spellingIndex++;
  showSpellingCard();
}

// Fisher-Yates shuffle
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function updateQueueStats() {
  let learning = 0, review = 0, newCards = 0;
  for (const id of reviewQueue) {
    const rd = getReviewData(id);
    if (rd.cardState === "learning") learning++;
    else if (rd.cardState === "review") review++;
    else if (rd.cardState === "new") newCards++;
  }
  // 计算剩余可用（按当前卡组的有效限额）
  const dId = selectedDeckId;
  const eligibleWords = dId !== null
    ? words.filter(w => (w.deckId === undefined ? null : w.deckId) === dId)
    : words;
  const totalNew = eligibleWords.filter(w => {
    const rd = reviewData[w.id];
    return !rd || rd.cardState === "new";
  }).length;
  const usedNewToday = getNewCardsUsedToday(dId);
  const remainingNew = Math.min(totalNew, Math.max(0, getEffectiveLimit(dId, "new") - usedNewToday));
  const usedReviewToday = getReviewCardsUsedToday(dId);
  const remainingReview = Math.max(0, getEffectiveLimit(dId, "review") - usedReviewToday);
  const parts = [];
  if (learning > 0) parts.push(`${t('learningLabel')} ${learning} ${t('cards')}`);
  if (review > 0) parts.push(`${t('reviewLabel')} ${review} ${t('cards')}`);
  if (newCards > 0) parts.push(`${t('newCardLabel')} ${newCards} ${t('cards')}`);
  parts.push(`${t('today')} ${remainingNew} ${t('newCards')} · ${remainingReview} ${t('review')}`);
  reviewQueueStats.textContent = parts.join(" · ");
}

function showNextCard() {
  if (reviewQueue.length === 0) {
    finishReview();
    return;
  }

  // 清除倒计时
  clearReviewCountdown();

  const wordId = reviewQueue[0];
  const w = words.find(word => word.id === wordId);
  if (!w) {
    reviewQueue.shift();
    updateQueueStats();
    showNextCard();
    return;
  }

  // 重置卡片状态
  reviewCard.classList.remove("flipped");
  reviewActions.style.display = "none";

  // 填充内容
  reviewWord.textContent = w.word;
  reviewTranslation.textContent = w.translation;
  reviewDefinition.textContent = w.definition;

  // 卡片级别显示
  const rd = getReviewData(wordId);
  const levelEl = document.getElementById("reviewCardLevel");
  const levelMap = { new: t("newCardLabel"), learning: t("learningLabel"), review: t("reviewLabel"), mastered: t("masteredLabel") };
  if (levelEl) {
    levelEl.textContent = levelMap[rd.cardState] || t("newCardLabel");
    levelEl.style.display = "block";
  }

  // 下一张提示（显示上一张评分的下次到期时间）
  const tipEl = document.getElementById("reviewNextTip");
  if (tipEl) {
    if (pendingReviewTip) {
      tipEl.textContent = "📅 " + pendingReviewTip;
      tipEl.style.display = "block";
      pendingReviewTip = "";
    } else {
      tipEl.style.display = "none";
    }
  }

  // 学习步骤指示器
  if (rd.cardState === "learning" && rd.learningStep > 0) {
    const waitMinutes = rd.learningStep === 1 ? 1 : 10;

    if (rd.nextReview) {
      const remainingMs = new Date(rd.nextReview) - new Date();
      if (remainingMs > 0) {
        const remainingSec = Math.ceil(remainingMs / 1000);
        reviewLearningStep.textContent = `⏳ ${remainingSec} ${t('secondsRemaining')}`;
      } else {
        reviewLearningStep.textContent = `${t('learningStep')} ${rd.learningStep}/2 · ${waitMinutes} min ⏳`;
      }
    } else {
      reviewLearningStep.textContent = `${t('newCardLabel')} · ${t('learningStep')} ${rd.learningStep}/2`;
    }
    reviewLearningStep.style.display = "block";
  } else if (rd.cardState === "new") {
    reviewLearningStep.textContent = t("newCardLabel");
    reviewLearningStep.style.display = "block";
  } else {
    reviewLearningStep.style.display = "none";
  }

  // 更新进度
  const total = reviewQueue.length + reviewSessionCount;
  const done = reviewSessionCount;
  reviewProgress.textContent = `${t('reviewLabel')} ${done} ${t('cards')} · ${reviewQueue.length} ${t('cards')}`;

  const fill = document.getElementById("reviewProgressFill");
  if (fill && total > 0) {
    fill.style.width = `${(done / total) * 100}%`;
  }

  updateQueueStats();

  // 启动学习倒计时
  if (rd.cardState === "learning" && rd.nextReview) {
    startReviewCountdown(wordId);
  }
}

// ---- 倒计时 ----
let reviewCountdownTimer = null;

function clearReviewCountdown() {
  if (reviewCountdownTimer) {
    clearInterval(reviewCountdownTimer);
    reviewCountdownTimer = null;
  }
}

function startReviewCountdown(wordId) {
  clearReviewCountdown();
  const rd = getReviewData(wordId);
  if (!rd.nextReview || rd.cardState !== "learning") return;
  const update = () => {
    const remainingMs = new Date(rd.nextReview) - new Date();
    if (remainingMs <= 0) {
      clearReviewCountdown();
      reviewLearningStep.textContent = "⏳ " + t("today");
      return;
    }
    const sec = Math.ceil(remainingMs / 1000);
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    reviewLearningStep.textContent = "⏳ " + min + ":" + String(s).padStart(2, "0") + " " + t("secondsRemaining");
  };
  update();
  reviewCountdownTimer = setInterval(update, 1000);
}

function flipReviewCard() {
  const isFlipped = reviewCard.classList.contains("flipped");
  if (isFlipped) {
    // 已经翻转，不做事
    return;
  }
  reviewCard.classList.add("flipped");
  reviewActions.style.display = "grid";
}

async function answerCard(gradeKey) {
  if (reviewQueue.length === 0) return;

  // 保存撤销状态
  const wordId = reviewQueue[0];
  const rd = getReviewData(wordId);
  const prevState = {
    wordId,
    nextReview: rd.nextReview,
    interval: rd.interval,
    reps: rd.reps,
    ef: rd.ef,
    cardState: rd.cardState,
    learningStep: rd.learningStep,
    gradeDistribution: { ...gradeDistribution },
    reviewSessionCount,
    queueSnapshot: [...reviewQueue],
  };
  undoStack = [prevState]; // 只保留最近一次

  // 记录答题历史
  if (!rd.history) rd.history = [];
  rd.history.unshift({
    date: new Date().toISOString(),
    gradeKey,
    state: rd.cardState,
  });
  if (rd.history.length > 20) rd.history = rd.history.slice(0, 20);

  gradeDistribution[gradeKey] = (gradeDistribution[gradeKey] || 0) + 1;

  reviewQueue.shift();

  // 本地逻辑（即时 UI 反馈）
  if (rd.cardState === "new" || rd.cardState === "learning") {
    const pushBack = answerLearningCard(wordId, gradeKey);
    if (pushBack) {
      reviewQueue.push(wordId);
    } else {
      reviewSessionCount += 1;
    }
  } else {
    const grade = GRADE_MAP[gradeKey];
    sm2(rd, grade);
    rd.nextReview = calcNextReviewDate(rd);

    if (gradeKey === "again") {
      reviewQueue.push(wordId);
      if (rd.cardState === "mastered") rd.cardState = "review";
    } else {
      reviewSessionCount += 1;
    }

    if (rd.reps >= 3 && rd.interval >= 21) {
      rd.cardState = "mastered";
    }
  }

  // 异步持久化到后端（不阻塞 UI）
  DataLayer.answerCard(wordId, gradeKey).catch(err => {
    console.error("answerCard API error:", err);
  });

  // 生成下一张提示: 被评分的卡片下次何时到期
  if (rd.cardState === "review" && rd.nextReview) {
    const nextDate = new Date(rd.nextReview);
    const diffDays = Math.ceil((nextDate - new Date()) / 86400000);
    pendingReviewTip = diffDays <= 0 ? t("today") : diffDays + " " + t("days");
  } else if (rd.cardState === "learning" && rd.nextReview) {
    const diffMin = Math.ceil((new Date(rd.nextReview) - new Date()) / 60000);
    pendingReviewTip = diffMin + " min";
  } else {
    pendingReviewTip = "";
  }

  showNextCard();
}

function finishReview() {
  document.querySelector(".review-stage").style.display = "none";
  reviewComplete.style.display = "block";

  // 记录学习天数 & 复习历史
  const streakCount = updateStreak();
  if (reviewSessionCount > 0) {
    recordReviewHistory(reviewSessionCount);
  }

  const allCards = words.length;
  const mastered = words.filter(w => {
    const rd = reviewData[w.id];
    return rd && rd.cardState === "mastered";
  }).length;

  if (reviewSessionCount === 0) {
    reviewSummary.innerHTML = `<div class="summary-line">${t('reviewDoneMsg1')}</div>`;
  } else {
    const elapsed = Math.floor((new Date() - reviewStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    const distText = [
      gradeDistribution.again > 0 ? `${t('again')} ${gradeDistribution.again}` : "",
      gradeDistribution.hard  > 0 ? `${t('hardBtn')} ${gradeDistribution.hard}`   : "",
      gradeDistribution.good  > 0 ? `${t('good')} ${gradeDistribution.good}`   : "",
      gradeDistribution.easy  > 0 ? `${t('easyBtn')} ${gradeDistribution.easy}`   : "",
    ].filter(Boolean).join(" · ");

    const correct = gradeDistribution.good + gradeDistribution.easy;
    const total = gradeDistribution.again + gradeDistribution.hard + gradeDistribution.good + gradeDistribution.easy;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const accuracyColor = accuracy >= 90 ? "#2ecc71" : (accuracy < 70 ? "#e67e22" : "");

    reviewSummary.innerHTML = `
      <div class="summary-line">📊 ${t('review')} <strong>${reviewSessionCount}</strong> ${t('cards')}</div>
      <div class="summary-line">⏱️ ${timeStr}</div>
      <div class="summary-line">${distText}</div>
      <div class="summary-line">✅ ${t('accuracyLabel')} <span${accuracyColor ? ' style="color:' + accuracyColor + ';font-weight:bold;"' : ''}>${accuracy}%</span></div>
      <div class="summary-line">${t('masteredLabel')} ${mastered}/${allCards} ${t('cards')}${streakCount > 1 ? ` 🔥 ${t('streakLabel')} ${streakCount} ${t('days')}` : ""}</div>
    `;
  }

  updateDueBadge();
  renderStats();
}

// ---------- 复习模式事件绑定 ----------
reviewBtn.addEventListener("click", enterReviewMode);
reviewExitBtn.addEventListener("click", exitReviewMode);
reviewBackBtn.addEventListener("click", exitReviewMode);

reviewCard.addEventListener("click", flipReviewCard);

btnAgain.addEventListener("click", (e) => { e.stopPropagation(); answerCard("again"); });
btnHard.addEventListener("click", (e) => { e.stopPropagation(); answerCard("hard"); });
btnGood.addEventListener("click", (e) => { e.stopPropagation(); answerCard("good"); });
btnEasy.addEventListener("click", (e) => { e.stopPropagation(); answerCard("easy"); });

// 复习模式键盘快捷键（仅在复习模式时生效）
document.addEventListener("keydown", (e) => {
  // 模态框打开时不处理复习快捷键
  if (modalOverlay.classList.contains("show")) return;
  if (reviewContainer.style.display === "none") return;
  if (reviewComplete.style.display === "block") return;

  // Ctrl+Z 撤销（任何状态下）
  if ((e.ctrlKey || e.metaKey) && e.key === "z") {
    e.preventDefault();
    performUndo();
    return;
  }

  // 空格键翻转卡片
  if (e.key === " " && !reviewCard.classList.contains("flipped")) {
    e.preventDefault();
    flipReviewCard();
    return;
  }

  // S 键挂起（翻转前后都可以）
  if ((e.key === "s" || e.key === "S") && !e.ctrlKey && !e.metaKey && reviewQueue.length > 0) {
    e.preventDefault();
    toggleSuspendReviewCard();
    return;
  }

  // F 键标记（翻转前后都可以）
  if ((e.key === "f" || e.key === "F") && !e.ctrlKey && !e.metaKey && reviewQueue.length > 0) {
    e.preventDefault();
    toggleFlagPopup();
    return;
  }

  // 数字键或首字母选择答案（仅在翻转后）
  if (!reviewCard.classList.contains("flipped")) return;

  const keyMap = {
    "1": "again", "a": "again", "A": "again",
    "2": "hard",  "h": "hard",  "H": "hard",
    "3": "good",  "g": "good",  "G": "good",
    "4": "easy",  "e": "easy",  "E": "easy",
  };

  const grade = keyMap[e.key];
  if (grade) {
    e.preventDefault();
    answerCard(grade);
  }
});

/* ===============================
   设置 — 每日新卡片上限
   =============================== */

function loadSettings() {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      settings = parsed;
    }
  } catch { /* keep default */ }
  // 兼容旧数据：补默认值
  if (settings.reviewCardsPerDay === undefined) settings.reviewCardsPerDay = 50;
  if (!settings.deckOverrides) settings.deckOverrides = {};
  if (!settings.defLang) settings.defLang = "zh-CN";
  if (settings.uiLang === undefined) settings.uiLang = "zh";
  if (settings.newCardsPerReview === undefined) settings.newCardsPerReview = 2;
  if (settings.dailyNewGoal === undefined) settings.dailyNewGoal = 10;
  if (settings.dailyReviewGoal === undefined) settings.dailyReviewGoal = 50;
}

function saveSettingsData() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function openSettingsModal() {
  settingsNewCards.value = settings.newCardsPerDay;
  const defLangSelect = document.getElementById("settingsDefLang");
  if (defLangSelect) defLangSelect.value = settings.defLang || "zh-CN";
  settingsOverlay.classList.add("show");

  // 动态注入：语言选择 + 每日额度 + 释义语言 + 忽略列表 + 数据导出
  renderSettingsLangSection();
  renderSettingsDailyLimitsSection();
  renderSettingsDefLangSection();
  renderSettingsIgnoreSection();
  renderSettingsExportSection();
  settingsNewCards.focus();
}

function closeSettingsModal() {
  settingsOverlay.classList.remove("show");
  // 移除动态注入的区域
  const secs = ["settingsLangSection", "settingsDailyLimitsSection", "settingsDefLangSection", "settingsIgnoreSection", "settingsExportSection"];
  secs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
}

// ---------- 设置 — 语言选择 ----------
function renderSettingsLangSection() {
  const existing = document.getElementById("settingsLangSection");
  if (existing) existing.remove();

  const section = document.createElement("div");
  section.id = "settingsLangSection";
  section.innerHTML = `
    <label for="settingsUiLang" style="font-size:0.9rem;color:#ccc;">🌐 ${t('uiLanguage')}</label>
    <select id="settingsUiLang" style="width:100%;padding:10px 14px;background:#0f0f0f;color:#e0e0e0;border:1px solid #2a2a3e;border-radius:8px;font-size:0.95rem;margin-top:8px;outline:none;margin-bottom:12px;">
      <option value="zh" ${(settings.uiLang || 'zh') === 'zh' ? 'selected' : ''}>中文</option>
      <option value="en" ${settings.uiLang === 'en' ? 'selected' : ''}>English</option>
    </select>

    <label for="settingsDefLangSelect" style="font-size:0.9rem;color:#ccc;">🌐 ${t('translationLanguage')}</label>
    <select id="settingsDefLangSelect" style="width:100%;padding:10px 14px;background:#0f0f0f;color:#e0e0e0;border:1px solid #2a2a3e;border-radius:8px;font-size:0.95rem;margin-top:8px;outline:none;">
      <option value="zh-CN" ${(settings.defLang || 'zh-CN') === 'zh-CN' ? 'selected' : ''}>中文 (zh-CN)</option>
      <option value="ja" ${settings.defLang === 'ja' ? 'selected' : ''}>日文 (ja)</option>
      <option value="fr" ${settings.defLang === 'fr' ? 'selected' : ''}>法文 (fr)</option>
      <option value="de" ${settings.defLang === 'de' ? 'selected' : ''}>德文 (de)</option>
      <option value="ko" ${settings.defLang === 'ko' ? 'selected' : ''}>韩文 (ko)</option>
      <option value="es" ${settings.defLang === 'es' ? 'selected' : ''}>西班牙文 (es)</option>
    </select>
  `;

  const actionsDiv = settingsOverlay.querySelector(".modal-actions");
  if (actionsDiv && actionsDiv.parentNode) {
    actionsDiv.parentNode.insertBefore(section, actionsDiv);
  }
}

// ---------- 设置 — 释义语言选择 ----------
function renderSettingsDefLangSection() {
  const existing = document.getElementById("settingsDefLangSection");
  if (existing) existing.remove();

  const section = document.createElement("div");
  section.id = "settingsDefLangSection";
  section.innerHTML = `
    <hr style="border-color:#2a2a3e;margin:20px 0 16px;">
    <label for="settingsDefLang" style="font-size:0.9rem;color:#ccc;">🌐 导入时自动获取释义</label>
    <select id="settingsDefLang" style="width:100%;padding:10px 14px;background:#0f0f0f;color:#e0e0e0;border:1px solid #2a2a3e;border-radius:8px;font-size:0.95rem;margin-top:8px;outline:none;">
      <option value="en">英文释义（来自 FreeDictionary）</option>
      <option value="zh">中文翻译（来自 MyMemory）</option>
      <option value="none">不获取，留空自行填写</option>
    </select>
    <p style="font-size:0.75rem;color:#666;margin-top:6px;">需要联网。英文释义取词典定义，中文翻译取常见译法。</p>
  `;

  const actionsDiv = settingsOverlay.querySelector(".modal-actions");
  if (actionsDiv && actionsDiv.parentNode) {
    actionsDiv.parentNode.insertBefore(section, actionsDiv);
  }

  const select = document.getElementById("settingsDefLang");
  if (select) select.value = settings.defLang || "en";
}

// ---------- 设置 — 忽略列表区域 ----------
function renderSettingsIgnoreSection() {
  // 移除旧区域
  const existing = document.getElementById("settingsIgnoreSection");
  if (existing) existing.remove();

  const ignoreWords = loadIgnoreWords();
  const section = document.createElement("div");
  section.id = "settingsIgnoreSection";
  section.innerHTML = `
    <hr style="border-color:#2a2a3e;margin:20px 0 16px;">
    <label style="font-size:0.9rem;color:#ccc;">📝 忽略列表</label>
    <p style="font-size:0.75rem;color:#666;margin-bottom:10px;">以下单词导入文章时将自动跳过：</p>
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <input type="text" id="settingsIgnoreInput" placeholder="输入要忽略的单词" style="flex:1;">
      <button class="btn-confirm" id="settingsIgnoreAdd" style="padding:8px 14px;font-size:0.85rem;">添加</button>
    </div>
    <div id="settingsIgnoreList" style="max-height:150px;overflow-y:auto;">
      ${ignoreWords.length === 0
        ? '<span style="color:#555;font-size:0.8rem;">暂无忽略词</span>'
        : ignoreWords.map(w => `
          <div class="settings-ignore-item" style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;border-bottom:1px solid #222;">
            <span style="font-size:0.85rem;">${escapeHtml(w)}</span>
            <button class="settings-ignore-remove" data-word="${escapeHtml(w)}" style="background:none;border:none;color:#f44336;cursor:pointer;font-size:1rem;padding:2px 6px;" title="移除">✕</button>
          </div>
        `).join("")
      }
    </div>
  `;

  // 插入到 settingsSave 按钮之前（modal-actions 之前）
  const actionsDiv = settingsOverlay.querySelector(".modal-actions");
  if (actionsDiv && actionsDiv.parentNode) {
    actionsDiv.parentNode.insertBefore(section, actionsDiv);
  }

  // 事件绑定
  const addBtn = document.getElementById("settingsIgnoreAdd");
  const input = document.getElementById("settingsIgnoreInput");
  if (addBtn && input) {
    addBtn.addEventListener("click", () => {
      const word = input.value.trim().toLowerCase();
      if (!word) return;
      const list = loadIgnoreWords();
      if (list.includes(word)) {
        showToast("该单词已在忽略列表中", "error");
        return;
      }
      list.push(word);
      saveIgnoreWords(list);
      input.value = "";
      renderSettingsIgnoreSection(); // 刷新列表
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addBtn.click();
    });
  }

  // 移除按钮事件
  const removeButtons = document.querySelectorAll(".settings-ignore-remove");
  removeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const word = btn.dataset.word;
      let list = loadIgnoreWords();
      list = list.filter(w => w !== word);
      saveIgnoreWords(list);
      renderSettingsIgnoreSection(); // 刷新列表
    });
  });
}

// ---------- 设置 — 每日额度区域 ----------
function renderSettingsDailyLimitsSection() {
  const existing = document.getElementById("settingsDailyLimitsSection");
  if (existing) existing.remove();

  const section = document.createElement("div");
  section.id = "settingsDailyLimitsSection";
  section.innerHTML = `
    <hr style="border-color:#2a2a3e;margin:20px 0 16px;">
    <label style="font-size:0.9rem;color:#ccc;">📊 每日额度</label>
    <label for="settingsReviewCards" style="margin-top:12px;">每日复习上限</label>
    <input id="settingsReviewCards" type="number" min="0" max="999" value="${settings.reviewCardsPerDay}" style="margin-bottom:8px;" />
    <p style="font-size:0.75rem;color:#666;">设为 0 表示不复习旧卡片</p>

    <hr style="border-color:#2a2a3e;margin:16px 0 12px;">
    <label style="font-size:0.9rem;color:#ccc;">🔄 复习队列</label>
    <label for="settingsNewPerReview" style="margin-top:8px;">每轮新卡插入数量</label>
    <input id="settingsNewPerReview" type="number" min="0" max="20" value="${settings.newCardsPerReview || 2}" style="margin-bottom:4px;" />
    <p style="font-size:0.75rem;color:#666;">复习时每插入N张新卡后跟2张复习卡</p>

    <hr style="border-color:#2a2a3e;margin:16px 0 12px;">
    <label style="font-size:0.9rem;color:#ccc;">🎯 每日目标</label>
    <label for="settingsDailyNewGoal" style="margin-top:8px;">每日新卡片目标</label>
    <input id="settingsDailyNewGoal" type="number" min="0" max="9999" value="${settings.dailyNewGoal || 10}" style="margin-bottom:8px;" />
    <label for="settingsDailyReviewGoal">每日复习目标</label>
    <input id="settingsDailyReviewGoal" type="number" min="0" max="9999" value="${settings.dailyReviewGoal || 50}" />
  `;

  const newCardsInput = document.getElementById("settingsNewCards");
  if (newCardsInput && newCardsInput.parentNode) {
    newCardsInput.parentNode.insertBefore(section, newCardsInput.nextSibling);
  }
}

// ---------- 设置 — 数据导出 ----------
function renderSettingsExportSection() {
  const existing = document.getElementById("settingsExportSection");
  if (existing) existing.remove();

  const section = document.createElement("div");
  section.id = "settingsExportSection";
  section.innerHTML = `
    <hr style="border-color:#2a2a3e;margin:20px 0 16px;">
    <label style="font-size:0.9rem;color:#ccc;">💾 数据管理</label>
    <p style="font-size:0.75rem;color:#666;margin-bottom:10px;">导出备份或导入数据。</p>
    <input type="file" accept=".json" id="settingsImportInput" style="display:none">
    <input type="file" accept=".csv" id="settingsCsvImportInput" style="display:none">
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button id="settingsExportBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📥 导出 JSON</button>
      <button id="settingsImportBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📤 导入 JSON</button>
    </div>
    <div style="display:flex;gap:8px;margin-top:8px;">
      <button id="settingsExportCsvBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📊 导出 CSV</button>
      <button id="settingsImportCsvBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📊 导入 CSV</button>
    </div>
  `;

  const actionsDiv = settingsOverlay.querySelector(".modal-actions");
  if (actionsDiv && actionsDiv.parentNode) {
    actionsDiv.parentNode.insertBefore(section, actionsDiv);
  }

  document.getElementById("settingsExportBtn").addEventListener("click", handleExportData);
  document.getElementById("settingsImportBtn").addEventListener("click", () => {
    document.getElementById("settingsImportInput").click();
  });
  document.getElementById("settingsImportInput").addEventListener("change", handleImportData);

  // CSV 导入/导出事件绑定
  document.getElementById("settingsExportCsvBtn").addEventListener("click", handleExportCsv);
  document.getElementById("settingsImportCsvBtn").addEventListener("click", () => {
    document.getElementById("settingsCsvImportInput").click();
  });
  document.getElementById("settingsCsvImportInput").addEventListener("change", handleImportCsv);
}

async function handleImportData(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function (e) {
    try {
      const data = JSON.parse(e.target.result);

      // 验证格式
      if (!data.version || !data.words) {
        showToast("无效的备份文件，请选择之前导出的 JSON 文件", "error");
        return;
      }

      // 确认操作
      if (!confirm(`即将导入 ${data.words.length} 张卡片、${data.decks ? data.decks.length : 0} 个卡组。\n新卡片会合并添加，不会覆盖现有数据。\n\n确定继续？`)) {
        return;
      }

      // 导入卡组（去重），通过 API 创建
      const deckIdMap = {}; // 旧 id → 新 id
      if (data.decks && Array.isArray(data.decks)) {
        for (const d of data.decks) {
          const existing = decks.find(ex => ex.name === d.name);
          if (!existing) {
            try {
              const created = await DataLayer.addDeck(d.name);
              decks.push(created);
              deckIdMap[d.id] = created.id;
            } catch { /* skip failed deck */ }
          } else {
            deckIdMap[d.id] = existing.id;
          }
        }
      }

      // 导入单词（去重），通过 API 创建
      let added = 0;
      let skipped = 0;
      if (data.words && Array.isArray(data.words)) {
        for (const w of data.words) {
          const exists = words.find(ex => ex.word.toLowerCase() === w.word.toLowerCase());
          if (!exists) {
            let newDeckId = w.deckId || null;
            if (w.deckId && deckIdMap[w.deckId]) {
              newDeckId = deckIdMap[w.deckId];
            }
            try {
              const created = await DataLayer.addWord(w.word, w.translation || "", w.definition || "", newDeckId);
              words.push({ ...created, deckId: created.deck_id });
              added++;
            } catch { skipped++; }
          } else {
            skipped++;
          }
        }
      }

      // 刷新界面
      renderDeckSidebar();
      renderGrid();
      renderStats();
      updateDueBadge();

      showToast(`✅ 导入完成！新增 ${added} 张卡片，跳过 ${skipped} 个重复`, "success");

    } catch (err) {
      showToast("导入失败：" + err.message, "error");
    }
  };

  reader.readAsText(file);
  event.target.value = "";
}

function handleExportData() {
  const exportData = {
    version: 1,
    exportedAt: new Date().toISOString(),
    words: words,
    decks: decks,
    reviewData: reviewData,
    settings: settings,
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `wordcards-backup-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // 更新按钮状态反馈
  const btn = document.getElementById("settingsExportBtn");
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✅ 导出成功！";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
    }, 2000);
  }
}

function handleSettingsSave() {
  const val = parseInt(settingsNewCards.value, 10);
  if (isNaN(val) || val < 0) {
    alert("请输入 0 或更大的数字");
    return;
  }
  settings.newCardsPerDay = Math.min(val, 999);

  const reviewInput = document.getElementById("settingsReviewCards");
  if (reviewInput) {
    const reviewVal = parseInt(reviewInput.value, 10);
    if (!isNaN(reviewVal) && reviewVal >= 0) {
      settings.reviewCardsPerDay = Math.min(reviewVal, 999);
    }
  }

  // UI 语言
  const uiLangSelect = document.getElementById("settingsUiLang");
  if (uiLangSelect) {
    const newLang = uiLangSelect.value;
    if (newLang !== settings.uiLang) {
      settings.uiLang = newLang;
      saveSettingsData();
      closeSettingsModal();
      applyI18n();
      renderDeckSidebar();
      if (viewMode === "grid") { renderGrid(); }
      else { browserPage = 1; renderBrowserView(); }
      renderStats();
      return;
    }
  }

  // 释义语言
  const defLangSelect = document.getElementById("settingsDefLangSelect");
  if (defLangSelect) settings.defLang = defLangSelect.value;

  // 新设置字段
  const newPerReviewInput = document.getElementById("settingsNewPerReview");
  if (newPerReviewInput) {
    const v = parseInt(newPerReviewInput.value, 10);
    if (!isNaN(v) && v >= 0) settings.newCardsPerReview = Math.min(v, 20);
  }
  const dailyNewGoalInput = document.getElementById("settingsDailyNewGoal");
  if (dailyNewGoalInput) {
    const v = parseInt(dailyNewGoalInput.value, 10);
    if (!isNaN(v) && v >= 0) settings.dailyNewGoal = Math.min(v, 9999);
  }
  const dailyReviewGoalInput = document.getElementById("settingsDailyReviewGoal");
  if (dailyReviewGoalInput) {
    const v = parseInt(dailyReviewGoalInput.value, 10);
    if (!isNaN(v) && v >= 0) settings.dailyReviewGoal = Math.min(v, 9999);
  }

  saveSettingsData();
  closeSettingsModal();
  renderStats();
}

// ---------- 每日新卡片额度（按卡组）----------

function getNewCardsUsedToday(deckId) {
  const today = new Date().toISOString().split("T")[0];
  try {
    const data = JSON.parse(localStorage.getItem(NEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
    if (data.date !== today) return 0;
    // 兼容旧格式 { date, used } → 迁移为 { date, deckUsed: {} }
    if (data.used !== undefined && !data.deckUsed) {
      data.deckUsed = {};
      localStorage.setItem(NEW_USED_KEY, JSON.stringify(data));
      return 0;
    }
    const key = deckId === undefined || deckId === null ? "__global__" : String(deckId);
    return data.deckUsed[key] || 0;
  } catch { return 0; }
}

function incrementNewCardsUsed(deckId) {
  const today = new Date().toISOString().split("T")[0];
  let data;
  try {
    data = JSON.parse(localStorage.getItem(NEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
  } catch {
    data = { date: today, deckUsed: {} };
  }
  // 兼容旧格式迁移
  if (data.date !== today || data.used !== undefined) {
    data = { date: today, deckUsed: {} };
  }
  const key = deckId === undefined || deckId === null ? "__global__" : String(deckId);
  data.deckUsed[key] = (data.deckUsed[key] || 0) + 1;
  localStorage.setItem(NEW_USED_KEY, JSON.stringify(data));
}

// ---------- 每日复习额度（按卡组）----------

function getReviewCardsUsedToday(deckId) {
  const today = new Date().toISOString().split("T")[0];
  try {
    const data = JSON.parse(localStorage.getItem(REVIEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
    if (data.date !== today) return 0;
    const key = deckId === undefined || deckId === null ? "__global__" : String(deckId);
    return data.deckUsed[key] || 0;
  } catch { return 0; }
}

function incrementReviewCardsUsed(deckId) {
  const today = new Date().toISOString().split("T")[0];
  let data;
  try {
    data = JSON.parse(localStorage.getItem(REVIEW_USED_KEY) || JSON.stringify({ date: today, deckUsed: {} }));
  } catch {
    data = { date: today, deckUsed: {} };
  }
  if (data.date !== today) {
    data = { date: today, deckUsed: {} };
  }
  const key = deckId === undefined || deckId === null ? "__global__" : String(deckId);
  data.deckUsed[key] = (data.deckUsed[key] || 0) + 1;
  localStorage.setItem(REVIEW_USED_KEY, JSON.stringify(data));
}

// ---------- 获取卡组有效限额 ----------
function getEffectiveLimit(deckId, type) {
  const overrideKey = type === "new" ? "newCardsPerDay" : "reviewCardsPerDay";
  const deckOverride = settings.deckOverrides && settings.deckOverrides[deckId];
  if (deckOverride && deckOverride[overrideKey] !== undefined && deckOverride[overrideKey] !== null && deckOverride[overrideKey] !== "") {
    return deckOverride[overrideKey];
  }
  return settings[overrideKey];
}

/* ===============================
   复习历史记录
   =============================== */

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch { return []; }
}

function saveHistory(history) {
  // 只保留最近 60 天
  if (history.length > 60) {
    history = history.slice(-60);
  }
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function recordReviewHistory(count) {
  const today = new Date().toISOString().split("T")[0];
  const history = loadHistory();

  // 合并同一天的记录
  const existing = history.find(h => h.date === today);
  if (existing) {
    existing.count += count;
  } else {
    history.push({ date: today, count });
  }

  saveHistory(history);
}

/* ===============================
   统计页面
   =============================== */

function showStatsPage() {
  document.querySelector("main").style.display = "none";
  document.querySelector("footer").style.display = "none";
  statsPage.style.display = "flex";
  renderStatsPage();
}

function hideStatsPage() {
  statsPage.style.display = "none";
  document.querySelector("main").style.display = "";
  document.querySelector("footer").style.display = "";
}

function renderStatsPage() {
  renderStatsOverview();
  renderBarChart(7);
  renderStatsDistribution();
  renderStatsRetention();
  renderTrendChart(7);
  renderForecastChart(7);
  renderHardestCards();
  renderStatsGoals();
}

function renderStatsOverview() {
  let learningCount = 0, masteredCount = 0, newCount = 0, reviewCount = 0;
  for (const w of words) {
    const rd = reviewData[w.id];
    if (!rd || rd.cardState === "new") newCount++;
    else if (rd.cardState === "learning") learningCount++;
    else if (rd.cardState === "review") reviewCount++;
    else if (rd.cardState === "mastered") masteredCount++;
  }
  const streak = getStreak();
  const dId = selectedDeckId;
  const usedNewToday = getNewCardsUsedToday(dId);
  const remainingNew = Math.max(0, getEffectiveLimit(dId, "new") - usedNewToday);
  const usedReviewToday = getReviewCardsUsedToday(dId);
  const remainingReview = Math.max(0, getEffectiveLimit(dId, "review") - usedReviewToday);

  const cards = [
    { value: words.length, label: t("totalCards"), cls: "" },
    { value: masteredCount, label: t("masteredCards"), cls: "mastered" },
    { value: learningCount, label: t("learningCards"), cls: "learning" },
    { value: reviewCount, label: t("reviewCards"), cls: "review" },
    { value: newCount, label: t("newCardCount"), cls: "new" },
    { value: `${streak.count || 0} ${t('days')}`, label: t("streakLabel"), cls: "streak" },
    { value: remainingNew, label: t("todayRemainingNew"), cls: "" },
    { value: remainingReview, label: t("todayRemainingReview"), cls: "" },
  ];

  statsOverview.innerHTML = cards.map(c => `
    <div class="stat-card ${c.cls}">
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
}

function renderStatsDistribution() {
  let learningCount = 0, masteredCount = 0, newCount = 0, reviewCount = 0;
  for (const w of words) {
    const rd = reviewData[w.id];
    if (!rd || rd.cardState === "new") newCount++;
    else if (rd.cardState === "learning") learningCount++;
    else if (rd.cardState === "review") reviewCount++;
    else if (rd.cardState === "mastered") masteredCount++;
  }
  const total = words.length || 1;
  const items = [
    { label: t("newCardCount"), count: newCount, cls: "new" },
    { label: t("learningCards"), count: learningCount, cls: "learning" },
    { label: t("reviewCards"), count: reviewCount, cls: "review" },
    { label: t("masteredCards"), count: masteredCount, cls: "mastered" },
  ];
  const el = document.getElementById("statsDistribution");
  if (!el) return;
  el.innerHTML = items.map(item => `
    <div class="dist-row">
      <span class="dist-label">${item.label}</span>
      <div class="dist-bar-bg">
        <div class="dist-bar-fill ${item.cls}" style="width:${(item.count / total) * 100}%"></div>
      </div>
      <span class="dist-count">${item.count}</span>
    </div>
  `).join("");

  // 难度分布
  let easyCount = 0, mediumCount = 0, hardCount = 0;
  for (const w of words) {
    const rd = reviewData[w.id];
    const diff = (rd && rd.difficulty) ? rd.difficulty : 2;
    if (diff === 1) easyCount++;
    else if (diff === 3) hardCount++;
    else mediumCount++;
  }
  const diffEl = document.getElementById("statsDifficultyDist");
  if (diffEl) {
    diffEl.innerHTML = `
      <span style="color:#2ecc71;">😊 简单 ${easyCount} 张</span>
      <span style="margin:0 8px;color:#555;">·</span>
      <span style="color:#e8c170;">🤔 中等 ${mediumCount} 张</span>
      <span style="margin:0 8px;color:#555;">·</span>
      <span style="color:#e74c3c;">😰 困难 ${hardCount} 张</span>
    `;
  }
}

function renderStatsRetention() {
  const el = document.getElementById("statsRetention");
  if (!el) return;

  // 计算保留率：从答题历史中统计
  let totalAnswers = 0, passedAnswers = 0;
  const now = new Date();

  for (const wordId in reviewData) {
    const rd = reviewData[wordId];
    if (!rd.history) continue;
    for (const h of rd.history) {
      totalAnswers++;
      if (h.gradeKey === "good" || h.gradeKey === "easy") passedAnswers++;
    }
  }

  const overallRate = totalAnswers > 0 ? Math.round((passedAnswers / totalAnswers) * 100) : 0;

  // 最近7天 / 30天
  let weekTotal = 0, weekPassed = 0, monthTotal = 0, monthPassed = 0;
  const weekAgo = new Date(now - 7 * 86400000);
  const monthAgo = new Date(now - 30 * 86400000);

  for (const wordId in reviewData) {
    const rd = reviewData[wordId];
    if (!rd.history) continue;
    for (const h of rd.history) {
      const d = new Date(h.date);
      if (d >= weekAgo) { weekTotal++; if (h.gradeKey === "good" || h.gradeKey === "easy") weekPassed++; }
      if (d >= monthAgo) { monthTotal++; if (h.gradeKey === "good" || h.gradeKey === "easy") monthPassed++; }
    }
  }

  const weekRate = weekTotal > 0 ? Math.round((weekPassed / weekTotal) * 100) : 0;
  const monthRate = monthTotal > 0 ? Math.round((monthPassed / monthTotal) * 100) : 0;

  el.innerHTML = `
    <div class="retention-row"><span>总体保留率</span><span class="retention-value">${overallRate}%</span></div>
    <div class="retention-row"><span>近 7 天</span><span class="retention-value">${weekRate}% (${weekPassed}/${weekTotal})</span></div>
    <div class="retention-row"><span>近 30 天</span><span class="retention-value">${monthRate}% (${monthPassed}/${monthTotal})</span></div>
  `;
}

function renderTrendChart(days) {
  const el = document.getElementById("statsTrendChart");
  if (!el) return;
  const history = loadHistory();
  const today = new Date();

  const chartData = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const entry = history.find(h => h.date === dateStr);
    // 从答题历史中区分新卡和复习
    let learnedCount = 0, reviewedCount = 0;
    for (const wordId in reviewData) {
      const rd = reviewData[wordId];
      if (!rd.history) continue;
      for (const h of rd.history) {
        const hDate = new Date(h.date).toISOString().split("T")[0];
        if (hDate === dateStr) {
          if (h.state === "new" || h.state === "learning") learnedCount++;
          else reviewedCount++;
        }
      }
    }
    chartData.push({
      date: dateStr,
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      learned: learnedCount,
      reviewed: reviewedCount,
    });
  }

  const maxVal = Math.max(1, ...chartData.map(d => d.learned + d.reviewed));

  el.innerHTML = chartData.map(d => `
    <div class="trend-bar-group">
      <div class="trend-bar-new" style="height:${Math.max((d.learned / maxVal) * 100, 2)}%"></div>
      <div class="trend-bar-review" style="height:${Math.max((d.reviewed / maxVal) * 100, 2)}%"></div>
      <div class="trend-bar-label">${d.label}</div>
    </div>
  `).join("");

  // 图例
  if (!document.getElementById("trendLegend")) {
    const legend = document.createElement("div");
    legend.id = "trendLegend";
    legend.className = "trend-legend";
    legend.innerHTML = `
      <span><span class="trend-legend-dot" style="background:#555"></span> 新学</span>
      <span><span class="trend-legend-dot" style="background:#4a9eff"></span> 复习</span>
    `;
    el.parentNode.appendChild(legend);
  }
}

function renderForecastChart(days) {
  const el = document.getElementById("statsForecastChart");
  if (!el) return;
  const now = new Date();
  const chartData = [];

  for (let i = 0; i < days; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    d.setHours(23, 59, 59, 999);
    const dStart = new Date(now);
    dStart.setDate(dStart.getDate() + i);
    dStart.setHours(0, 0, 0, 0);
    let count = 0;
    let overdueCount = 0;

    for (const wordId in reviewData) {
      const rd = reviewData[wordId];
      if (!rd || !rd.nextReview || rd.cardState === "new" || rd.cardState === "mastered") continue;
      if (rd.suspended) continue;
      const nr = new Date(rd.nextReview);
      if (nr <= d && nr >= dStart) count++;
      if (nr < now && i === 0) overdueCount++;
    }

    // 第一天单独统计过期
    if (i === 0) {
      for (const wordId in reviewData) {
        const rd = reviewData[wordId];
        if (!rd || !rd.nextReview || rd.cardState === "new" || rd.cardState === "mastered") continue;
        if (rd.suspended) continue;
        const nr = new Date(rd.nextReview);
        if (nr < now) overdueCount++;
      }
    }

    chartData.push({
      label: i === 0 ? "今天" : `${d.getMonth() + 1}/${d.getDate()}`,
      count: i === 0 ? count + overdueCount : count,
      overdue: i === 0 && overdueCount > 0,
    });
  }

  const maxVal = Math.max(1, ...chartData.map(d => d.count));

  el.innerHTML = chartData.map(d => `
    <div class="forecast-bar-wrapper">
      <div class="forecast-count">${d.count || ""}</div>
      <div class="forecast-bar ${d.overdue ? 'overdue' : ''}" style="height:${Math.max((d.count / maxVal) * 100, 4)}%"></div>
      <div class="forecast-label">${d.label}</div>
    </div>
  `).join("");
}

function renderHardestCards() {
  const el = document.getElementById("statsHardest");
  if (!el) return;

  const cards = [];
  for (const w of words) {
    const rd = reviewData[w.id];
    if (!rd || rd.cardState === "new") continue;
    cards.push({
      word: w.word,
      ef: rd.ef || 2.5,
      reps: rd.reps || 0,
      lastReview: rd.history && rd.history.length > 0 ? rd.history[0].date : null,
    });
  }

  cards.sort((a, b) => a.ef - b.ef);
  const top10 = cards.slice(0, 10);

  if (top10.length === 0) {
    el.innerHTML = `<div style="color:#555;font-size:0.85rem;text-align:center;">${t('noReviewData')}</div>`;
    return;
  }

  el.innerHTML = top10.map((c, i) => {
    const lastStr = c.lastReview
      ? new Date(c.lastReview).toLocaleDateString("zh-CN")
      : "-";
    return `
      <div class="hardest-row">
        <span class="hardest-rank">#${i + 1}</span>
        <span class="hardest-word">${escapeHtml(c.word)}</span>
        <span class="hardest-ef">EF: ${c.ef.toFixed(2)}</span>
        <span class="hardest-reps">${c.reps} 次</span>
        <span class="hardest-last">${lastStr}</span>
      </div>
    `;
  }).join("");
}

function renderStatsGoals() {
  const el = document.getElementById("statsGoals");
  if (!el) return;

  const today = new Date().toISOString().split("T")[0];
  const history = loadHistory();
  const todayEntry = history.find(h => h.date === today);
  const todayLearned = todayEntry ? todayEntry.count : 0;

  // 今日学习（从 history 中是总数，需要区分新卡和复习）
  let todayNew = 0, todayReview = 0;
  for (const wordId in reviewData) {
    const rd = reviewData[wordId];
    if (!rd.history) continue;
    for (const h of rd.history) {
      const hDate = new Date(h.date).toISOString().split("T")[0];
      if (hDate === today) {
        if (h.state === "new" || h.state === "learning") todayNew++;
        else todayReview++;
      }
    }
  }

  const newGoal = settings.dailyNewGoal || 10;
  const reviewGoal = settings.dailyReviewGoal || 50;

  const newPct = Math.min(100, Math.round((todayNew / newGoal) * 100));
  const reviewPct = Math.min(100, Math.round((todayReview / reviewGoal) * 100));

  const newCls = newPct >= 100 ? "" : newPct >= 50 ? "warning" : "danger";
  const reviewCls = reviewPct >= 100 ? "" : reviewPct >= 50 ? "warning" : "danger";

  el.innerHTML = `
    <div class="goal-row">
      <span class="goal-label">🆕 新卡片目标</span>
      <div class="goal-progress-bg">
        <div class="goal-progress-fill ${newCls}" style="width:${newPct}%">${todayNew}/${newGoal}</div>
      </div>
    </div>
    <div class="goal-row">
      <span class="goal-label">📋 复习目标</span>
      <div class="goal-progress-bg">
        <div class="goal-progress-fill ${reviewCls}" style="width:${reviewPct}%">${todayReview}/${reviewGoal}</div>
      </div>
    </div>
  `;
}

function renderBarChart(days) {
  const history = loadHistory();
  const today = new Date();

  // 构建最近 N 天的数据
  const chartData = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const entry = history.find(h => h.date === dateStr);
    chartData.push({
      date: dateStr,
      label: `${d.getMonth() + 1}/${d.getDate()}`,
      count: entry ? entry.count : 0,
    });
  }

  const maxCount = Math.max(...chartData.map(d => d.count), 1);

  if (maxCount === 0 && chartData.every(d => d.count === 0)) {
    statsChart.innerHTML = `<div class="chart-empty">${t('noReviewData')}</div>`;
    return;
  }

  statsChart.innerHTML = chartData.map(d => `
    <div class="chart-bar-wrapper">
      <div class="chart-count">${d.count || ""}</div>
      <div class="chart-bar" style="height: ${Math.max((d.count / maxCount) * 100, 4)}%"></div>
      <div class="chart-label">${d.label}</div>
    </div>
  `).join("");
}

// ---------- 统计页面事件绑定 ----------
statsBtn.addEventListener("click", () => {
  if (reviewContainer.style.display === "flex") return;
  showStatsPage();
});

statsBackBtn.addEventListener("click", hideStatsPage);

// 周期切换 — 委托到统计页面
document.getElementById("statsPage").addEventListener("click", (e) => {
  const periodBtn = e.target.closest(".period-btn");
  if (periodBtn) {
    const days = parseInt(periodBtn.dataset.period, 10);
    // 更新同级 active
    const parent = periodBtn.parentElement;
    if (parent) {
      parent.querySelectorAll(".period-btn").forEach(b => b.classList.remove("active"));
      periodBtn.classList.add("active");
    }
    // 判断是哪个 chart：根据所在的 section
    const section = periodBtn.closest(".stats-chart-section");
    if (section) {
      if (section.querySelector(".stats-chart")) {
        renderBarChart(days);
      } else if (section.querySelector(".stats-trend-chart")) {
        renderTrendChart(days);
      }
    }
  }
});

// ---------- 设置事件绑定 ----------
settingsBtn.addEventListener("click", () => {
  if (reviewContainer.style.display === "flex") return;
  openSettingsModal();
});

settingsCancelBtn.addEventListener("click", closeSettingsModal);
settingsSaveBtn.addEventListener("click", handleSettingsSave);

settingsOverlay.addEventListener("click", (e) => {
  if (e.target === settingsOverlay) closeSettingsModal();
});

settingsOverlay.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSettingsSave();
  if (e.key === "Escape") closeSettingsModal();
});

/* ===============================
   Phase 3 — 粘贴文章导入 & 自动提取生词
   =============================== */

// ---------- 停用词列表 ----------
const STOP_WORDS = new Set([
  "the","be","to","of","and","a","in","that","have","i",
  "it","for","not","on","with","he","as","you","do","at",
  "this","but","his","by","from","they","we","say","her","she",
  "or","an","will","my","one","all","would","there","their","what",
  "so","up","out","if","about","who","get","which","go","me",
  "when","make","can","like","time","no","just","him","know","take",
  "people","into","year","your","good","some","could","them","see","other",
  "than","then","now","look","only","come","its","over","think","also",
  "back","after","use","two","how","our","work","first","well","way",
  "even","new","want","because","any","these","give","day","most","us",
  "more","here","thing","such","need","much","own","while","should","may",
  "did","done","being","been","has","had","does","doing","having","said",
  "very","many","still","might","too","really","something","every","enough","long",
  "same","right","old","great","little","big","high","different","small","large",
  "next","early","young","important","few","those","each","both","between","under",
  "last","never","always","often","sometimes","away","again","already","always","however",
  "though","through","during","before","after","above","below","upon","within","without",
  "where","there","here","why","how","which","what","whose","whom","wherever",
  "ever","never","neither","nor","not","nothing","no","none","nobody","nowhere",
  "everyone","everything","everywhere","someone","something","somewhere","anyone","anything","anywhere","any",
  "either","whether","against","around","without","except","across","among","beside","beyond",
  "inside","outside","along","past","toward","onto","into","per","via","till",
  "until","since","once","yet","so","then","thus","hence","therefore","furthermore",
  "moreover","nevertheless","nonetheless","instead","otherwise","else","besides","likewise","meanwhile","afterwards",
  "accordingly","consequently","additionally","particularly","specifically","especially","namely","regarding","involving","considering",
  "following","including","excluding","let","much","must","shall","can","may","might",
  "will","would","could","should","ought","i'm","i'll","i've","i'd","you're",
  "you'll","you've","you'd","he's","he'll","he'd","she's","she'll","she'd","it's",
  "it'll","we're","we'll","we've","we'd","they're","they'll","they've","they'd","that's",
  "there's","there'll","what's","who's","here's","isn't","aren't","wasn't","weren't","hasn't",
  "haven't","hadn't","doesn't","don't","didn't","won't","wouldn't","shouldn't","can't","couldn't",
  "mustn't","needn't","daren't","mightn't","let's","o'clock","am","pm"
]);
const COMMON_WORDS = new Set([
"the","be","to","of","and","a","in","that","have","i","it","for","not","on","with","he","as","you","do","at",
"this","but","his","by","from","they","we","say","her","she","or","an","will","my","one","all","would","there",
"their","what","so","up","out","if","about","who","get","which","go","me","when","make","can","like","time","no",
"just","him","know","take","people","into","year","your","good","some","could","them","see","other","than","then",
"now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well",
"way","even","new","want","because","any","these","give","day","most","us","more","here","thing","such","need",
"much","own","while","should","may","did","done","being","been","has","had","does","doing","having","said","very",
"many","still","might","too","really","something","every","enough","long","same","right","old","great","little",
"big","high","different","small","large","next","early","young","important","few","those","each","both","between",
"under","last","never","always","often","sometimes","away","again","already","however","though","through","during",
"before","after","above","below","upon","within","without","where","there","here","why","how","which","what","whose",
"whom","wherever","ever","neither","nor","not","nothing","no","none","nobody","nowhere","everyone","everything",
"everywhere","someone","something","somewhere","anyone","anything","anywhere","any","either","whether","against",
"around","except","across","among","beside","beyond","inside","outside","along","past","toward","onto","into","per",
"via","till","until","since","once","yet","so","then","thus","hence","therefore","furthermore","moreover",
"nevertheless","nonetheless","instead","otherwise","else","besides","likewise","meanwhile","afterwards",
"accordingly","consequently","additionally","particularly","specifically","especially","namely","regarding",
"involving","considering","following","including","excluding","let","must","shall","can","may","might","will",
"would","could","should","ought","am","pm","up","down","out","off","well","go","come","get","give","make","take",
"put","set","let","keep","find","leave","hold","bring","show","hear","tell","ask","answer","call","try","start",
"stop","run","walk","stand","sit","turn","move","live","die","eat","drink","sleep","wake","play","read","write",
"speak","talk","listen","watch","see","look","feel","seem","become","grow","stay","remain","change","turn","open",
"close","begin","end","finish","continue","follow","lead","help","allow","force","order","believe","hope","expect",
"wish","want","need","love","hate","like","enjoy","prefer","choose","decide","plan","prepare","learn","teach",
"study","understand","remember","forget","think","consider","imagine","suppose","notice","observe","realize",
"recognize","agree","accept","refuse","deny","admit","confess","apologize","thank","offer","promise","prove",
"show","suggest","recommend","advise","warn","encourage","invite","join","attend","visit","meet","greet","introduce",
"welcome","thank","congratulate","celebrate","honor","respect","admire","praise","criticize","blame","complain",
"argue","discuss","debate","agree","disagree","share","divide","separate","connect","attach","add","remove",
"include","exclude","contain","consist","involve","concern","relate","apply","use","employ","utilize","operate",
"function","produce","create","build","construct","develop","design","form","shape","make","cause","generate",
"bring","lead","result","arise","occur","happen","take","place","exist","live","survive","continue","last","remain",
"stay","wait","delay","hurry","rush","hasten","speed","slow","stop","cease","quit","abandon","leave","depart",
"escape","avoid","prevent","protect","defend","guard","hide","cover","reveal","show","display","expose","present",
"represent","describe","explain","express","communicate","declare","state","announce","claim","assert","maintain",
"support","oppose","resist","fight","struggle","compete","win","lose","defeat","beat","overcome","surpass","exceed",
"improve","enhance","increase","raise","rise","grow","expand","extend","spread","develop","advance","progress",
"decline","decrease","reduce","lower","drop","fall","sink","slide","slip","disappear","vanish","fade","weaken",
"strengthen","enable","disable","allow","permit","forbid","prohibit","ban","restrict","limit","control","manage",
"direct","guide","lead","instruct","teach","train","educate","inform","notify","warn","alert","remind","convince",
"persuade","influence","affect","impact","impress","inspire","motivate","encourage","discourage","prevent","stop",
"start","begin","initiate","launch","introduce","publish","announce","reveal","disclose","report","document",
"record","register","list","include","encompass","cover","span","range","vary","differ","contrast","compare",
"match","fit","suit","belong","concern","regard","respect","consider","deem","regard","view","see","judge","evaluate",
"assess","measure","calculate","determine","decide","resolve","settle","conclude","deduce","infer","assume","presume",
"guess","estimate","predict","forecast","project","anticipate","plan","schedule","arrange","organize","prepare",
"ready","set","establish","found","create","invent","discover","find","locate","identify","recognize","distinguish",
"differentiate","separate","sort","classify","categorize","group","arrange","order","rank","grade","rate","score",
"point","mark","indicate","signal","sign","symbolize","represent","mean","imply","suggest","hint","demonstrate",
"illustrate","exemplify","show","prove","evidence","confirm","verify","validate","authenticate","certify","guarantee",
"ensure","insure","assure","promise","pledge","commit","devote","dedicate","sacrifice","offer","volunteer","donate",
"contribute","provide","supply","furnish","equip","outfit","dress","wear","don","remove","replace","substitute",
"exchange","trade","swap","buy","purchase","sell","market","vend","cost","price","value","worth","pay","spend",
"invest","fund","finance","budget","save","earn","gain","profit","benefit","advantage","disadvantage","drawback",
"risk","danger","threat","harm","damage","destroy","ruin","spoil","break","crack","split","tear","cut","hit","strike",
"beat","knock","push","pull","drag","draw","carry","lift","raise","lower","drop","throw","catch","seize","grab",
"grasp","hold","grip","clasp","hug","embrace","kiss","touch","feel","sense","perceive","detect","notice","discern",
"spot","see","view","witness","observe","watch","look","gaze","stare","glance","peek","peer","eye","examine",
"inspect","study","analyze","scrutinize","review","check","verify","test","try","sample","taste","smell","scent",
"odor","aroma","flavor","sound","hear","listen","eavesdrop","overhear","silence","quiet","still","calm","peace",
"rest","relax","unwind","repose","sleep","dream","awake","wake","rise","stand","sit","lie","bend","lean","bow",
"kneel","crawl","climb","jump","leap","spring","bound","skip","hop","dance","swim","fly","ride","drive","sail",
"travel","journey","voyage","trip","tour","expedition","mission","quest","search","hunt","pursue","chase","follow",
"track","trail","trace","find","locate","discover","uncover","reveal","hide","conceal","mask","disguise","pretend",
"fake","feign","simulate","mimic","imitate","copy","duplicate","reproduce","repeat","echo","reflect","mirror",
"resemble","similar","alike","same","identical","equal","equivalent","parallel","opposite","different","distinct",
"separate","various","diverse","multiple","numerous","several","many","much","plenty","enough","sufficient","ample",
"abundant","scarce","rare","limited","finite","infinite","endless","boundless","limitless","unlimited","countless",
"innumerable","numberless","total","whole","entire","complete","full","partial","incomplete","half","part","section",
"segment","portion","piece","fragment","bit","chunk","lump","heap","pile","stack","mass","bulk","volume","amount",
"quantity","measure","degree","extent","range","scope","scale","level","standard","norm","average","typical","usual",
"common","ordinary","normal","regular","standard","conventional","traditional","customary","habitual","routine",
"familiar","frequent","constant","steady","stable","permanent","temporary","brief","short","long","extended",
"lengthy","prolonged","lasting","durable","enduring","perpetual","eternal","forever","always","never","sometimes",
"often","rarely","seldom","hardly","barely","merely","only","just","simply","purely","wholly","fully","completely",
"entirely","totally","absolutely","utterly","extremely","highly","deeply","profoundly","intensely","strongly",
"firmly","tightly","loosely","barely","scarcely","nearly","almost","approximately","roughly","about","around",
"close","near","far","distant","remote","adjacent","neighboring","nearby","outside","inside","within","between",
"among","amid","surrounding","around","beyond","beneath","under","above","over","below","across","through",
"throughout","along","beside","alongside","by","near","against","toward","towards","into","onto","upon","up",
"down","forward","backward","sideways","left","right","center","middle","top","bottom","front","back","side","end",
"edge","border","boundary","limit","margin","rim","brink","verge","threshold","beginning","start","commencement",
"outset","origin","source","root","foundation","base","basis","fundamental","essential","vital","crucial","critical",
"key","important","significant","notable","remarkable","outstanding","exceptional","extraordinary","unique","special",
"particular","specific","certain","definite","precise","exact","accurate","correct","right","proper","appropriate",
"suitable","fitting","relevant","related","connected","linked","associated","attached","bound","tied","fastened",
"secure","safe","protected","guarded","defended","fortified","strong","powerful","mighty","forceful","potent",
"effective","efficient","productive","fruitful","fertile","rich","abundant","plentiful","ample","copious","profuse",
"lavish","extravagant","excessive","extreme","drastic","severe","harsh","rough","tough","hard","difficult",
"challenging","demanding","taxing","strenuous","arduous","laborious","painful","sore","aching","hurt","injured",
"wounded","damaged","broken","fractured","shattered","destroyed","ruined","wrecked","demolished","devastated",
"crippled","disabled","handicapped","impaired","weakened","feeble","frail","fragile","delicate","brittle","crisp",
"fresh","new","novel","original","creative","innovative","inventive","resourceful","clever","smart","intelligent",
"bright","brilliant","sharp","acute","keen","astute","shrewd","savvy","wise","knowledgeable","informed","educated",
"learned","scholarly","erudite","cultured","refined","polished","sophisticated","worldly","urban","cosmopolitan",
"rural","country","suburban","urban","metropolitan","local","regional","national","international","global","worldwide",
"universal","general","common","widespread","prevalent","dominant","prevailing","current","contemporary","modern",
"recent","latest","new","old","aged","elderly","senior","ancient","antique","vintage","classic","traditional",
"conventional","orthodox","conservative","liberal","progressive","radical","extreme","moderate","mild","gentle",
"soft","tender","smooth","rough","coarse","rugged","uneven","level","flat","even","straight","direct","indirect",
"curved","bent","twisted","winding","spiral","circular","round","square","rectangular","triangular","oval","oblong",
"narrow","wide","broad","deep","shallow","thick","thin","fat","slim","slender","lean","skinny","muscular","strong",
"weak","robust","fit","healthy","well","ill","sick","diseased","ailing","unwell","poor","bad","terrible","awful",
"horrible","dreadful","frightful","shocking","appalling","distressing","troubling","worrying","alarming","scary",
"frightening","terrifying","horrifying","grim","bleak","dreary","dismal","gloomy","dark","shadowy","dim","faint",
"pale","light","bright","vivid","colorful","dull","plain","simple","complex","complicated","intricate","elaborate",
"sophisticated","advanced","elementary","basic","primary","secondary","intermediate","medium","average","standard",
"economy","market","student","school","result","process","system","change","government","company","country","world",
"city","state","nation","society","community","group","family","home","house","room","door","window","wall","floor",
"ceiling","ground","land","water","air","fire","earth","nature","environment","climate","weather","season","spring",
"summer","autumn","winter","month","week","day","hour","minute","second","moment","period","era","age","century",
"year","decade","time","date","morning","afternoon","evening","night","today","tomorrow","yesterday","soon","late",
"early","past","present","future","now","then","always","never","often","sometimes","usually","frequently","rarely",
"occasionally","regularly","constantly","continuously","repeatedly","consistently","generally","typically","normally",
"commonly","widely","broadly","mostly","largely","mainly","primarily","chiefly","principally","especially","particularly",
"specifically","notably","remarkably","significantly","substantially","considerably","greatly","vastly","immensely",
"tremendously","enormously","hugely","extremely","exceedingly","extraordinarily","exceptionally","especially","specially",
"particularly","peculiarly","uniquely","distinctly","clearly","obviously","evidently","apparently","seemingly","ostensibly",
"supposedly","allegedly","reportedly","purportedly","reputedly","allegedly","presumably","probably","possibly","likely",
"maybe","perhaps","certainly","definitely","absolutely","undoubtedly","unquestionably","indeed","surely","truly","really",
"actually","literally","figuratively","virtually","essentially","basically","fundamentally","ultimately","eventually",
"finally","lastly","initially","firstly","secondly","thirdly","next","then","subsequently","consequently","therefore",
"thus","hence","accordingly","so","accordingly","correspondingly","respectively","alternatively","optionally","instead",
"otherwise","else","either","neither","nor","both","each","every","all","whole","entire","total","complete","full","half",
"partial","part","some","any","none","nothing","everything","something","anything","everybody","somebody","anybody",
"nobody","everyone","someone","anyone","no","most","many","several","few","little","much","plenty","enough","sufficient",
"more","less","least","fewer","greater","better","worse","best","worst","lower","higher","larger","smaller","older",
"younger","newer","newest","older","oldest","longer","longest","shorter","shortest","biggest","smallest","faster",
"fastest","slower","slowest","earlier","earliest","later","latest","nearer","nearest","farther","farthest","further",
"furthest","inner","outer","upper","lower","major","minor","chief","main","leading","primary","principal","key","central",
"core","essential","vital","basic","fundamental","root","underlying","majority","minority","most","least","subject","topic",
"theme","issue","matter","affair","business","concern","question","problem","trouble","difficulty","challenge","obstacle",
"barrier","hurdle","setback","advantage","benefit","gain","profit","interest","value","worth","price","cost","expense",
"fee","charge","rate","tax","income","revenue","salary","wage","pay","earnings","profit","loss","debt","loan","credit",
"finance","money","fund","capital","asset","property","wealth","resource","economy","trade","commerce","industry",
"business","market","sale","purchase","transaction","exchange","bargain","deal","agreement","contract","policy","rule",
"law","regulation","standard","principle","guideline","requirement","condition","term","provision","clause","section",
"article","document","file","record","report","account","statement","summary","review","analysis","evaluation","assessment",
"appraisal","estimate","prediction","forecast","projection","plan","strategy","tactic","approach","method","system","process",
"procedure","technique","practice","routine","habit","custom","tradition","culture","society","community","population",
"people","public","citizen","resident","inhabitant","native","foreigner","stranger","visitor","guest","host","member",
"participant","volunteer","worker","employee","employer","manager","director","leader","chief","head","president","chairman",
"officer","official","authority","representative","delegate","agent","spokesperson","advocate","supporter","opponent",
"enemy","ally","partner","colleague","associate","companion","friend","acquaintance","neighbor","relative","parent","child",
"father","mother","brother","sister","husband","wife","son","daughter","family","spouse","partner","relation","relationship",
"connection","association","bond","link","tie","attachment","affection","emotion","feeling","sensation","passion","desire",
"wish","hope","dream","ambition","goal","aim","objective","target","purpose","intention","plan","design","scheme","project",
"program","initiative","enterprise","venture","undertaking","effort","attempt","try","endeavor","struggle","fight","battle",
"war","conflict","dispute","argument","debate","discussion","conversation","talk","speech","lecture","presentation"
]);


// ---------- 词形还原（Stemming）----------
function stem(word) {
  // 不规则变化
  const irregular = {
    "studying": "study", "studies": "study",
    "running": "run", "trying": "try",
    "lying": "lie", "dying": "die",
    "making": "make", "taking": "take",
    "having": "have", "coming": "come",
    "giving": "give", "living": "live",
    "writing": "write", "sitting": "sit",
    "getting": "get", "putting": "put",
    "beginning": "begin", "swimming": "swim",
    "winning": "win", "stopping": "stop",
    "occurring": "occur", "preferred": "prefer",
    "referred": "refer", "controlled": "control",
    "labelled": "label", "cancelled": "cancel",
    "travelled": "travel", "counseled": "counsel",
    "marvellous": "marvelous",
  };
  if (irregular[word]) return irregular[word];

  let w = word;
  // -ing 后缀
  if (w.endsWith("ing")) {
    const base = w.slice(0, -3);
    if (base.length >= 3) return base;
    // 双写辅音还原：running → run
    const double = w.slice(0, -4);
    if (double.length >= 2 && double[double.length - 1] === double[double.length - 2]) {
      return double.slice(0, -1);
    }
    return w;
  }
  // -ed 后缀
  if (w.endsWith("ed")) {
    const base = w.slice(0, -2);
    if (base.length >= 3) return base;
    return w;
  }
  // -es / -s 后缀
  if (w.endsWith("es") && w.length > 4) {
    return w.slice(0, -2);
  }
  if (w.endsWith("s") && !w.endsWith("ss") && w.length > 4) {
    return w.slice(0, -1);
  }
  // -ly 后缀
  if (w.endsWith("ly") && w.length > 5) return w.slice(0, -2);
  // -er / -est 后缀
  if (w.endsWith("est") && w.length > 5) return w.slice(0, -3);
  if (w.endsWith("er") && w.length > 5) return w.slice(0, -2);

  return w;
}

// ---------- 自定义忽略列表 ----------
function loadIgnoreWords() {
  try {
    const stored = localStorage.getItem(IGNORE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch { return []; }
}

function saveIgnoreWords(list) {
  localStorage.setItem(IGNORE_KEY, JSON.stringify(list));
}

// ---------- 导入状态 ----------
let importOverlay = null;
let importModal = null;
let extractedWords = [];       // { word, count, length, exists, score }
let importLastText = "";       // 保留粘贴文本，用于返回编辑
let importSelectedDeckId = null;
let importLastClickedIdx = -1;

// ---------- 创建导入模态框 ----------
function ensureImportModal() {
  if (importOverlay) return;

  importOverlay = document.createElement("div");
  importOverlay.className = "modal-overlay";
  importOverlay.id = "importOverlay";

  importModal = document.createElement("div");
  importModal.className = "modal import-modal";
  importOverlay.appendChild(importModal);
  document.body.appendChild(importOverlay);

  // 点击蒙层关闭
  importOverlay.addEventListener("click", (e) => {
    if (e.target === importOverlay) closeImportModal();
  });

  // Escape 关闭
  importOverlay.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeImportModal();
  });
}

// ---------- 打开 / 关闭导入模态框 ----------
function openImportModal() {
  if (reviewContainer.style.display === "flex") return;
  ensureImportModal();
  importLastText = "";
  importSelectedDeckId = null;
  extractedWords = [];
  showPastePanel();
  importOverlay.classList.add("show");
}

function closeImportModal() {
  importOverlay.classList.remove("show");
  extractedWords = [];
  importLastText = "";
}

// ---------- 粘贴面板 ----------
function showPastePanel() {
  const deckOptions = [{ id: "", name: "未分类" }]
    .concat(decks)
    .map(d => `<option value="${d.id}" ${(importSelectedDeckId || null) === (d.id || null) ? "selected" : ""}>${escapeHtml(d.name)}</option>`)
    .join("");

  importModal.innerHTML = `
    <h2>📄 导入文章提取生词</h2>
    <div class="import-pdf-area">
      <input type="file" accept=".pdf" id="importPdfInput" style="display:none">
      <button class="import-pdf-btn" id="importPdfBtn">📎 上传 PDF</button>
      <span class="import-pdf-status" id="importPdfStatus"></span>
    </div>
    <textarea class="import-textarea" id="importTextarea" placeholder="在此粘贴英文文章，或上传 PDF 自动填入...">${escapeHtml(importLastText)}</textarea>
    <label for="importDeckSelect">目标卡组</label>
    <select id="importDeckSelect" style="width:100%;margin-bottom:16px;">${deckOptions}</select>
    <label class="import-check-label">
      <input type="checkbox" id="importSkipExisting" checked>
      跳过已有卡片中的单词
    </label>
    <div class="modal-actions">
      <button class="btn-cancel" id="importCancel">取消</button>
      <button class="btn-confirm" id="importExtract">提取生词</button>
    </div>
  `;

  // PDF 上传事件
  const pdfBtn = document.getElementById("importPdfBtn");
  const pdfInput = document.getElementById("importPdfInput");
  if (pdfBtn && pdfInput) {
    pdfBtn.addEventListener("click", () => pdfInput.click());
    pdfInput.addEventListener("change", handlePdfUpload);
  }

  document.getElementById("importCancel").addEventListener("click", closeImportModal);
  document.getElementById("importExtract").addEventListener("click", handleExtract);

  // 自动聚焦 textarea
  setTimeout(() => {
    const ta = document.getElementById("importTextarea");
    if (ta) {
      ta.focus();
      // 如果有之前保留的文本，将光标移到末尾
      if (importLastText) {
        ta.selectionStart = ta.value.length;
        ta.selectionEnd = ta.value.length;
      }
    }
  }, 100);
}

// ---------- PDF 文本提取 ----------
function handlePdfUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const statusEl = document.getElementById("importPdfStatus");
  const ta = document.getElementById("importTextarea");
  if (!statusEl || !ta) return;

  // 检查文件类型
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    statusEl.textContent = "⚠️ 请选择 PDF 文件";
    statusEl.style.color = "#e74c3c";
    return;
  }

  statusEl.textContent = "⏳ 正在解析 PDF...";
  statusEl.style.color = "#e8c170";

  const reader = new FileReader();
  reader.onload = async function (e) {
    try {
      const arrayBuffer = e.target.result;

      // 检查 pdf.js 是否已加载
      if (typeof pdfjsLib === "undefined") {
        statusEl.textContent = "⚠️ PDF 解析库未加载，请检查网络连接";
        statusEl.style.color = "#e74c3c";
        return;
      }

      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(" ");
        fullText += pageText + "\n\n";
      }

      if (fullText.trim().length === 0) {
        statusEl.textContent = "⚠️ 未能从 PDF 中提取到文本（可能是扫描件）";
        statusEl.style.color = "#e74c3c";
        return;
      }

      // 将提取的文本填入 textarea
      ta.value = fullText.trim();
      importLastText = ta.value;
      statusEl.textContent = "✅ 已提取 " + pdf.numPages + " 页，" + fullText.trim().split(/\s+/).length + " 个词";
      statusEl.style.color = "#2ecc71";

      // 自动滚动到 textarea 顶部
      ta.scrollTop = 0;

    } catch (err) {
      console.error("PDF 解析失败:", err);
      statusEl.textContent = "⚠️ PDF 解析失败：" + err.message;
      statusEl.style.color = "#e74c3c";
    }
  };

  reader.onerror = function () {
    statusEl.textContent = "⚠️ 文件读取失败";
    statusEl.style.color = "#e74c3c";
  };

  reader.readAsArrayBuffer(file);

  // 重置 input，允许重复上传同一个文件
  event.target.value = "";
}

// ---------- 离线模式：本地词频提取 ----------
function localExtractWords(text, skipExisting) {
  const ignoreWords = loadIgnoreWords();
  const ignoreSet = new Set(ignoreWords.map(w => w.toLowerCase()));

  let rawTokens = text
    .replace(/[^a-zA-Z]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 2);

  rawTokens = rawTokens.filter(t => !/^\d+$/.test(t));
  rawTokens = rawTokens.filter(t => {
    const lower = t.toLowerCase();
    return !STOP_WORDS.has(lower) && !ignoreSet.has(lower);
  });

  if (rawTokens.length === 0) return [];

  const freqMap = new Map();
  for (const t of rawTokens) {
    const key = t.toLowerCase();
    if (!freqMap.has(key)) freqMap.set(key, { count: 0, forms: new Map() });
    const entry = freqMap.get(key);
    entry.count++;
    entry.forms.set(t, (entry.forms.get(t) || 0) + 1);
  }

  const existingSet = new Set();
  for (const w of words) {
    const lower = w.word.toLowerCase();
    existingSet.add(lower);
    const stemmed = stem(lower);
    if (stemmed !== lower) existingSet.add(stemmed);
  }

  const wordList = [];
  for (const [key, entry] of freqMap) {
    let displayForm = key;
    let bestFreq = 0;
    let hasCapitalized = false, hasLowercase = false;
    for (const [form, freq] of entry.forms) {
      const isCap = /^[A-Z]/.test(form);
      if (isCap && (!hasCapitalized || freq > bestFreq)) {
        displayForm = form; bestFreq = freq; hasCapitalized = true;
      } else if (!hasCapitalized && freq > bestFreq) {
        displayForm = form; bestFreq = freq;
      }
      if (!isCap) hasLowercase = true;
    }

    const matched = existingSet.has(key) || existingSet.has(stem(key));
    const isProper = hasCapitalized && !hasLowercase && !STOP_WORDS.has(key);

    wordList.push({ word: displayForm, wordLower: key, count: entry.count, length: key.length, exists: matched, isProper });
  }

  let filtered = skipExisting !== false ? wordList.filter(w => !w.exists) : wordList;
  if (filtered.length === 0) return [];

  for (const w of filtered) {
    const lenScore = Math.min(1, w.length / 20);
    const rarityScore = COMMON_WORDS.has(w.wordLower) ? 0.2 : 1.0;
    const freshScore = w.exists ? 0 : 1;
    w.score = lenScore * 0.4 + rarityScore * 0.4 + freshScore * 0.2;
  }
  filtered.sort((a, b) => b.score - a.score);

  return filtered.map(w => ({ word: w.word, count: w.count, length: w.length, exists: w.exists, score: w.score, isProper: w.isProper }));
}

// ---------- 离线模式：本地批量添加 ----------
async function localBatchAddWords(selectedWords, deckId, defLang) {
  const results = [];
  let added = 0, skipped = 0;

  // 单个单词释义获取（离线模式下仅联网获取释义）
  async function fetchDef(word) {
    if (defLang === "none") return { translation: "", definition: "" };
    try {
      if (defLang === "zh") {
        const targetLang = settings.defLang || "zh-CN";
        const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|${targetLang}`);
        if (!r.ok) return { translation: "", definition: "" };
        const data = await r.json();
        const trans = (data.responseData && data.responseData.translatedText) ? data.responseData.translatedText : "";
        return { translation: trans, definition: "" };
      } else {
        const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (!r.ok) return { translation: "", definition: "" };
        const data = await r.json();
        if (data && data[0] && data[0].meanings && data[0].meanings[0]) {
          const def = data[0].meanings[0].definitions[0].definition;
          return { translation: "", definition: def.charAt(0).toUpperCase() + def.slice(1) };
        }
        return { translation: "", definition: "" };
      }
    } catch { return { translation: "", definition: "" }; }
  }

  const BATCH_SIZE = 5;
  for (let i = 0; i < selectedWords.length; i += BATCH_SIZE) {
    const batch = selectedWords.slice(i, i + BATCH_SIZE);
    const defResults = await Promise.allSettled(batch.map(word => fetchDef(word)));

    for (let j = 0; j < batch.length; j++) {
      const word = batch[j];
      const existing = words.find(w => w.word.toLowerCase() === word.toLowerCase());
      if (existing) { skipped++; results.push({ word, skipped: true }); continue; }

      let translation = "", definition = "";
      if (defResults[j].status === "fulfilled") {
        translation = defResults[j].value.translation;
        definition = defResults[j].value.definition;
      }

      const newWord = { id: nextId++, word, translation, definition, deckId: deckId || null };
      words.push(newWord);
      results.push({ word, translation, definition, skipped: false, id: newWord.id });
      added++;
    }
  }

  saveWordsLocal();
  return { added, skipped, results };
}

// ---------- 词频提取 ----------
async function handleExtract() {
  const ta = document.getElementById("importTextarea");
  const text = (ta ? ta.value : "").trim();
  if (!text) {
    showToast("请先粘贴文章内容", "error");
    return;
  }

  // 保留文本，用于返回编辑
  importLastText = ta.value;

  const skipExisting = document.getElementById("importSkipExisting").checked;
  const deckSelect = document.getElementById("importDeckSelect");
  importSelectedDeckId = deckSelect && deckSelect.value ? parseInt(deckSelect.value, 10) : null;

  // 显示加载状态
  const extractBtn = document.getElementById("importExtract");
  const origText = extractBtn ? extractBtn.textContent : "";
  if (extractBtn) {
    extractBtn.disabled = true;
    extractBtn.textContent = "⏳ 提取中...";
  }

  try {
    const result = await DataLayer.extractWords(text, skipExisting);
    extractedWords = result;
    if (extractedWords.length === 0) {
      showToast("未提取到任何新单词", "info");
      return;
    }
    showResultsPanel();
  } catch (err) {
    showToast("提取失败：" + err.message, "error");
  } finally {
    if (extractBtn) {
      extractBtn.disabled = false;
      extractBtn.textContent = origText;
    }
  }
}

// ---------- 提取结果面板 ----------
function showResultsPanel() {
  const totalUnique = extractedWords.length;
  const newCount = extractedWords.filter(w => !w.exists).length;
  // 可勾选：非已有 且 非专有（专有默认不选）
  const selectableCount = extractedWords.filter(w => !w.exists && !w.isProper).length;

  let rowsHtml = "";
  for (let i = 0; i < extractedWords.length; i++) {
    const w = extractedWords[i];
    const rowClass = w.exists ? "word-existing" : "word-new";
    // 默认选中：不在已有卡片中 且 不是专有名词
    const checked = (!w.exists && !w.isProper) ? "checked" : "";
    const disabled = w.exists ? "disabled" : "";
    const existsMark = w.exists ? " ✅" : "";
    const properMark = w.isProper ? ' <span style="color:#74b9ff;font-size:0.78rem;">[专有]</span>' : "";
    rowsHtml += `
      <div class="import-result-row">
        <input type="checkbox" class="import-word-check" data-word="${escapeHtml(w.word)}" ${checked} ${disabled}>
        <span class="${rowClass}" style="flex:1;">${escapeHtml(w.word)}${existsMark}${properMark}</span>
        <span class="word-meta">${w.count} 次</span>
        <span class="word-meta">${w.length} 字母</span>
        ${!w.exists ? `<button class="import-uncheck-down" data-word="${escapeHtml(w.word)}" title="取消此词及下方所有">⤵✕</button>` : ''}
      </div>`;
  }

  importModal.innerHTML = `
    <h2>📊 提取结果</h2>
    <div class="import-summary">
      共提取 <strong>${totalUnique}</strong> 个不重复单词，其中 <strong>${newCount}</strong> 个新词
    </div>
    <div style="margin-bottom:12px;">
      <button class="import-toggle-btn" id="importToggleAll">全选 / 取消全选</button>
    </div>
    <div class="import-results-list" id="importResultsList">
      ${rowsHtml}
    </div>
    <div class="modal-actions">
      <button class="btn-cancel" id="importBack">返回编辑</button>
      <button class="btn-confirm" id="importBatchAdd">批量添加（<span id="importBatchCount">${selectableCount}</span> 张）</button>
    </div>
  `;

  // 事件绑定
  document.getElementById("importBack").addEventListener("click", () => {
    showPastePanel();
  });

  document.getElementById("importBatchAdd").addEventListener("click", handleBatchAdd);
  document.getElementById("importToggleAll").addEventListener("click", handleToggleAll);

  // 复选框变化时更新计数
  document.getElementById("importResultsList").addEventListener("change", updateImportBatchCount);

  // ⬇ 按钮：取消此词及下方全部
  document.getElementById("importResultsList").addEventListener("click", (e) => {
    const btn = e.target.closest(".import-uncheck-down");
    if (!btn) return;
    const word = btn.dataset.word;
    const allRows = document.querySelectorAll(".import-result-row");
    let found = false;
    for (const row of allRows) {
      const check = row.querySelector(".import-word-check");
      if (!check || check.disabled) continue;
      if (!found) {
        if (check.dataset.word === word) found = true;
        if (!found) continue;
      }
      check.checked = false;
    }
    updateImportBatchCount();
  });
}

// ---------- 全选 / 取消全选 ----------
function handleToggleAll() {
  const checks = document.querySelectorAll(".import-word-check:not([disabled])");
  if (checks.length === 0) return;
  const allChecked = Array.from(checks).every(c => c.checked);
  checks.forEach(c => { c.checked = !allChecked; });
  updateImportBatchCount();
}

// ---------- 更新批量添加计数 ----------
function updateImportBatchCount() {
  const checks = document.querySelectorAll(".import-word-check:checked");
  const countSpan = document.getElementById("importBatchCount");
  if (countSpan) countSpan.textContent = checks.length;
}

// ---------- 批量创建卡片 ----------
async function handleBatchAdd() {
  const checks = document.querySelectorAll(".import-word-check:checked");
  if (checks.length === 0) {
    showToast("请至少选择一个单词", "error");
    return;
  }

  const selectedWords = Array.from(checks).map(c => c.dataset.word);
  const deckId = importSelectedDeckId;
  const defLang = settings.defLang || "en";

  // 显示加载状态
  const btn = document.getElementById("importBatchAdd");
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = "⏳ 添加中...";

  try {
    const result = await DataLayer.batchAddWords(selectedWords, deckId, defLang);

    // 将新单词加入本地数组
    for (const r of result.results) {
      if (!r.skipped) {
        words.push({
          id: r.id,
          word: r.word,
          translation: r.translation || "",
          definition: r.definition || "",
          deckId: deckId,
          deck_id: deckId,
        });
      }
    }

    renderDeckSidebar();
    renderGrid();
    renderStats();
    updateDueBadge();

    const total = result.added + (result.skipped || 0);
    const fetchedInfo = defLang !== "none"
      ? "（其中 " + result.results.filter(r => r.translation || r.definition).length + " 个已获取释义）"
      : "";
    var skipInfo = result.skipped > 0 ? "，跳过 " + result.skipped + " 个已存在" : "";
    showToast("✅ 成功添加 " + result.added + " 张卡片" + skipInfo + fetchedInfo + "！", "success");
  } catch (err) {
    showToast("批量添加失败：" + err.message, "error");
  } finally {
    btn.disabled = false;
    btn.textContent = origText;
  }

  closeImportModal();
}

// ---- Round 2: 浏览器视图 ----
function toggleViewMode() {
  viewMode = viewMode === "grid" ? "browser" : "grid";
  const btn = document.getElementById("browserToggleBtn");
  if (btn) btn.textContent = viewMode === "grid" ? "📋 列表" : "📋 网格";
  const gridEl = document.getElementById("cardGrid");
  const browserView = document.getElementById("browserView");
  const browserFilters = document.getElementById("browserFilters");
  if (viewMode === "grid") {
    gridEl.style.display = "";
    browserView.style.display = "none";
    browserFilters.style.display = "none";
    renderGrid();
    renderStats();
  } else {
    gridEl.style.display = "none";
    browserView.style.display = "flex";
    browserFilters.style.display = "flex";
    browserPage = 1;
    renderBrowserView();
    renderStats();
  }
}

function getBrowserFilteredWords() {
  let result = words;

  // 卡组过滤（含子卡组）
  if (selectedDeckId !== null) {
    const deckIds = getDeckAndChildIds(selectedDeckId);
    result = result.filter(w => deckIds.includes(w.deckId === undefined ? null : w.deckId));
  }

  // 标签过滤
  if (selectedTagIds.length > 0) {
    result = result.filter(w => {
      const wordTags = w.tags || [];
      return selectedTagIds.every(tid => wordTags.includes(tid));
    });
  }

  // 挂起过滤
  if (suspendedFilter) {
    result = result.filter(w => getReviewData(w.id).suspended);
  }

  // 标记过滤
  if (flagFilter !== null) {
    result = result.filter(w => getReviewData(w.id).flag === flagFilter);
  }

  // 状态过滤
  if (browserStatusFilter !== "all") {
    result = result.filter(w => {
      const rd = getReviewData(w.id);
      if (browserStatusFilter === "new") return !rd || rd.cardState === "new";
      return rd.cardState === browserStatusFilter;
    });
  }

  // 到期过滤
  if (browserDueFilter !== "all") {
    const now = new Date();
    const todayEnd = new Date(now); todayEnd.setHours(23, 59, 59, 999);
    const tomorrowEnd = new Date(now); tomorrowEnd.setDate(tomorrowEnd.getDate() + 1); tomorrowEnd.setHours(23, 59, 59, 999);
    const weekEnd = new Date(now); weekEnd.setDate(weekEnd.getDate() + 7); weekEnd.setHours(23, 59, 59, 999);

    result = result.filter(w => {
      const rd = getReviewData(w.id);
      if (!rd.nextReview) return browserDueFilter === "none";
      const nr = new Date(rd.nextReview);
      switch (browserDueFilter) {
        case "today": return nr <= todayEnd;
        case "tomorrow": return nr > todayEnd && nr <= tomorrowEnd;
        case "week": return nr > todayEnd && nr <= weekEnd;
        case "overdue": return nr < now && rd.cardState !== "new" && rd.cardState !== "mastered";
        case "none": return false;
        default: return true;
      }
    });
  }

  // 搜索过滤
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    if (q.startsWith("tag:")) {
      const tagName = q.slice(4).toLowerCase();
      result = result.filter(w => {
        const wordTagIds = w.tags || [];
        return wordTagIds.some(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t && t.name.toLowerCase().includes(tagName);
        });
      });
    } else {
      result = result.filter(w => {
        const wordTags = (w.tags || []).map(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t ? t.name.toLowerCase() : "";
        });
        return w.word.toLowerCase().includes(q) ||
          w.translation.toLowerCase().includes(q) ||
          w.definition.toLowerCase().includes(q) ||
          wordTags.some(tn => tn.includes(q));
      });
    }
  }

  return result;
}

function browserSort(field) {
  if (browserSortField === field) {
    browserSortDir = browserSortDir === "asc" ? "desc" : "asc";
  } else {
    browserSortField = field;
    browserSortDir = "asc";
  }
  browserPage = 1;
  renderBrowserView();
}

function getBrowserSortedWords(filtered) {
  const sorted = [...filtered];
  sorted.sort((a, b) => {
    let va, vb;
    const rda = getReviewData(a.id);
    const rdb = getReviewData(b.id);
    switch (browserSortField) {
      case "word": va = a.word.toLowerCase(); vb = b.word.toLowerCase(); break;
      case "translation": va = a.translation.toLowerCase(); vb = b.translation.toLowerCase(); break;
      case "deck": {
        const da = decks.find(d => d.id === a.deckId);
        const db = decks.find(d => d.id === b.deckId);
        va = da ? da.name.toLowerCase() : ""; vb = db ? db.name.toLowerCase() : "";
        break;
      }
      case "tags": {
        va = (a.tags || []).map(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t ? t.name : "";
        }).join(",").toLowerCase();
        vb = (b.tags || []).map(tid => {
          const t = tags.find(tg => tg.id === tid);
          return t ? t.name : "";
        }).join(",").toLowerCase();
        break;
      }
      case "flag": va = rda.flag || 0; vb = rdb.flag || 0; break;
      case "difficulty": va = rda.difficulty || 2; vb = rdb.difficulty || 2; break;
      case "status": {
        const sm = { new: 0, learning: 1, review: 2, mastered: 3 };
        va = sm[rda.cardState] || 0; vb = sm[rdb.cardState] || 0;
        break;
      }
      case "nextReview": {
        va = rda.nextReview ? new Date(rda.nextReview).getTime() : 0;
        vb = rdb.nextReview ? new Date(rdb.nextReview).getTime() : 0;
        break;
      }
      default: va = 0; vb = 0;
    }
    if (va < vb) return browserSortDir === "asc" ? -1 : 1;
    if (va > vb) return browserSortDir === "asc" ? 1 : -1;
    return 0;
  });
  return sorted;
}

function renderBrowserView() {
  const filtered = getBrowserFilteredWords();
  const sorted = getBrowserSortedWords(filtered);

  const useBatching = sorted.length > 200;
  // 非「加载更多」触发的渲染，重置分批数量
  if (!browserIsLoadingMore) {
    browserDisplayLimit = 100;
  }

  let displayItems, displayLimit;
  if (useBatching) {
    displayLimit = browserDisplayLimit;
    displayItems = sorted.slice(0, displayLimit);
  } else {
    const totalPages = Math.ceil(sorted.length / BROWSER_PAGE_SIZE) || 1;
    if (browserPage > totalPages) browserPage = totalPages;
    const start = (browserPage - 1) * BROWSER_PAGE_SIZE;
    displayLimit = sorted.length;
    displayItems = sorted.slice(start, start + BROWSER_PAGE_SIZE);
  }

  const tbody = document.getElementById("browserTableBody");
  if (!tbody) return;

  const flagEmojis = { 1: "🔴", 2: "🟠", 3: "🟢", 4: "🔵" };

  tbody.innerHTML = displayItems.map(w => {
    const rd = getReviewData(w.id);
    const wordTags = (w.tags || []).map(tid => tags.find(tg => tg.id === tid)).filter(Boolean);
    const deck = decks.find(d => d.id === w.deckId);
    const statusLabel = getCardStatusLabel(w.id);
    const nextReviewStr = rd.nextReview ? new Date(rd.nextReview).toLocaleDateString("zh-CN") : "-";
    const isSelected = browserSelectedCards.has(w.id);
    const isSuspended = rd.suspended;

    return `
      <tr class="${isSelected ? 'selected' : ''} ${isSuspended ? 'suspended-row' : ''}">
        <td><input type="checkbox" ${isSelected ? 'checked' : ''} onclick="browserToggleCard(${w.id})"></td>
        <td class="browser-word">
          ${escapeHtml(w.word)}
          <button class="card-tts-btn" style="display:inline-flex;width:20px;height:20px;font-size:10px;" onclick="event.stopPropagation();speakWord('${escapeHtml(w.word)}')">🔊</button>
        </td>
        <td>${escapeHtml(w.translation)}</td>
        <td>${deck ? escapeHtml(deck.name) : "-"}</td>
        <td>${wordTags.map(t => `<span class="browser-tag-chip" style="background:${t.color}">${escapeHtml(t.name)}</span>`).join(" ") || "-"}</td>
        <td>${rd.flag ? `<span class="browser-flag-dot" style="background:${['','#e74c3c','#e67e22','#2ecc71','#3498db'][rd.flag]}" onclick="event.stopPropagation();cycleCardFlag(${w.id})" title="${flagEmojis[rd.flag]}"></span>` : `<span class="browser-flag-dot" style="background:transparent;border-color:#333;" onclick="event.stopPropagation();cycleCardFlag(${w.id})" title="设置标记"></span>`}</td>
        <td style="font-size:1.1rem;text-align:center;">${getDifficultyEmoji(rd.difficulty)}</td>
        <td><span class="card-status ${statusLabel.class}" style="position:static;display:inline-block;">${statusLabel.text}</span>${isSuspended ? '<span class="suspended-badge">🚫</span>' : ''}</td>
        <td style="font-size:0.78rem;color:#888;">${nextReviewStr}</td>
        <td>
          <span class="browser-row-actions">
            <button onclick="showCardInfo(${w.id})" title="详情">ℹ️</button>
            <button onclick="openEditModal(${w.id})" title="编辑">✏️</button>
            <button class="browser-action-suspend" onclick="toggleSuspendCard(${w.id})" title="${isSuspended ? '恢复' : '挂起'}">${isSuspended ? '▶️' : '🚫'}</button>
            <button class="browser-action-delete" onclick="if(confirm('确定删除?'))deleteWord(${w.id})" title="删除">🗑️</button>
          </span>
        </td>
      </tr>
    `;
  }).join("");

  // 更新分页或加载更多
  if (useBatching) {
    renderBrowserLoadMore(sorted.length, displayLimit);
  } else {
    const totalPages = Math.ceil(sorted.length / BROWSER_PAGE_SIZE) || 1;
    if (browserPage > totalPages) browserPage = totalPages;
    renderBrowserPagination(totalPages);
  }
  // 更新排序表头
  updateSortHeaderUI();
  // 更新批量操作
  updateBatchToolbar();
}

function renderBrowserPagination(totalPages) {
  const el = document.getElementById("browserPagination");
  if (!el) return;
  if (totalPages <= 1) { el.innerHTML = ""; return; }
  let html = "";
  html += `<button ${browserPage <= 1 ? 'disabled' : ''} onclick="browserGoPage(${browserPage - 1})">◀</button>`;
  const startP = Math.max(1, browserPage - 3);
  const endP = Math.min(totalPages, browserPage + 3);
  for (let i = startP; i <= endP; i++) {
    html += `<button class="${i === browserPage ? 'active' : ''}" onclick="browserGoPage(${i})">${i}</button>`;
  }
  html += `<button ${browserPage >= totalPages ? 'disabled' : ''} onclick="browserGoPage(${browserPage + 1})">▶</button>`;
  el.innerHTML = html;
}

function renderBrowserLoadMore(total, loaded) {
  const el = document.getElementById("browserPagination");
  if (!el) return;
  if (loaded >= total) {
    el.innerHTML = `<div class="summary-line" style="text-align:center;color:#888;">${t('allLoaded')}</div>`;
    return;
  }
  el.innerHTML = `<button class="load-more-btn" onclick="loadMoreCards()">${t('loadMore')} (${loaded}/${total})</button>`;
}

function loadMoreCards() {
  const filtered = getBrowserFilteredWords();
  const sorted = getBrowserSortedWords(filtered);
  browserDisplayLimit = Math.min(browserDisplayLimit + 100, sorted.length);
  browserIsLoadingMore = true;
  renderBrowserView();
  browserIsLoadingMore = false;
}

function browserGoPage(page) {
  browserPage = page;
  renderBrowserView();
}

function browserToggleSelectAll() {
  const filtered = getBrowserFilteredWords();
  const sorted = getBrowserSortedWords(filtered);
  const useBatching = sorted.length > 200;
  let pageItems;
  if (useBatching) {
    pageItems = sorted.slice(0, browserDisplayLimit);
  } else {
    const start = (browserPage - 1) * BROWSER_PAGE_SIZE;
    pageItems = sorted.slice(start, start + BROWSER_PAGE_SIZE);
  }
  const allSelected = pageItems.every(w => browserSelectedCards.has(w.id));
  if (allSelected) {
    pageItems.forEach(w => browserSelectedCards.delete(w.id));
  } else {
    pageItems.forEach(w => browserSelectedCards.add(w.id));
  }
  document.getElementById("browserSelectAll").checked = !allSelected;
  renderBrowserView();
}

function browserToggleCard(wordId) {
  if (browserSelectedCards.has(wordId)) {
    browserSelectedCards.delete(wordId);
  } else {
    browserSelectedCards.add(wordId);
  }
  updateBatchToolbar();
}

function updateBatchToolbar() {
  const toolbar = document.getElementById("browserBatchToolbar");
  const countEl = document.getElementById("browserBatchCount");
  if (!toolbar || !countEl) return;
  const count = browserSelectedCards.size;
  toolbar.style.display = count > 0 ? "flex" : "none";
  countEl.textContent = `已选 ${count} 张`;
}

async function browserBatchDelete() {
  if (!confirm(`确定删除选中的 ${browserSelectedCards.size} 张卡片？`)) return;
  for (const id of browserSelectedCards) {
    try { await DataLayer.deleteWord(id); } catch {}
    words = words.filter(w => w.id !== id);
    delete reviewData[id];
  }
  browserSelectedCards.clear();
  saveWordsLocal();
  saveReviewLocal();
  renderBrowserView();
  renderDeckSidebar();
  renderStats();
  updateDueBadge();
  showToast("已删除选中卡片", "info");
}

async function browserBatchMoveDeck() {
  const deckName = prompt("请输入目标卡组名称（留空=创建新卡组）：");
  if (deckName === null) return;
  let targetDeckId = null;
  if (deckName.trim()) {
    const existing = decks.find(d => d.name === deckName.trim());
    if (existing) {
      targetDeckId = existing.id;
    } else {
      try {
        const created = await DataLayer.addDeck(deckName.trim());
        decks.push(created);
        targetDeckId = created.id;
      } catch { return; }
    }
  }
  for (const id of browserSelectedCards) {
    const w = words.find(w => w.id === id);
    if (w) w.deckId = targetDeckId;
  }
  saveWordsLocal();
  browserSelectedCards.clear();
  renderBrowserView();
  renderDeckSidebar();
  renderStats();
  showToast(`已移动 ${browserSelectedCards.size} 张卡片`, "info");
  browserSelectedCards.clear();
}

function browserBatchAddTag() {
  if (tags.length === 0) { showToast("请先创建标签", "error"); return; }
  const tagNames = tags.map(t => `${t.id}: ${t.name}`).join("\n");
  const tagId = prompt("输入标签ID：\n" + tagNames);
  if (!tagId) return;
  const tid = parseInt(tagId, 10);
  if (!tags.find(t => t.id === tid)) { showToast("无效的标签ID", "error"); return; }
  for (const id of browserSelectedCards) {
    const w = words.find(w => w.id === id);
    if (w) {
      if (!w.tags) w.tags = [];
      if (!w.tags.includes(tid)) w.tags.push(tid);
    }
  }
  saveWordsLocal();
  browserSelectedCards.clear();
  renderBrowserView();
  showToast("已添加标签", "info");
}

function browserBatchSuspend() {
  for (const id of browserSelectedCards) {
    getReviewData(id).suspended = true;
  }
  saveReviewLocal();
  browserSelectedCards.clear();
  renderBrowserView();
  showToast("已挂起选中卡片", "info");
}

function browserBatchUnsuspend() {
  for (const id of browserSelectedCards) {
    getReviewData(id).suspended = false;
  }
  saveReviewLocal();
  browserSelectedCards.clear();
  renderBrowserView();
  showToast("已恢复选中卡片", "info");
}

function browserBatchSetDifficulty() {
  if (browserSelectedCards.size === 0) { showToast("请先选择卡片", "error"); return; }
  const choice = prompt("设置难度：\n1 = 😊 简单\n2 = 🤔 中等\n3 = 😰 困难\n\n请输入 1、2 或 3：");
  if (choice === null) return;
  const diff = parseInt(choice, 10);
  if (diff !== 1 && diff !== 2 && diff !== 3) { showToast("无效选择，请输入 1、2 或 3", "error"); return; }
  for (const id of browserSelectedCards) {
    getReviewData(id).difficulty = diff;
  }
  saveReviewLocal();
  const count = browserSelectedCards.size;
  browserSelectedCards.clear();
  renderBrowserView();
  showToast(`已将 ${count} 张卡片设为${diff === 1 ? '简单' : diff === 3 ? '困难' : '中等'}`, "info");
}

function setBrowserStatusFilter(status) {
  browserStatusFilter = status;
  browserPage = 1;
  document.querySelectorAll(".browser-filter-chip[data-status]").forEach(b => b.classList.remove("active"));
  document.querySelector(`.browser-filter-chip[data-status="${status}"]`)?.classList.add("active");
  renderBrowserView();
}

function setBrowserDueFilter(due) {
  browserDueFilter = due;
  browserPage = 1;
  document.querySelectorAll(".browser-filter-chip[data-due]").forEach(b => b.classList.remove("active"));
  document.querySelector(`.browser-filter-chip[data-due="${due}"]`)?.classList.add("active");
  renderBrowserView();
}

function updateSortHeaderUI() {
  document.querySelectorAll(".browser-table th[data-sort]").forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
    if (th.dataset.sort === browserSortField) {
      th.classList.add(browserSortDir === "asc" ? "sort-asc" : "sort-desc");
    }
  });
}

// ---- Round 2: 卡片信息弹窗 ----
function showCardInfo(wordId) {
  const w = words.find(w => w.id === wordId);
  if (!w) return;
  const rd = getReviewData(wordId);
  const deck = decks.find(d => d.id === w.deckId);
  const wordTags = (w.tags || []).map(tid => tags.find(tg => tg.id === tid)).filter(Boolean);

  const overlay = document.getElementById("cardInfoOverlay");
  const modal = document.getElementById("cardInfoModal");
  if (!overlay || !modal) return;

  const stateLabels = { new: t("newCardLabel"), learning: t("learningLabel"), review: t("reviewLabel"), mastered: t("masteredLabel") };
  const flagEmojis = { 1: "🔴", 2: "🟠", 3: "🟢", 4: "🔵" };

  const historyHtml = (rd.history || []).slice(0, 10).map(h => {
    const gradeLabels = { again: t("again"), hard: t("hardBtn"), good: t("good"), easy: t("easyBtn") };
    return `
      <div class="card-info-history-item grade-${h.gradeKey}">
        <span>${gradeLabels[h.gradeKey] || h.gradeKey}</span>
        <span style="font-size:0.7rem;">${new Date(h.date).toLocaleString("zh-CN")}</span>
      </div>
    `;
  }).join("") || `<div style="color:#555;font-size:0.8rem;">${t('noHistory')}</div>`;

  modal.innerHTML = `
    <h2>${escapeHtml(w.word)} ${t('cardInfoTitle')}</h2>
    <div class="card-info-section">
      <h3>${t('basicInfo')}</h3>
      <div class="card-info-row"><span class="label">${t('translation')}</span><span class="value">${escapeHtml(w.translation)}</span></div>
      <div class="card-info-row"><span class="label">${t('definitionLabel')}</span><span class="value">${escapeHtml(w.definition || "-")}</span></div>
      <div class="card-info-row"><span class="label">${t('deck')}</span><span class="value">${deck ? escapeHtml(deck.name) : t('uncategorized')}</span></div>
      <div class="card-info-row"><span class="label">${t('tags')}</span><span class="value">${wordTags.length > 0 ? wordTags.map(t => `<span class="browser-tag-chip" style="background:${t.color}">${escapeHtml(t.name)}</span>`).join(" ") : "-"}</span></div>
      <div class="card-info-row"><span class="label">${t('flag')}</span><span class="value">${rd.flag ? (flagEmojis[rd.flag] || "-") : "-"}</span></div>
    </div>
    <div class="card-info-section">
      <h3>${t('reviewStats')}</h3>
      <div class="card-info-row"><span class="label">${t('cardState')}</span><span class="value">${stateLabels[rd.cardState] || t('newCardLabel')}</span></div>
      <div class="card-info-row"><span class="label">${t('reps')}</span><span class="value">${rd.reps || 0}</span></div>
      <div class="card-info-row"><span class="label">${t('easeFactor')}</span><span class="value">${(rd.ef || 2.5).toFixed(2)}</span></div>
      <div class="card-info-row"><span class="label">${t('interval')}</span><span class="value">${rd.interval || 0} ${t('days')}</span></div>
      <div class="card-info-row"><span class="label">${t('nextReview')}</span><span class="value">${rd.nextReview ? new Date(rd.nextReview).toLocaleDateString() : "-"}</span></div>
      <div class="card-info-row"><span class="label">${t('learningStep')}</span><span class="value">${(rd.cardState === "learning" && rd.learningStep) ? `Step ${rd.learningStep}/2` : "-"}</span></div>
      <div class="card-info-row"><span class="label">${t('suspendedStatus')}</span><span class="value">${rd.suspended ? t('suspend') : t('none')}</span></div>
    </div>
    <div class="card-info-section">
      <h3>${t('reviewHistory')}</h3>
      ${historyHtml}
    </div>
    <div class="card-info-section">
      <h3>${t('difficultySection')}</h3>
      <div class="difficulty-selector" id="cardInfoDiffSelector">
        <button class="diff-btn diff-easy ${rd.difficulty === 1 ? 'active' : ''}" onclick="setCardDifficulty(${wordId}, 1, this)">${t('easy')}</button>
        <button class="diff-btn diff-medium ${(rd.difficulty || 2) === 2 ? 'active' : ''}" onclick="setCardDifficulty(${wordId}, 2, this)">${t('medium')}</button>
        <button class="diff-btn diff-hard ${rd.difficulty === 3 ? 'active' : ''}" onclick="setCardDifficulty(${wordId}, 3, this)">${t('hard')}</button>
      </div>
    </div>
    <div class="card-info-actions">
      <button onclick="speakWord('${escapeHtml(w.word)}')">${t('speak')}</button>
      <button onclick="rescheduleCard(${wordId})">${t('reschedule')}</button>
      <button onclick="resetCard(${wordId})">${t('resetCard')}</button>
      <button onclick="masterCard(${wordId})">${t('markMastered')}</button>
      <button onclick="toggleSuspendCard(${wordId})">${rd.suspended ? t('toggleUnsuspend') : t('toggleSuspend')}</button>
      <button class="danger" onclick="closeCardInfo()">${t('close')}</button>
    </div>
  `;

  overlay.classList.add("show");
}

function closeCardInfo() {
  document.getElementById("cardInfoOverlay").classList.remove("show");
}

function setCardDifficulty(wordId, diff, el) {
  const rd = getReviewData(wordId);
  rd.difficulty = diff;
  saveReviewLocal();
  // Update button active states
  const selector = document.getElementById("cardInfoDiffSelector");
  if (selector) {
    selector.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
  }
  if (el) el.classList.add("active");
  if (viewMode === "grid") renderGrid();
  else renderBrowserView();
  showToast("难度已更新", "success");
}

function rescheduleCard(wordId) {
  const days = prompt("输入天数（正数=推迟，0=今天）：", "0");
  if (days === null) return;
  const d = parseInt(days, 10);
  if (isNaN(d) || d < 0) { showToast("请输入有效天数", "error"); return; }
  const rd = getReviewData(wordId);
  const next = new Date();
  next.setDate(next.getDate() + d);
  next.setHours(0, 0, 0, 0);
  rd.nextReview = next.toISOString();
  rd.cardState = "review";
  saveReviewLocal();
  closeCardInfo();
  renderGrid();
  showToast(`已重排，${d === 0 ? '今天' : d + '天后'}到期`, "info");
}

function resetCard(wordId) {
  if (!confirm("确定重置此卡片？所有复习记录将被清除。")) return;
  const existingDifficulty = reviewData[wordId] ? (reviewData[wordId].difficulty || 2) : 2;
  reviewData[wordId] = {
    nextReview: null, interval: 0, reps: 0, ef: 2.5,
    cardState: "new", learningStep: 0,
    suspended: false, flag: null, history: [],
    difficulty: existingDifficulty,
  };
  saveReviewLocal();
  closeCardInfo();
  renderGrid();
  renderStats();
  showToast("卡片已重置", "info");
}

function masterCard(wordId) {
  const rd = getReviewData(wordId);
  rd.cardState = "mastered";
  rd.interval = 9999;
  rd.reps = 10;
  rd.nextReview = null;
  saveReviewLocal();
  closeCardInfo();
  renderGrid();
  renderStats();
  showToast("已设为已掌握 ✅", "success");
}

function toggleSuspendCard(wordId) {
  const rd = getReviewData(wordId);
  rd.suspended = !rd.suspended;
  saveReviewLocal();
  updateFilterCounts();
  if (viewMode === "grid") renderGrid();
  else renderBrowserView();
  showToast(rd.suspended ? "已挂起 🚫" : "已恢复 ▶️", "info");
}

function cycleCardFlag(wordId) {
  const rd = getReviewData(wordId);
  if (rd.flag === null) rd.flag = 1;
  else if (rd.flag < 4) rd.flag++;
  else rd.flag = null;
  saveReviewLocal();
  if (viewMode === "grid") renderGrid();
  else renderBrowserView();
}

// ---- Round 2: 撤销 ----
function performUndo() {
  if (undoStack.length === 0) { showToast("没有可撤销的操作", "info"); return; }
  const prev = undoStack.pop();
  const rd = getReviewData(prev.wordId);

  // 恢复复习数据
  rd.nextReview = prev.nextReview;
  rd.interval = prev.interval;
  rd.reps = prev.reps;
  rd.ef = prev.ef;
  rd.cardState = prev.cardState;
  rd.learningStep = prev.learningStep;

  // 移除最后一条答题历史
  if (rd.history && rd.history.length > 0 && rd.history[0].gradeKey) {
    rd.history.shift();
  }

  // 恢复评分分布和计数
  gradeDistribution = prev.gradeDistribution;
  reviewSessionCount = prev.reviewSessionCount;

  // 在队列头部重新插入这张卡
  reviewQueue = [prev.wordId, ...reviewQueue];

  saveReviewLocal();
  showToast("已撤销 ↩️", "undo");

  // 如果当前正面朝上，更新显示
  if (!reviewCard.classList.contains("flipped")) {
    reviewActions.style.display = "none";
  }
  showNextCard();
}

// ---- Round 2: TTS ----
function speakWord(word) {
  if (!window.speechSynthesis) { showToast("浏览器不支持语音朗读", "error"); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  const langMap = { "zh-CN": "zh-CN", "zh": "zh-CN", ja: "ja-JP", fr: "fr-FR", de: "de-DE", ko: "ko-KR", es: "es-ES" };
  const ttsLang = langMap[settings.defLang] || "en-US";
  utterance.lang = ttsLang;
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function speakReviewWord() {
  if (reviewQueue.length === 0) return;
  const wordId = reviewQueue[0];
  const w = words.find(w => w.id === wordId);
  if (!w) return;
  const btn = document.getElementById("reviewTtsBtn");
  if (btn) {
    btn.classList.add("speaking");
    setTimeout(() => btn.classList.remove("speaking"), 1500);
  }
  speakWord(w.word);
}

// ---- Round 2: 复习中挂起和标记 ----
function toggleSuspendReviewCard() {
  if (reviewQueue.length === 0) return;
  const wordId = reviewQueue[0];
  const rd = getReviewData(wordId);
  rd.suspended = !rd.suspended;
  saveReviewLocal();
  if (rd.suspended) {
    // 从队列中移除
    reviewQueue.shift();
    showToast("已挂起，跳过此卡片 🚫", "info");
    showNextCard();
  } else {
    showToast("已取消挂起 ▶️", "info");
  }
}

let flagPopupVisible = false;

function toggleFlagPopup() {
  const popup = document.getElementById("flagPopup");
  if (!popup) return;
  if (flagPopupVisible) {
    popup.style.display = "none";
    flagPopupVisible = false;
  } else {
    // 放在屏幕中央
    popup.style.display = "flex";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    flagPopupVisible = true;
    // 3秒后自动隐藏
    clearTimeout(popup._timeout);
    popup._timeout = setTimeout(() => {
      popup.style.display = "none";
      flagPopupVisible = false;
    }, 3000);
  }
}

function setReviewFlag(flagVal) {
  if (reviewQueue.length === 0) return;
  const wordId = reviewQueue[0];
  const rd = getReviewData(wordId);
  rd.flag = flagVal;
  saveReviewLocal();
  document.getElementById("flagPopup").style.display = "none";
  flagPopupVisible = false;
  const emojis = { 1: "🔴", 2: "🟠", 3: "🟢", 4: "🔵" };
  showToast(`已设置标记 ${flagVal ? emojis[flagVal] : "✕"}`, "info");
}

// ---- Round 2: CSV 导入/导出 ----
function handleExportCsv() {
  const BOM = "﻿";
  const headers = ["word", "translation", "definition", "deck", "tags"];
  const rows = words.map(w => {
    const deckName = decks.find(d => d.id === w.deckId)?.name || "";
    const tagNames = (w.tags || []).map(tid => {
      const t = tags.find(tg => tg.id === tid);
      return t ? t.name : "";
    }).filter(Boolean).join(";");
    return [
      escapeCsvField(w.word),
      escapeCsvField(w.translation),
      escapeCsvField(w.definition || ""),
      escapeCsvField(deckName),
      escapeCsvField(tagNames),
    ];
  });
  const csv = BOM + headers.join(",") + "\n" + rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `wordcards-export-${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("CSV 导出成功 ✅", "success");
}

function escapeCsvField(val) {
  if (val.includes(",") || val.includes('"') || val.includes("\n")) {
    return '"' + val.replace(/"/g, '""') + '"';
  }
  return val;
}

function handleImportCsv(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const text = e.target.result;
      // 去掉 BOM
      const cleanText = text.replace(/^﻿/, "");
      const lines = cleanText.split(/\r?\n/).filter(line => line.trim());
      if (lines.length < 2) { showToast("CSV 文件为空或格式不正确", "error"); return; }

      const headers = parseCsvLine(lines[0]);
      const wordIdx = headers.findIndex(h => h.toLowerCase().trim() === "word");
      const transIdx = headers.findIndex(h => h.toLowerCase().trim() === "translation");
      const defIdx = headers.findIndex(h => h.toLowerCase().trim() === "definition");
      const deckIdx = headers.findIndex(h => h.toLowerCase().trim() === "deck");
      const tagsIdx = headers.findIndex(h => h.toLowerCase().trim() === "tags");

      if (wordIdx < 0) { showToast('CSV 缺少 "word" 列', "error"); return; }

      const parsedCards = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i]);
        const word = (cols[wordIdx] || "").trim();
        if (!word) continue;
        parsedCards.push({
          word,
          translation: transIdx >= 0 ? (cols[transIdx] || "").trim() : "",
          definition: defIdx >= 0 ? (cols[defIdx] || "").trim() : "",
          deckName: deckIdx >= 0 ? (cols[deckIdx] || "").trim() : "",
          tagNames: tagsIdx >= 0 ? (cols[tagsIdx] || "").trim() : "",
        });
      }

      if (parsedCards.length === 0) { showToast("未解析到任何卡片", "error"); return; }
      showCsvImportPreview(parsedCards);
    } catch (err) {
      showToast("CSV 解析失败：" + err.message, "error");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function parseCsvLine(line) {
  const cols = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ",") {
        cols.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
  }
  cols.push(current);
  return cols;
}

function showCsvImportPreview(cards) {
  const overlay = document.getElementById("csvImportOverlay");
  const modal = document.getElementById("csvImportModal");
  if (!overlay || !modal) return;

  let rowsHtml = cards.map((c, i) => {
    const exists = words.some(w => w.word.toLowerCase() === c.word.toLowerCase());
    return `
      <tr>
        <td><input type="checkbox" class="csv-import-check" data-idx="${i}" checked></td>
        <td>${escapeHtml(c.word)}${exists ? ' <span style="color:#e8c170;">⚠️已存在</span>' : ''}</td>
        <td>${escapeHtml(c.translation)}</td>
        <td>${escapeHtml(c.definition)}</td>
        <td>${escapeHtml(c.deckName)}</td>
        <td>${escapeHtml(c.tagNames)}</td>
      </tr>
    `;
  }).join("");

  modal.innerHTML = `
    <h2>📊 CSV 导入预览</h2>
    <p style="font-size:0.85rem;color:#aaa;margin-bottom:10px;">共 <strong>${cards.length}</strong> 张卡片。勾选要导入的卡片。</p>
    <div style="margin-bottom:8px;">
      <button class="import-toggle-btn" onclick="csvToggleAll()">全选 / 取消全选</button>
      <label style="margin-left:12px;font-size:0.8rem;color:#999;">
        <input type="checkbox" id="csvOverwriteExisting"> 覆盖已存在的卡片
      </label>
    </div>
    <div class="csv-preview-wrapper">
      <table class="csv-preview-table">
        <thead><tr><th>✓</th><th>单词</th><th>翻译</th><th>释义</th><th>卡组</th><th>标签</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <div class="modal-actions" style="margin-top:12px;">
      <button class="btn-cancel" onclick="closeCsvImport()">取消</button>
      <button class="btn-confirm" onclick="executeCsvImport(${JSON.stringify(cards).replace(/"/g, '&quot;')})">导入</button>
    </div>
  `;

  overlay.classList.add("show");
}

function csvToggleAll() {
  const checks = document.querySelectorAll(".csv-import-check");
  if (checks.length === 0) return;
  const allChecked = Array.from(checks).every(c => c.checked);
  checks.forEach(c => { c.checked = !allChecked; });
}

function closeCsvImport() {
  document.getElementById("csvImportOverlay").classList.remove("show");
}

async function executeCsvImport() {
  const checks = document.querySelectorAll(".csv-import-check:checked");
  if (checks.length === 0) { showToast("请至少选择一张卡片", "error"); return; }

  const overwrite = document.getElementById("csvOverwriteExisting")?.checked || false;
  const cardsData = JSON.parse(document.getElementById("csvImportModal").querySelector(".btn-confirm").getAttribute("onclick").match(/executeCsvImport\((.*)\)/)[1]);
  const selectedIdxs = Array.from(checks).map(c => parseInt(c.dataset.idx, 10));

  let added = 0, skipped = 0, overwritten = 0;

  for (const idx of selectedIdxs) {
    const c = cardsData[idx];
    const existing = words.find(w => w.word.toLowerCase() === c.word.toLowerCase());
    if (existing) {
      if (overwrite) {
        existing.translation = c.translation || existing.translation;
        existing.definition = c.definition || existing.definition;
        // 更新标签
        if (c.tagNames) {
          const tagNameArr = c.tagNames.split(";").map(t => t.trim()).filter(Boolean);
          existing.tags = tagNameArr.map(tn => {
            let t = tags.find(tg => tg.name.toLowerCase() === tn.toLowerCase());
            if (!t) { t = { id: nextTagId++, name: tn, color: "#4a9eff" }; tags.push(t); }
            return t.id;
          });
        }
        overwritten++;
      } else {
        skipped++;
      }
      continue;
    }
    // 创建新卡片
    let deckId = null;
    if (c.deckName) {
      let deck = decks.find(d => d.name === c.deckName);
      if (!deck) {
        try {
          const created = await DataLayer.addDeck(c.deckName);
          decks.push(created);
          deck = created;
        } catch { deck = null; }
      }
      if (deck) deckId = deck.id;
    }
    // 解析标签
    let wordTagIds = [];
    if (c.tagNames) {
      const tagNameArr = c.tagNames.split(";").map(t => t.trim()).filter(Boolean);
      wordTagIds = tagNameArr.map(tn => {
        let t = tags.find(tg => tg.name.toLowerCase() === tn.toLowerCase());
        if (!t) { t = { id: nextTagId++, name: tn, color: "#4a9eff" }; tags.push(t); }
        return t.id;
      });
    }
    try {
      const created = await DataLayer.addWord(c.word, c.translation || "", c.definition || "", deckId);
      words.push({ ...created, deckId: created.deck_id, tags: wordTagIds });
      added++;
    } catch { skipped++; }
  }

  saveWordsLocal();
  saveTags();
  closeCsvImport();
  renderDeckSidebar();
  renderGrid();
  renderStats();
  updateDueBadge();
  showToast(`导入完成：新增 ${added}，覆盖 ${overwritten}，跳过 ${skipped}`, "success");
}

// ---- Round 2: 标签编辑弹窗 ----
function openTagEditModal() {
  document.getElementById("tagEditName").value = "";
  document.getElementById("tagEditOverlay").classList.add("show");
  // 默认选中第一个颜色
  selectTagColor("#4a9eff", document.querySelector('.tag-color-option[data-color="#4a9eff"]'));
  document.getElementById("tagEditName").focus();
}

let selectedTagColor = "#4a9eff";

function selectTagColor(color, el) {
  selectedTagColor = color;
  document.querySelectorAll(".tag-color-option").forEach(o => o.classList.remove("selected"));
  if (el) el.classList.add("selected");
}

// ---- Round 2: 事件绑定 ----
function setupRound2Events() {
  // 浏览器切换按钮
  const browserToggleBtn = document.getElementById("browserToggleBtn");
  if (browserToggleBtn) browserToggleBtn.addEventListener("click", toggleViewMode);

  // 添加标签按钮
  const addTagBtn = document.getElementById("addTagBtn");
  if (addTagBtn) addTagBtn.addEventListener("click", openTagEditModal);

  // 标签编辑弹窗事件
  document.getElementById("tagEditCancel").addEventListener("click", () => {
    document.getElementById("tagEditOverlay").classList.remove("show");
  });
  document.getElementById("tagEditSave").addEventListener("click", () => {
    const name = document.getElementById("tagEditName").value.trim();
    if (!name) { showToast("请输入标签名称", "error"); return; }
    if (tags.some(t => t.name.toLowerCase() === name.toLowerCase())) {
      showToast("标签已存在", "error"); return;
    }
    addTag(name, selectedTagColor);
    document.getElementById("tagEditOverlay").classList.remove("show");
    showToast("标签已创建 🏷️", "success");
  });
  document.getElementById("tagEditOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("tagEditOverlay")) {
      document.getElementById("tagEditOverlay").classList.remove("show");
    }
  });

  // 卡片信息弹窗事件
  document.getElementById("cardInfoOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("cardInfoOverlay")) closeCardInfo();
  });

  // CSV 导入弹窗事件
  document.getElementById("csvImportOverlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("csvImportOverlay")) closeCsvImport();
  });

  // 标记浮层点击外部关闭
  document.addEventListener("click", (e) => {
    const popup = document.getElementById("flagPopup");
    if (popup && flagPopupVisible && !popup.contains(e.target) && e.target !== document.activeElement) {
      popup.style.display = "none";
      flagPopupVisible = false;
    }
    // 关闭标签下拉
    const tagsDropdown = document.getElementById("modalTagsDropdown");
    const tagsAddBtn = document.getElementById("modalTagsAddBtn");
    if (tagsDropdown && tagsDropdown.style.display !== "none") {
      if (!tagsDropdown.contains(e.target) && e.target !== tagsAddBtn) {
        tagsDropdown.style.display = "none";
      }
    }
  });

  // 统计页面 — 预测周期切换
  document.querySelector(".stats-page")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".period-btn-forecast");
    if (btn) {
      document.querySelectorAll(".period-btn-forecast").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderForecastChart(parseInt(btn.dataset.period, 10));
    }
  });

  // 统计页面 — 趋势周期切换（保留原有逻辑，新增趋势图）
  const chartSection = document.querySelector(".stats-chart-section");
  if (chartSection) {
    // 原有周期切换 event listener 保留（在初始化时已绑定）
  }

  // ---- 拼写模式事件绑定 ----
  const spellingModeBtn = document.getElementById("spellingModeBtn");
  if (spellingModeBtn) spellingModeBtn.addEventListener("click", enterSpellingMode);

  const spellingSubmitBtn = document.getElementById("spellingSubmitBtn");
  if (spellingSubmitBtn) spellingSubmitBtn.addEventListener("click", submitSpellingAnswer);

  const spellingInput = document.getElementById("spellingInput");
  if (spellingInput) {
    spellingInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitSpellingAnswer();
      }
    });
  }

  const spellingExitBtn = document.getElementById("spellingExitBtn");
  if (spellingExitBtn) spellingExitBtn.addEventListener("click", exitSpellingMode);

  const spellingNextBtn = document.getElementById("spellingNextBtn");
  if (spellingNextBtn) spellingNextBtn.addEventListener("click", goToNextSpelling);

  const spellingWrongGrade = document.getElementById("spellingWrongGrade");
  if (spellingWrongGrade) spellingWrongGrade.addEventListener("click", () => handleSpellingGrade("wrong"));

  const spellingCorrectGrade = document.getElementById("spellingCorrectGrade");
  if (spellingCorrectGrade) spellingCorrectGrade.addEventListener("click", () => handleSpellingGrade("correct"));
}

// ---------- 启动 ----------
loadSettings();
applyI18n();
init();
setupRound2Events();
