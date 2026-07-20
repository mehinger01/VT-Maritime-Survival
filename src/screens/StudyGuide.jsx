import { useState } from 'react'

// Reuses the same evidence-status vocabulary QuestionCard.jsx already shows
// on questions (course-verified/source-backed-study/official-source-supported/
// needs-review/etc.) rather than inventing a separate badge system for guide
// content -- one status vocabulary for the whole app.
const STATUS_BADGES = {
  'source-backed-study': { label: 'Manual-confirmed', className: 'source-verified' },
  'official-source-supported': { label: 'Official source, not yet manual-confirmed', className: 'source-unverified' },
  'needs-review': { label: 'Needs review', className: 'source-unverified' },
}

function StatusPill({ status }) {
  const badge = STATUS_BADGES[status]
  if (!badge) return null
  return <span className={`pill ${badge.className}`}>{badge.label}</span>
}

function ComparisonTable({ table }) {
  if (!table?.rows?.length) return null
  return (
    <table className="table">
      <thead>
        <tr>{table.columns.map((c, i) => <th key={i}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {table.rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

function GuideSection({ section }) {
  return (
    <div className="study-guide-section" id={section.id}>
      <h3>
        {section.title}{' '}
        {section.verificationStatus && <StatusPill status={section.verificationStatus} />}
      </h3>

      {section.whyThisMatters && (
        <div className="explanation-box">
          <strong>Why this matters</strong>
          <p style={{ margin: '4px 0 0' }}>{section.whyThisMatters}</p>
        </div>
      )}

      {section.mustRemember?.length > 0 && (
        <div className="callout-must">
          <strong>Must Remember</strong>
          <ul style={{ margin: '4px 0 0 20px', padding: 0 }}>
            {section.mustRemember.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      )}

      {section.explanation && <p>{section.explanation}</p>}

      {section.keyFacts?.length > 0 && (
        <>
          <strong>Key facts</strong>
          <ul>
            {section.keyFacts.map((f, i) => (
              <li key={i}>
                {f.text} {f.status && <StatusPill status={f.status} />}
              </li>
            ))}
          </ul>
        </>
      )}

      <ComparisonTable table={section.comparisonTable} />

      {section.processSteps?.length > 0 && (
        <>
          <strong>Process</strong>
          <ol>
            {section.processSteps.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </>
      )}

      {section.safetyWarnings?.length > 0 && (
        <div className="callout-danger">
          <strong>Warning</strong>
          <ul style={{ margin: '4px 0 0 20px', padding: 0 }}>
            {section.safetyWarnings.map((w, i) => <li key={i}>{w}</li>)}
          </ul>
        </div>
      )}

      {section.cautions?.length > 0 && (
        <div className="hint-box">
          <strong>Caution</strong>
          <ul style={{ margin: '4px 0 0 20px', padding: 0 }}>
            {section.cautions.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      )}

      {section.confusionTraps?.length > 0 && (
        <div className="hint-box">
          <strong>Common confusion traps</strong>
          <ul style={{ margin: '4px 0 0 20px', padding: 0 }}>
            {section.confusionTraps.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      )}

      {section.examTraps?.length > 0 && (
        <div className="hint-box">
          <strong>Exam traps</strong>
          {section.examTraps.map((t, i) => (
            <p key={i} style={{ margin: '6px 0' }}>
              <strong>Tempting mistake:</strong> {t.mistake}<br />
              <strong>Correct distinction:</strong> {t.correction}<br />
              <strong>Clue to notice:</strong> {t.clue}
            </p>
          ))}
        </div>
      )}

      {section.scenario && (
        <div className="explanation-box">
          <strong>Applied scenario</strong>
          <p style={{ margin: '4px 0' }}><strong>Situation:</strong> {section.scenario.situation}</p>
          <p style={{ margin: '4px 0' }}><strong>Decision:</strong> {section.scenario.decision}</p>
          <p style={{ margin: '4px 0' }}><strong>Correct action:</strong> {section.scenario.action}</p>
          <p style={{ margin: '4px 0' }}><strong>Reasoning:</strong> {section.scenario.reasoning}</p>
          <p style={{ margin: '4px 0' }}><strong>Common incorrect action:</strong> {section.scenario.commonMistake}</p>
        </div>
      )}

      {section.knowledgeCheck?.length > 0 && (
        <>
          <strong>Knowledge check</strong>
          {section.knowledgeCheck.map((qa, i) => <KnowledgeCheckItem key={i} qa={qa} />)}
        </>
      )}

      {section.sourceReferences?.length > 0 && (
        <p className="muted" style={{ fontSize: 12 }}>
          Source: {section.sourceReferences.map((s) => `${s.file} (${s.note})`).join('; ')}
        </p>
      )}
    </div>
  )
}

// Answer stays hidden until explicitly revealed -- matches the app's existing
// anti-guessing convention (QuestionCard never shows correctness pre-commit).
function KnowledgeCheckItem({ qa }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="hint-box" style={{ marginBottom: 8 }}>
      <p style={{ margin: '0 0 6px' }}>{qa.question}</p>
      {revealed ? (
        <p className="muted" style={{ margin: 0 }}>
          <strong>Answer:</strong> {qa.answer} {qa.explanation && `— ${qa.explanation}`}
        </p>
      ) : (
        <button className="btn secondary small" onClick={() => setRevealed(true)}>Reveal Answer</button>
      )}
    </div>
  )
}

// Lightweight MVP: one reading column, in-page section jump list, no search
// index / mastery tracking / print pipeline yet -- see
// vinci-chapter-5-loose-ends-report.md-era session notes for why those were
// deferred. A guide only appears here once its published flag is true.
//
// selectedTopicId is derived from the topicId route prop on every render
// rather than captured once into useState -- the earlier useState-initializer
// version went stale on any hash change after mount (e.g. navigating directly
// from one guide's route to another), since a mount-only initializer never
// re-runs on prop changes. Deriving it fresh each render makes that whole bug
// class impossible rather than papering over it with a sync effect.
export default function StudyGuide({ studyGuides, topicId, navigate }) {
  const publishedGuides = studyGuides.filter((g) => g.published)
  const selectedTopicId = publishedGuides.find((g) => g.topicId === topicId)?.topicId ?? publishedGuides[0]?.topicId
  const guide = publishedGuides.find((g) => g.topicId === selectedTopicId)

  if (publishedGuides.length === 0) {
    return (
      <div className="card">
        <h2>Study Guides</h2>
        <p className="empty-state">
          No detailed study guides are published yet. Chapter guides are staged and reconciled against the
          course manual before appearing here.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="card">
        <h2>Study Guides</h2>
        <p className="muted">Deeper reference material for a chapter -- parts, processes, comparisons, and exam traps in one place.</p>
        <label className="muted">Chapter</label>
        <select
          value={selectedTopicId}
          onChange={(e) => navigate('studyGuide', e.target.value)}
          style={{ width: '100%', padding: 10, marginTop: 6 }}
        >
          {publishedGuides.map((g) => (
            <option key={g.topicId} value={g.topicId}>{g.title}</option>
          ))}
        </select>
        {guide?.sections?.length > 0 && (
          <div className="study-guide-nav">
            {guide.sections.map((s) => (
              <button key={s.id} className="btn secondary small" onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}>
                {s.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {guide && (
        <div className="card">
          {guide.sections.map((section) => <GuideSection key={section.id} section={section} />)}
        </div>
      )}
    </div>
  )
}
