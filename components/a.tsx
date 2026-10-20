import type React from 'react'
import { isFollowed } from '@/lib/links'

// Every link on the site goes through here, so links that lib/links.ts doesn't
// follow get rel="nofollow". ESLint forbids a bare <a>.
export function A({ href, rel, ...props }: React.ComponentProps<'a'>) {
  const nofollow = href !== undefined && !isFollowed(href)
  const rels = new Set(rel?.split(/\s+/).filter(Boolean))
  if (nofollow) rels.add('nofollow')
  return (
    // eslint-disable-next-line react/forbid-elements
    <a
      href={href}
      rel={rels.size ? [...rels].join(' ') : undefined}
      {...props}
    />
  )
}
