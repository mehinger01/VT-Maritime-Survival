import { buildSessionReport } from '../engine/sessionReport.js'

function formatDuration(ms) {
  const minutes = Math.round(ms / 60000)
  if (minutes < 1) return '<1 min'
  return `${minutes} min`
}

export default function SessionReport({ topics, progress, sessionId, navigate }) {
  const report = buildSessionReport(progress.attempts, sessionId, topics)
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id

  return (
    <div>
      <div className="card">
        <h2>Session Report</h2>
        <p className="muted">Covers everything answered in this browser tab's current session.</p>
      </div>

      <div className="stats-grid">
        <div className="card stat">
          <span className="muted">Questions Answered</span>
          <strong>{report.total}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Accuracy</span>
          <strong>{report.accuracy}%</strong>
        </div>
        <div className="card stat">
          <span className="muted">Time on Task</span>
          <strong>{formatDuration(report.durationMs)}</strong>
        </div>
        <div className="card stat">
          <span className="muted">Rapid-Fire Answers</span>
          <strong>{report.rapidFireCount}</strong>
        </div>
      </div>

      <div className="card">
        <h3>Confidence Calibration</h3>
        {report.total === 0 ? (
          <p className="empty-state">Answer some questions this session to see calibration data.</p>
        ) : (
          <>
            <p><strong>{report.overconfidentCount}</strong> answered with high confidence but were wrong — worth a closer look, these may be misconceptions rather than gaps.</p>
            <p><strong>{report.underconfidentCount}</strong> answered with low confidence but were correct — you may know this material better than you think.</p>
            {report.rapidFireCount > 0 && (
              <p className="muted">{report.rapidFireCount} answer(s) were submitted very quickly — worth double-checking those weren't guesses.</p>
            )}
          </>
        )}
      </div>

      <div className="card">
        <h3>Topics Touched This Session</h3>
        {report.topicsTouched.length === 0 ? (
          <p className="empty-state">None yet.</p>
        ) : (
          report.topicsTouched.map((t) => <span key={t} className="pill">{t}</span>)
        )}
      </div>

      <div className="card">
        <h3>Attempt Log</h3>
        {report.attempts.length === 0 && <p className="empty-state">No attempts yet this session.</p>}
        {report.attempts.slice().reverse().map((a) => (
          <div key={a.id} className="list-row">
            <span className={`pill ${a.correct ? '' : 'flagged'}`}>{a.correct ? 'Correct' : 'Missed'}</span>
            <span className="pill">{topicName(a.topicId)}</span>
            <span className="pill">{a.mode}</span>
            {a.confidence && <span className="pill">confidence: {a.confidence}</span>}
          </div>
        ))}
      </div>

      <div className="card">
        <button className="btn" onClick={() => navigate('home')}>Back to Course Home</button>
      </div>
    </div>
  )
}
