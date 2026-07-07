import { useMemo, useState } from 'react'
import { pickQuizQuestions } from '../engine/selection.js'
import QuestionCard from '../components/QuestionCard.jsx'

const SET_SIZE = 8

export default function QuizMode({ topics, questions, topicId, progress, recordAttempt, toggleFlag, toggleExcluded, navigate }) {
  const [scopeTopicId, setScopeTopicId] = useState(topicId || '')
  const [setKey, setSetKey] = useState(0)
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  const queue = useMemo(
    () => pickQuizQuestions(questions, { topicId: scopeTopicId || undefined, limit: SET_SIZE }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scopeTopicId, setKey],
  )

  const current = queue[index]

  function startNewSet(nextScopeTopicId) {
    setScopeTopicId(nextScopeTopicId)
    setSetKey((k) => k + 1)
    setIndex(0)
    setDone(false)
  }

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: 'quiz' })
  }

  function handleNext() {
    if (index + 1 >= queue.length) setDone(true)
    else setIndex((i) => i + 1)
  }

  return (
    <div>
      <div className="card">
        <h2>Quiz Mode</h2>
        <p className="muted">Retrieval practice with confidence tracking. Mixes topics unless one is selected.</p>
        <select value={scopeTopicId} onChange={(e) => startNewSet(e.target.value)} style={{ width: '100%', padding: 10 }}>
          <option value="">Mixed (all topics)</option>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>{t.title}</option>
          ))}
        </select>
      </div>

      <div className="card">
        {queue.length === 0 && <p className="empty-state">No questions available for this selection.</p>}

        {!done && current && (
          <>
            <p className="muted">Question {index + 1} of {queue.length}</p>
            <QuestionCard
              key={current.id}
              question={current}
              flagged={progress.flags.includes(current.id)}
              onToggleFlag={toggleFlag}
              onToggleExclude={toggleExcluded}
              onAnswered={handleAnswered}
              onNext={handleNext}
              isLast={index + 1 >= queue.length}
            />
          </>
        )}

        {done && (
          <div>
            <h3>Set complete.</h3>
            <button className="btn" onClick={() => startNewSet(scopeTopicId)}>Start Another Set</button>
            <button className="btn secondary" onClick={() => navigate('report')}>View Session Report</button>
          </div>
        )}
      </div>
    </div>
  )
}
