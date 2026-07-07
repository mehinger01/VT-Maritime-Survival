import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Null when env vars are missing (e.g. local dev without a .env yet) so the
// rest of the app can fall back to localStorage-only behavior instead of
// throwing on import.
export const supabase = url && anonKey ? createClient(url, anonKey) : null
