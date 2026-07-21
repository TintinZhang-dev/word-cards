# WordCards — Round 2: 卡组体验大升级

## 前置

项目路径：`/home/tintinzhang/word-cards/`
三个文件要改：`index.html`、`style.css`、`app.js`
工作模式：只改这三个文件，使用纯前端 + localStorage。不要动其他文件。

## 当前架构速览

- **数据层**：`DataLayer` 对象封装 API 和 localStorage 双数据源（`DataLayer.loadAll()` 读所有数据，`DataLayer.*` 方法写数据）
- **words[]**: 卡片数组，每项 `{ id, word, translation, definition, deckId }`
- **decks[]**: 卡组数组，每项 `{ id, name }`
- **reviewData** (`wordcards_review`): 复习数据对象 `{ [wordId]: { nextReview, interval, reps, ef, cardState, learningStep } }`
- **settings** (`wordcards_settings`): `{ newCardsPerDay, reviewCardsPerDay, deckOverrides, defLang }`
- **all local**, API 层是跳过的（离线优先）
- **cards are flat** — deckId 关联卡组

## 需要实现的功能

### 1. Tags 标签系统

**数据结构：**
- `tags` 全局数组：`[{ id, name, color }]`，存在 `wordcards_tags` localStorage
- `settings.tagSources` or just tags array
- 卡片可以关联多个 tag：每张 word 增加 `tags: [tagId, ...]` 字段
- 迁移：旧卡片 `tags` = 空数组

**UI：**
- 侧边栏：在卡组列表下方加 **标签区域** ("🏷️ 标签")
- 标签列表：点击切换过滤（高亮选中，多个标签可选 = AND 逻辑）
- 添加标签按钮（侧边栏底部 "+" 按钮 → 弹窗输名字+选颜色）
- 标签色块圆点 + 名称 + 计数
- 编辑卡片时：显示已选标签（多选 chips），可添加/移除

**添加/编辑卡片模态框：**
- 在卡组选择下面加一行 "标签"：显示已选标签 chips + "添加标签..." 下拉
- 下拉列出所有未选标签

**卡片网格：**
- 卡片正面右上角显示 tag 小色点（一行最多3个，多的显示 "+N"）

**搜索过滤**：搜索栏支持 `tag:xxx` 语法（快速过滤），普通文本同时匹配 word/translation/definition/tags名

### 2. 高级卡片浏览器 (Browser)

**当前是卡片网格模式，加一个"浏览器视图"切换：**

- 工具栏加个按钮切换视图："网格" ↔ "列表"
- **列表视图（Browser 模式）**：
  - 表格：列 = 单词 | 翻译 | 卡组 | 标签 | 状态 | 下次复习 | 操作
  - 可排序（点击表头排序）
  - 行操作：编辑、删除、挂起、标记、翻转详情
  - 选择多行（checkbox），批量操作：删除、移动至卡组、添加标签、挂起/恢复
  - 批量操作工具栏（选中行时出现）
- **高级筛选栏**（Browser 模式下显示）：
  - 状态筛选：全选/新卡片/学习中/复习中/已掌握
  - 卡组筛选（已有）
  - 标签筛选
  - 下次复习：今天/明天/本周/过期/无安排
  - "搜索"框统一匹配（和网格模式一样）

### 3. 卡片信息弹窗 (Card Info)

在复习模式或卡片网格里，每个卡片加个 "ℹ️" 按钮 → 弹窗显示：

- 基本信息：单词、翻译、释义、卡组、标签
- **复习统计**：复习次数 (reps) | 连续答对 (reps) | 难度系数 (EF) | 状态 (cardState)
- **排程信息**：当前间隔 (interval) | 下次复习时间 (nextReview) | 学习步骤 (learningStep)
- **答题历史**：显示最近几次答题记录（grade + 时间）
  - 新增 `wordcards_history` 在 per-card 记录里：`history: [{ date, gradeKey, state }]`，保留最近 20 条
- **TTS 播放按钮**：朗读当前单词
- **人工调整**：手动重排（输入天数）| 重置卡片 | 设置已掌握

### 4. 挂起 / 取消挂起 (Suspend)

- 卡片 reviewData 增加 `suspended: boolean`
- 挂起的卡片在复习中被跳过，在网格中显示灰色 + 🚫 标记
- 侧边栏卡组旁边加一个 "已挂起" 筛选
- 快捷键：`S` 键在复习中挂起当前卡片
- Browser 中批量挂起/恢复
- 挂起时显示确认？不需要，直接挂起，Toast 提示

### 5. 标记 (Flags)

Anki 四种颜色旗：🔴 🟠 🟢 🔵
- 每张卡 reviewData 增加 `flag: null | 1 | 2 | 3 | 4` (对应四种颜色)
- **在卡片网格**：卡片左上角显示 flag 色条
- **在复习中**：按 `F` 键打开标记选择（弹一个小浮层 1-4，F 再按一次清除）
- **在 Browser**：标记列显示色块，可点击切换
- **侧边栏/筛选**：可按标记筛选

### 6. 撤销上一次复习 (Undo)

- 复习模式下，答完后按 `Ctrl+Z` 撤销上一张卡的评分
- 需要 undo stack: `reviewQueue` 修改前 push 到 undo stack
- 撤销操作：
  - 从 reviewQueue 中移除被撤销的卡片（如果已移除），加回队列头部
  - 恢复 reviewData 到之前的状态
  - 恢复 `gradeDistribution` 计数
  - 恢复 `reviewSessionCount`
  - Toast: "已撤销"
- 注意：只允许撤销最近一次操作，多次撤销只支持一步
- 在复习完成页面不撤销

### 7. CSV 导入/导出

**导出：**
- 设置页面增加 "导出 CSV" 按钮
- 格式：`word,translation,definition,deck,tags`
- UTF-8 BOM 编码（Excel 兼容）
- 文件名：`wordcards-export-YYYY-MM-DD.csv`

**导入：**
- 设置页面增加 "导入 CSV" 按钮
- 支持格式：第一行是表头，列名：word, translation, definition, deck(optional), tags(optional)
- 重复检测：word + deck 相同则认为是同一张卡，提示是否覆盖
- 预览窗口：显示将要导入的卡片列表，可勾选

### 8. TTS 自动音频

- 使用 Web Speech API (`speechSynthesis`)
- 复习时卡片正面下方加一个 🔊 播放按钮
- 点击播放读音
- 卡片网格中单词旁也有小喇叭图标
- 支持多语言（尊重 settings.defLang）
- 播放时不会中断翻转逻辑

### 9. 子卡组 (Subdecks / Deck Tree)

- decks 增加 `parentId: null | number` 字段
- 侧边栏树形展示：缩进 + 连接线
- 父卡组显示包含子卡组的总卡片数
- 在创建/编辑卡片时，卡组下拉以树形展示（缩进）
- 复习时，选择父卡组默认包含所有子卡组的卡片
- 拖拽移动卡组？暂时不要，太复杂。用右键菜单设置父卡组

限制：最多支持 2 层深度（父→子，不要孙）

### 10. 更好的复习队列排序

- **新卡片和复习卡片交错出现**：每显示 1 张新卡片后，至少显示 2 张复习卡片
- 复习卡片按过期时间排序（越早过期越先出现）
- 学习中的卡片优先于新卡片和复习卡片
- 设置项：`newCardsPerReview` 每次复习间隔插入新卡的数量（默认 2）

### 11. 复习提示增强

- **复习中显示卡片级别**：在正面下方显示小字 "新卡片" / "学习中" / "复习" / "已掌握"
- **倒计时显示**：学习中的卡片显示剩余时间倒计时（秒级更新）
- 每次评分后显示下一个等待时间的 tip（例如 "下一张复习卡片将在 8h 后到期" — 只对 review 卡片显示）

### 12. 统计页面升级

**现有概览卡 + 柱状图保留**，增加：
- **保留率计算**：`复习通过数 / (复习通过数 + 失败数)`，按天/周/月
- **卡片分布饼图**（用纯 CSS/horizontal bars）：新卡 / 学习中 / 复习中 / 已掌握
- **预测图**：未来 7 天/30 天每天有多少卡片到期
- **学习趋势**：以天为单位显示学习卡片数量 + 复习卡片数量（重叠柱状图或双轴）
- **最难卡片列表**（Top 10）：按 EF 最低排，附 reps 和上一次复习时间
- 设置里有目标（每天学 X 新卡，复习 Y 卡），统计页显示达成率

## 实现注意事项

1. **数据兼容**：所有新增字段必须优雅处理旧数据不存在的情况（`tags` 不存在则视为 `[]`，`suspended` 不存在则视为 `false`，`parentId` 不存在则视为 `null`，`flag` 不存在视为 `null`）
2. **修改 reviewData** 结构时：`getReviewData()` 函数的默认值加上新字段的默认值
3. **复习队列**：`reviewQueue` 是一个飞数值 `[wordId, ...]`，用 `Array.isArray()` 检查
4. **每个功能保持模块化**：加个 `// ---- 功能名 ----` 分隔注释
5. **延迟渲染**：列表视图如果有大量卡片（>500），使用虚拟滚动或分页（每页 50 条）
6. **不引入任何外部库**：纯手写 JS/CSS。不用 React/Vue/jQuery/Chart.js 等
7. **深色主题保持统一**：现有颜色体系 `#0f0f0f` 背景，`#1a1a2e` 卡片，`#4a9eff` 蓝色主调

## 优先级

1️⃣ Tags 系统 → 2️⃣ 卡片浏览器(Browser) → 3️⃣ 卡片信息 → 4️⃣ 挂起 → 5️⃣ 标记 → 6️⃣ Undo → 7️⃣ CSV → 8️⃣ TTS → 9️⃣ 子卡组 → 🔟 队列排序 → 1️⃣1️⃣ 复习提示 → 1️⃣2️⃣ 统计升级

按顺序实现，每个功能完整 (data + UI + interaction + migration) 后再做下一个。

## 文件结构

全部写入三个文件中：
- `index.html` — 新增 DOM 结构（模态框、Browser 表格、侧边栏标签区域等）
- `style.css` — 所有新样式（表格视图、标签 chips、flag 色条、树形缩进等）
- `app.js` — 所有逻辑

写完后再运行 `cp app.js www/app.js && cp index.html www/index.html && cp style.css www/style.css` 更新 www 目录。
