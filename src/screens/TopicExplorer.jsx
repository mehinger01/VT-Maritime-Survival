import { computeAllTopicMastery } from '../engine/mastery.js'

export default function TopicExplorer({ topics, questions, progress, navigate }) {
  const masteryByTopic = computeAllTopicMastery(topics, questions, progress.attempts)

  return (
    <div className="card">
      <h2>Topic Explorer</h2>
      <p className="muted">Jump into any topic's Learn, Quiz, or Drill content directly.</p>
      <div className="topic-grid">
        {topics.map((topic) => {
          const count = questions.filter((q) => q.topicId === topic.id).length
          return (
            <div key={topic.id} className="card topic-card">
              <h3>{topic.title}</h3>
              <p className="muted" style={{ fontSize: 13 }}>{topic.summary}</p>
              <div className="progress-bar"><div style={{ width: `${masteryByTopic[topic.id] ?? 0}%` }} /></div>
              <span className="pill">{masteryByTopic[topic.id] ?? 0}% mastery</span>
              <span className="pill">{count} questions</span>
              <div style={{ marginTop: 10 }}>
                <button className="btn small" onClick={() => navigate('learn', topic.id)}>Learn</button>
                <button className="btn secondary small" onClick={() => navigate('quiz', topic.id)}>Quiz</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
