import { useMemo, useState } from 'react'
import { pickDrillQuestions } from '../engine/selection.js'
import QuestionCard from '../components/QuestionCard.jsx'

const SET_SIZE = 8

export default function DrillMode({ topics, questions, progress, recordAttempt, toggleFlag, navigate }) {
  const [setKey, setSetKey] = useState(null)
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  const queue = useMemo(
    () => (setKey === null ? [] : pickDrillQuestions(topics, questions, progress.attempts, { limit: SET_SIZE })),
    // Regenerate only on explicit restart, not on every attempt — a stable
    // queue is drilled through, then the next set re-adapts to new mastery.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setKey],
  )

  const current = queue[index]

  function startNewSet() {
    setSetKey((k) => (k === null ? 0 : k + 1))
    setIndex(0)
    setDone(false)
  }

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: 'drill' })
  }

  function handleNext() {
    if (index + 1 >= queue.length) setDone(true)
    else setIndex((i) => i + 1)
  }

  return (
    <div>
      <div className="card">
        <h2>Drill Mode</h2>
        <p className="muted">
          No hints. Questions are pulled adaptively from your weakest topics and past misses — this is meant to feel harder than Quiz Mode.
        </p>
        <button className="btn secondary" onClick={startNewSet}>{setKey === null ? 'Start Drill' : 'Restart Drill'}</button>
      </div>

      <div className="card">
        {setKey === null && (
          <p className="empty-state">Click Start Drill. Questions are weighted toward your weakest topics and past misses — the more you've quizzed, the sharper the targeting.</p>
        )}

        {!done && current && (
          <>
            <p className="muted">Question {index + 1} of {queue.length}</p>
            <QuestionCard
              key={current.id}
              question={current}
              allowHints={false}
              flagged={progress.flags.includes(current.id)}
              onToggleFlag={toggleFlag}
              onAnswered={handleAnswered}
              onNext={handleNext}
              isLast={index + 1 >= queue.length}
            />
          </>
        )}

        {done && (
          <div>
            <h3>Drill set complete.</h3>
            <button className="btn" onClick={startNewSet}>Drill Again</button>
            <button className="btn secondary" onClick={() => navigate('report')}>View Session Report</button>
          </div>
        )}
      </div>
    </div>
  )
}
