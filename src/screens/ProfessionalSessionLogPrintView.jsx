import { useEffect, useMemo, useState } from 'react'
import { listOwnReports, listReportsForStudent, listAccessibleStudents } from '../storage/cloudReportsApi.js'

const PRINT_CSS = `
@page { size: Letter; margin: 0.52in 0.62in 0.58in; }
@media print {
  .app-header, .app-nav, .legacy-link, .print-controls, button, select, label { display: none !important; }
  .app-shell, .app-main { display: block !important; width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; }
  body { background: #fff !important; }
  .professional-log { box-shadow: none !important; margin: 0 !important; padding: 0 !important; max-width: none !important; }
  .session-entry { break-before: page; page-break-before: always; }
  .session-entry.first-session { break-before: auto; page-break-before: auto; }
  .session-heading, .metric-grid, .report-section, .program-summary { break-inside: avoid; page-break-inside: avoid; }
  h1, h2, h3 { break-after: avoid; page-break-after: avoid; }
}
`

function cleanText(value) {
  return String(value ?? '')
    .replace(/[\uFFFD￾]/g, '-')
    .replace(/^\s*[-*•]+\s*/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function cleanList(values) {
  if (!Array.isArray(values)) return []
  const banned = /^(topics covered|strengths|needs reinforcement|areas for reinforcement|skills practiced|maritime survival study tool)$/i
  return [...new Set(values.map(cleanText).filter((item) => item && !banned.test(item)))]
}

function compactParagraph(value, maxLength = 1050) {
  const text = cleanText(value)
  if (!text) return ''
  if (text.length <= maxLength) return text
  const clipped = text.slice(0, maxLength)
  const sentenceEnd = Math.max(clipped.lastIndexOf('. '), clipped.lastIndexOf('! '), clipped.lastIndexOf('? '))
  return `${clipped.slice(0, sentenceEnd > 500 ? sentenceEnd + 1 : maxLength).trim()}…`
}

function titleCase(value) {
  return cleanText(value).replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function sessionType(value) {
  if (value === 'self-study') return 'Self-Study'
  if (value === 'group-study') return 'Group Study'
  return 'Tutored'
}

function Metric({ label, value }) {
  if (value === undefined || value === null || value === '') return null
  return (
    <div className="metric" style={styles.metric}>
      <div style={styles.metricLabel}>{label}</div>
      <div style={styles.metricValue}>{value}</div>
    </div>
  )
}

function ListSection({ title, items }) {
  const cleaned = cleanList(items)
  if (!cleaned.length) return null
  return (
    <section className="report-section" style={styles.section}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      <ul style={styles.list}>
        {cleaned.map((item) => <li key={item} style={styles.listItem}>{item}</li>)}
      </ul>
    </section>
  )
}

function ProgramSummary({ reports }) {
  const stats = useMemo(() => {
    const totalQuestions = reports.reduce((sum, report) => sum + (Number(report.questions_answered) || 0), 0)
    const scored = reports.filter((report) => Number.isFinite(Number(report.accuracy)) && Number(report.questions_answered) > 0)
    const weightedPoints = scored.reduce((sum, report) => sum + Number(report.accuracy) * Number(report.questions_answered), 0)
    const weightedQuestions = scored.reduce((sum, report) => sum + Number(report.questions_answered), 0)
    const averageAccuracy = weightedQuestions ? Math.round(weightedPoints / weightedQuestions) : null
    const highestAccuracy = scored.length ? Math.max(...scored.map((report) => Number(report.accuracy))) : null
    const strengths = cleanList(reports.flatMap((report) => report.strengths ?? [])).slice(0, 6)
    const needs = cleanList(reports.flatMap((report) => report.needs_reinforcement ?? [])).slice(0, 6)
    const latestMastery = [...reports].reverse().find((report) => report.mastery_level)?.mastery_level
    return { totalQuestions, averageAccuracy, highestAccuracy, strengths, needs, latestMastery }
  }, [reports])

  const readiness = stats.averageAccuracy == null
    ? 'Performance data were not available for a cumulative readiness statement.'
    : stats.averageAccuracy >= 85
      ? 'Practice performance demonstrates a strong margin above the 70% passing benchmark. Continued review should focus on precision with closely related terms, signals, diagrams, and scenario-specific procedures.'
      : stats.averageAccuracy >= 70
        ? 'Practice performance is above the 70% passing benchmark. Final preparation should prioritize recurring misconceptions and exact technical distinctions to improve consistency.'
        : 'Practice performance remains below the 70% passing benchmark and indicates a need for continued targeted review before testing.'

  return (
    <section className="program-summary" style={styles.programSummary}>
      <h2 style={styles.summaryTitle}>Program Summary</h2>
      <div className="metric-grid" style={styles.metricGrid}>
        <Metric label="Questions Completed" value={stats.totalQuestions || '—'} />
        <Metric label="Weighted Accuracy" value={stats.averageAccuracy == null ? '—' : `${stats.averageAccuracy}%`} />
        <Metric label="Highest Accuracy" value={stats.highestAccuracy == null ? '—' : `${stats.highestAccuracy}%`} />
        <Metric label="Current Mastery" value={stats.latestMastery ? titleCase(stats.latestMastery) : '—'} />
      </div>
      <p style={styles.summaryText}>{readiness}</p>
      <div style={styles.twoColumn}>
        <ListSection title="Consistent Strengths" items={stats.strengths} />
        <ListSection title="Final Priorities" items={stats.needs} />
      </div>
    </section>
  )
}

function SessionLogDocument({ studentName, reports, tutorName }) {
  const formattedDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const totalMinutes = reports.reduce((sum, report) => sum + (Number(report.duration_minutes) || 0), 0)
  const tutoredMinutes = reports.reduce((sum, report) => sum + ((report.session_type === 'tutored' || !report.session_type) ? (Number(report.duration_minutes) || 0) : 0), 0)

  return (
    <div className="professional-log" style={styles.document}>
      <style>{PRINT_CSS}</style>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>Tutoring Session Log</h1>
          <p style={styles.subtitle}>Maritime & Water Survival Exam Preparation</p>
        </div>
        <div style={styles.headerRule} />
        <div style={styles.infoGrid}>
          <Metric label="Student" value={studentName} />
          {tutorName && <Metric label="Tutor" value={tutorName} />}
          <Metric label="Generated" value={formattedDate} />
          <Metric label="Sessions" value={reports.length} />
          <Metric label="Total Hours" value={`${(totalMinutes / 60).toFixed(1)} hrs`} />
          <Metric label="Tutored Hours" value={`${(tutoredMinutes / 60).toFixed(1)} hrs`} />
        </div>
      </header>

      {reports.length === 0 ? <p style={styles.empty}>No sessions recorded.</p> : reports.map((report, index) => {
        const summary = compactParagraph(report.student_progress || report.client_facing_report)
        const resources = cleanText(report.resources_used)
          .split(/[;\n]+/)
          .map(cleanText)
          .filter(Boolean)

        return (
          <article key={report.id} className={`session-entry${index === 0 ? ' first-session' : ''}`} style={styles.session}>
            <div className="session-heading" style={styles.sessionHeading}>
              <h2 style={styles.sessionTitle}>Session {report.session_number}</h2>
              <span style={styles.sessionDate}>{new Date(report.session_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>

            <div className="metric-grid" style={styles.metricGrid}>
              <Metric label="Duration" value={report.duration_minutes ? `${report.duration_minutes} min` : null} />
              <Metric label="Questions" value={report.questions_answered || null} />
              <Metric label="Accuracy" value={report.accuracy != null ? `${report.accuracy}%` : null} />
              <Metric label="Mastery" value={report.mastery_level ? titleCase(report.mastery_level) : null} />
              <Metric label="Session Type" value={sessionType(report.session_type)} />
            </div>

            <div style={styles.twoColumn}>
              <ListSection title="Topics Covered" items={report.topics_covered} />
              <ListSection title="Skills Practiced" items={report.skills_practiced} />
            </div>
            {resources.length > 0 && <ListSection title="Resources Used" items={resources} />}
            {summary && (
              <section className="report-section" style={styles.section}>
                <h3 style={styles.sectionTitle}>Progress Summary</h3>
                <p style={styles.text}>{summary}</p>
              </section>
            )}
            <div style={styles.twoColumn}>
              <ListSection title="Demonstrated Strengths" items={report.strengths} />
              <ListSection title="Areas for Reinforcement" items={report.needs_reinforcement} />
            </div>
            <ListSection title="Action Items & Recommendations" items={report.action_items} />
          </article>
        )
      })}

      {reports.length > 0 && <ProgramSummary reports={reports} />}
      <footer style={styles.footer}>Generated by ScholarForge Tutoring System</footer>
    </div>
  )
}

function StudentPrintView() {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    listOwnReports().then(({ data }) => {
      setReports(data ?? [])
      setLoading(false)
    })
  }, [])
  if (loading) return <div className="card"><p className="muted">Loading…</p></div>
  return (
    <div>
      <div className="card print-controls">
        <h2>Print Learning Log</h2>
        <p className="muted">Professional session documentation prepared for printing or PDF export.</p>
        <button className="btn" onClick={() => window.print()}>Print / Save as PDF</button>
      </div>
      <SessionLogDocument studentName="Student Learning Log" reports={reports} />
    </div>
  )
}

function CoachPrintView() {
  const [students, setStudents] = useState([])
  const [selectedStudentId, setSelectedStudentId] = useState('')
  const [selectedStudentName, setSelectedStudentName] = useState('')
  const [reports, setReports] = useState([])
  const [tutorName, setTutorName] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listAccessibleStudents().then(({ data }) => {
      const available = data ?? []
      setStudents(available)
      if (available.length) {
        setSelectedStudentId(available[0].id)
        setSelectedStudentName(available[0].display_name)
      }
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (!selectedStudentId) return
    listReportsForStudent(selectedStudentId).then(({ data }) => {
      const nextReports = data ?? []
      setReports(nextReports)
      setTutorName(nextReports.find((report) => report.tutor_name)?.tutor_name ?? '')
    })
  }, [selectedStudentId])

  if (loading) return <div className="card"><p className="muted">Loading…</p></div>
  return (
    <div>
      <div className="card print-controls">
        <h2>Print Session Log</h2>
        <p className="muted">Select a student and export a concise professional tutoring record.</p>
        <label htmlFor="student-select">Student</label>
        <select id="student-select" value={selectedStudentId} onChange={(event) => {
          setSelectedStudentId(event.target.value)
          setSelectedStudentName(students.find((student) => student.id === event.target.value)?.display_name ?? '')
        }}>
          {students.map((student) => <option key={student.id} value={student.id}>{student.display_name}</option>)}
        </select>
        {students.length ? <button className="btn" onClick={() => window.print()} style={{ marginTop: '1rem' }}>Print / Save as PDF</button> : <p className="empty-state">No students assigned to you.</p>}
      </div>
      {students.length > 0 && <SessionLogDocument studentName={selectedStudentName} reports={reports} tutorName={tutorName} />}
    </div>
  )
}

export default function ProfessionalSessionLogPrintView({ profile }) {
  return profile?.role === 'coach' || profile?.role === 'admin' ? <CoachPrintView /> : <StudentPrintView />
}

const styles = {
  document: { fontFamily: 'Arial, Helvetica, sans-serif', color: '#243342', lineHeight: 1.42, maxWidth: '8.5in', margin: '1.25rem auto', padding: '0.55in 0.62in', background: '#fff', boxShadow: '0 8px 30px rgba(31, 45, 61, 0.12)' },
  header: { marginBottom: '1.5rem' },
  title: { margin: 0, fontSize: '27px', lineHeight: 1.1, color: '#253b4d' },
  subtitle: { margin: '6px 0 0', fontSize: '13px', color: '#657786' },
  headerRule: { height: '3px', background: '#2f4658', margin: '15px 0' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '9px' },
  session: { marginTop: '1.2rem' },
  sessionHeading: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid #2f4658', paddingBottom: '6px', marginBottom: '11px' },
  sessionTitle: { margin: 0, fontSize: '19px', color: '#253b4d' },
  sessionDate: { fontSize: '12px', color: '#657786' },
  metricGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', gap: '7px', marginBottom: '12px' },
  metric: { border: '1px solid #d8e0e6', borderRadius: '5px', padding: '7px 8px', background: '#f7f9fb' },
  metricLabel: { fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.55px', color: '#6b7b88', fontWeight: 700 },
  metricValue: { marginTop: '2px', fontSize: '12px', color: '#253b4d', fontWeight: 700 },
  twoColumn: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' },
  section: { marginBottom: '11px' },
  sectionTitle: { margin: '0 0 5px', paddingBottom: '4px', borderBottom: '1px solid #dfe5ea', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#30495c' },
  list: { margin: '0 0 0 16px', padding: 0 },
  listItem: { marginBottom: '3px', fontSize: '10.3px' },
  text: { margin: 0, fontSize: '10.4px' },
  programSummary: { marginTop: '1.25rem', paddingTop: '0.2rem' },
  summaryTitle: { margin: '0 0 10px', borderBottom: '3px solid #2f4658', paddingBottom: '7px', fontSize: '21px', color: '#253b4d' },
  summaryText: { fontSize: '10.5px', margin: '8px 0 13px' },
  empty: { textAlign: 'center', color: '#657786' },
  footer: { marginTop: '18px', paddingTop: '8px', borderTop: '1px solid #dfe5ea', textAlign: 'center', fontSize: '8.5px', color: '#82909b' },
}
