# WordCards — Phase 4 Round 1: PWA + 难度分级

## 前置

项目路径：`/home/tintinzhang/word-cards/`
要改的文件：`index.html`、`style.css`、`app.js`
新增文件：`manifest.json`、`service-worker.js`
纯前端 + localStorage。不引入外部库。

---

## 1. 难度分级 (Difficulty Grading)

**现状：** SM-2 算法内部有 EF (Ease Factor, 1.3~∞)，但用户看不到也手动改不了。

**目标：** 让用户能看到和调整每张卡的难度，并按难度筛选/排序。

### 数据结构
- reviewData 增加 `difficulty: 1 | 2 | 3` (1=简单, 2=中等, 3=困难)
- 新卡片默认 difficulty = 2
- `getReviewData()` 默认值加上 `difficulty: 2`
- 难度影响 SM-2 初始时对 nextReview 的计算：
  - difficulty=1: 初始 interval ×1.5 (但至少 1 天)
  - difficulty=2: 正常
  - difficulty=3: 初始 interval ×0.5 (但至少 1 天)
  - 仅在卡片状态初次从 new→learning/learning→review 时应用
  - 不影响已经进入 review 状态后的 SM-2 计算

### UI

**添加/编辑卡片模态框：**
- 在标签选择行下面加一行"难度"标题
- 三个按钮并排：`😊 简单` `🤔 中等` `😰 困难`
- 点击高亮选中，按钮样式：选中时带颜色边框/背景
- 默认选中"中等"

**卡片网格：**
- 卡片正面（单词下方）显示难度指示文字：
  - 简单 = 绿色文字 `😊 简单`
  - 中等 = 黄色文字 `🤔 中等`
  - 困难 = 红色文字 `😰 困难`
- 不占太多空间，一行小字

**卡片信息弹窗：**
- 在"人工调整"区域新增一行难度选择（三个按钮，同模态框样式）
- 切换后调用 `DataLayer.updateReviewData()` 持久化

**浏览器视图：**
- 表头新增一列"难度"，显示图标
- 列宽度小一点（60px），用图标表示
- 两个特殊值：😊 😐 😰
- 表头可排序
- 批量操作工具栏新增"批量设置难度"按钮 → 弹出三个选项

**统计页面：**
- 在"卡片分布"下方新增一行"难度分布"：简单 X 张 · 中等 X 张 · 困难 X 张

### 迁移
旧卡片 reviewData 没有 `difficulty` 字段 → `getReviewData()` 默认返回 `difficulty: 2`，不需要额外迁移。

---

## 2. PWA (Progressive Web App)

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
  "icons": []
}
```

icons 留空数组，Chrome 会用默认图标。

### Service Worker

创建 `service-worker.js`:

```js
const CACHE_NAME = 'wordcards-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/api.js',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
```

### index.html

`<head>` 里添加：
```html
<link rel="manifest" href="manifest.json" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="theme-color" content="#1a1a2e" />
```

`<head>` 结束前加 favicon（占位用）：
```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>" />
```

`<body>` 底部（所有脚本引用之后）加 service worker 注册：
```html
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
</script>
```

### Capacitor 配置

`capacitor.config.json` 确认 `webDir: "www"`，不需要改。

---

## 3. 翻转动效微调

现有：
```css
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

改为 `0.5s`，复习卡片增加 perspective：
```css
.review-card {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  border-radius: 20px;
}
```

网格卡片保持 0.6s 不变。

---

## 4. iOS build 指南

修改 `PROJECT.md`，在 Phase 4 项下加一行：

```
### iOS 构建
1. `npx cap add ios`
2. `npx cap sync`
3. 在 macOS 上用 Xcode 打开 ios/App/App.xcworkspace
4. 连接 iPhone 或模拟器 → Run
需要 macOS + Xcode
```

---

## 实现注意事项

1. **`getReviewData()` 默认值**：增加 `difficulty: 2`
2. **SM-2 不影响**：难度只影响从 learning 转到 review 时的初始间隔，不改变 SM-2 的 EF/reps/interval 逻辑
3. **Capacitor 不受影响**：manifest.json 和 service-worker.js 不在 capacitor 的 webDir (www/) 里，需要手动复制到 www/。记得在最后一步 `cp manifest.json www/ && cp service-worker.js www/`
4. **PWA 测试**：打开 Chrome DevTools → Application → Manifest / Service Workers 检查注册状态
5. **每次改动后检查控制台**：没有任何 JS 报错

---

## 最终步骤

```bash
cp app.js www/app.js
cp index.html www/index.html
cp style.css www/style.css
cp manifest.json www/manifest.json
cp service-worker.js www/service-worker.js
```
