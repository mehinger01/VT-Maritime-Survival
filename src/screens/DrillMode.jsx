import { useMemo, useState } from 'react'
import { pickDrillQuestions } from '../engine/selection.js'
import QuestionCard from '../components/QuestionCard.jsx'

const SET_SIZE = 8

export default function DrillMode({ topics, questions, drillSets = [], progress, recordAttempt, toggleFlag, toggleExcluded, navigate }) {
  const [setKey, setSetKey] = useState(null)
  const [selectedSetId, setSelectedSetId] = useState('adaptive')
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  const queue = useMemo(() => {
    if (setKey === null) return []
    if (selectedSetId === 'adaptive') {
      return pickDrillQuestions(topics, questions, progress.attempts, { limit: SET_SIZE })
    }

    const selectedSet = drillSets.find((set) => set.id === selectedSetId)
    if (!selectedSet) return []
    const pool = selectedSet.questionIds
      .map((id) => questions.find((question) => question.id === id))
      .filter(Boolean)
    return [...pool].sort(() => Math.random() - 0.5).slice(0, SET_SIZE)
    // Regenerate only on explicit restart, not on every attempt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setKey])

  const current = queue[index]

  function startNewSet() {
    setSetKey((key) => (key === null ? 0 : key + 1))
    setIndex(0)
    setDone(false)
  }

  function changeSet(event) {
    setSelectedSetId(event.target.value)
    setSetKey(null)
    setIndex(0)
    setDone(false)
  }

  function handleAnswered({ choiceId, confidence, timeMs }) {
    recordAttempt({ question: current, choiceId, confidence, timeMs, mode: selectedSetId === 'adaptive' ? 'drill' : `drill-${selectedSetId}` })
  }

  function handleNext() {
    if (index + 1 >= queue.length) setDone(true)
    else setIndex((value) => value + 1)
  }

  return (
    <div>
      <div className="card">
        <h2>Drill Mode</h2>
        <p className="muted">
          Use the adaptive drill for mixed weak-area practice, or select a targeted Chapter 3 set.
          Hints are disabled in every drill.
        </p>
        <label htmlFor="drill-set">Drill set</label>
        <select id="drill-set" value={selectedSetId} onChange={changeSet} style={{ width: '100%', padding: 10, margin: '6px 0 12px' }}>
          <option value="adaptive">Adaptive mixed drill</option>
          {drillSets.map((set) => (
            <option key={set.id} value={set.id}>{set.title}</option>
          ))}
        </select>
        <button className="btn secondary" onClick={startNewSet}>{setKey === null ? 'Start Drill' : 'Restart Drill'}</button>
      </div>

      <div className="card">
        {setKey === null && (
          <p className="empty-state">Choose a set and click Start Drill.</p>
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
              onToggleExclude={toggleExcluded}
              onAnswered={handleAnswered}
              onNext={handleNext}
              isLast={index + 1 >= queue.length}
            />
          </>
        )}

        {setKey !== null && queue.length === 0 && (
          <p className="empty-state">No active questions are available for this drill set.</p>
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
