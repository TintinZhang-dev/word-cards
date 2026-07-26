# Round B — 收尾小优化

## 改动 1: 复习总结页加正确率百分比

**目标**: 在 `finishReview()` 的 summary 里加一行正确率。

**计算方式**:
- 正确 = good + easy
- 总答题数 = again + hard + good + easy
- 正确率 = round(good + easy) / (again + hard + good + easy) * 100
- 显示格式: `✅ 正确率 72%` （70%以下用橙色，90%以上用绿色）

**改动文件**: `app.js` 的 `finishReview()` 函数（约第 2454 行）

在 `const distText = ...` 那行前后加入正确率计算，在 summary HTML 中插入一行 `<div class="summary-line">✅ {t('accuracyLabel')} {accuracy}%</div>`。

同时在 i18n 翻译对象中加入:
- en: `accuracyLabel: "Accuracy"`
- zh: `accuracyLabel: "正确率"`

## 改动 2: 翻转动效微调

**目标**: 让卡片翻转更流畅。

**改动文件**: `style.css`

当前翻转动画（约第 349 行）:
```css
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

改成:
```css
transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.1);
```

这样更快（0.6s→0.5s），且回弹感更自然。

同时确保 `.card.flipped` 和 `.review-card.flipped` 都用 `transform: rotateY(180deg)`（应该已经是的）。

## 改动 3: 卡片网格分批加载

**目标**: 当卡片数量 > 200 时，浏览器视图分批渲染，避免卡顿。

**改动文件**: `app.js`

在 `renderBrowserView()` 函数中（约第 4280 行）:

1. 记录当前卡片总数，如果 `words.length <= 200` 则不分批，照常渲染
2. 如果 `words.length > 200`:
   - 初始只渲染前 100 张
   - 在表格底部加一个"加载更多"按钮
   - 点击后每次增加 100 张
   - 按钮文案: `t('loadMore') + " (xx/yy)"`
3. i18n 新增:
   - en: `loadMore: "Load More"`
   - zh: `loadMore: "加载更多"`

---

**验收标准**:
1. 跑一次复习模式，完成复习后 summary 有正确率
2. 翻转卡片更顺滑
3. 如果有 300+ 张卡片，浏览器视图只显示前 100 张 + "加载更多"按钮
