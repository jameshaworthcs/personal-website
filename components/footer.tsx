import Link from 'next/link'
import { lastUpdated, monthYear } from '@/lib/last-updated'

export function Footer() {
  return (
    <footer className="border-t print:hidden">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>Updated {monthYear(lastUpdated())}</p>
        <p className="flex gap-5">
          <Link
            href="https://github.com/jameshaworthcs/personal-website"
            className="hover:text-foreground"
          >
            Source code
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  )
}
