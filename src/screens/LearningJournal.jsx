import { Fragment, useState } from 'react'
import { useJournal } from '../hooks/useJournal.js'

// Read-only for the student: there is no login/auth yet, so this screen
// intentionally has no add/edit/delete controls. journalStore.js still
// exposes full CRUD for a future hidden/admin mode — only the UI here is
// restricted.
const FIELD_ORDER = [
  'sessionNumber',
  'date',
  'startTime',
  'endTime',
  'durationMinutes',
  'topicsCovered',
  'resourcesUsed',
  'notes',
  'studentActionItems',
  'instructorQuestions',
  'status',
]

const FIELD_LABELS = {
  sessionNumber: 'Session #',
  date: 'Date',
  startTime: 'Start Time',
  endTime: 'End Time',
  durationMinutes: 'Duration (minutes)',
  topicsCovered: 'Topics Covered',
  resourcesUsed: 'Resources Used',
  notes: 'Notes',
  studentActionItems: 'Student Action Items',
  instructorQuestions: 'Questions for Instructor',
  status: 'Status',
}

function csvEscape(value) {
  const str = String(value ?? '')
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`
  return str
}

function exportCsv(entries) {
  const header = FIELD_ORDER.map((f) => FIELD_LABELS[f]).join(',')
  const rows = entries
    .slice()
    .sort((a, b) => (a.sessionNumber ?? 0) - (b.sessionNumber ?? 0))
    .map((entry) => FIELD_ORDER.map((f) => csvEscape(entry[f])).join(','))
  const csv = [header, ...rows].join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'learning-journal.csv'
  a.click()
  URL.revokeObjectURL(a.href)
}

export default function LearningJournal({ userRole }) {
  const { journal, loading } = useJournal()
  const [expandedId, setExpandedId] = useState(null)

  // Print log only available to coaches, admins, and instructor viewers
  const canAccessPrintLog = userRole && ['coach', 'admin', 'instructor_viewer'].includes(userRole)

  const sortedEntries = journal.entries.slice().sort((a, b) => (a.sessionNumber ?? 0) - (b.sessionNumber ?? 0))

  return (
    <div>
      <div className="card">
        <h2>Learning Journal</h2>
        <p className="muted">
          A summary record of your tutoring sessions showing dates, times, topics, and status.
          {canAccessPrintLog && (
            <>
              {' '}Use Print Log to generate a detailed professional report for school or supervisor submission.
            </>
          )}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn secondary" onClick={() => exportCsv(journal.entries)} disabled={journal.entries.length === 0}>
            Export CSV
          </button>
          {canAccessPrintLog && (
            <a href="#/printLog" className="btn secondary" style={{ textDecoration: 'none', display: 'inline-block', padding: 'inherit' }}>
              Print Log
            </a>
          )}
        </div>
      </div>

      <div className="card">
        {loading && <p className="muted">Loading session reports...</p>}
        {!loading && sortedEntries.length === 0 && <p className="empty-state">No sessions logged yet.</p>}
        {!loading && sortedEntries.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Topics Covered</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {sortedEntries.map((entry) => (
                  <Fragment key={entry.id}>
                    <tr>
                      <td>{entry.sessionNumber}</td>
                      <td>{entry.date}</td>
                      <td>{entry.startTime || '—'}–{entry.endTime || '—'}</td>
                      <td>{entry.durationMinutes ? `${entry.durationMinutes} min` : '—'}</td>
                      <td style={{ maxWidth: 320 }}>{entry.topicsCovered}</td>
                      <td><span className="pill">{entry.status}</span></td>
                      <td style={{ whiteSpace: 'nowrap' }}>
                        <button
                          className="btn secondary small"
                          onClick={() => setExpandedId((id) => (id === entry.id ? null : entry.id))}
                        >
                          {expandedId === entry.id ? 'Hide Details' : 'View Details'}
                        </button>
                      </td>
                    </tr>
                    {expandedId === entry.id && (
                      <tr>
                        <td colSpan={7}>
                          <p><strong>Resources Used:</strong> {entry.resourcesUsed || '—'}</p>
                          <p><strong>Notes:</strong> {entry.notes || '—'}</p>
                          <p><strong>Student Action Items:</strong> {entry.studentActionItems || '—'}</p>
                          <p><strong>Questions for Instructor:</strong> {entry.instructorQuestions || '—'}</p>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
