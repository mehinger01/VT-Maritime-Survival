// Course-agnostic spaced-repetition scheduling. Operates on generic
// {questionId, correct, confidence} attempts — never touches course content.
//
// Leitner box model: box 0 = never seen / always wrong, box 5 = mastered.
// A correct answer promotes a box; a miss resets it to 0. High-confidence
// wrong answers (a misconception, not a slip) reset harder by staying at 0
// rather than a partial demotion.

export const MAX_BOX = 5

const INTERVAL_DAYS_BY_BOX = [0, 1, 2, 4, 9, 21]

export function nextBox(previousBox, correct) {
  if (!correct) return 0
  return Math.min(MAX_BOX, previousBox + 1)
}

export function intervalDaysForBox(box) {
  return INTERVAL_DAYS_BY_BOX[Math.max(0, Math.min(MAX_BOX, box))]
}

export function dueAt(lastAttemptAt, box) {
  const days = intervalDaysForBox(box)
  return lastAttemptAt + days * 24 * 60 * 60 * 1000
}

export function masteryScoreForBox(box) {
  return Math.round((box / MAX_BOX) * 100)
}
