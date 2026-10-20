import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'

// GitHub Pages serves /york-wines but not /york-wines/, so send a
// trailing-slash URL to its slash-less twin before showing this page
const trailingSlashFallback = `(function () {
  var p = location.pathname
  if (p.length > 1 && p.slice(-1) === '/') {
    location.replace(p.slice(0, -1) + location.search + location.hash)
  }
})()`

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <script dangerouslySetInnerHTML={{ __html: trailingSlashFallback }} />
      <SiteHeader />

      <main
        id="main"
        className="grow flex items-center justify-center px-4 py-16"
      >
        <div className="w-full max-w-xl text-center">
          <p className="mb-4 font-mono text-7xl font-bold text-link md:text-8xl">
            404
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold mb-6">
            Page not found
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            This page doesn&apos;t exist. Try the home page, my work or my CV.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="rounded-lg bg-accent-strong px-5 py-2.5 font-medium text-white hover:bg-accent-strong/90"
            >
              Home page
            </Link>
            <Link
              href="/#work"
              className="rounded-lg border px-5 py-2.5 font-medium hover:bg-muted"
            >
              Selected work
            </Link>
            <Link
              href="/cv"
              className="rounded-lg border px-5 py-2.5 font-medium hover:bg-muted"
            >
              CV
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
