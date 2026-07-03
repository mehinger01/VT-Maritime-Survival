// Aggregates this session's attempts into a report. Course-agnostic: reads
// generic attempt/topic shapes only.
export function buildSessionReport(attempts, sessionId, topics) {
  const sessionAttempts = attempts.filter((a) => a.sessionId === sessionId)
  const total = sessionAttempts.length
  const correct = sessionAttempts.filter((a) => a.correct).length

  const topicIds = [...new Set(sessionAttempts.map((a) => a.topicId))]
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id

  // Confidence calibration: how well confidence predicted correctness.
  const withConfidence = sessionAttempts.filter((a) => a.confidence)
  const overconfident = withConfidence.filter((a) => a.confidence === 'high' && !a.correct)
  const underconfident = withConfidence.filter((a) => a.confidence === 'low' && a.correct)

  const rapidFireCount = sessionAttempts.filter((a) => a.rapidFire).length

  const durationMs = total > 0
    ? Math.max(...sessionAttempts.map((a) => a.createdAt)) - Math.min(...sessionAttempts.map((a) => a.createdAt))
    : 0

  return {
    total,
    correct,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    topicsTouched: topicIds.map(topicName),
    overconfidentCount: overconfident.length,
    underconfidentCount: underconfident.length,
    rapidFireCount,
    durationMs,
    attempts: sessionAttempts,
  }
}
