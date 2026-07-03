// Owns the localStorage schema for the Learning Journal — the tutoring
// session log Vinci asked for (dates, times, notes, follow-ups). Same
// treat-it-like-a-database-schema care as progressStore.js, kept as its
// own key since it's operator-authored session history, not student quiz
// progress.

const STORAGE_KEY = 'sf_journal_v1'
const SCHEMA_VERSION = 1

export const JOURNAL_STATUSES = ['Planned', 'Completed', 'Needs Follow-Up']

function seedEntries() {
  return [
    {
      id: 'session-1',
      sessionNumber: 1,
      date: '2026-07-01',
      startTime: '18:00',
      endTime: '19:00',
      durationMinutes: 60,
      topicsCovered:
        'Intake session: Vinci\'s situation, timeline, exam expectations, and goal. Built an initial topic list from the American maritime survival textbook he is working from.',
      resourcesUsed: "Vinci's course textbook (American edition)",
      notes:
        'Focused on understanding the exam goal, timeline, and available materials before building anything. Plan going forward: build study tools targeting weak areas, deliver instruction through the Maritime Survival Study Tool, and ask questions ranging from easy to very difficult. Goal is to get Vinci well above the 70% exam benchmark.',
      studentActionItems: 'Send additional materials: class notes and instructor presentations/PowerPoints.',
      instructorQuestions: 'None yet — will surface as topic coverage expands and Vinci flags unclear content.',
      status: 'Completed',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ]
}

function emptyJournal() {
  return { schemaVersion: SCHEMA_VERSION, entries: [] }
}

export function loadJournal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) {
      // True first run on this device — seed with the Session 1 summary
      // rather than starting blank.
      const seeded = { schemaVersion: SCHEMA_VERSION, entries: seedEntries() }
      saveJournal(seeded)
      return seeded
    }
    const parsed = JSON.parse(raw)
    if (parsed.schemaVersion !== SCHEMA_VERSION) return emptyJournal()
    return {
      schemaVersion: SCHEMA_VERSION,
      entries: Array.isArray(parsed.entries) ? parsed.entries : [],
    }
  } catch {
    return emptyJournal()
  }
}

export function saveJournal(journal) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(journal))
}

export function addJournalEntry(entry) {
  const journal = loadJournal()
  journal.entries.push({
    id: `journal_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...entry,
  })
  saveJournal(journal)
  return journal
}

export function updateJournalEntry(id, updates) {
  const journal = loadJournal()
  journal.entries = journal.entries.map((e) => (e.id === id ? { ...e, ...updates, updatedAt: Date.now() } : e))
  saveJournal(journal)
  return journal
}

export function deleteJournalEntry(id) {
  const journal = loadJournal()
  journal.entries = journal.entries.filter((e) => e.id !== id)
  saveJournal(journal)
  return journal
}
