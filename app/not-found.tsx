import Image from 'next/image'
import Link from 'next/link'
import { Search, Home } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon.svg"
              alt="JH Logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-bold text-xl">James Haworth</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/#about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/#cv"
                className="hover:text-primary transition-colors"
              >
                CV
              </Link>
              <Link
                href="/#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-10 top-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

          {/* Floating code snippets */}
          <div className="absolute top-1/4 left-10 opacity-20 animate-float-slow">
            <div className="bg-card p-3 rounded-lg shadow-lg rotate-6">
              <pre className="text-xs">
                <code>
                  {
                    'const page = findPage(404);\nif (!page) {\n  return <NotFound />;\n}'
                  }
                </code>
              </pre>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-10 opacity-20 animate-float">
            <div className="bg-card p-3 rounded-lg shadow-lg -rotate-3">
              <pre className="text-xs">
                <code>{'function goHome() {\n  router.push("/");\n}'}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 py-12 text-center z-10">
          {/* <div className="mb-8 relative inline-block">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 blur opacity-70"></div>
            <div className="relative p-4 rounded-full bg-background">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary/40" />
                <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" strokeWidth="0" className="text-primary" />
                <path d="M8 10L16 18M16 10L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" className="text-primary/60 animate-spin-slow" />
              </svg>
            </div>
          </div> */}

          <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-2">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            Page Not Found
          </h2>

          <p className="max-w-md mx-auto text-lg mb-8 text-muted-foreground">
            The page you&apos;re looking for seems to have wandered off into the
            digital void.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Search className="h-4 w-4" />
              Need Help?
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
