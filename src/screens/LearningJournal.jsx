import { useState } from 'react'
import { useJournal } from '../hooks/useJournal.js'
import { JOURNAL_STATUSES } from '../storage/journalStore.js'

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

function blankForm(nextSessionNumber) {
  return {
    sessionNumber: nextSessionNumber,
    date: new Date().toISOString().slice(0, 10),
    startTime: '',
    endTime: '',
    durationMinutes: '',
    topicsCovered: '',
    resourcesUsed: '',
    notes: '',
    studentActionItems: '',
    instructorQuestions: '',
    status: 'Planned',
  }
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

export default function LearningJournal() {
  const { journal, addEntry, updateEntry, removeEntry } = useJournal()
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState(null)

  const sortedEntries = journal.entries.slice().sort((a, b) => (a.sessionNumber ?? 0) - (b.sessionNumber ?? 0))

  function startAdd() {
    const nextSessionNumber = (Math.max(0, ...journal.entries.map((e) => e.sessionNumber || 0)) || 0) + 1
    setEditingId(null)
    setForm(blankForm(nextSessionNumber))
  }

  function startEdit(entry) {
    setEditingId(entry.id)
    setForm({ ...entry })
  }

  function cancelForm() {
    setEditingId(null)
    setForm(null)
  }

  function handleFieldChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSave() {
    const payload = {
      ...form,
      sessionNumber: Number(form.sessionNumber) || 0,
      durationMinutes: form.durationMinutes === '' ? '' : Number(form.durationMinutes),
    }
    if (editingId) updateEntry(editingId, payload)
    else addEntry(payload)
    cancelForm()
  }

  function handleDelete(id) {
    if (window.confirm('Delete this session entry? This cannot be undone.')) {
      removeEntry(id)
      if (editingId === id) cancelForm()
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Learning Journal</h2>
        <p className="muted">
          A record of tutoring sessions with Vinci: dates, times, topics covered, notes, and follow-ups.
          Export to CSV any time to open in Excel or Google Sheets.
        </p>
        <button className="btn" onClick={startAdd}>Add Session</button>
        <button className="btn secondary" onClick={() => exportCsv(journal.entries)} disabled={journal.entries.length === 0}>
          Export CSV
        </button>
      </div>

      {form && (
        <div className="card">
          <h3>{editingId ? `Edit Session ${form.sessionNumber}` : 'New Session'}</h3>
          <div className="two">
            <div>
              <label>Session #</label>
              <input
                type="number"
                value={form.sessionNumber}
                onChange={(e) => handleFieldChange('sessionNumber', e.target.value)}
              />
              <label>Date</label>
              <input type="date" value={form.date} onChange={(e) => handleFieldChange('date', e.target.value)} />
              <label>Start Time</label>
              <input type="time" value={form.startTime} onChange={(e) => handleFieldChange('startTime', e.target.value)} />
              <label>End Time</label>
              <input type="time" value={form.endTime} onChange={(e) => handleFieldChange('endTime', e.target.value)} />
              <label>Duration (minutes)</label>
              <input
                type="number"
                value={form.durationMinutes}
                onChange={(e) => handleFieldChange('durationMinutes', e.target.value)}
                placeholder="e.g. 60"
              />
              <label>Status</label>
              <select value={form.status} onChange={(e) => handleFieldChange('status', e.target.value)}>
                {JOURNAL_STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Topics Covered</label>
              <textarea rows={3} value={form.topicsCovered} onChange={(e) => handleFieldChange('topicsCovered', e.target.value)} />
              <label>Resources Used</label>
              <textarea rows={2} value={form.resourcesUsed} onChange={(e) => handleFieldChange('resourcesUsed', e.target.value)} />
              <label>Notes</label>
              <textarea rows={3} value={form.notes} onChange={(e) => handleFieldChange('notes', e.target.value)} />
              <label>Student Action Items</label>
              <textarea rows={2} value={form.studentActionItems} onChange={(e) => handleFieldChange('studentActionItems', e.target.value)} />
              <label>Questions for Instructor</label>
              <textarea rows={2} value={form.instructorQuestions} onChange={(e) => handleFieldChange('instructorQuestions', e.target.value)} />
            </div>
          </div>
          <button className="btn" onClick={handleSave}>{editingId ? 'Save Changes' : 'Add Session'}</button>
          <button className="btn secondary" onClick={cancelForm}>Cancel</button>
        </div>
      )}

      <div className="card">
        {sortedEntries.length === 0 && <p className="empty-state">No sessions logged yet. Click Add Session to start.</p>}
        {sortedEntries.length > 0 && (
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
                  <tr key={entry.id}>
                    <td>{entry.sessionNumber}</td>
                    <td>{entry.date}</td>
                    <td>{entry.startTime || '—'}–{entry.endTime || '—'}</td>
                    <td>{entry.durationMinutes ? `${entry.durationMinutes} min` : '—'}</td>
                    <td style={{ maxWidth: 320 }}>{entry.topicsCovered}</td>
                    <td><span className="pill">{entry.status}</span></td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <button className="btn secondary small" onClick={() => startEdit(entry)}>Edit</button>
                      <button className="btn warn small" onClick={() => handleDelete(entry.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
