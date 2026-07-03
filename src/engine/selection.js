import { dueAt } from './leitner.js'
import { latestAttemptPerQuestion } from './attempts.js'
import { computeAllTopicMastery } from './mastery.js'

function shuffle(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// Interleaving: round-robin across topics instead of blocking all questions
// of one topic together, once more than one topic is in play.
function interleaveByTopic(questions) {
  const byTopic = new Map()
  for (const q of shuffle(questions)) {
    if (!byTopic.has(q.topicId)) byTopic.set(q.topicId, [])
    byTopic.get(q.topicId).push(q)
  }
  const buckets = shuffle([...byTopic.values()])
  const result = []
  let remaining = true
  while (remaining) {
    remaining = false
    for (const bucket of buckets) {
      if (bucket.length) {
        result.push(bucket.shift())
        remaining = true
      }
    }
  }
  return result
}

export function pickQuizQuestions(questions, { topicId, limit = 10 } = {}) {
  const pool = topicId ? questions.filter((q) => q.topicId === topicId) : questions
  return interleaveByTopic(pool).slice(0, limit)
}

// Difficulty rank used to escalate Drill Mode toward harder questions once
// a topic shows early success — course-agnostic, keyed by the generic
// difficulty string content authors set per question.
const DIFFICULTY_RANK = { easy: 1, medium: 2, hard: 3, 'very-hard': 4 }

// Deep Drill: adaptive difficulty. Prioritize questions from the
// lowest-mastery topics, biased toward ones the student has previously
// missed, and skip hints entirely (enforced by the Drill screen, not here).
// Within a topic, harder questions get weighted in progressively as that
// topic's mastery climbs, so early success shifts drilling toward
// medium/hard/very-hard rather than continuing to cycle easy recall.
export function pickDrillQuestions(topics, questions, attempts, { limit = 10 } = {}) {
  const masteryByTopic = computeAllTopicMastery(topics, questions, attempts)
  const latest = latestAttemptPerQuestion(attempts)

  const scored = questions.map((q) => {
    const topicMastery = masteryByTopic[q.topicId] ?? 0
    const attempt = latest.get(q.id)
    const missedBefore = attempt ? !attempt.correct : false
    const neverTried = !attempt
    const difficultyRank = DIFFICULTY_RANK[q.difficulty] ?? 1

    let priority = 100 - topicMastery
    if (missedBefore) priority += 40
    if (neverTried) priority += 15
    // Escalate toward harder tiers as mastery in this topic builds, so a
    // topic the student has shown early success in serves progressively
    // tougher questions instead of staying on easy recall indefinitely.
    priority += difficultyRank * (topicMastery / 100) * 20

    return { q, priority }
  })

  scored.sort((a, b) => b.priority - a.priority)
  const topSlice = scored.slice(0, Math.max(limit * 3, limit)).map((s) => s.q)
  return interleaveByTopic(topSlice).slice(0, limit)
}

// Review Mistakes: spaced resurfacing driven by Leitner due dates. Splits
// missed questions into "due now" and "upcoming" so the student always
// practices the most time-decayed mistakes first.
export function pickReviewQueue(questions, attempts) {
  const latest = latestAttemptPerQuestion(attempts)
  const missed = []
  for (const [questionId, attempt] of latest) {
    if (attempt.correct) continue
    const question = questions.find((q) => q.id === questionId)
    if (!question) continue
    missed.push({ question, attempt, dueAt: dueAt(attempt.createdAt, attempt.box) })
  }
  missed.sort((a, b) => a.dueAt - b.dueAt)
  const now = Date.now()
  return {
    due: missed.filter((m) => m.dueAt <= now),
    upcoming: missed.filter((m) => m.dueAt > now),
  }
}
