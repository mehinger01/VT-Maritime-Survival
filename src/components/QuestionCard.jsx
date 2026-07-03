import { useEffect, useState } from 'react'

const CONFIDENCE_OPTIONS = [
  { id: 'low', label: 'Low confidence' },
  { id: 'medium', label: 'Medium confidence' },
  { id: 'high', label: 'High confidence' },
]

// Shared retrieval-practice flow used by Quiz, Drill, and Review Mistakes.
// Enforces the anti-guessing workflow: the student must select an answer
// AND commit a confidence level before the correct answer is revealed.
export default function QuestionCard({
  question,
  allowHints = true,
  flagged = false,
  onToggleFlag,
  onAnswered,
  onNext,
  isLast = false,
}) {
  const [stage, setStage] = useState('choosing') // choosing -> confidence -> revealed
  const [selectedChoiceId, setSelectedChoiceId] = useState(null)
  const [hintIndex, setHintIndex] = useState(0)
  const [startedAt, setStartedAt] = useState(() => Date.now())

  useEffect(() => {
    setStage('choosing')
    setSelectedChoiceId(null)
    setHintIndex(0)
    setStartedAt(Date.now())
  }, [question.id])

  function selectChoice(choiceId) {
    if (stage !== 'choosing') return
    setSelectedChoiceId(choiceId)
    setStage('confidence')
  }

  function selectConfidence(confidence) {
    const timeMs = Date.now() - startedAt
    onAnswered?.({ choiceId: selectedChoiceId, confidence, timeMs })
    setStage('revealed')
  }

  const correct = selectedChoiceId === question.correctChoiceId

  return (
    <div>
      <div className="question-prompt">{question.prompt}</div>

      {stage === 'choosing' && (
        <>
          {question.choices.map((choice) => (
            <button key={choice.id} className="choice" onClick={() => selectChoice(choice.id)}>
              {choice.text}
            </button>
          ))}
          {allowHints && question.hints?.length > 0 && (
            <div>
              <button className="btn secondary small" onClick={() => setHintIndex((i) => Math.min(i + 1, question.hints.length))}>
                Show Hint
              </button>
              {hintIndex > 0 && (
                <div className="hint-box">
                  <strong>Hint {hintIndex}:</strong> {question.hints[hintIndex - 1]}
                </div>
              )}
            </div>
          )}
        </>
      )}

      {stage === 'confidence' && (
        <>
          {question.choices.map((choice) => (
            <button
              key={choice.id}
              className={`choice${choice.id === selectedChoiceId ? ' selected' : ''}`}
              disabled
              style={choice.id === selectedChoiceId ? { borderColor: '#1e5d89' } : undefined}
            >
              {choice.text}
            </button>
          ))}
          <p className="muted">How confident were you in that answer?</p>
          <div className="confidence-row">
            {CONFIDENCE_OPTIONS.map((opt) => (
              <button key={opt.id} className="btn secondary" onClick={() => selectConfidence(opt.id)}>
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}

      {stage === 'revealed' && (
        <>
          {question.choices.map((choice) => {
            let cls = 'choice'
            if (choice.id === question.correctChoiceId) cls += ' correct'
            else if (choice.id === selectedChoiceId) cls += ' wrong'
            return (
              <button key={choice.id} className={cls} disabled>
                {choice.text}
              </button>
            )
          })}
          <div className={correct ? 'explanation-box' : 'hint-box'}>
            <strong>{correct ? 'Correct. ' : 'Not quite. '}</strong>
            {question.explanation}
          </div>
          {!correct && question.choices.find((c) => c.id === selectedChoiceId)?.misconception && (
            <div className="hint-box">
              <strong>Likely misconception:</strong>{' '}
              {question.choices.find((c) => c.id === selectedChoiceId).misconception}
            </div>
          )}
          <button className="btn" onClick={onNext}>
            {isLast ? 'Finish' : 'Next Question'}
          </button>
        </>
      )}

      <div style={{ marginTop: 10 }}>
        <button className="btn secondary small" onClick={() => onToggleFlag?.(question.id)}>
          {flagged ? 'Unflag this question' : 'Flag for later review'}
        </button>
      </div>
    </div>
  )
}
