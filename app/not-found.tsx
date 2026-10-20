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
          <p className="text-7xl md:text-8xl font-bold text-primary mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-4xl font-semibold mb-6">
            Page not found
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            This page doesn&apos;t exist. Try the home page or my CV.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Home page
            </Link>
            <a
              href="/cv.pdf"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              CV (PDF)
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
