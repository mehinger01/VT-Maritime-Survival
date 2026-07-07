import { useEffect, useState } from 'react'
import { listOwnReports, listReportsForStudent, listAccessibleStudents } from '../storage/cloudReportsApi.js'

// Professional tutoring session log formatted for school submission and PDF printing

function formatTime(time) {
  if (!time) return '—'
  return time
}

function formatArray(arr) {
  if (!arr || arr.length === 0) return '—'
  return arr.join('; ')
}

function SessionLogDocument({ studentName, reports, tutorName, isCoach }) {
  const now = new Date()
  const formattedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div style={styles.document}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.titleSection}>
          <h1 style={styles.title}>Tutoring Session Log</h1>
          <p style={styles.subtitle}>Professional Documentation</p>
        </div>
        <div style={styles.infoBox}>
          <div style={styles.infoPair}>
            <span style={styles.label}>Student:</span>
            <span style={styles.value}>{studentName}</span>
          </div>
          {tutorName && (
            <div style={styles.infoPair}>
              <span style={styles.label}>Tutor:</span>
              <span style={styles.value}>{tutorName}</span>
            </div>
          )}
          <div style={styles.infoPair}>
            <span style={styles.label}>Generated:</span>
            <span style={styles.value}>{formattedDate}</span>
          </div>
          <div style={styles.infoPair}>
            <span style={styles.label}>Sessions:</span>
            <span style={styles.value}>{reports.length}</span>
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div style={styles.content}>
        {reports.length === 0 ? (
          <p style={styles.empty}>No sessions recorded.</p>
        ) : (
          reports.map((report, idx) => (
            <div key={report.id} style={styles.session}>
              {/* Session Header */}
              <div style={styles.sessionHeader}>
                <div style={styles.sessionNumber}>Session {report.session_number}</div>
                <div style={styles.sessionDate}>
                  {new Date(report.session_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>

              {/* Session Details Grid */}
              <div style={styles.detailsGrid}>
                {report.start_time && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Start Time</span>
                    <span style={styles.detailValue}>{formatTime(report.start_time)}</span>
                  </div>
                )}
                {report.end_time && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>End Time</span>
                    <span style={styles.detailValue}>{formatTime(report.end_time)}</span>
                  </div>
                )}
                {report.duration_minutes && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Duration</span>
                    <span style={styles.detailValue}>{report.duration_minutes} min</span>
                  </div>
                )}
                {report.accuracy != null && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Accuracy</span>
                    <span style={styles.detailValue}>{report.accuracy}%</span>
                  </div>
                )}
                {report.questions_answered && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Questions Answered</span>
                    <span style={styles.detailValue}>{report.questions_answered}</span>
                  </div>
                )}
                {report.mastery_level && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Mastery Level</span>
                    <span style={styles.detailValue}>{report.mastery_level.replace(/_/g, ' ').charAt(0).toUpperCase() + report.mastery_level.slice(1).replace(/_/g, ' ')}</span>
                  </div>
                )}
                {report.resources_used && (
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Resources Used</span>
                    <span style={styles.detailValue}>{report.resources_used}</span>
                  </div>
                )}
              </div>

              {/* Topics Covered */}
              {report.topics_covered?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Topics Covered</h3>
                  <ul style={styles.list}>
                    {report.topics_covered.map((topic, i) => (
                      <li key={i} style={styles.listItem}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Practiced */}
              {report.skills_practiced?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Skills Practiced</h3>
                  <ul style={styles.list}>
                    {report.skills_practiced.map((skill, i) => (
                      <li key={i} style={styles.listItem}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Student Progress */}
              {report.student_progress && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Student Progress</h3>
                  <p style={styles.text}>{report.student_progress}</p>
                </div>
              )}

              {/* Strengths */}
              {report.strengths?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Demonstrated Strengths</h3>
                  <ul style={styles.list}>
                    {report.strengths.map((strength, i) => (
                      <li key={i} style={styles.listItem}>{strength}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Needs Reinforcement */}
              {report.needs_reinforcement?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Areas for Reinforcement</h3>
                  <ul style={styles.list}>
                    {report.needs_reinforcement.map((need, i) => (
                      <li key={i} style={styles.listItem}>{need}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Items */}
              {report.action_items?.length > 0 && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Action Items & Recommendations</h3>
                  <ul style={styles.list}>
                    {report.action_items.map((item, i) => (
                      <li key={i} style={styles.listItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Coach Notes */}
              {report.coach_notes && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Instructional Notes</h3>
                  <p style={styles.text}>{report.coach_notes}</p>
                </div>
              )}

              {/* Private Coach Notes (Coach/Admin Only) */}
              {isCoach && report.private_coach_notes && (
                <div style={styles.section}>
                  <h3 style={{ ...styles.sectionTitle, color: '#e74c3c', borderColor: '#fadbd8' }}>Private Coach Notes</h3>
                  <p style={styles.text}>{report.private_coach_notes}</p>
                </div>
              )}

              {/* Client-Facing Report */}
              {report.client_facing_report && (
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Session Summary</h3>
                  <p style={styles.text}>{report.client_facing_report}</p>
                </div>
              )}

              {/* Page Break After Each Session (except last) */}
              {idx < reports.length - 1 && <div style={styles.pageBreak} />}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>This document was generated by ScholarForge Tutoring System</p>
      </div>
    </div>
  )
}

// Styles optimized for print and professional appearance
const styles = {
  document: {
    fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif',
    color: '#333',
    lineHeight: 1.6,
    maxWidth: '8.5in',
    margin: '0 auto',
    padding: '0.5in',
    background: '#fff',
  },
  header: {
    borderBottom: '3px solid #2c3e50',
    paddingBottom: '1.5rem',
    marginBottom: '2rem',
  },
  titleSection: {
    marginBottom: '1rem',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 0.5rem 0',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '14px',
    color: '#7f8c8d',
    margin: '0',
    fontStyle: 'italic',
  },
  infoBox: {
    background: '#ecf0f1',
    padding: '1rem',
    borderRadius: '4px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  infoPair: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  value: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2c3e50',
  },
  content: {
    marginBottom: '2rem',
  },
  session: {
    marginBottom: '2rem',
  },
  sessionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeft: '4px solid #3498db',
    paddingLeft: '1rem',
    marginBottom: '1rem',
  },
  sessionNumber: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#2c3e50',
  },
  sessionDate: {
    fontSize: '14px',
    color: '#7f8c8d',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
    padding: '1rem',
    background: '#f8f9fa',
    borderRadius: '4px',
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#7f8c8d',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.25rem',
  },
  detailValue: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#2c3e50',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#2c3e50',
    margin: '0 0 0.75rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    borderBottom: '2px solid #ecf0f1',
    paddingBottom: '0.5rem',
  },
  list: {
    margin: '0',
    paddingLeft: '1.25rem',
  },
  listItem: {
    marginBottom: '0.5rem',
    fontSize: '13px',
  },
  text: {
    fontSize: '13px',
    margin: '0',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
  empty: {
    fontSize: '14px',
    color: '#7f8c8d',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '2rem',
  },
  pageBreak: {
    pageBreakAfter: 'always',
    marginTop: '2rem',
    borderTop: '1px dashed #bdc3c7',
  },
  footer: {
    textAlign: 'center',
    fontSize: '11px',
    color: '#95a5a6',
    borderTop: '1px solid #ecf0f1',
    paddingTop: '1rem',
    marginTop: '2rem',
  },
  footerText: {
    margin: '0',
  },
}

// Student view: prints their own log
function StudentPrintView() {
  const [reports, setReports] = useState([])
  const [studentName, setStudentName] = useState('Student')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listOwnReports().then(({ data, error }) => {
      if (!error && data) {
        setReports(data)
        // Try to extract student name from first report or use default
        setStudentName('Your Learning Log')
      }
      setLoading(false)
    })
  }, [])

  if (loading) return <div className="card"><p className="muted">Loading…</p></div>

  return (
    <div>
      <div className="card">
        <h2>Print Learning Log</h2>
        <p className="muted">View your professional session log ready for printing or PDF export.</p>
        <button className="btn" onClick={() => window.print()}>
          Print / Save as PDF
        </button>
      </div>
      <SessionLogDocument studentName={studentName} reports={reports} isCoach={false} />
    </div>
  )
}

// Coach view: select student, then print their log
function CoachPrintView() {
  const [students, setStudents] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [selectedStudentName, setSelectedStudentName] = useState('')
  const [reports, setReports] = useState([])
  const [tutorName, setTutorName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listAccessibleStudents().then(({ data, error }) => {
      if (!error && data && data.length > 0) {
        setStudents(data)
        setSelectedStudentId(data[0].id)
        setSelectedStudentName(data[0].display_name)
      }
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!selectedStudentId) return
    listReportsForStudent(selectedStudentId).then(({ data, error }) => {
      if (!error && data) {
        setReports(data)
        // Extract tutor name from first report if available
        if (data.length > 0 && data[0].tutor_name) {
          setTutorName(data[0].tutor_name)
        }
      }
    })
  }, [selectedStudentId])

  if (loading) return <div className="card"><p className="muted">Loading…</p></div>

  return (
    <div>
      <div className="card">
        <h2>Print Session Log</h2>
        <p className="muted">Select a student and print their professional tutoring session log.</p>
        <label htmlFor="student-select">Student</label>
        <select
          id="student-select"
          value={selectedStudentId}
          onChange={(e) => {
            setSelectedStudentId(e.target.value)
            const student = students.find((s) => s.id === e.target.value)
            setSelectedStudentName(student?.display_name || '')
          }}
        >
          {students.map((s) => (
            <option key={s.id} value={s.id}>{s.display_name}</option>
          ))}
        </select>
        {students.length === 0 && <p className="empty-state">No students assigned to you.</p>}
        {students.length > 0 && (
          <button className="btn" onClick={() => window.print()} style={{ marginTop: '1rem' }}>
            Print / Save as PDF
          </button>
        )}
      </div>
      {students.length > 0 && (
        <SessionLogDocument studentName={selectedStudentName} reports={reports} tutorName={tutorName} isCoach={true} />
      )}
    </div>
  )
}

export default function SessionLogPrintView({ profile }) {
  if (profile?.role === 'coach' || profile?.role === 'admin') return <CoachPrintView />
  return <StudentPrintView />
}
