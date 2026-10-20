'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { navLinks } from '@/lib/nav'

// A disclosure rather than a menu widget: it works by keyboard and
// before JavaScript loads; the script only closes it after a jump
export function MobileMenu() {
  const details = useRef<HTMLDetailsElement>(null)

  return (
    <details ref={details} className="relative md:hidden">
      <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-md hover:bg-muted [&::-webkit-details-marker]:hidden">
        <Menu className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Menu</span>
      </summary>
      <ul className="absolute right-0 mt-2 w-48 rounded-lg border bg-background p-1 shadow-lg">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() => details.current?.removeAttribute('open')}
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}
