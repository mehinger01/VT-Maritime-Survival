import course from './content/course.json'
import { useHashRoute } from './hooks/useHashRoute.js'
import { useProgress } from './hooks/useProgress.js'

import CourseHome from './screens/CourseHome.jsx'
import TopicExplorer from './screens/TopicExplorer.jsx'
import LearnMode from './screens/LearnMode.jsx'
import QuizMode from './screens/QuizMode.jsx'
import DrillMode from './screens/DrillMode.jsx'
import ReviewMistakes from './screens/ReviewMistakes.jsx'
import FlaggedQuestions from './screens/FlaggedQuestions.jsx'
import SessionReport from './screens/SessionReport.jsx'
import LearningJournal from './screens/LearningJournal.jsx'

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
]

export default function App() {
  const { route, navigate } = useHashRoute()
  const progressApi = useProgress()

  const screenProps = {
    topics: course.topics,
    questions: course.questions,
    navigate,
    topicId: route.topicId,
    ...progressApi,
  }

  return (
    <>
      <header className="app-header">
        <h1>{course.courseName}</h1>
        <p>Study companion — retrieval practice, spaced review, and mastery tracking, all saved in this browser.</p>
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
        </main>
      </div>
    </>
  )
}
