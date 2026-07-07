import { supabase } from '../lib/supabaseClient.js'

// Thin wrapper around the session_reports/students Supabase tables. RLS
// does the actual access control (see supabase/migrations) — this layer
// just shapes the queries, mirroring journalStore.js's role in the
// localStorage world.

export async function listAccessibleStudents() {
  const { data, error } = await supabase
    .from('students')
    .select('id, display_name, active')
    .order('display_name', { ascending: true })
  return { data: data ?? [], error }
}

// For a 'student' role caller: RLS's can_access_student() already limits
// session_reports rows to their own. We explicitly exclude private_coach_notes
// here to add a second layer of protection beyond client-side filtering.
export async function listOwnReports() {
  const { data, error } = await supabase
    .from('session_reports')
    .select(`
      id, student_id, session_number, session_date, duration_minutes,
      questions_answered, accuracy, topics_covered, strengths,
      needs_reinforcement, coach_notes, action_items, client_facing_report,
      created_by, created_at, updated_at, start_time, end_time, tutor_name,
      skills_practiced, student_progress, mastery_level, resources_used,
      session_type, tutor_id
    `)
    .order('session_number', { ascending: true })
  return { data: data ?? [], error }
}

export async function listReportsForStudent(studentId) {
  const { data, error } = await supabase
    .from('session_reports')
    .select('*')
    .eq('student_id', studentId)
    .order('session_number', { ascending: true })
  return { data: data ?? [], error }
}

export async function createReport(report) {
  const { data, error } = await supabase.from('session_reports').insert(report).select().single()
  return { data, error }
}

export async function updateReport(id, updates) {
  const { data, error } = await supabase
    .from('session_reports')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  return { data, error }
}

export async function deleteReport(id) {
  const { error } = await supabase.from('session_reports').delete().eq('id', id)
  return { error }
}
