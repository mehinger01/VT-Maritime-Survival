import { useEffect, useState } from 'react'

// Deterministic shuffle seeded by question ID ensures same question always
// shows choices in same order, but different questions get different orders
function shuffleChoices(choices, questionId) {
  const arr = [...choices]
  // Create deterministic seed from question ID
  let seed = 0
  for (let i = 0; i < questionId.length; i++) {
    seed = ((seed << 5) - seed) + questionId.charCodeAt(i)
    seed = seed | 0 // Convert to 32-bit signed integer
  }
  seed = Math.abs(seed) // Ensure positive

  // Fisher-Yates shuffle with seeded randomness
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280 // LCG
    const j = (seed / 233280) * (i + 1) | 0 // Deterministic index
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const CONFIDENCE_OPTIONS = [
  { id: 'low', label: 'Low confidence' },
  { id: 'medium', label: 'Medium confidence' },
  { id: 'high', label: 'High confidence' },
]

const DIFFICULTY_LABELS = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  'very-hard': 'Very Hard',
}

// Falls back to a readable version of the topic slug when a question has an
// image but no explicit imageAlt, so alt text is never just a raw src path.
function humanizeSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function imageAltFor(question) {
  if (question.imageAlt) return question.imageAlt
  if (question.topicId) return humanizeSlug(question.topicId)
  return 'Reference image for this question'
}

// Student-facing status badges for the study-app status model (see
// docs/CONTENT_INTAKE_BENCHMARK.md). A question is only badged when its
// verificationStatus is set AND isn't course-verified -- untagged questions
// predate this tracking system and course-verified questions are the
// trusted default, so neither needs a call-out badge cluttering the card.
const SOURCE_BADGES = {
  'course-verified': { label: 'Verified', className: 'source-verified' },
  'source-backed-study': { label: 'Source-backed study', className: 'source-confirmed' },
  'quiz-derived-study': { label: 'Quiz-derived study', className: 'source-confirmed' },
  'visual-study': { label: 'Visual study', className: 'source-confirmed' },
  'needs-review': { label: 'Needs review', className: 'source-unverified' },
  'draft-unverified': { label: 'Draft', className: 'source-unverified' },
  // Legacy statuses predating the study-app status model, still in live use.
  'practice-test-informed': { label: 'Practice-test source', className: 'source-unverified' },
  'multi-source-supported': { label: 'Confirmed by multiple sources', className: 'source-confirmed' },
  'official-source-supported': { label: 'Confirmed against official exam', className: 'source-confirmed' },
}

// Shared retrieval-practice flow used by Quiz, Drill, and Review Mistakes.
// Enforces the anti-guessing workflow: the student must select an answer
// AND commit a confidence level before the correct answer is revealed.
export default function QuestionCard({
  question,
  allowHints = true,
  flagged = false,
  onToggleFlag,
  onToggleExclude,
  onAnswered,
  onNext,
  isLast = false,
}) {
  const [stage, setStage] = useState('choosing') // choosing -> confidence -> revealed
  const [selectedChoiceId, setSelectedChoiceId] = useState(null)
  const [hintIndex, setHintIndex] = useState(0)
  const [startedAt, setStartedAt] = useState(() => Date.now())
  const [justExcluded, setJustExcluded] = useState(false)
  const [shuffledChoices, setShuffledChoices] = useState([])

  useEffect(() => {
    setStage('choosing')
    setSelectedChoiceId(null)
    setHintIndex(0)
    setStartedAt(Date.now())
    setJustExcluded(false)
    setShuffledChoices(shuffleChoices(question.choices, question.id))
  }, [question.id])

  function selectChoice(choiceId) {
    if (stage !== 'choosing') return
    setSelectedChoiceId(choiceId)
  }

  function submitAnswer() {
    if (stage !== 'choosing' || !selectedChoiceId) return
    setStage('confidence')
  }

  function selectConfidence(confidence) {
    const timeMs = Date.now() - startedAt
    onAnswered?.({ choiceId: selectedChoiceId, confidence, timeMs })
    setStage('revealed')
  }

  const correct = selectedChoiceId === question.correctChoiceId
  const sourceBadge = question.verificationStatus && question.verificationStatus !== 'course-verified'
    ? SOURCE_BADGES[question.verificationStatus]
    : null

  function handleExclude() {
    const confirmed = window.confirm(
      'Exclude this question from all quizzes, drills, and reviews? It will stop appearing until a separate process re-adds it.',
    )
    if (confirmed) {
      onToggleExclude?.(question.id)
      setJustExcluded(true)
    }
  }

  return (
    <div>
      {question.difficulty && (
        <span className={`pill difficulty-${question.difficulty}`}>{DIFFICULTY_LABELS[question.difficulty] ?? question.difficulty}</span>
      )}
      {sourceBadge && (
        <span className={`pill ${sourceBadge.className}`} title={question.sourceReference}>
          {sourceBadge.label}
        </span>
      )}
      {question.image && (
        <img className="question-image" src={question.image} alt={imageAltFor(question)} />
      )}
      <div className="question-prompt">{question.prompt}</div>

      {stage === 'choosing' && (
        <>
          {shuffledChoices.map((choice) => (
            <button
              key={choice.id}
              className={`choice${choice.id === selectedChoiceId ? ' selected' : ''}`}
              style={choice.id === selectedChoiceId ? { borderColor: '#1e5d89' } : undefined}
              onClick={() => selectChoice(choice.id)}
            >
              {choice.text}
            </button>
          ))}
          <button className="btn" disabled={!selectedChoiceId} onClick={submitAnswer} style={{ marginTop: 10 }}>
            Submit Answer
          </button>
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
          {shuffledChoices.map((choice) => (
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
          {shuffledChoices.map((choice) => {
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
        </button>{' '}
        {onToggleExclude && !justExcluded && (
          <button className="btn secondary small" onClick={handleExclude}>
            Exclude this question
          </button>
        )}
        {justExcluded && <span className="muted"> Excluded — won't reappear until re-added separately.</span>}
      </div>
    </div>
  )
}
