// SM-2 (SuperMemo 2) 间隔重复算法 — 与前端 app.js 保持逻辑一致

// 学习步骤（分钟）
const LEARNING_STEPS = { 1: 1, 2: 10 };

// SM-2 等级映射
const GRADE_MAP = { again: 0, hard: 1, good: 3, easy: 5 };

/**
 * SM-2 核心算法 — 更新 interval / reps / ef
 * 仅用于 review 状态的卡片
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

/**
 * 计算下次复习日期
 */
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

/**
 * 学习步骤计时
 */
function calcLearningNextReview(minutes) {
  const next = new Date();
  next.setMinutes(next.getMinutes() + minutes);
  return next.toISOString();
}

/**
 * 处理学习卡片回答
 * 返回 { pushBack: boolean } — pushBack=true 表示卡片需要放回队列末尾
 */
function answerLearningCard(rd, gradeKey) {
  const isFirstStep = rd.card_state === "new" || rd.learning_step === 1;

  if (isFirstStep) {
    // Step 1 / 新卡片第一次看
    if (gradeKey === "again" || gradeKey === "hard") {
      rd.card_state = "learning";
      rd.learning_step = 1;
      rd.next_review = calcLearningNextReview(LEARNING_STEPS[1]);
      return { pushBack: false };
    } else if (gradeKey === "good") {
      rd.card_state = "learning";
      rd.learning_step = 2;
      rd.next_review = calcLearningNextReview(LEARNING_STEPS[2]);
      return { pushBack: false };
    } else if (gradeKey === "easy") {
      // 直接毕业进入复习
      rd.card_state = "review";
      rd.learning_step = 0;
      rd.interval = 1;
      rd.reps = 0;
      rd.ef = 2.5;
      rd.next_review = calcNextReviewDate(rd);
      return { pushBack: false };
    }
  } else {
    // Step 2
    if (gradeKey === "again" || gradeKey === "hard") {
      rd.learning_step = 1;
      rd.next_review = calcLearningNextReview(LEARNING_STEPS[1]);
      return { pushBack: false };
    } else if (gradeKey === "good") {
      rd.card_state = "review";
      rd.learning_step = 0;
      rd.interval = 1;
      rd.reps = 0;
      rd.ef = 2.5;
      rd.next_review = calcNextReviewDate(rd);
      return { pushBack: false };
    } else if (gradeKey === "easy") {
      rd.card_state = "review";
      rd.learning_step = 0;
      rd.interval = 4;
      rd.reps = 0;
      rd.ef = 2.5;
      rd.next_review = calcNextReviewDate(rd);
      return { pushBack: false };
    }
  }
}

module.exports = {
  GRADE_MAP,
  LEARNING_STEPS,
  sm2,
  calcNextReviewDate,
  calcLearningNextReview,
  answerLearningCard,
};
