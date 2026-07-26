# Round D — 产品化（Landing Page + 默认词包 + README）

## 改动 1: Landing Page / 新手引导

**目标**: 在首页顶部新增一个欢迎横幅，首次使用时展示，有"不再显示"选项。

**改动文件**: `index.html` + `app.js` + `style.css`

### index.html
在 `<main>` 开头（工具栏之前）添加：
```html
<div id="welcomeBanner" class="welcome-banner" style="display:none">
  <div class="welcome-content">
    <h2>👋 欢迎使用 WordCards</h2>
    <p>智能单词卡学习工具 — 导入文章、间隔重复、掌握词汇。</p>
    <div class="welcome-steps">
      <div class="welcome-step"><span class="step-num">1</span> 添加单词或导入文章</div>
      <div class="welcome-step"><span class="step-num">2</span> 开始复习（空格翻转，1-4评分）</div>
      <div class="welcome-step"><span class="step-num">3</span> 坚持每天复习，SM-2 帮你记住</div>
    </div>
    <label class="welcome-dismiss">
      <input type="checkbox" id="welcomeDismissCheck"> 不再显示
    </label>
    <button id="welcomeStartBtn" class="btn-primary">开始学习 🚀</button>
  </div>
</div>
```

### app.js
在初始化时（约 `init()` 函数）：
- 检查 `localStorage` 中 `settings.welcomeDismissed` 
- 若为 false/undefined，显示 welcomeBanner
- 若为 true，隐藏

`welcomeStartBtn` 和 `welcomeDismissCheck` 事件：
- 点击"开始学习"或勾选"不再显示"后：设置 `settings.welcomeDismissed = true`，淡出 banner

### CSS (`style.css`)
新增 `.welcome-banner` 样式：
- 居中卡片布局，背景 `#1e1e3a`，圆角 16px，padding 24px
- 三步指引横向排列（flex），每步有圆角数字标记
- Transition 淡出

## 改动 2: 默认词包（SAT 高频词汇）

**改动文件**: `app.js`

在 `init()` 函数中，检测到本地没有任何单词时（`words.length === 0`），自动加载一个默认词包。

在文件顶部定义默认词包（~20 个 SAT 高频词，涵盖常用学术词汇）：

```javascript
const DEFAULT_DECK_NAME = "SAT 高频词汇";
const DEFAULT_DECK = { id: generateId(), name: DEFAULT_DECK_NAME, createdAt: new Date().toISOString() };

const DEFAULT_WORDS = [
  { word: "ubiquitous", translation: "无处不在的", definition: "present, appearing, or found everywhere" },
  { word: "ephemeral", translation: "短暂的", definition: "lasting for a very short time" },
  { word: "pragmatic", translation: "务实的", definition: "dealing with things sensibly and realistically" },
  { word: "ambiguous", translation: "模棱两可的", definition: "open to more than one interpretation" },
  { word: "empirical", translation: "经验主义的", definition: "based on observation or experience" },
  { word: "paradigm", translation: "范式", definition: "a typical example or pattern of something" },
  { word: "catalyst", translation: "催化剂", definition: "a person or thing that causes an important change" },
  { word: "dichotomy", translation: "二分法", definition: "a division into two opposed groups" },
  { word: "exacerbate", translation: "加剧", definition: "make a problem or situation worse" },
  { word: "innovative", translation: "创新的", definition: "featuring new methods or ideas" },
  { word: "juxtapose", translation: "并列", definition: "place close together for contrasting effect" },
  { word: "meticulous", translation: "一丝不苟的", definition: "showing great attention to detail" },
  { word: "nostalgic", translation: "怀旧的", definition: "yearning for the past" },
  { word: "resilient", translation: "有弹性的", definition: "able to recover quickly from difficulties" },
  { word: "scrutinize", translation: "仔细检查", definition: "examine closely and carefully" },
  { word: "tenacious", translation: "坚韧的", definition: "holding firmly to something" },
  { word: "verbose", translation: "冗长的", definition: "using more words than needed" },
  { word: "whimsical", translation: "异想天开的", definition: "playfully odd or fanciful" },
  { word: "lucid", translation: "清晰的", definition: "expressed clearly and easy to understand" },
  { word: "profound", translation: "深刻的", definition: "very great or intense in depth" },
];

// 在 init() 中添加：如果 words.length === 0，创建默认卡组 + 导入默认词
```

自动导入时在控制台 log: `📚 已加载默认 SAT 词包 (20 words)`

## 改动 3: README.md

在项目根目录创建 `README.md`，内容：

```markdown
# WordCards

> 一个基于 SM-2 间隔重复算法的智能单词卡学习工具。

## ✨ 功能

- **SM-2 间隔重复** — 科学记忆算法，自动安排复习
- **三种学习模式**：翻转识别 / 拼写练习 / 浏览器管理
- **文章导入** — 粘贴文本或上传 PDF，自动提取生词
- **卡组系统** — 按主题分组管理，按卡组筛选复习
- **标签 + 标记 + 挂起** — 灵活组织卡片
- **多语言支持** — 释义支持 6 种语言（中/日/法/德/韩/西）
- **PWA 离线可用** — 安装到桌面，无网络也能用
- **全栈同步** — 本地离线 + 在线账户双模式
- **难度分级** — 1/2/3 级，影响复习间隔
- **数据导入/导出** — JSON / CSV，随时备份

## 🚀 快速开始

### 在线使用
访问 [https://word-cards-five.vercel.app](https://word-cards-five.vercel.app)

### 本地运行
```bash
# 前端（任意 HTTP 服务器）
cd word-cards
python3 -m http.server 8080

# 后端（可选，用于在线同步）
cd server
npm install
node index.js
```

## 🏗️ 技术栈

| 层 | 技术 |
|---|---|
| 前端 | 纯 HTML/CSS/JS |
| 后端 | Node.js + Express + SQLite |
| 算法 | SM-2 (SuperMemo) |
| 部署 | Vercel + Railway |
| 移动端 | Capacitor (Android) |
| 离线 | PWA / localStorage |

## 📖 使用指南

1. **添加单词**：手动输入或导入文章自动提取
2. **开始复习**：点击"开始复习"，翻转卡片后按 1-4 评分
3. **拼写模式**：看释义打字拼写，加深记忆
4. **浏览器视图**：表格管理，支持搜索、筛选、批量操作

## 🧠 键盘快捷键

| 键 | 功能 |
|---|---|
| `空格` | 翻转卡片 |
| `1-4` | 评分（完全忘了/有点难/记住了/超简单） |
| `S` | 挂起卡片 |
| `F` | 标记卡片 |

## 📄 许可证

MIT
```

## 注意事项
1. Landing page 不要挡住主界面操作，可以点击"开始学习"或关闭后消失
2. 默认词包只在第一次使用时加载，已有单词不覆盖
3. README.md 放在项目根目录
