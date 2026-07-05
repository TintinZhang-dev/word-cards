const API = {
  baseUrl: "http://localhost:3001",

  // Token 管理
  getToken() { return localStorage.getItem("wctoken"); },
  setToken(t) { localStorage.setItem("wctoken", t); },
  setUser(u) { localStorage.setItem("wcuser", JSON.stringify(u)); },
  getUser() {
    try { return JSON.parse(localStorage.getItem("wcuser")); }
    catch { return null; }
  },
  clearToken() {
    localStorage.removeItem("wctoken");
    localStorage.removeItem("wcuser");
  },

  // 通用请求方法
  async request(path, options = {}) {
    const headers = { ...options.headers };
    if (!options.skipContentType) {
      headers["Content-Type"] = "application/json";
    }
    const token = this.getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(this.baseUrl + path, { ...options, headers });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // 401 → token 过期，跳转登录
      if (res.status === 401) {
        this.clearToken();
        window.location.href = "/login.html";
        throw new Error("登录已过期");
      }
      throw new Error(data.error || "请求失败");
    }
    return data;
  },

  // === Auth ===
  register(email, password) {
    return this.request("/api/register", {
      method: "POST", body: JSON.stringify({ email, password })
    });
  },
  login(email, password) {
    return this.request("/api/login", {
      method: "POST", body: JSON.stringify({ email, password })
    });
  },

  // === Words ===
  getWords() { return this.request("/api/words"); },
  addWord(word, translation, definition, deckId) {
    return this.request("/api/words", {
      method: "POST", body: JSON.stringify({ word, translation, definition, deckId })
    });
  },
  updateWord(id, word, translation, definition, deckId) {
    return this.request(`/api/words/${id}`, {
      method: "PUT", body: JSON.stringify({ word, translation, definition, deckId })
    });
  },
  deleteWord(id) {
    return this.request(`/api/words/${id}`, { method: "DELETE" });
  },

  // === Decks ===
  getDecks() { return this.request("/api/decks"); },
  addDeck(name) {
    return this.request("/api/decks", {
      method: "POST", body: JSON.stringify({ name })
    });
  },
  updateDeck(id, name) {
    return this.request(`/api/decks/${id}`, {
      method: "PUT", body: JSON.stringify({ name })
    });
  },
  deleteDeck(id) {
    return this.request(`/api/decks/${id}`, { method: "DELETE" });
  },

  // === Review ===
  getDueCards(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return this.request("/api/review/due" + (qs ? "?" + qs : ""));
  },
  answerCard(wordId, gradeKey) {
    return this.request("/api/review/answer", {
      method: "POST", body: JSON.stringify({ wordId, gradeKey })
    });
  },

  // === Import ===
  extractWords(text, skipExisting = true) {
    return this.request("/api/import/extract", {
      method: "POST", body: JSON.stringify({ text, skipExisting })
    });
  },
  batchAddWords(words, deckId, defLang) {
    return this.request("/api/import/batch-add", {
      method: "POST", body: JSON.stringify({ words, deckId, defLang })
    });
  },
};
