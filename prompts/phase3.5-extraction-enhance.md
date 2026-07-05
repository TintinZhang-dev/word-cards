# Phase 3.5 — 提取功能增强（词形归一 + 专有名标注 + 自定义忽略）

在 Phase 3「粘贴文章导入」的基础上，新增三个增强功能。

## 前提
- Phase 3 已实现：粘贴 textarea → 提取生词 → 按难度分排序 → 勾选 → 批量添加
- 已有函数：`handleExtract()`（分词→过滤→排序→显示结果）
- 已有常量：`STOP_WORDS`、`COMMON_WORDS`
- 结果展示：`showResultsPanel()` 渲染每行包含 checkbox + 单词 + 出现次数 + 词长 + ⬇ 按钮

## A. 词形归一化（Stemming）

### 问题
现在 `study` 和 `studying` 算不同词，导致 `studying` 被当作新词提取，但其实卡片里已有 `study`。

### 实现
在 `handleExtract()` 中，分词并初步过滤（去停用词、去数字）之后，构建 `existingSet` 之前，**先把文章中的词形还原后再匹配**：

定义一个简单后缀还原函数 `stem(word)`：

```javascript
function stem(word) {
  // 先处理不规则
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
    if (double.length >= 2 && double.endsWith(double[double.length-1])) return double.slice(0, -1);
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
    const base = w.slice(0, -2);
    return base;
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
```

**匹配逻辑**：在构建 `existingSet` 时，除了包含原词，还包含词形还原后的版本：

```javascript
const existingSet = new Set();
for (const w of words) {
  existingSet.add(w.word.toLowerCase());
  existingSet.add(stem(w.word.toLowerCase()));
}
```

这样文章里的 `studying` 会被还原为 `study`，就能匹配到已有卡片中的 `study`。

**注意**：此函数只用于匹配过滤，不用于修改提取出的单词本身。单词展示和添加时保持原样（文章中出现的原词）。

## C. 专有名词标注

在 `showResultsPanel()` 渲染结果时，对于首字母大写的词（且不是句首词），标注为「专有名词」标记：

在分词阶段，保留一个额外的标记字段：`isProper`（`true`/`false`）。

判断逻辑：
- 原文中该词出现在非句首位置，且首字母大写 → 可能是专有名词
- 实现方式：在分词时，保留原始大小写信息，跟踪每个 token 在原文中的位置，判断其是否跟在句号/感叹号/问号之后。

**简化实现**：在结果展示时直接判断：
```javascript
// 在 showResultsPanel 中渲染时
const isProper = /^[A-Z]/.test(w.word) && !STOP_WORDS.has(w.word.toLowerCase());
```

专有名词在结果中显示为：
```
America  (1次 · 7字母)  [专有]
```

并且专有名词的复选框默认**不选中**（用户手动勾选才会添加）。

## D. 自定义忽略列表

### 存储
在 localStorage 中新增一个 key `wordcards_ignore_words`，存为一个 JSON 数组。

### 管理界面
在**设置**对话框中添加一个区域：

```
─────────────────────────
📝 忽略列表
以下单词导入文章时将自动跳过：
[输入框]  [添加按钮]
--- 已忽略的单词 ---
word1   [✕]
word2   [✕]
─────────────────────────
```

点击 ✕ 可以移除一个忽略词。

### 提取过滤
在 `handleExtract()` 的词频分析中，过滤掉在忽略列表中的词（小写比较）。

### 已有数据
初始忽略列表为空。

## 实现要求
- 所有逻辑写在 app.js 中
- 不修改 index.html 结构
- 需要新增的 CSS 直接添加到 style.css 的末尾
- 保持深色主题、中文界面风格一致
- 不影响 Phase 3 已有的「跳过已有卡片」「难度分排序」「全选/取消全选」「⬇ 取消下方」等已有功能

## 验收标准
- [ ] 文章含有 `studying`，卡片已有 `study` → 提取结果中 `studying` 被正确过滤 ✅
- [ ] 文章含有 `America` → 结果中标记 `[专有]`，复选框默认不勾选
- [ ] 设置中添加词到忽略列表 → 提取时自动跳过
- [ ] 忽略列表从 localStorage 持久化
- [ ] 设置中可移除忽略词
