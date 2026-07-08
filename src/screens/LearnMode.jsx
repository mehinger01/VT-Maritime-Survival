import { useState } from 'react'

const CONFIDENCE_LABELS = {
  high: 'High confidence',
  medium: 'Medium confidence',
  low: 'Low confidence',
  unreadable: 'Unverified',
}

// A key point is either a bare placeholder heading (string, not yet backed by
// verified source content) or a rich section object once real teaching
// content has been written for that subtopic. Keeping both shapes in the
// same array lets a topic mix "still placeholder" and "now real" subtopics
// without a schema migration every time one more subtopic gets filled in.
function LearnSection({ point }) {
  if (typeof point === 'string') {
    return <div className="explanation-box">{point} <span className="muted">(placeholder — not yet sourced)</span></div>
  }

  return (
    <div className="explanation-box learn-section">
      <h4 style={{ marginTop: 0 }}>{point.title}</h4>
      {point.confidence && (
        <span className={`pill source-${point.confidence === 'high' ? 'verified' : 'unverified'}`}>
          {CONFIDENCE_LABELS[point.confidence] ?? point.confidence}
        </span>
      )}
      {point.image && (
        <img className="question-image" src={point.image} alt={point.imageAlt || point.title} />
      )}
      <p>{point.explanation}</p>

      {point.keyFacts?.length > 0 && (
        <>
          <strong>Key facts to remember</strong>
          <ul>{point.keyFacts.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </>
      )}

      {point.confusionTraps?.length > 0 && (
        <div className="hint-box">
          <strong>Common confusion traps</strong>
          <ul>{point.confusionTraps.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
      )}

      {point.examWatchFor?.length > 0 && (
        <div className="hint-box">
          <strong>Watch for this on the exam</strong>
          <ul>{point.examWatchFor.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
      )}

      {point.sourceReferences?.length > 0 && (
        <p className="muted" style={{ fontSize: 12 }}>
          Source: {point.sourceReferences.map((s) => `${s.file} (${s.note})`).join('; ')}
        </p>
      )}
    </div>
  )
}

// Progressive disclosure: concept first, key points revealed one at a time
// rather than all at once, so the student engages with each idea before
// moving to the next instead of skimming a wall of text.
export default function LearnMode({ topics, topicId, navigate }) {
  const [selectedId, setSelectedId] = useState(topicId || topics[0]?.id)
  const [revealedPoints, setRevealedPoints] = useState(0)
  const topic = topics.find((t) => t.id === selectedId)

  function selectTopic(id) {
    setSelectedId(id)
    setRevealedPoints(0)
  }

  if (!topic) return <div className="card">No topics available yet.</div>

  return (
    <div>
      <div className="card">
        <h2>Learn Mode</h2>
        <label className="muted">Topic</label>
        <select value={selectedId} onChange={(e) => selectTopic(e.target.value)} style={{ width: '100%', padding: 10, marginTop: 6 }}>
          {topics.map((t) => (
            <option key={t.id} value={t.id}>{t.title}</option>
          ))}
        </select>
      </div>

      <div className="card">
        <h3>{topic.title}</h3>
        <p>{topic.learn?.concept}</p>

        {topic.learn?.keyPoints?.slice(0, revealedPoints).map((point, i) => (
          <LearnSection key={i} point={point} />
        ))}

        {revealedPoints < (topic.learn?.keyPoints?.length ?? 0) ? (
          <button className="btn secondary" onClick={() => setRevealedPoints((n) => n + 1)}>
            Reveal Next Key Point ({revealedPoints}/{topic.learn.keyPoints.length})
          </button>
        ) : (
          <p className="muted">All key points revealed. Ready to test recall?</p>
        )}

        <div style={{ marginTop: 12 }}>
          <button className="btn" onClick={() => navigate('quiz', topic.id)}>Quiz Me on This Topic</button>
        </div>
      </div>
    </div>
  )
}
