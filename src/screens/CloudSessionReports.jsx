import { useCallback, useEffect, useState } from 'react'
import {
  listAccessibleStudents,
  listOwnReports,
  listReportsForStudent,
  createReport,
  updateReport,
  deleteReport,
} from '../storage/cloudReportsApi.js'

const ARRAY_FIELDS = ['topics_covered', 'strengths', 'needs_reinforcement', 'action_items', 'skills_practiced']

function linesToArray(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function arrayToLines(arr) {
  return (arr ?? []).join('\n')
}

function emptyForm(studentId, tutorId = null) {
  return {
    student_id: studentId,
    session_number: '',
    session_date: new Date().toISOString().slice(0, 10),
    start_time: '',
    end_time: '',
    duration_minutes: '',
    tutor_name: '',
    questions_answered: '',
    accuracy: '',
    topics_covered: '',
    strengths: '',
    needs_reinforcement: '',
    skills_practiced: '',
    mastery_level: '',
    resources_used: '',
    coach_notes: '',
    private_coach_notes: '',
    action_items: '',
    student_progress: '',
    client_facing_report: '',
    session_type: 'tutored',
    tutor_id: tutorId,
  }
}

function formToPayload(form) {
  const payload = { ...form }
  for (const field of ARRAY_FIELDS) payload[field] = linesToArray(form[field])
  for (const field of ['session_number', 'duration_minutes', 'questions_answered']) {
    payload[field] = form[field] === '' ? null : parseInt(form[field], 10)
  }
  payload.accuracy = form.accuracy === '' ? null : parseFloat(form.accuracy)
  payload.start_time = form.start_time === '' ? null : form.start_time
  payload.end_time = form.end_time === '' ? null : form.end_time
  payload.tutor_name = form.tutor_name === '' ? null : form.tutor_name
  payload.student_progress = form.student_progress === '' ? null : form.student_progress
  payload.mastery_level = form.mastery_level === '' ? null : form.mastery_level
  payload.resources_used = form.resources_used === '' ? null : form.resources_used
  payload.private_coach_notes = form.private_coach_notes === '' ? null : form.private_coach_notes
  payload.session_type = form.session_type === '' ? 'tutored' : form.session_type
  payload.tutor_id = form.tutor_id || null
  return payload
}

function reportToForm(report) {
  const form = { ...report }
  for (const field of ARRAY_FIELDS) form[field] = arrayToLines(report[field])
  if (!form.session_type) form.session_type = 'tutored'
  return form
}

function ReportSummaryRow({ report }) {
  return (
    <div className="list-row">
      <span className="pill">#{report.session_number}</span>
      <span className="pill">{report.session_date}</span>
      {report.accuracy != null && <span className="pill">{report.accuracy}% accuracy</span>}
      {report.duration_minutes != null && <span className="pill">{report.duration_minutes} min</span>}
    </div>
  )
}

function ReportDetail({ report }) {
  return (
    <div className="card">
      <h3>Session {report.session_number} — {report.session_date}</h3>
      {report.topics_covered?.length > 0 && (
        <p><strong>Topics Covered:</strong> {report.topics_covered.join(', ')}</p>
      )}
      {report.strengths?.length > 0 && <p><strong>Strengths:</strong> {report.strengths.join(', ')}</p>}
      {report.needs_reinforcement?.length > 0 && (
        <p><strong>Needs Reinforcement:</strong> {report.needs_reinforcement.join(', ')}</p>
      )}
      {report.action_items?.length > 0 && (
        <p><strong>Action Items:</strong> {report.action_items.join(', ')}</p>
      )}
      <div style={{ whiteSpace: 'pre-wrap', marginTop: '0.75rem' }}>{report.client_facing_report}</div>
    </div>
  )
}

// Read-only chronological view for students: list, click into detail.
function StudentReportsView() {
  const [reports, setReports] = useState(null)
  const [error, setError] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    listOwnReports().then(({ data, error: err }) => {
      if (err) setError(err.message)
      else setReports(data)
    })
  }, [])

  if (error) return <div className="card"><p className="empty-state">{error}</p></div>
  if (reports === null) return <div className="card"><p className="muted">Loading…</p></div>

  const selected = reports.find((r) => r.id === selectedId)

  return (
    <div>
      <div className="card">
        <h2>Session Reports</h2>
        <p className="muted">A chronological record of your tutoring sessions, kept by your coach.</p>
      </div>
      {selected && <ReportDetail report={selected} />}
      <div className="card">
        {reports.length === 0 && <p className="empty-state">No reports yet.</p>}
        {reports.map((r) => (
          <div key={r.id} onClick={() => setSelectedId(r.id === selectedId ? null : r.id)} style={{ cursor: 'pointer' }}>
            <ReportSummaryRow report={r} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Coach/admin: pick a student, then list/add/edit/delete their reports.
function CoachReportsEditor({ profile }) {
  const [students, setStudents] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [reports, setReports] = useState([])
  const [error, setError] = useState(null)
  const [formOpen, setFormOpen] = useState(false)
  const [form, setForm] = useState(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState(null)

  useEffect(() => {
    listAccessibleStudents().then(({ data, error: err }) => {
      if (err) setError(err.message)
      else {
        setStudents(data)
        if (data.length > 0) setSelectedStudentId(data[0].id)
      }
    })
  }, [])

  const refreshReports = useCallback((studentId) => {
    if (!studentId) return
    listReportsForStudent(studentId).then(({ data, error: err }) => {
      if (err) setError(err.message)
      else setReports(data)
    })
  }, [])

  useEffect(() => {
    refreshReports(selectedStudentId)
  }, [selectedStudentId, refreshReports])

  const handleField = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const startCreate = () => {
    setForm(emptyForm(selectedStudentId, profile.id))
    setFormOpen(true)
  }

  const startEdit = (report) => {
    setForm(reportToForm(report))
    setFormOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = formToPayload(form)
    setError(null)
    const result = form.id
      ? await updateReport(form.id, payload)
      : await createReport({ ...payload, created_by: undefined })
    if (result.error) {
      setError(result.error.message)
      return
    }
    setFormOpen(false)
    setForm(null)
    refreshReports(selectedStudentId)
  }

  const handleDelete = async (id) => {
    const { error: err } = await deleteReport(id)
    if (err) setError(err.message)
    setConfirmDeleteId(null)
    refreshReports(selectedStudentId)
  }

  return (
    <div>
      <div className="card">
        <h2>Session Reports — Coach View</h2>
        <label htmlFor="student-select">Student</label>
        <select
          id="student-select"
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
        >
          {students.map((s) => (
            <option key={s.id} value={s.id}>{s.display_name}</option>
          ))}
        </select>
        {students.length === 0 && <p className="empty-state">No students assigned to you yet.</p>}
      </div>

      {error && <div className="card"><p className="empty-state">{error}</p></div>}

      {!formOpen && selectedStudentId && (
        <div className="card">
          <button className="btn" onClick={startCreate}>Add Report</button>
        </div>
      )}

      {formOpen && form && (
        <div className="card">
          <h3>{form.id ? 'Edit Report' : 'New Report'}</h3>
          <form onSubmit={handleSubmit}>
            <label>Session #</label>
            <input type="number" value={form.session_number} onChange={handleField('session_number')} required />
            <label>Date</label>
            <input type="date" value={form.session_date} onChange={handleField('session_date')} required />
            <label>Start Time</label>
            <input type="time" value={form.start_time} onChange={handleField('start_time')} />
            <label>End Time</label>
            <input type="time" value={form.end_time} onChange={handleField('end_time')} />
            <label>Duration (minutes)</label>
            <input type="number" value={form.duration_minutes} onChange={handleField('duration_minutes')} />
            <label>Tutor Name</label>
            <input type="text" value={form.tutor_name} onChange={handleField('tutor_name')} placeholder="e.g., Mike Ehinger" />
            <label>Session Type</label>
            <select value={form.session_type} onChange={handleField('session_type')}>
              <option value="tutored">Tutored (with coach)</option>
              <option value="self-study">Self-Study (independent practice)</option>
              <option value="group-study">Group Study</option>
            </select>
            <label>Questions Answered</label>
            <input type="number" value={form.questions_answered} onChange={handleField('questions_answered')} />
            <label>Accuracy (%)</label>
            <input type="number" value={form.accuracy} onChange={handleField('accuracy')} />
            <label>Mastery Level</label>
            <select value={form.mastery_level} onChange={handleField('mastery_level')}>
              <option value="">— Select mastery level —</option>
              <option value="not_started">Not Started</option>
              <option value="developing">Developing</option>
              <option value="proficient">Proficient</option>
              <option value="advanced">Advanced</option>
            </select>
            <label>Resources Used</label>
            <input type="text" value={form.resources_used} onChange={handleField('resources_used')} placeholder="e.g., Practice drills, textbook Chapter 5" />
            <label>Topics Covered (one per line)</label>
            <textarea rows={4} value={form.topics_covered} onChange={handleField('topics_covered')} />
            <label>Strengths (one per line)</label>
            <textarea rows={3} value={form.strengths} onChange={handleField('strengths')} />
            <label>Needs Reinforcement (one per line)</label>
            <textarea rows={3} value={form.needs_reinforcement} onChange={handleField('needs_reinforcement')} />
            <label>Skills Practiced (one per line)</label>
            <textarea rows={3} value={form.skills_practiced} onChange={handleField('skills_practiced')} />
            <label>Student Progress</label>
            <textarea rows={3} value={form.student_progress} onChange={handleField('student_progress')} placeholder="e.g., Demonstrates solid understanding of Chapter 1 concepts. Needs more work on scenario-based questions." />
            <label>Coach Notes</label>
            <textarea rows={4} value={form.coach_notes} onChange={handleField('coach_notes')} />
            <label>Private Coach Notes (not visible to student)</label>
            <textarea rows={3} value={form.private_coach_notes} onChange={handleField('private_coach_notes')} placeholder="Personal observations, confidential notes (for coach/admin only)" />
            <label>Action Items (one per line)</label>
            <textarea rows={3} value={form.action_items} onChange={handleField('action_items')} />
            <label>Client-Facing Report</label>
            <textarea rows={10} value={form.client_facing_report} onChange={handleField('client_facing_report')} required />
            <div style={{ marginTop: '1rem' }}>
              <button className="btn" type="submit">Save</button>
              <button className="btn secondary" type="button" onClick={() => { setFormOpen(false); setForm(null) }} style={{ marginLeft: '0.5rem' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        {reports.length === 0 && <p className="empty-state">No reports for this student yet.</p>}
        {reports.map((r) => (
          <div key={r.id} style={{ marginBottom: '0.75rem' }}>
            <ReportSummaryRow report={r} />
            <button className="btn secondary small" onClick={() => startEdit(r)}>Edit</button>{' '}
            {confirmDeleteId === r.id ? (
              <>
                <span className="muted">Delete this report?</span>{' '}
                <button className="btn warn small" onClick={() => handleDelete(r.id)}>Confirm Delete</button>{' '}
                <button className="btn secondary small" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
              </>
            ) : (
              <button className="btn secondary small" onClick={() => setConfirmDeleteId(r.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CloudSessionReports({ profile }) {
  if (profile.role === 'coach' || profile.role === 'admin') return <CoachReportsEditor profile={profile} />
  return <StudentReportsView />
}
