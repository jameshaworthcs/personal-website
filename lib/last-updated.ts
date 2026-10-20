import { execSync } from 'node:child_process'

// The date of the last commit, read at build time; the build date if git
// isn't available
export function lastUpdated(): Date {
  try {
    const iso = execSync('git log -1 --format=%cI', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (iso) return new Date(iso)
  } catch {
    // fall through
  }
  return new Date()
}

export function monthYear(date: Date): string {
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  return `${month}/${date.getUTCFullYear()}`
}
