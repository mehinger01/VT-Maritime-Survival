import { useState } from 'react'
import { buildSessionReport } from '../engine/sessionReport.js'

function formatDuration(ms) {
  const minutes = Math.round(ms / 60000)
  if (minutes < 1) return '<1 min'
  return `${minutes} min`
}

// Plain text so it pastes cleanly into a text/email/Slack message — the
// student copies this and sends it to the instructor, who finalizes it into
// a Learning Journal entry. No backend involved: both the report and the
// summary read from this browser's own localStorage.
function buildSummaryText(report, topics) {
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id
  const date = new Date().toISOString().slice(0, 10)

  const lines = [
    `Session Activity — ${date}`,
    `Duration: ${formatDuration(report.durationMs)}`,
    `Questions Answered: ${report.total} (Accuracy: ${report.accuracy}%)`,
    `Topics Covered: ${report.topicsTouched.join(', ') || 'None'}`,
    '',
    'Confidence Flags:',
    `- ${report.overconfidentCount} high-confidence wrong answer(s)`,
    `- ${report.underconfidentCount} low-confidence correct answer(s)`,
    `- ${report.rapidFireCount} rapid-fire answer(s)`,
  ]

  const missed = report.attempts.filter((a) => !a.correct)
  if (missed.length > 0) {
    lines.push('', 'Missed Questions:')
    missed.forEach((a) => {
      lines.push(`- ${topicName(a.topicId)}${a.misconception ? ` — ${a.misconception}` : ''}`)
    })
  }

  return lines.join('\n')
}

export default function SessionReport({ topics, progress, sessionId, navigate }) {
  const report = buildSessionReport(progress.attempts, sessionId, topics)
  const topicName = (id) => topics.find((t) => t.id === id)?.title ?? id
  const [copied, setCopied] = useState(false)
  const summaryText = buildSummaryText(report, topics)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard permission denied/unavailable — the textarea below still
      // lets the student select-all and copy manually.
    }
  }

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
        <h3>Send to Instructor</h3>
        <p className="muted">
          Copy this summary and send it to your instructor — they'll finalize it into the Learning Journal.
        </p>
        <button className="btn secondary" onClick={handleCopy} disabled={report.total === 0}>
          {copied ? 'Copied!' : 'Copy Summary'}
        </button>
        <textarea
          readOnly
          value={summaryText}
          rows={10}
          style={{ width: '100%', marginTop: '0.75rem', fontFamily: 'monospace', fontSize: 12 }}
        />
      </div>

      <div className="card">
        <button className="btn" onClick={() => navigate('home')}>Back to Course Home</button>
      </div>
    </div>
  )
}
