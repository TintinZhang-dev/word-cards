/* ===============================
   WordCards — Phase 1 + 2 + 3
   localStorage 持久化 + 单词管理 + SM-2 + 学习模式
   =============================== */

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
  importBtn.textContent = "📄 导入文章";
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
    searchDebounce = setTimeout(renderGrid, 150);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.classList.add("hidden");
    renderGrid();
    searchInput.focus();
  });

  // 搜索输入时回车直接刷新
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      clearTimeout(searchDebounce);
      renderGrid();
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
        <p>📭 还没有单词卡片</p>
        <p style="font-size: 0.9rem; color: #666;">点击「添加单词」开始创建</p>
      </div>
    `;
    return;
  }

  let visibleWords = words;

  // 按卡组过滤
  if (selectedDeckId !== null) {
    visibleWords = visibleWords.filter(w => (w.deckId === undefined ? null : w.deckId) === selectedDeckId);
  }

  // 按搜索过滤
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    visibleWords = visibleWords.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.translation.toLowerCase().includes(q) ||
      w.definition.toLowerCase().includes(q)
    );
  }

  if (visibleWords.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>🔍 未找到匹配的单词</p>
        <p style="font-size: 0.9rem; color: #666;">试试其他关键词</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = visibleWords.map(w => {
    const status = getCardStatusLabel(w.id);
    return `
    <div class="card-scene">
      <div class="card" onclick="this.classList.toggle('flipped')">
        <div class="card-front">
          <div class="card-status ${status.class}">${status.text}</div>
          <div class="card-actions">
            <button class="edit-btn" data-id="${w.id}" onclick="event.stopPropagation(); openEditModal(${w.id})">✏️</button>
            <button class="delete-btn" data-id="${w.id}" onclick="event.stopPropagation(); deleteWord(${w.id})">🗑️</button>
          </div>
          <div class="word">${escapeHtml(w.word)}</div>
          <div class="hint">点击翻转</div>
        </div>
        <div class="card-back">
          <div class="translation">${escapeHtml(w.translation)}</div>
          <div class="definition">${escapeHtml(w.definition)}</div>
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
  let text = selectedDeckId !== null
    ? `📁 ${decks.find(d => d.id === selectedDeckId)?.name || "未知卡组"} · ${scopeWords.length} 张`
    : `📚 ${words.length} 张`;
  if (streak.count > 0) text += ` 🔥 ${streak.count} 天`;
  if (learningCount > 0) text += ` · 💛 ${learningCount} 学习中`;
  if (masteredCount > 0) text += ` · ✅ ${masteredCount} 已掌握`;
  if (dueCards.length > 0) text += ` · 🔴 ${dueCards.length} 待复习`;
  text += ` · 🆕 ${remainingNew} 新卡 · 📋 ${remainingReview} 复习`;
  statsEl.textContent = text;
}

// ---------- 侧边栏 ----------
function renderDeckSidebar() {
  const list = document.getElementById("deckList");
  if (!list) return;

  let html = `
    <div class="deck-item ${selectedDeckId === null ? 'active' : ''}"
         data-deck-id="all" onclick="selectDeck(null)">
      <span>📚 所有卡片</span>
      <span class="deck-count">${words.length}</span>
    </div>
  `;

  for (const deck of decks) {
    const count = words.filter(w => (w.deckId === undefined ? null : w.deckId) === deck.id).length;
    html += `
      <div class="deck-item ${selectedDeckId === deck.id ? 'active' : ''}"
           data-deck-id="${deck.id}" onclick="selectDeck(${deck.id})">
        <span class="deck-name">📁 ${escapeHtml(deck.name)}</span>
        <span class="deck-count">${count}</span>
        <span class="deck-actions">
          <button class="deck-settings-btn" title="卡组设置" onclick="event.stopPropagation(); openDeckSettings(${deck.id})">⚙️</button>
          <button class="deck-rename-btn" title="重命名" onclick="event.stopPropagation(); renameDeck(${deck.id})">✏️</button>
          <button class="deck-delete-btn" title="删除" onclick="event.stopPropagation(); deleteDeck(${deck.id})">🗑️</button>
        </span>
      </div>
    `;
  }

  list.innerHTML = html;
}

function selectDeck(deckId) {
  selectedDeckId = deckId;
  renderDeckSidebar();
  renderGrid();
  renderStats();
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
    ? `📋 开始复习 (${dueCards.length})`
    : `📋 开始复习`;
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
    renderDeckSidebar();
    renderGrid();
    renderStats();
  } catch (err) {
    showToast("删除失败：" + err.message, "error");
  }
}

// ---------- 模态框 ----------
function populateDeckSelect(selectedId) {
  const select = document.getElementById("modalDeck");
  if (!select) return;
  let html = '<option value="">未分类</option>';
  for (const deck of decks) {
    html += `<option value="${deck.id}" ${(selectedId !== null && selectedId !== undefined && selectedId === deck.id) ? 'selected' : ''}>${escapeHtml(deck.name)}</option>`;
  }
  select.innerHTML = html;
}

function openAddModal() {
  editingId = null;
  modalTitle.textContent = "添加单词";
  modalWord.value = "";
  modalTranslation.value = "";
  modalDefinition.value = "";
  populateDeckSelect(null);
  modalOverlay.classList.add("show");
  modalWord.focus();
}

function openEditModal(id) {
  const w = words.find(word => word.id === id);
  if (!w) return;
  editingId = id;
  modalTitle.textContent = "编辑单词";
  modalWord.value = w.word;
  modalTranslation.value = w.translation;
  modalDefinition.value = w.definition;
  populateDeckSelect(w.deckId);
  modalOverlay.classList.add("show");
  modalWord.focus();
}

function closeModal() {
  modalOverlay.classList.remove("show");
  editingId = null;
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
    await updateWord(editingId, word, translation, definition || "", deckId);
  } else {
    await addWord(word, translation, definition || "", deckId);
  }

  closeModal();
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
let settings = { newCardsPerDay: 10, reviewCardsPerDay: 50, deckOverrides: {}, defLang: "en" };

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
    };
  }
  return reviewData[wordId];
}

// ---------- 卡片状态标签 ----------
function getCardStatusLabel(wordId) {
  const rd = reviewData[wordId];
  if (!rd) return { text: "新", class: "status-new" };
  switch (rd.cardState) {
    case "new":      return { text: "新", class: "status-new" };
    case "learning": return { text: "学习中", class: "status-learning" };
    case "review":   return { text: "复习", class: "status-review" };
    case "mastered": return { text: "✅", class: "status-mastered" };
    default:         return { text: "新", class: "status-new" };
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
  reviewQueue = due.map(d => d.word_id);

  // 从返回数据构建 reviewData
  for (const d of due) {
    reviewData[d.word_id] = {
      nextReview: d.next_review || null,
      interval: d.interval || 0,
      reps: d.reps || 0,
      ef: d.ef || 2.5,
      cardState: d.card_state || "new",
      learningStep: d.learning_step || 0,
    };
  }
  return due;
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
      rd.nextReview = calcNextReviewDate(rd);
      return false;
    } else if (gradeKey === "easy") {
      rd.cardState = "review";
      rd.learningStep = 0;
      rd.interval = 4;
      rd.reps = 0;
      rd.ef = 2.5;
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
    reviewSummary.innerHTML = '<div class="summary-line">所有卡片都已掌握，暂无需要复习的卡片。</div>';
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
  reviewQueue = [];
  reviewContainer.style.display = "none";
  document.querySelector("main").style.display = "";
  document.querySelector("footer").style.display = "";
  renderStats();
  updateDueBadge();
  renderGrid();
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
  if (learning > 0) parts.push(`💛 学习中 ${learning} 张`);
  if (review > 0) parts.push(`🔵 复习中 ${review} 张`);
  if (newCards > 0) parts.push(`🆕 新卡片 ${newCards} 张`);
  parts.push(`今日剩余 ${remainingNew} 新卡 · ${remainingReview} 复习`);
  reviewQueueStats.textContent = parts.join(" · ");
}

function showNextCard() {
  if (reviewQueue.length === 0) {
    finishReview();
    return;
  }

  const wordId = reviewQueue[0];
  const w = words.find(word => word.id === wordId);
  if (!w) {
    // 卡片已被删除
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

  // 学习步骤指示器
  const rd = getReviewData(wordId);
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
  } else if (rd.cardState === "new") {
    reviewLearningStep.textContent = "新卡片";
    reviewLearningStep.style.display = "block";
  } else {
    reviewLearningStep.style.display = "none";
  }

  // 更新进度
  const total = reviewQueue.length + reviewSessionCount;
  const done = reviewSessionCount;
  reviewProgress.textContent = `已复习 ${done} 张 · 剩余 ${reviewQueue.length} 张`;
  
  const fill = document.getElementById("reviewProgressFill");
  if (fill && total > 0) {
    fill.style.width = `${(done / total) * 100}%`;
  }

  updateQueueStats();
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

  gradeDistribution[gradeKey] = (gradeDistribution[gradeKey] || 0) + 1;

  const wordId = reviewQueue.shift();
  const rd = getReviewData(wordId);

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
    reviewSummary.innerHTML = '<div class="summary-line">继续加油，下次一定记得更好！</div>';
  } else {
    const elapsed = Math.floor((new Date() - reviewStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const timeStr = minutes > 0 ? `${minutes} 分 ${seconds} 秒` : `${seconds} 秒`;

    const distText = [
      gradeDistribution.again > 0 ? `完全忘了 ${gradeDistribution.again}` : "",
      gradeDistribution.hard  > 0 ? `有点难 ${gradeDistribution.hard}`   : "",
      gradeDistribution.good  > 0 ? `记住了 ${gradeDistribution.good}`   : "",
      gradeDistribution.easy  > 0 ? `超简单 ${gradeDistribution.easy}`   : "",
    ].filter(Boolean).join(" · ");

    reviewSummary.innerHTML = `
      <div class="summary-line">📊 本次复习 <strong>${reviewSessionCount}</strong> 张卡片</div>
      <div class="summary-line">⏱️ 用时 ${timeStr}</div>
      <div class="summary-line">${distText}</div>
      <div class="summary-line">✅ 已掌握 ${mastered}/${allCards} 张${streakCount > 1 ? ` 🔥 连续 ${streakCount} 天` : ""}</div>
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

// 复习模式键盘快捷键（仅在复习模式且卡片已翻转时生效）
document.addEventListener("keydown", (e) => {
  // 模态框打开时不处理复习快捷键
  if (modalOverlay.classList.contains("show")) return;
  if (reviewContainer.style.display === "none") return;
  if (reviewComplete.style.display === "block") return;

  // 空格键翻转卡片
  if (e.key === " " && !reviewCard.classList.contains("flipped")) {
    e.preventDefault();
    flipReviewCard();
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
  if (!settings.defLang) settings.defLang = "en";
}

function saveSettingsData() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function openSettingsModal() {
  settingsNewCards.value = settings.newCardsPerDay;
  const defLangSelect = document.getElementById("settingsDefLang");
  if (defLangSelect) defLangSelect.value = settings.defLang || "en";
  settingsOverlay.classList.add("show");

  // 动态注入：每日额度（复习上限）+ 释义语言 + 忽略列表 + 数据导出
  renderSettingsDailyLimitsSection();
  renderSettingsDefLangSection();
  renderSettingsIgnoreSection();
  renderSettingsExportSection();
  settingsNewCards.focus();
}

function closeSettingsModal() {
  settingsOverlay.classList.remove("show");
  // 移除动态注入的区域
  const secs = ["settingsDailyLimitsSection", "settingsDefLangSection", "settingsIgnoreSection", "settingsExportSection"];
  secs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
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
  `;

  // 插入到 settingsNewCards 之后、其他动态 section 之前
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
    <p style="font-size:0.75rem;color:#666;margin-bottom:10px;">导出备份或导入之前导出的数据。导入会合并现有卡片，不会覆盖。</p>
    <input type="file" accept=".json" id="settingsImportInput" style="display:none">
    <div style="display:flex;gap:8px;">
      <button id="settingsExportBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📥 导出数据</button>
      <button id="settingsImportBtn" class="btn-confirm" style="flex:1;padding:10px;font-size:0.85rem;">📤 导入数据</button>
    </div>
  `;

  // 插入到 modal-actions 之前
  const actionsDiv = settingsOverlay.querySelector(".modal-actions");
  if (actionsDiv && actionsDiv.parentNode) {
    actionsDiv.parentNode.insertBefore(section, actionsDiv);
  }

  document.getElementById("settingsExportBtn").addEventListener("click", handleExportData);
  document.getElementById("settingsImportBtn").addEventListener("click", () => {
    document.getElementById("settingsImportInput").click();
  });
  document.getElementById("settingsImportInput").addEventListener("change", handleImportData);
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

  const defLangSelect = document.getElementById("settingsDefLang");
  if (defLangSelect) settings.defLang = defLangSelect.value;
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
}

function renderStatsOverview() {
  let learningCount = 0, masteredCount = 0, newCount = 0;
  for (const w of words) {
    const rd = reviewData[w.id];
    if (!rd || rd.cardState === "new") newCount++;
    else if (rd.cardState === "learning") learningCount++;
    else if (rd.cardState === "mastered") masteredCount++;
  }
  const streak = getStreak();
  const dId = selectedDeckId;
  const usedNewToday = getNewCardsUsedToday(dId);
  const remainingNew = Math.max(0, getEffectiveLimit(dId, "new") - usedNewToday);
  const usedReviewToday = getReviewCardsUsedToday(dId);
  const remainingReview = Math.max(0, getEffectiveLimit(dId, "review") - usedReviewToday);

  const cards = [
    { value: words.length, label: "总卡片", cls: "" },
    { value: masteredCount, label: "已掌握", cls: "mastered" },
    { value: learningCount, label: "学习中", cls: "learning" },
    { value: newCount, label: "新卡片", cls: "new" },
    { value: `${streak.count || 0} 天`, label: "连续学习", cls: "streak" },
    { value: remainingNew, label: "今日剩余新卡", cls: "" },
    { value: remainingReview, label: "今日剩余复习", cls: "" },
  ];

  statsOverview.innerHTML = cards.map(c => `
    <div class="stat-card ${c.cls}">
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join("");
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
    statsChart.innerHTML = '<div class="chart-empty">暂无复习记录</div>';
    return;
  }

  statsChart.innerHTML = chartData.map(d => `
    <div class="chart-bar-wrapper">
      <div class="chart-count">${d.count || ""}</div>
      <div class="chart-bar" style="height: ${Math.max((d.count / maxCount) * 100, 4)}%"></div>
      <div class="chart-label">${d.label}</div>
    </div>
  `).join("");

  // 更新周期按钮状态
  document.querySelectorAll(".period-btn").forEach(btn => {
    btn.classList.toggle("active", parseInt(btn.dataset.period) === days);
  });
}

// ---------- 统计页面事件绑定 ----------
statsBtn.addEventListener("click", () => {
  if (reviewContainer.style.display === "flex") return;
  showStatsPage();
});

statsBackBtn.addEventListener("click", hideStatsPage);

// 周期切换
document.querySelector(".stats-chart-section").addEventListener("click", (e) => {
  const btn = e.target.closest(".period-btn");
  if (!btn) return;
  const days = parseInt(btn.dataset.period, 10);
  renderBarChart(days);
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
        const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|zh-CN`);
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

// ---------- 启动 ----------
loadSettings();
init();
