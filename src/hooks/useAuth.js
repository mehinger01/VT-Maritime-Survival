import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient.js'

// Bridges Supabase Auth + the profiles table to React state. Returns
// profile: null while logged out, undefined while still resolving on
// first load, and the row (with .role) once resolved.
export function useAuth() {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(undefined)
  const [loading, setLoading] = useState(!!supabase)
  const [error, setError] = useState(null)

  const loadProfile = useCallback(async (userId) => {
    if (!supabase || !userId) {
      setProfile(null)
      return
    }
    try {
      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('id, email, full_name, role')
        .eq('id', userId)
        .single()
      if (profileError) {
        setError(profileError.message)
        setProfile(null)
        return
      }
      setProfile(data)
    } catch (err) {
      // Network failure talking to Supabase — degrade to logged-out rather
      // than crashing the app.
      setError(err.message)
      setProfile(null)
    }
  }, [])

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    let cancelled = false

    supabase.auth.getSession()
      .then(({ data }) => {
        if (cancelled) return
        setSession(data.session)
        if (data.session) {
          loadProfile(data.session.user.id).finally(() => !cancelled && setLoading(false))
        } else {
          setProfile(null)
          setLoading(false)
        }
      })
      .catch((err) => {
        // Supabase unreachable (network down, project paused, etc.) — fail
        // into "logged out" rather than leaving the screen stuck loading.
        if (cancelled) return
        setError(err.message)
        setProfile(null)
        setLoading(false)
      })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      if (newSession) {
        loadProfile(newSession.user.id)
      } else {
        setProfile(null)
      }
    })

    return () => {
      cancelled = true
      subscription.subscription.unsubscribe()
    }
  }, [loadProfile])

  const signIn = useCallback(async (email, password) => {
    if (!supabase) return { error: 'Supabase is not configured.' }
    setError(null)
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) setError(signInError.message)
    return { error: signInError?.message ?? null }
  }, [])

  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
  }, [])

  return {
    isConfigured: !!supabase,
    session,
    profile,
    loading,
    error,
    signIn,
    signOut,
  }
}
