'use client'

import { useEffect, useState } from 'react'
import { parseFuiraReleases, recordedFuiraRelease } from '../data/releases'

export function useFuiraReleases() {
  const [releases, setReleases] = useState([recordedFuiraRelease])
  const [state, setState] = useState<'loading' | 'ready' | 'fallback'>(
    'loading',
  )
  useEffect(() => {
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 10000)
    let active = true
    fetch('https://api.github.com/repos/iqbalfasyah/fuira-release/releases', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Release request failed')
        return response.json()
      })
      .then((data) => {
        if (active) {
          setReleases(parseFuiraReleases(data))
          setState('ready')
        }
      })
      .catch(() => {
        if (active) setState('fallback')
      })
      .finally(() => window.clearTimeout(timeout))
    return () => {
      active = false
      controller.abort()
      window.clearTimeout(timeout)
    }
  }, [])
  return { releases, state }
}
