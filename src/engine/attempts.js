import { nextBox } from './leitner.js'

// Fast, low-confidence-independent guess detection: an answer submitted in
// under this window is more likely a click than a retrieval attempt.
const RAPID_FIRE_MS = 1200

export function latestBoxForQuestion(attempts, questionId) {
  let box = 0
  for (const a of attempts) {
    if (a.questionId === questionId) box = a.box
  }
  return box
}

export function createAttempt({
  attempts,
  question,
  choiceId,
  confidence,
  timeMs,
  mode,
  sessionId,
}) {
  const correct = choiceId === question.correctChoiceId
  const previousBox = latestBoxForQuestion(attempts, question.id)
  const box = nextBox(previousBox, correct)
  const choice = question.choices.find((c) => c.id === choiceId)

  return {
    id: `a_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    questionId: question.id,
    topicId: question.topicId,
    mode,
    choiceId,
    correct,
    confidence: confidence ?? null,
    misconception: !correct ? choice?.misconception ?? null : null,
    timeMs,
    rapidFire: typeof timeMs === 'number' && timeMs < RAPID_FIRE_MS,
    box,
    sessionId,
    createdAt: Date.now(),
  }
}

export function latestAttemptPerQuestion(attempts) {
  const map = new Map()
  for (const a of attempts) map.set(a.questionId, a)
  return map
}
