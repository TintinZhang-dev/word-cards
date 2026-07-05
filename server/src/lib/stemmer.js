// 词形还原（Stemming）— 端口自前端 app.js，并增强 -ly 还原

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
    // 增强：常见 -ly 不规则
    "happily": "happy", "easily": "easy",
    "heavily": "heavy", "angrily": "angry",
    "luckily": "lucky", "noisily": "noisy",
    "greedily": "greedy", "lazily": "lazy",
    "clumsily": "clumsy", "cozily": "cozy",
    "busily": "busy", "readily": "ready",
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

  // -ly 后缀：增强 — 去掉后如果以 i 结尾，尝试改为 y
  if (w.endsWith("ly") && w.length > 5) {
    const base = w.slice(0, -2);
    if (base.endsWith("i") && base.length >= 3) {
      return base.slice(0, -1) + "y";
    }
    return base;
  }

  // -er / -est 后缀
  if (w.endsWith("est") && w.length > 5) return w.slice(0, -3);
  if (w.endsWith("er") && w.length > 5) return w.slice(0, -2);

  return w;
}

module.exports = { stem };
