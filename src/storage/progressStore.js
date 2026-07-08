// Owns the localStorage schema for student progress. This is the one place
// that reads/writes localStorage — treat this schema like a database schema,
// since it's what a future real backend will need to migrate from.

const STORAGE_KEY = 'sf_progress_v1'
const SESSION_KEY = 'sf_session_v1'
const SCHEMA_VERSION = 1

function emptyProgress() {
  return {
    schemaVersion: SCHEMA_VERSION,
    attempts: [],
    flags: [],
    excluded: [],
    reviewModeEnabled: false,
  }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgress()
    const parsed = JSON.parse(raw)
    if (parsed.schemaVersion !== SCHEMA_VERSION) return emptyProgress()
    return {
      schemaVersion: SCHEMA_VERSION,
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
      flags: Array.isArray(parsed.flags) ? parsed.flags : [],
      excluded: Array.isArray(parsed.excluded) ? parsed.excluded : [],
      // Added after schemaVersion 1 shipped -- default false for progress
      // blobs saved before this field existed, rather than bumping the
      // schema version and wiping everyone's existing attempts/flags.
      reviewModeEnabled: typeof parsed.reviewModeEnabled === 'boolean' ? parsed.reviewModeEnabled : false,
    }
  } catch {
    return emptyProgress()
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function addAttempt(attempt) {
  const progress = loadProgress()
  progress.attempts.push(attempt)
  saveProgress(progress)
  return progress
}

export function toggleFlag(questionId) {
  const progress = loadProgress()
  const idx = progress.flags.indexOf(questionId)
  if (idx === -1) progress.flags.push(questionId)
  else progress.flags.splice(idx, 1)
  saveProgress(progress)
  return progress
}

export function isFlagged(progress, questionId) {
  return progress.flags.includes(questionId)
}

// Excluding a question removes it from every pool (quiz, drill, review,
// topic counts) without deleting it from course.json. The toggle itself is
// symmetric, but the shipped UI only exposes the exclude direction for now —
// re-including an excluded question is a separate process, not yet built.
export function toggleExcluded(questionId) {
  const progress = loadProgress()
  const idx = progress.excluded.indexOf(questionId)
  if (idx === -1) progress.excluded.push(questionId)
  else progress.excluded.splice(idx, 1)
  saveProgress(progress)
  return progress
}

export function isExcluded(progress, questionId) {
  return progress.excluded.includes(questionId)
}

// Review mode is a student-facing, off-by-default toggle that reveals
// needs-review questions (retained content that isn't shown in normal
// practice) -- see docs/CONTENT_INTAKE_BENCHMARK.md. It's a plain
// localStorage flag, not an authenticated admin mode.
export function toggleReviewMode() {
  const progress = loadProgress()
  progress.reviewModeEnabled = !progress.reviewModeEnabled
  saveProgress(progress)
  return progress
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(SESSION_KEY)
}

// Session id lives in sessionStorage (not localStorage): it should reset
// per browser tab/session, not persist forever, so Session Report reflects
// "this sitting" rather than all-time history.
export function getSessionId() {
  let session
  try {
    session = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    session = null
  }
  if (!session) {
    session = { sessionId: `s_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, startedAt: Date.now() }
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
  }
  return session.sessionId
}
