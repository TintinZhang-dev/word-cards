const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const DB_PATH = path.join(DATA_DIR, "wordcards.db");

// 确保数据目录存在
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

// 性能优化
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// ---- 建表 ----
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS decks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS words (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES users(id),
    deck_id INTEGER REFERENCES decks(id),
    word TEXT NOT NULL,
    translation TEXT DEFAULT '',
    definition TEXT DEFAULT '',
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS review_data (
    word_id INTEGER PRIMARY KEY REFERENCES words(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES users(id),
    next_review TEXT,
    interval REAL DEFAULT 0,
    reps INTEGER DEFAULT 0,
    ef REAL DEFAULT 2.5,
    card_state TEXT DEFAULT 'new',
    learning_step INTEGER DEFAULT 0,
    last_reviewed TEXT
  );

  CREATE TABLE IF NOT EXISTS daily_counts (
    user_id INTEGER NOT NULL REFERENCES users(id),
    date TEXT NOT NULL,
    type TEXT NOT NULL,
    deck_key TEXT NOT NULL DEFAULT '__global__',
    count INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, date, type, deck_key)
  );

  CREATE TABLE IF NOT EXISTS settings (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    new_cards_per_day INTEGER DEFAULT 10,
    review_cards_per_day INTEGER DEFAULT 50,
    def_lang TEXT DEFAULT 'en',
    deck_overrides TEXT DEFAULT '{}',
    ignore_words TEXT DEFAULT '[]'
  );
`);

module.exports = db;
