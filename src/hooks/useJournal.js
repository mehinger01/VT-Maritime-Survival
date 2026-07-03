import { useCallback, useState } from 'react'
import {
  loadJournal,
  addJournalEntry,
  updateJournalEntry,
  deleteJournalEntry,
} from '../storage/journalStore.js'

// Bridges the Learning Journal screen to journalStore, mirroring useProgress.js.
export function useJournal() {
  const [journal, setJournal] = useState(() => loadJournal())

  const addEntry = useCallback((entry) => setJournal(addJournalEntry(entry)), [])
  const updateEntry = useCallback((id, updates) => setJournal(updateJournalEntry(id, updates)), [])
  const removeEntry = useCallback((id) => setJournal(deleteJournalEntry(id)), [])

  return { journal, addEntry, updateEntry, removeEntry }
}
