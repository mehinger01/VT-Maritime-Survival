import { masteryScoreForBox } from './leitner.js'
import { latestAttemptPerQuestion } from './attempts.js'

// Mastery rewards both correctness (box) and coverage: an unattempted
// question in a topic scores 0, so mastery can't be inflated by only ever
// practicing the questions you already know.
export function computeTopicMastery(questions, attempts, topicId) {
  const topicQuestions = questions.filter((q) => q.topicId === topicId)
  if (topicQuestions.length === 0) return 0
  const latest = latestAttemptPerQuestion(attempts)
  const total = topicQuestions.reduce((sum, q) => {
    const attempt = latest.get(q.id)
    return sum + (attempt ? masteryScoreForBox(attempt.box) : 0)
  }, 0)
  return Math.round(total / topicQuestions.length)
}

export function computeAllTopicMastery(topics, questions, attempts) {
  const result = {}
  for (const topic of topics) {
    result[topic.id] = computeTopicMastery(questions, attempts, topic.id)
  }
  return result
}

export function computeOverallReadiness(topics, questions, attempts) {
  const masteryByTopic = computeAllTopicMastery(topics, questions, attempts)
  const values = Object.values(masteryByTopic)
  if (values.length === 0) return 0
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length)
}
