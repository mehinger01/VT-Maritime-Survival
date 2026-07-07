import course from './content/course.json'
import { useHashRoute } from './hooks/useHashRoute.js'
import { useProgress } from './hooks/useProgress.js'
import { useAuth } from './hooks/useAuth.js'

import CourseHome from './screens/CourseHome.jsx'
import TopicExplorer from './screens/TopicExplorer.jsx'
import LearnMode from './screens/LearnMode.jsx'
import QuizMode from './screens/QuizMode.jsx'
import DrillMode from './screens/DrillMode.jsx'
import ReviewMistakes from './screens/ReviewMistakes.jsx'
import FlaggedQuestions from './screens/FlaggedQuestions.jsx'
import SessionReport from './screens/SessionReport.jsx'
import LearningJournal from './screens/LearningJournal.jsx'
import CloudSessionReports from './screens/CloudSessionReports.jsx'
import SessionLogPrintView from './screens/SessionLogPrintView.jsx'
import Login from './screens/Login.jsx'

const NAV_ITEMS = [
  { id: 'home', label: 'Course Home' },
  { id: 'topics', label: 'Topic Explorer' },
  { id: 'learn', label: 'Learn Mode' },
  { id: 'quiz', label: 'Quiz Mode' },
  { id: 'drill', label: 'Drill Mode' },
  { id: 'review', label: 'Review Mistakes' },
  { id: 'flagged', label: 'Flagged Questions' },
  { id: 'report', label: 'Session Report' },
  { id: 'journal', label: 'Learning Journal' },
  { id: 'cloudReports', label: 'Session Reports (Cloud)' },
  { id: 'printLog', label: 'Print Session Log' },
]

export default function App() {
  const { route, navigate } = useHashRoute()
  const progressApi = useProgress()
  const auth = useAuth()

  // Excluded questions (toggled off via the question card) are dropped from
  // every pool here, at the one place questions enter the screens, so no
  // screen needs its own exclusion check.
  const activeQuestions = course.questions.filter((q) => !progressApi.progress.excluded.includes(q.id))

  const screenProps = {
    topics: course.topics,
    questions: activeQuestions,
    navigate,
    topicId: route.topicId,
    ...progressApi,
  }

  return (
    <>
      <header className="app-header">
        <h1>Maritime Survival Study Tool</h1>
        <p>{course.courseName} — retrieval practice, spaced review, and mastery tracking, all saved in this browser.</p>
        {auth.isConfigured && auth.session && (
          <p className="muted">
            Signed in as {auth.profile?.email ?? auth.session.user.email}
            {auth.profile?.role ? ` (${auth.profile.role})` : ''}
            {' — '}
            <button className="btn secondary small" onClick={auth.signOut}>Sign Out</button>
          </p>
        )}
      </header>
      <div className="app-shell">
        <nav className="app-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={route.view === item.id ? 'active' : ''}
              onClick={() => navigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a className="legacy-link" href="/legacy.html">Legacy tutor dashboard →</a>
        </nav>
        <main className="app-main">
          {route.view === 'home' && <CourseHome {...screenProps} />}
          {route.view === 'topics' && <TopicExplorer {...screenProps} />}
          {route.view === 'learn' && <LearnMode {...screenProps} />}
          {route.view === 'quiz' && <QuizMode {...screenProps} />}
          {route.view === 'drill' && <DrillMode {...screenProps} />}
          {route.view === 'review' && <ReviewMistakes {...screenProps} />}
          {route.view === 'flagged' && <FlaggedQuestions {...screenProps} />}
          {route.view === 'report' && <SessionReport {...screenProps} />}
          {route.view === 'journal' && <LearningJournal {...screenProps} />}
          {route.view === 'cloudReports' && (
            <>
              {!auth.isConfigured && (
                <div className="card">
                  <h2>Session Reports (Cloud)</h2>
                  <p className="empty-state">
                    Cloud reports aren't configured in this environment (missing Supabase env vars) — this
                    doesn't affect the study tool above, which keeps working from localStorage.
                  </p>
                </div>
              )}
              {auth.isConfigured && auth.loading && <div className="card"><p className="muted">Loading…</p></div>}
              {auth.isConfigured && !auth.loading && !auth.session && <Login signIn={auth.signIn} />}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile === undefined && (
                <div className="card"><p className="muted">Loading profile…</p></div>
              )}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile === null && (
                <div className="card"><p className="empty-state">Could not load your profile. {auth.error}</p></div>
              )}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile && (
                <CloudSessionReports profile={auth.profile} />
              )}
            </>
          )}
          {route.view === 'printLog' && (
            <>
              {!auth.isConfigured && (
                <div className="card">
                  <h2>Print Session Log</h2>
                  <p className="empty-state">
                    Cloud reports aren't configured in this environment (missing Supabase env vars).
                  </p>
                </div>
              )}
              {auth.isConfigured && auth.loading && <div className="card"><p className="muted">Loading…</p></div>}
              {auth.isConfigured && !auth.loading && !auth.session && <Login signIn={auth.signIn} />}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile === undefined && (
                <div className="card"><p className="muted">Loading profile…</p></div>
              )}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile === null && (
                <div className="card"><p className="empty-state">Could not load your profile. {auth.error}</p></div>
              )}
              {auth.isConfigured && !auth.loading && auth.session && auth.profile && (
                <SessionLogPrintView profile={auth.profile} />
              )}
            </>
          )}
        </main>
      </div>
    </>
  )
}
