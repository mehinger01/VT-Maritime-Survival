import { computeAllTopicMastery, computeOverallReadiness } from '../engine/mastery.js'
import { pickReviewQueue } from '../engine/selection.js'

export default function CourseHome({ topics, questions, progress, navigate }) {
  const readiness = computeOverallReadiness(topics, questions, progress.attempts)
  const masteryByTopic = computeAllTopicMastery(topics, questions, progress.attempts)
  const { due } = pickReviewQueue(questions, progress.attempts)
  const totalAttempts = progress.attempts.length
  const correctAttempts = progress.attempts.filter((a) => a.correct).length

  const weakestTopic = [...topics].sort(
    (a, b) => (masteryByTopic[a.id] ?? 0) - (masteryByTopic[b.id] ?? 0),
  )[0]

  return (
    <div>
      <div className="stats-grid">
        <div className="card stat">
          <span className="muted">Overall Readiness</span>
          <strong>{readiness}%</strong>
          <div className="progress-bar"><div style={{ width: `${readiness}%` }} /></div>
        </div>
        <div className="card stat">
          <span className="muted">Questions Attempted</span>
          <strong>{totalAttempts}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Correct</span>
          <strong>{correctAttempts}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Due for Review</span>
          <strong>{due.length}</strong>
        </div>
      </div>

      <div className="card">
        <h2>Tonight's Recommended Flow</h2>
        <ol>
          <li>Skim <strong>Learn Mode</strong> for any topic you're unsure of.</li>
          <li>Run a mixed <strong>Quiz Mode</strong> set to establish a baseline.</li>
          <li>
            Use <strong>Drill Mode</strong> to hammer your weakest topic
            {weakestTopic ? <> — right now that's <strong>{weakestTopic.title}</strong></> : ''}.
          </li>
          <li>Clear anything due in <strong>Review Mistakes</strong>.</li>
          <li>Check <strong>Session Report</strong> before you stop.</li>
        </ol>
        <button className="btn" onClick={() => navigate('quiz')}>Start a Quiz</button>
        <button className="btn secondary" onClick={() => navigate('topics')}>Browse Topics</button>
      </div>

      <div className="card">
        <h2>Mastery by Topic</h2>
        <div className="topic-grid">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.title}</h3>
              <div className="progress-bar"><div style={{ width: `${masteryByTopic[topic.id] ?? 0}%` }} /></div>
              <span className="muted">{masteryByTopic[topic.id] ?? 0}% mastery</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
