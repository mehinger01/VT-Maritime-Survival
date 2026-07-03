import { useCallback, useEffect, useState } from 'react'

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const [view, topicId] = raw.split('/')
  return { view: view || 'home', topicId: topicId || null }
}

// Minimal hash-based router. No dependency needed for 8 flat screens plus
// an optional topic parameter.
export function useHashRoute() {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = useCallback((view, topicId) => {
    window.location.hash = topicId ? `/${view}/${topicId}` : `/${view}`
  }, [])

  return { route, navigate }
}
