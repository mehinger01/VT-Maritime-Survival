import { useState } from 'react'
import { pickReviewQueue } from '../engine/selection.js'
import QuestionCard from '../components/QuestionCard.jsx'

function formatDue(ts) {
  const days = Math.ceil((ts - Date.now()) / (24 * 60 * 60 * 1000))
  if (days <= 0) return 'due now'
  if (days === 1) return 'due in 1 day'
  return `due in ${days} days`
}

export default function ReviewMistakes({ questions, topics, progress, recordAttempt, toggleFlag, toggleExcluded }) {
  // Snapshotted, not recomputed live from progress.attempts: recordAttempt()
  // updates progress.attempts synchronously as soon as confidence is
  // submitted -- before QuestionCard ever renders its "revealed" stage. A
  // live recompute here would immediately drop a just-corrected mistake out
  // of the due queue, swapping `current` to a different question and
  // unmounting the card mid-reveal, so the student never sees right/wrong
  // feedback. Freezing the queue until the student explicitly advances keeps
  // the answered card on screen until Next Question/Finish is pressed.
  const [queue, setQueue] = useState(() => pickReviewQueue(questions, progress.attempts))
  const { due, upcoming } = queue

  const current = due[0]?.question
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: 'review' })
  }

  function handleNext() {
    setQueue(pickReviewQueue(questions, progress.attempts))
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
