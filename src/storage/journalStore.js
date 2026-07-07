// Owns the localStorage schema for the Learning Journal — the tutoring
// session log Vinci asked for (dates, times, notes, follow-ups). Same
// treat-it-like-a-database-schema care as progressStore.js, kept as its
// own key since it's operator-authored session history, not student quiz
// progress.
//
// Now also syncs with Supabase session_reports table when logged in.

import { supabase } from '../lib/supabaseClient.js'

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

// Fetch session reports from Supabase and transform to journal entry format.
// Looks up the student record for this profile, then fetches their reports.
// Returns an array of entries or empty array if fetch fails.
export async function loadSupabaseReports(profileId) {
  if (!supabase || !profileId) return []

  try {
    // First, find the student record linked to this profile
    const { data: studentData, error: studentError } = await supabase
      .from('students')
      .select('id')
      .eq('profile_id', profileId)
      .single()

    if (studentError || !studentData) {
      console.warn('No student record found for profile:', profileId)
      return []
    }

    const studentId = studentData.id

    // Now fetch session_reports for this student
    const { data, error } = await supabase
      .from('session_reports')
      .select('id, session_number, session_date, duration_minutes, topics_covered, coach_notes, action_items, created_at')
      .eq('student_id', studentId)
      .order('session_date', { ascending: true })

    if (error) {
      console.warn('Failed to load Supabase session reports:', error.message)
      return []
    }

    // Transform Supabase records to journal entry format
    return (data || []).map((report) => ({
      id: `supabase-${report.id}`,
      sessionNumber: report.session_number,
      date: report.session_date,
      startTime: null,
      endTime: null,
      durationMinutes: report.duration_minutes,
      topicsCovered: Array.isArray(report.topics_covered)
        ? report.topics_covered.join(', ')
        : report.topics_covered || '',
      resourcesUsed: null,
      notes: report.coach_notes || null,
      studentActionItems: Array.isArray(report.action_items)
        ? report.action_items.join('\n')
        : report.action_items || null,
      instructorQuestions: null,
      status: 'Completed',
      createdAt: new Date(report.created_at).getTime(),
      updatedAt: new Date(report.created_at).getTime(),
    }))
  } catch (err) {
    console.warn('Error loading Supabase session reports:', err.message)
    return []
  }
}
