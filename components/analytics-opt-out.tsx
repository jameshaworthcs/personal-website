'use client'

import { useSyncExternalStore } from 'react'

// Plausible skips counting when this localStorage flag is "true"
const KEY = 'plausible_ignore'
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', listener)
  }
}

function isOptedOut() {
  try {
    return window.localStorage.getItem(KEY) === 'true'
  } catch {
    return false
  }
}

export function AnalyticsOptOut() {
  const optedOut = useSyncExternalStore(subscribe, isOptedOut, () => null)

  function toggle() {
    try {
      if (optedOut) {
        window.localStorage.removeItem(KEY)
      } else {
        window.localStorage.setItem(KEY, 'true')
      }
    } catch {
      return
    }
    listeners.forEach((listener) => listener())
  }

  return (
    <div className="rounded-lg border bg-card p-5">
      <p role="status" className="mb-4">
        {optedOut === null
          ? 'Checking this browser’s setting…'
          : optedOut
            ? 'Your visits from this browser are not counted.'
            : 'Your visits from this browser are counted.'}
      </p>
      <button
        type="button"
        onClick={toggle}
        disabled={optedOut === null}
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {optedOut ? 'Count my visits again' : 'Stop counting my visits'}
      </button>
    </div>
  )
}
