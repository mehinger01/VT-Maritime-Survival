import { useMemo, useState } from 'react'
import { pickReviewQueue } from '../engine/selection.js'
import QuestionCard from '../components/QuestionCard.jsx'

function formatDue(ts) {
  const days = Math.ceil((ts - Date.now()) / (24 * 60 * 60 * 1000))
  if (days <= 0) return 'due now'
  if (days === 1) return 'due in 1 day'
  return `due in ${days} days`
}

export default function ReviewMistakes({ questions, topics, progress, recordAttempt, toggleFlag, toggleExcluded }) {
  const [index, setIndex] = useState(0)
  const [refreshKey, setRefreshKey] = useState(0)

  const { due, upcoming } = useMemo(
    () => pickReviewQueue(questions, progress.attempts),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progress.attempts, refreshKey],
  )

  const current = due[index]?.question
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: 'review' })
  }

  function handleNext() {
    setRefreshKey((k) => k + 1)
    setIndex(0)
  }

  return (
    <div>
      <div className="card">
        <h2>Review Mistakes</h2>
        <p className="muted">
          Previously missed questions resurface here on a spaced schedule — the longer a mistake goes uncorrected, the sooner it comes back.
        </p>
        <span className="pill due">{due.length} due now</span>
        <span className="pill">{upcoming.length} upcoming</span>
      </div>

      <div className="card">
        {due.length === 0 && (
          <p className="empty-state">Nothing due for review right now. Keep quizzing — mistakes will show up here on a schedule.</p>
        )}
        {current && (
          <>
            <span className="pill">{topicName(current.topicId)}</span>
            <QuestionCard
              key={current.id}
              question={current}
              flagged={progress.flags.includes(current.id)}
              onToggleFlag={toggleFlag}
              onToggleExclude={toggleExcluded}
              onAnswered={handleAnswered}
              onNext={handleNext}
              isLast={due.length <= 1}
            />
          </>
        )}
      </div>

      {upcoming.length > 0 && (
        <div className="card">
          <h3>Upcoming</h3>
          {upcoming.map(({ question, dueAt }) => (
            <div key={question.id} className="list-row">
              <strong>{topicName(question.topicId)}</strong>: {question.prompt}
              <br />
              <span className="muted">{formatDue(dueAt)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
