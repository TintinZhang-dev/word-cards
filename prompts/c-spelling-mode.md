# Round C — 拼写模式 (Spelling Mode)

## 目标
新增一个**拼写模式**，跟现有的翻转复习模式平级，用户可以切换。在这个模式下，卡片**正面显示释义/翻译**，用户在输入框里**打出对应的英文单词**。

## 改动清单

### 1. i18n 新增（中英各加）

```javascript
// zh
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

// en
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
```

### 2. HTML 结构 — 在 index.html 新增拼写模式容器

```
<!-- 拼写模式容器 -->
<div id="spellingContainer" class="review-container" style="display:none">
  <div class="review-top-bar">
    <span id="spellingCount">1/10</span>
    <div class="review-controls">
      <button id="spellingNextBtn" class="btn-cancel" style="display:none">下一个</button>
      <button id="spellingExitBtn" class="btn-cancel">退出</button>
    </div>
  </div>

  <div class="spelling-card" id="spellingCard">
    <div class="spelling-front">
      <div class="spelling-translation" id="spellingTranslation"></div>
      <div class="spelling-definition" id="spellingDefinition"></div>
    </div>
    <div class="spelling-input-area">
      <input type="text" id="spellingInput" class="spelling-input" placeholder="在此输入单词..." autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false">
      <button id="spellingSubmitBtn" class="btn-primary">提交</button>
    </div>
    <div id="spellingFeedback" class="spelling-feedback"></div>
    <div class="spelling-grade-buttons" id="spellingGradeButtons" style="display:none">
      <!-- 复用评分按钮，或用简化版： 对了/错了 两个按钮 -->
      <button class="grade-btn grade-wrong" id="spellingWrongGrade">✗ 记错</button>
      <button class="grade-btn grade-correct" id="spellingCorrectGrade">✓ 记住了</button>
    </div>
  </div>
</div>
```

**在 index.html 中找到导航/功能按钮区**，加一个"拼写模式"入口按钮：
```html
<button id="spellingModeBtn" class="btn-primary">✍️ ${t('spellingMode')}</button>
```
放在"开始复习"按钮旁边。

### 3. app.js 逻辑

#### 3.1 全局状态新增
```javascript
let spellingMode = false;           // 是否在拼写模式
let spellingQueue = [];             // 拼写队列
let spellingIndex = 0;              // 当前位置
let spellingCorrectCount = 0;       // 本轮正确数
let spellingWrongCount = 0;         // 本轮错误数
let spellingAnsweredWords = new Set(); // 本轮已答的词
```

#### 3.2 进入拼写模式函数 `enterSpellingMode()`
- 隐藏主界面，显示 `spellingContainer`
- 从 `words` 中选取所有不是 mastered 的卡片，或者复习队列中的卡片
- 打乱顺序（shuffle）
- 初始化 `spellingQueue`, `spellingIndex`, 计数器
- 调用 `showSpellingCard()`

#### 3.3 显示卡片 `showSpellingCard()`
- 显示当前卡片的 `translation` 和 `definition`
- 清空输入框和反馈区
- 更新进度 `spellingCount`
- 隐藏评分按钮，显示输入框

#### 3.4 提交答案 `submitSpellingAnswer()`
- 获取输入框内容，trim，转小写
- 与当前单词的 `word`（小写）比较
- **正确**：
  - `spellingCorrectCount++`
  - 显示绿色反馈 `✅ Correct!`
  - 显示评分按钮（记住 / 记错）
- **错误**：
  - `spellingWrongCount++`
  - 显示红色反馈 `❌ 不对，正确答案是：Word`
  - 自动显示"下一个"按钮（跳过）

#### 3.5 评分处理
- 用户点"记住了" → 相当于 SM-2 的 "good"，正常推进间隔
- 用户点"记错" → 相当于 SM-2 的 "again"，重置间隔，再放入队列末尾
- 用户拼错了 → 自动算 "again"，卡片稍后再出现

**评分函数复用**：可以直接调现有的 `answerCard("good")` / `answerCard("again")`，但注意拼写模式里评分逻辑应该一致。

#### 3.6 退出拼写模式
- 显示本轮统计（正确数/错误数/总卡片数，正确率）
- 隐藏 `spellingContainer`，显示主界面

#### 3.7 事件绑定
- `spellingSubmitBtn` → `submitSpellingAnswer()`
- `spellingInput` 回车键 → 触发提交
- `spellingExitBtn` → `exitSpellingMode()`
- `spellingNextBtn` → `showSpellingCard()`
- `spellingModeBtn` → `enterSpellingMode()`

### 4. CSS — style.css 新增

```css
/* 拼写模式 */
.spelling-card {
  max-width: 500px;
  margin: 40px auto;
  padding: 40px 30px;
  background: #1e1e3a;
  border-radius: 16px;
  text-align: center;
}

.spelling-translation {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #e0e0ff;
}

.spelling-definition {
  font-size: 1rem;
  color: #888;
  margin-bottom: 30px;
  line-height: 1.5;
}

.spelling-input-area {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.spelling-input {
  padding: 12px 18px;
  font-size: 1.2rem;
  border: 2px solid #3a3a6e;
  border-radius: 10px;
  background: #16162e;
  color: #e0e0ff;
  width: 260px;
  outline: none;
  transition: border-color 0.2s;
}

.spelling-input:focus {
  border-color: #4a9eff;
}

.spelling-feedback {
  font-size: 1.2rem;
  margin: 16px 0;
  min-height: 2em;
}

.spelling-feedback.correct { color: #2ecc71; }
.spelling-feedback.wrong { color: #e74c3c; }

.spelling-grade-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
}

.grade-wrong { background: #e74c3c; color: white; }
.grade-correct { background: #2ecc71; color: white; }
```

## 验收标准
1. 主页出现"✍️ 拼写模式"按钮
2. 点击进入后展示带释义/翻译的卡片 + 输入框
3. 输入正确显示绿色反馈 + 评分按钮
4. 输入错误显示红色反馈 + 正确单词 + "下一个"按钮
5. 退出时显示本轮统计（正确/错误/正确率）
6. 拼写模式的复习记录与正常复习模式互通（SM-2 数据一致）
7. 在深色主题下视觉统一

## 注意事项
- 不要改动现有的复习模式逻辑
- 拼写模式只影响 `spellingCorrectCount` / `spellingWrongCount` 等新增变量
- 如果用户同时开了拼写模式和复习模式，数据不会有冲突
