import { useMemo, useState } from 'react'

const EXAM_SIZE = 50
const PASSING_SCORE = 70

const TOPIC_TARGETS = {
  'chapter-1-planning-ahead': 5,
  'chapter-2-using-lifeboats': 15,
  'chapter-3-using-liferafts': 8,
  'chapter-4-survival-methods': 9,
  'chapter-5-signaling': 7,
  'chapter-6-being-rescued': 4,
  'appendix-a-glossary': 2,
}

const SOURCE_PRIORITY = {
  'course-verified': 8,
  'multi-source-supported': 8,
  'official-source-supported': 8,
  'source-backed-study': 7,
  'visual-study': 6,
  'quiz-derived-study': 5,
  'practice-test-informed': 4,
  undefined: 3,
}

function shuffle(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function sourceScore(question) {
  return SOURCE_PRIORITY[question.verificationStatus] ?? 2
}

function pickTopicQuestions(pool, count) {
  return shuffle(pool)
    .map((question) => ({ question, score: sourceScore(question) + Math.random() * 2 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ question }) => question)
}

function buildExam(questions) {
  const selected = []
  const selectedIds = new Set()

  for (const [topicId, target] of Object.entries(TOPIC_TARGETS)) {
    const topicPool = questions.filter((question) => question.topicId === topicId)
    const picks = pickTopicQuestions(topicPool, target)
    for (const question of picks) {
      selected.push(question)
      selectedIds.add(question.id)
    }
  }

  if (selected.length < EXAM_SIZE) {
    const remaining = questions.filter((question) => !selectedIds.has(question.id))
    const fill = pickTopicQuestions(remaining, EXAM_SIZE - selected.length)
    selected.push(...fill)
  }

  return shuffle(selected.slice(0, EXAM_SIZE))
}

function shuffledChoices(question) {
  return shuffle(question.choices)
}

function topicTitle(topics, topicId) {
  return topics.find((topic) => topic.id === topicId)?.title ?? topicId
}

export default function PracticeExam({ topics, questions, recordAttempt, navigate }) {
  const [examKey, setExamKey] = useState(0)
  const [started, setStarted] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [startedAt, setStartedAt] = useState(null)

  const exam = useMemo(() => buildExam(questions), [questions, examKey])
  const choicesByQuestion = useMemo(
    () => Object.fromEntries(exam.map((question) => [question.id, shuffledChoices(question)])),
    [exam],
  )

  const answeredCount = Object.keys(answers).length
  const current = exam[index]

  const results = useMemo(() => {
    if (!submitted) return null

    const correctCount = exam.filter((question) => answers[question.id] === question.correctChoiceId).length
    const percent = exam.length ? Math.round((correctCount / exam.length) * 100) : 0
    const byTopic = topics.map((topic) => {
      const topicQuestions = exam.filter((question) => question.topicId === topic.id)
      if (!topicQuestions.length) return null
      const correct = topicQuestions.filter((question) => answers[question.id] === question.correctChoiceId).length
      return {
        id: topic.id,
        title: topic.title,
        correct,
        total: topicQuestions.length,
        percent: Math.round((correct / topicQuestions.length) * 100),
      }
    }).filter(Boolean)

    return { correctCount, percent, passed: percent >= PASSING_SCORE, byTopic }
  }, [answers, exam, submitted, topics])

  function startExam() {
    setStarted(true)
    setSubmitted(false)
    setIndex(0)
    setAnswers({})
    setStartedAt(Date.now())
  }

  function selectAnswer(choiceId) {
    if (submitted || !current) return
    setAnswers((previous) => ({ ...previous, [current.id]: choiceId }))
  }

  function submitExam() {
    const unanswered = exam.length - answeredCount
    if (unanswered > 0) {
      const confirmed = window.confirm(`You still have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'}. Submit anyway?`)
      if (!confirmed) return
    }

    const totalTime = Math.max(1, Date.now() - (startedAt ?? Date.now()))
    const averageTime = Math.round(totalTime / Math.max(1, exam.length))

    for (const question of exam) {
      const choiceId = answers[question.id]
      if (!choiceId) continue
      recordAttempt({
        question,
        choiceId,
        confidence: 'medium',
        timeMs: averageTime,
        mode: 'practice-exam',
      })
    }

    setSubmitted(true)
    setIndex(0)
  }

  function startAnotherExam() {
    setExamKey((key) => key + 1)
    setStarted(false)
    setSubmitted(false)
    setIndex(0)
    setAnswers({})
    setStartedAt(null)
  }

  if (!started) {
    return (
      <div>
        <div className="card">
          <h2>Full Practice Exam</h2>
          <p>
            A 50-question, comprehensive exam drawn from the full active question bank.
            Questions are balanced across all six chapters and Appendix A, with preference
            given to the strongest available source tiers.
          </p>
          <ul>
            <li>50 questions</li>
            <li>70% required to pass</li>
            <li>No hints or answer feedback until submission</li>
            <li>All answers remain editable before submission</li>
          </ul>
          <p className="muted">
            This is a coverage-balanced practice exam built from the material currently available;
            it does not claim to reproduce an official Coast Guard exam blueprint.
          </p>
          <button className="btn" onClick={startExam} disabled={exam.length < EXAM_SIZE}>
            Start Full Practice Exam
          </button>
          {exam.length < EXAM_SIZE && (
            <p className="empty-state">At least {EXAM_SIZE} active questions are required.</p>
          )}
        </div>
      </div>
    )
  }

  if (submitted && results) {
    const missed = exam.filter((question) => answers[question.id] !== question.correctChoiceId)

    return (
      <div>
        <div className="card">
          <h2>Practice Exam Results</h2>
          <h3>{results.correctCount} of {exam.length} correct — {results.percent}%</h3>
          <p className={results.passed ? 'explanation-box' : 'hint-box'}>
            <strong>{results.passed ? 'Passing result.' : 'Below the 70% passing mark.'}</strong>
          </p>

          <h3>Performance by chapter</h3>
          {results.byTopic.map((row) => (
            <div key={row.id} style={{ marginBottom: 8 }}>
              <strong>{row.title}:</strong> {row.correct}/{row.total} ({row.percent}%)
            </div>
          ))}

          <div style={{ marginTop: 16 }}>
            <button className="btn" onClick={startAnotherExam}>Generate Another Exam</button>{' '}
            <button className="btn secondary" onClick={() => navigate('report')}>View Session Report</button>
          </div>
        </div>

        <div className="card">
          <h3>Missed and unanswered questions</h3>
          {missed.length === 0 && <p className="empty-state">Perfect score — no missed questions.</p>}
          {missed.map((question, missedIndex) => {
            const selected = question.choices.find((choice) => choice.id === answers[question.id])
            const correct = question.choices.find((choice) => choice.id === question.correctChoiceId)
            return (
              <div key={question.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: 16, marginBottom: 16 }}>
                <p className="muted">{missedIndex + 1}. {topicTitle(topics, question.topicId)}</p>
                <div className="question-prompt">{question.prompt}</div>
                <p><strong>Your answer:</strong> {selected?.text ?? 'No answer submitted'}</p>
                <p><strong>Correct answer:</strong> {correct?.text}</p>
                <div className="explanation-box">{question.explanation}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="card">
        <h2>Full Practice Exam</h2>
        <p className="muted">
          Question {index + 1} of {exam.length} — {answeredCount} answered
        </p>
        <div style={{ height: 8, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
          <div
            style={{
              width: `${Math.round((answeredCount / exam.length) * 100)}%`,
              height: '100%',
              background: '#1e5d89',
            }}
          />
        </div>
      </div>

      <div className="card">
        {current?.image && (
          <img className="question-image" src={current.image} alt={current.imageAlt ?? 'Reference image for this question'} />
        )}
        <p className="muted">{topicTitle(topics, current.topicId)}</p>
        <div className="question-prompt">{current.prompt}</div>

        {choicesByQuestion[current.id]?.map((choice) => (
          <button
            key={choice.id}
            className={`choice${answers[current.id] === choice.id ? ' selected' : ''}`}
            style={answers[current.id] === choice.id ? { borderColor: '#1e5d89' } : undefined}
            onClick={() => selectAnswer(choice.id)}
          >
            {choice.text}
          </button>
        ))}

        <div style={{ marginTop: 16 }}>
          <button className="btn secondary" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}>
            Previous
          </button>{' '}
          {index + 1 < exam.length ? (
            <button className="btn" onClick={() => setIndex((value) => value + 1)}>Next</button>
          ) : (
            <button className="btn" onClick={submitExam}>Submit Exam</button>
          )}
        </div>
      </div>

      <div className="card">
        <h3>Question navigator</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exam.map((question, questionIndex) => (
            <button
              key={question.id}
              className={questionIndex === index ? 'btn small' : 'btn secondary small'}
              style={answers[question.id] ? { fontWeight: 700 } : undefined}
              onClick={() => setIndex(questionIndex)}
            >
              {questionIndex + 1}{answers[question.id] ? ' ✓' : ''}
            </button>
          ))}
        </div>
        <button className="btn" style={{ marginTop: 16 }} onClick={submitExam}>Submit Exam</button>
      </div>
    </div>
  )
}
