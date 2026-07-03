import { useState } from 'react'

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
          <div key={i} className="explanation-box">{point}</div>
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
