// Domains run by James or JEMEDIA. Links to these, or to any of their
// subdomains, are followed.
export const followedDomains = [
  'j-h.ai',
  'jhaworth.ai',
  'jemedia.xyz',
  'verifiedhandles.org',
  'verifiedhandles.com',
]

// James's own pages on sites he doesn't run. Links to these, or to anything
// under them, are followed.
export const followedPages = [
  'linkedin.com/in/jameshaworthcs',
  'github.com/jameshaworthcs',
]

// Every other http(s) link gets nofollow
export function isFollowed(href: string): boolean {
  // Relative paths, fragments, mailto: and the like stay on the site
  if (!/^https?:\/\//i.test(href)) return true
  const url = new URL(href)
  const host = url.hostname.toLowerCase().replace(/^www\./, '')
  if (
    followedDomains.some(
      (domain) => host === domain || host.endsWith(`.${domain}`)
    )
  )
    return true
  const page = `${host}${url.pathname.replace(/\/$/, '')}`.toLowerCase()
  return followedPages.some(
    (prefix) => page === prefix || page.startsWith(`${prefix}/`)
  )
}
