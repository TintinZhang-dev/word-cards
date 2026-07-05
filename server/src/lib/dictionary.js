// 获取单词释义 — 端口自前端 app.js handleBatchAdd 中的 fetchDefinition

/**
 * 获取英文释义（FreeDictionary API）
 */
async function getDefinition(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
    const r = await fetch(url);
    if (!r.ok) return "";
    const data = await r.json();
    if (data && data[0] && data[0].meanings && data[0].meanings[0]) {
      const def = data[0].meanings[0].definitions[0].definition;
      return def.charAt(0).toUpperCase() + def.slice(1);
    }
    return "";
  } catch {
    return "";
  }
}

/**
 * 获取中文翻译（MyMemory API）
 */
async function getTranslation(word) {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|zh-CN`;
    const r = await fetch(url);
    if (!r.ok) return "";
    const data = await r.json();
    return (data.responseData && data.responseData.translatedText)
      ? data.responseData.translatedText
      : "";
  } catch {
    return "";
  }
}

/**
 * 按语言获取释义
 * @param {string} word
 * @param {"en"|"zh"} lang
 */
async function fetchDefinition(word, lang) {
  if (lang === "zh") {
    return await getTranslation(word);
  }
  return await getDefinition(word);
}

module.exports = { getDefinition, getTranslation, fetchDefinition };
