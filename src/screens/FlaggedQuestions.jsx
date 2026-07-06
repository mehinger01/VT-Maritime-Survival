import { useMemo, useState } from 'react'
import QuestionCard from '../components/QuestionCard.jsx'

export default function FlaggedQuestions({ questions, topics, progress, recordAttempt, toggleFlag, toggleExcluded }) {
  const [practicing, setPracticing] = useState(false)
  const [index, setIndex] = useState(0)

  const flaggedQuestions = useMemo(
    () => questions.filter((q) => progress.flags.includes(q.id)),
    [questions, progress.flags],
  )
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id
  const current = flaggedQuestions[index]

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: 'flagged' })
  }

  function handleNext() {
    if (index + 1 >= flaggedQuestions.length) {
      setPracticing(false)
      setIndex(0)
    } else {
      setIndex((i) => i + 1)
    }
  }

  if (practicing && current) {
    return (
      <div className="card">
        <h2>Practicing Flagged Questions</h2>
        <p className="muted">Question {index + 1} of {flaggedQuestions.length}</p>
        <span className="pill">{topicName(current.topicId)}</span>
        <QuestionCard
          key={current.id}
          question={current}
          flagged
          onToggleFlag={toggleFlag}
          onToggleExclude={toggleExcluded}
          onAnswered={handleAnswered}
          onNext={handleNext}
          isLast={index + 1 >= flaggedQuestions.length}
        />
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Flagged Questions</h2>
      <p className="muted">Questions you flagged for later, from any mode.</p>

      {flaggedQuestions.length === 0 && (
        <p className="empty-state">No flagged questions yet. Flag any question during Quiz, Drill, or Review to save it here.</p>
      )}

      {flaggedQuestions.length > 0 && (
        <button className="btn" onClick={() => { setPracticing(true); setIndex(0) }}>
          Practice All Flagged ({flaggedQuestions.length})
        </button>
      )}

      {flaggedQuestions.map((q) => (
        <div key={q.id} className="list-row">
          <span className="pill flagged">{topicName(q.topicId)}</span>
          <div>{q.prompt}</div>
          <button className="btn secondary small" onClick={() => toggleFlag(q.id)}>Unflag</button>
        </div>
      ))}
    </div>
  )
}
