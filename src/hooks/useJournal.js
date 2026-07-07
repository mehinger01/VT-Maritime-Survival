import { useCallback, useEffect, useState } from 'react'
import {
  loadJournal,
  addJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
  loadSupabaseReports,
} from '../storage/journalStore.js'
import { useAuth } from './useAuth.js'

// Bridges the Learning Journal screen to journalStore + Supabase session_reports.
// Fetches from Supabase when logged in, falls back to localStorage otherwise.
// Merges both sources, with Supabase reports appearing alongside localStorage entries.
export function useJournal() {
  const { profile, session } = useAuth()
  const [journal, setJournal] = useState(() => loadJournal())
  const [supabaseReports, setSupabaseReports] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetch Supabase reports when logged in
  useEffect(() => {
    if (!profile || !profile.id) {
      setSupabaseReports([])
      return
    }

    setLoading(true)
    loadSupabaseReports(profile.id)
      .then((reports) => {
        setSupabaseReports(reports)
      })
      .finally(() => setLoading(false))
  }, [profile, session])

  // Merge localStorage entries with Supabase reports, deduplicating by ID
  const mergedEntries = (() => {
    const entriesById = new Map()

    // Add localStorage entries first
    journal.entries.forEach((entry) => {
      entriesById.set(entry.id, entry)
    })

    // Add Supabase reports (they'll overwrite localStorage if same ID)
    supabaseReports.forEach((report) => {
      entriesById.set(report.id, report)
    })

    return Array.from(entriesById.values())
  })()

  const mergedJournal = { schemaVersion: journal.schemaVersion, entries: mergedEntries }

  const addEntry = useCallback((entry) => setJournal(addJournalEntry(entry)), [])
  const updateEntry = useCallback((id, updates) => setJournal(updateJournalEntry(id, updates)), [])
  const removeEntry = useCallback((id) => setJournal(deleteJournalEntry(id)), [])

  return { journal: mergedJournal, addEntry, updateEntry, removeEntry, loading }
}
