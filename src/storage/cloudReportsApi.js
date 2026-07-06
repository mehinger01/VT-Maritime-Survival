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
// session_reports rows to their own, so no student_id filter is needed —
// the student doesn't even need to know their own students.id.
export async function listOwnReports() {
  const { data, error } = await supabase
    .from('session_reports')
    .select('*')
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
