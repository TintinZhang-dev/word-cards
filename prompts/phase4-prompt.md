# WordCards — Phase 4: 难度分级 + 多语言 + PWA

## 前置

项目路径：`/home/tintinzhang/word-cards/`
三个核心文件：`index.html`、`style.css`、`app.js`
新增文件：`manifest.json`、`service-worker.js`
纯前端 + localStorage。不引入外部库。

---

## 1. 难度分级 (Difficulty Grading)

**现状：** SM-2 算法内部有 EF (Ease Factor, 1.3~∞)，但用户看不到也手动改不了。

**目标：** 让用户能看到和调整每张卡的难度，并按难度筛选/排序。

### 数据结构
- reviewData 增加 `difficulty: 1 | 2 | 3` (1=简单, 2=中等, 3=困难)
- 新卡片默认 difficulty = 2
- 不影响 SM-2 的 EF 计算，但可以通过 difficulty 微调初始间隔
  - difficulty=1: 初始间隔 ×1.5 (轻松)
  - difficulty=2: 正常
  - difficulty=3: 初始间隔 ×0.5 (更难)

### UI

**添加/编辑卡片模态框：**
- 在标签选择下方加一行"难度"：3 个按钮 `😊 简单` `🤔 中等` `😰 困难`
- 默认选中"中等"
- 点击切换

**卡片网格：**
- 每张卡片在正面下方（单词下方）显示难度指示：
  - 简单 = 绿色小字 "简单" / 三个绿点
  - 中等 = 黄色小字 "中等" / 两个黄点
  - 困难 = 红色小字 "困难" / 一个红点

**卡片信息弹窗：**
- 在"人工调整"区域加难度选择

**浏览器视图：**
- 新增"难度"列，显示图标
- 可排序
- 批量设置难度

**统计页面：**
- 在卡片分布里显示难度分布（简单/中等/困难各多少张）

### 迁移
旧卡片没有 `difficulty` 字段 → 默认 2（中等）

---

## 2. 多语言支持

### UI 语言切换

**创建 `i18n` 系统：**
- 在 app.js 顶部新增 `const i18n = { zh: {...}, en: {...} }`
- 用 `function t(key)` 读取当前语言的文本
- `settings` 增加 `uiLang: "zh" | "en"`，存在 wordcards_settings

**需要翻译的 UI 文本：**
- 所有按钮标签（添加单词、开始复习、统计、设置、导入文章、列表/网格切换）
- 所有模态框标题和标签（单词、翻译、释义、卡组、标签、难度）
- 所有状态文本（新卡片、学习中、复习中、已掌握）
- 复习四按钮（完全忘了、有点难、记住了、超简单）
- 统计页标题
- 倒计时/提示文字
- 空白状态文案
- 侧边栏文字（所有卡片、标签、挂起、标记、新卡组、添加标签）
- 浏览器表头（单词、翻译、卡组、标签、标记、状态、下次复习、操作）
- 设置页文字
- Toast 通知文字
- 页脚文字

**实现方式：**
- 所有硬编码中文文本替换为 `t('key')`
- `t()` 函数：`return (i18n[settings.uiLang] || i18n.zh)[key] || key`
- 设置页面加一个"界面语言"下拉框（中文/English）
- 切换后立即刷新 UI (`renderGrid()`, `renderDeckSidebar()` 等重新渲染)
- 刷新不丢设置（存在 localStorage）

**翻译要求：**
- 中文文案保持原来的风格（简短自然）
- 英文文案自然流畅（不要机翻感）
- 例子：
  - "添加单词" → "Add Word"
  - "开始复习" → "Start Review"
  - "完全忘了" → "Again"
  - "有点难" → "Hard"
  - "记住了" → "Good"
  - "超简单" → "Easy"
  - "点击翻转查看释义" → "Tap to reveal"
  - "复习完成" → "Review Complete"

### 翻译语言对扩展

**现状：** 添加卡片时只支持英文→中文翻译（调用 MyMemory API）。

**改动：**
- 设置页增加"释义语言"选择：`中文 | 日文 | 法文 | 德文 | 韩文 | 西班牙文`
- 语言代码映射：`zh-CN, ja, fr, de, ko, es`
- 添加卡片时，MyMemory API 的 `langpair` 参数跟随设置
- TTS 发音语言也跟随设置
- 导入文章提取时设置目标语言

---

## 3. PWA (Progressive Web App)

### manifest.json

在项目根目录创建 `manifest.json`:

```json
{
  "name": "WordCards",
  "short_name": "WordCards",
  "description": "智能单词卡学习工具",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#0f0f0f",
  "theme_color": "#1a1a2e",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

- 生成图标：用 Canvas 在 build 时生成，或者自己画
- 在 `index.html` 的 `<head>` 加：
  ```html
  <link rel="manifest" href="manifest.json" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="theme-color" content="#1a1a2e" />
  ```

### Service Worker

创建 `service-worker.js`:

- 安装阶段：预缓存所有静态资源（index.html, style.css, app.js, api.js, manifest.json, icons）
- 激活阶段：清理旧缓存
- 请求拦截：
  - CDN 资源（cdnjs pdf.min.js）— Network First，fallback 到缓存
  - 自身文件 — Cache First
- 版本号控制：`CACHE_VERSION = 'wordcards-v1'`

### 图标生成

写一个简单的 HTML Canvas 脚本或直接用 SVG/emoji 生成图标：
- 因为不能引入外部库，用 Canvas 生成简单的"WC"文字图标
- 或者用 SVG inline 生成

建议方法：`index.html` `<head>` 里直接写 SVG favicon（作为图标），manifest 用 PNG 图标路径。如果没有 PNG 图标，用 `data:image/svg+xml` 代替。

### index.html 适配

- `<head>` 加 PWA meta 标签
- `<body>` 底部加 service worker 注册脚本：
  ```js
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('SW registered'))
      .catch(console.error);
  }
  ```

### 离线数据

- localStorage 数据已经离线可用
- Service Worker 确保静态资源离线可加载
- 如果离线时打开页面，显示可读的离线提示？不需要，localStorage 直接工作

---

## 4. 翻转动效微调

当前翻转用 `transform: rotateY(180deg)` + `0.6s cubic-bezier(0.4, 0, 0.2, 1)`

微调：
- 缩短为 `0.5s`
- 复习卡片增加轻微的 Y 轴旋转（3D 效果更强）：`transform: perspective(1200px) rotateY(180deg)`
- 网格卡片保持现有动效

---

## 5. Capacitor iOS build 指南

在 `PROJECT.md` 加几行：

```
### iOS 构建
1. `npx cap add ios`
2. `npx cap sync`
3. 打开 ios/App/App.xcworkspace 用 Xcode
4. 连接 iPhone 或使用模拟器 → Run
需要 macOS + Xcode
```

---

## 实现顺序

1. PWA (manifest.json + service-worker.js + meta tags) — 最独立，快速
2. 多语言 (i18n 系统 + UI 切换) — 最大改动量，但设计好的话后续不影响
3. 难度分级 — 数据层简单，UI 改动多
4. 翻转动效微调
5. 更新 PROJECT.md（标记完成项）
6. 复制到 www/

## 特别注意事项

1. **i18n 替换**：`t('key')` 替换所有硬编码中文文本时，要**逐行检查**，不要漏掉
   - 事件绑定里的文本（`showToast` 里的消息也需要翻译）
   - 动态生成的 HTML（`innerHTML` 里的字符串）
   - 复习模式的各种文本（卡片级别标签、倒计时文字）
2. **不引入任何外部库**
3. **Service Worker 缓存策略**：版本号不用自动生成，手动更新即可。改一次 v1→v2 就清掉旧缓存
4. **manifest icons**：如果没有真正的图标文件，Service Worker 注册可能报 404。可以用 inline SVG 或直接省略 icons 字段（Chrome 会用首字母作为默认图标）
5. **PWA 测试**：改完后在 Chrome DevTools → Application → Manifest / Service Workers 检查是否生效
6. **多语言切换**：切换语言后调用 `renderGrid(); renderDeckSidebar(); renderStats(); updateQueueStats();` 等刷新函数
7. **难度分级的间隔调整**：只在初始间隔上乘系数，不影响 SM-2 后续计算
