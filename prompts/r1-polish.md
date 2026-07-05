# Round 1 — WordCards Phase 2 打磨

## 项目信息

- 项目路径：`/home/tintinzhang/word-cards/`
- 文件结构：
  - `index.html` — HTML 结构
  - `style.css` — 样式表（深色主题）
  - `app.js` — 所有 JavaScript 逻辑（约 970 行）
- 现有功能：SM-2 间隔重复、学习模式（1min/10min）、卡片状态（new/learning/review/mastered）、统计页、复习历史柱状图、每日上限
- 开发原则：保持深色主题风格，增量修改不重构现有代码

---

## 需求 1：复习键盘快捷键提示

### 现状
复习模式翻转卡片后，四个按钮 `<button id="btnAgain">` / `btnHard` / `btnGood` / `btnEasy` 有 click 和键盘事件（1/2/3/4 和 a/h/g/e）支持，但按钮上没有任何视觉提示告诉用户按什么键。

### 要求

#### index.html 改动（reviewActions 区域）
将四个按钮的文字改为：
```html
<button id="btnAgain" class="grade-btn grade-again">
  <span class="grade-text">完全忘了</span>
  <kbd class="grade-key">1</kbd>
</button>
<button id="btnHard" class="grade-btn grade-hard">
  <span class="grade-text">有点难</span>
  <kbd class="grade-key">2</kbd>
</button>
<button id="btnGood" class="grade-btn grade-good">
  <span class="grade-text">记住了</span>
  <kbd class="grade-key">3</kbd>
</button>
<button id="btnEasy" class="grade-btn grade-easy">
  <span class="grade-text">超简单</span>
  <kbd class="grade-key">4</kbd>
</button>
```

#### style.css 改动
添加 `.grade-btn` 容器的 flex 布局，`.grade-key` 作为右上角小标签：
```css
.grade-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.grade-key {
  position: absolute;
  top: 4px;
  right: 6px;
  font-size: 10px;
  padding: 1px 5px;
  border-radius: 3px;
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.6);
  font-family: inherit;
  border: 1px solid rgba(255,255,255,0.2);
  line-height: 1.4;
}
```

四个按钮的现有颜色保留：
- again：红色系（`#d32f2f` / `#b71c1c`）
- hard：橙色系
- good：绿色系
- easy：蓝色系

#### app.js 改动
无。键盘事件已正确绑定，只需要按钮文字变化。

---

## 需求 2：卡片网格搜索/筛选框

### 现状
卡片列表页面（主页面）只有 `#cardGrid` 直接渲染所有卡片，没有搜索或过滤功能。单词多了之后翻着找很累。

### 要求

#### index.html 改动
在 `#cardGrid` 上方添加搜索栏（在 `<header>` 和 `<main id="cardGrid">` 之间，但在 `.controls` 区域附近）：

```html
<div class="search-bar">
  <input type="text" id="searchInput" placeholder="🔍 搜索单词、翻译或释义..." />
  <button id="searchClear" class="search-clear hidden">✕</button>
</div>
```

位置：放在 `id="cardGrid"` 之前，紧挨着 card grid。也可以放在 stats 和 controls 区域下方、grid 上方。

#### style.css 改动
```css
.search-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 12px 16px;
  position: relative;
}

#searchInput {
  flex: 1;
  padding: 10px 36px 10px 14px;
  border: 1px solid #333;
  border-radius: 8px;
  background: #1e1e1e;
  color: #e0e0e0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

#searchInput:focus {
  border-color: #4a9eff;
}

#searchInput::placeholder {
  color: #666;
}

.search-clear {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;
}

.search-clear:hover {
  color: #fff;
  background: rgba(255,255,255,0.1);
}

.search-clear.hidden {
  display: none;
}
```

#### app.js 改动

1. **添加 DOM 引用**：
```js
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
```

2. **添加搜索状态**：
```js
let searchQuery = "";
```

3. **修改 `renderGrid()` 函数**：
   接受可选的搜索过滤。在 `renderGrid()` 内部，先对 `words` 数组做过滤：
```js
let visibleWords = words;
if (searchQuery.trim()) {
  const q = searchQuery.trim().toLowerCase();
  visibleWords = words.filter(w =>
    w.word.toLowerCase().includes(q) ||
    w.translation.toLowerCase().includes(q) ||
    w.definition.toLowerCase().includes(q)
  );
}
```
然后用 `visibleWords`（而不是 `words`）生成卡片 HTML。
如果 `visibleWords.length === 0` 且搜索非空，显示 "未找到匹配的单词" 空状态。

4. **搜索事件绑定**（放在 `init()` 或全局初始化区域）：
```js
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  searchClear.classList.toggle("hidden", !searchQuery);
  renderGrid();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  searchClear.classList.add("hidden");
  renderGrid();
  searchInput.focus();
});
```

5. **渲染时保留翻转状态**：
   当前 `renderGrid()` 会重新生成所有卡片 DOM，翻转状态会丢失。这是一个可接受的小限制 —— 搜索时会重置卡片翻转为正面。

---

## 需求 3：复习总结页升级

### 现状
`finishReview()` 函数显示的总结信息比较简略：
- ✅ 本次复习张数
- ✅ 已掌握比例
- ✅ 连续天数

缺少：本次用时、评分分布。

### 要求

#### app.js 改动

1. **添加计时变量**：
```js
let reviewStartTime = null; // Date 对象
```

2. **`enterReviewMode()` 中启动计时**：
```js
reviewStartTime = new Date();
```

3. **添加评分分布统计**：
```js
let gradeDistribution = { again: 0, hard: 0, good: 0, easy: 0 };
```

在 `answerCard()` 函数中，每次回答时递增对应的计数器：
```js
gradeDistribution[gradeKey] = (gradeDistribution[gradeKey] || 0) + 1;
```

注意：`gradeDistribution` 需要在 `enterReviewMode()` 中重置。

4. **修改 `finishReview()` 的 summary 文本**：
```js
const elapsed = Math.floor((new Date() - reviewStartTime) / 1000);
const minutes = Math.floor(elapsed / 60);
const seconds = elapsed % 60;
const timeStr = minutes > 0 ? `${minutes} 分 ${seconds} 秒` : `${seconds} 秒`;

// 评分分布
const distText = [
  gradeDistribution.again > 0 ? `完全忘了 ${gradeDistribution.again}` : "",
  gradeDistribution.hard > 0 ? `有点难 ${gradeDistribution.hard}` : "",
  gradeDistribution.good > 0 ? `记住了 ${gradeDistribution.good}` : "",
  gradeDistribution.easy > 0 ? `超简单 ${gradeDistribution.easy}` : "",
].filter(Boolean).join(" · ");

reviewSummary.innerHTML = `
  <div class="summary-line">📊 本次复习 <strong>${reviewSessionCount}</strong> 张卡片</div>
  <div class="summary-line">⏱️ 用时 ${timeStr}</div>
  <div class="summary-line">${distText}</div>
  <div class="summary-line">✅ 已掌握 ${mastered}/${allCards} 张${streakCount > 1 ? ` 🔥 连续 ${streakCount} 天` : ""}</div>
`;
```

#### style.css 改动
```css
.summary-line {
  margin: 6px 0;
  font-size: 15px;
  line-height: 1.6;
}
```
可以根据需要微调。

---

## 需求 4：学习步骤倒计时提示

### 现状
当卡片是 learning 状态，用户答完 after/hard 后进入 step 1（1 分钟）或 step 2（10 分钟）等待，卡片被放回队列尾部。但用户完全不知道这张卡片什么时候会再次出现。

### 要求

#### app.js 改动

1. **在 `showNextCard()` 中**，当当前卡片的下一次复习是 learning 步骤（短时间内）时，在卡片标题区/学习指示器区域显示倒计时提示。

具体做法：
修改 `showNextCard()` 中显示 `reviewLearningStep` 的逻辑：

```js
if (rd.cardState === "learning" && rd.learningStep > 0) {
  const waitMinutes = rd.learningStep === 1 ? 1 : 10;
  reviewLearningStep.textContent = `学习步骤 ${rd.learningStep}/2 · ${waitMinutes} 分钟后再次出现 ⏳`;
  reviewLearningStep.style.display = "block";
}
```

对于队列中的 learning 卡片，不是当前卡片本身，而是队列里被放回的卡片：
- 当 `answerLearningCard()` 返回 `true`（放回队列），该卡片排在队尾。
- 当这张卡片再次出现在队首（即 `showNextCard()` 被调用时），其 `rd.nextReview` 应该 <= 当前时间，意味着已到期。
- 但如果还没到期（理论上不会出现，因为 `getDueCards()` 只过滤到期的卡片），也可以显示等待时间。

**更简单的实现**：在 `answerLearningCard()` 中放回队列时，在下次显示时展示学习指示器，用 `rd.learningStep` 推断等待时长。不需要实时倒计时，只需在卡片再次出现时显示"等待 X 分钟后归来"的提示，或者在卡片翻到背面后显示 "这张卡已加入学习队列，X 分钟后再出现"。

**推荐做法**：
在 `showNextCard()` 的 learning step 指示器中，直接显示等待时间。当某张 learning 卡片出现在队首且 `rd.nextReview` 已过期时，显示正常学习步骤。当 `rd.nextReview` 尚未过期时，显示剩余等待时间：

```js
if (rd.cardState === "learning" && rd.learningStep > 0) {
  const waitMinutes = rd.learningStep === 1 ? 1 : 10;
  
  if (rd.nextReview) {
    const remainingMs = new Date(rd.nextReview) - new Date();
    if (remainingMs > 0) {
      const remainingSec = Math.ceil(remainingMs / 1000);
      reviewLearningStep.textContent = `⏳ ${remainingSec} 秒后再次出现`;
    } else {
      reviewLearningStep.textContent = `学习步骤 ${rd.learningStep}/2 · ${waitMinutes} 分钟后再次出现 ⏳`;
    }
  } else {
    reviewLearningStep.textContent = `新卡片 · 学习步骤 ${rd.learningStep}/2`;
  }
  reviewLearningStep.style.display = "block";
}
```

这段逻辑确保：
- 如果卡片还没到期，显示剩余秒数
- 如果已到期，显示 "学习步骤 X/2 · Y 分钟后再次出现"
- 如果纯新卡片（无 nextReview），显示 "新卡片 · 学习步骤 X/2"

---

## 实现顺序

建议按 1 → 2 → 3 → 4 的顺序实现，每个完成一个后验证再继续下一个。

## 测试要点

1. 快捷键提示：进入复习模式 → 翻转卡片 → 确认四个按钮显示 1/2/3/4 标签
2. 搜索：在主页面输入关键词 → 确认卡片实时过滤
3. 总结：完成一次复习 → 确认用时和评分分布正确显示
4. 倒计时：进入学习模式 → 回答 again/hard → 确认队列中显示等待提示
