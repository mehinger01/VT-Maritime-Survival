import { useCallback, useMemo, useState } from 'react'
import {
  loadProgress,
  addAttempt,
  toggleFlag as toggleFlagStorage,
  toggleExcluded as toggleExcludedStorage,
  toggleReviewMode as toggleReviewModeStorage,
  getSessionId,
} from '../storage/progressStore.js'
import { createAttempt } from '../engine/attempts.js'

// Single hook bridging screens to the storage + engine layers, so no
// component talks to localStorage directly.
export function useProgress() {
  const [progress, setProgress] = useState(() => loadProgress())
  const sessionId = useMemo(() => getSessionId(), [])

  const recordAttempt = useCallback(
    ({ question, choiceId, confidence, timeMs, mode }) => {
      const attempt = createAttempt({
        attempts: progress.attempts,
        question,
        choiceId,
        confidence,
        timeMs,
        mode,
        sessionId,
      })
      const updated = addAttempt(attempt)
      setProgress(updated)
      return attempt
    },
    [progress.attempts, sessionId],
  )

  const toggleFlag = useCallback((questionId) => {
    const updated = toggleFlagStorage(questionId)
    setProgress(updated)
  }, [])

  const toggleExcluded = useCallback((questionId) => {
    const updated = toggleExcludedStorage(questionId)
    setProgress(updated)
  }, [])

  const toggleReviewMode = useCallback(() => {
    const updated = toggleReviewModeStorage()
    setProgress(updated)
  }, [])

  return { progress, sessionId, recordAttempt, toggleFlag, toggleExcluded, toggleReviewMode }
}
