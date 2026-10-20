import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { navLinks } from '@/lib/nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-md"
      >
        Skip to content
      </a>
      <nav
        aria-label="Main"
        className="container mx-auto p-4 flex justify-between items-center"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/favicon.svg" alt="" width={32} height={32} priority />
          <span className="font-bold text-xl">James Haworth</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
