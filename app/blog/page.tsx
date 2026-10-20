import type { Metadata } from 'next'
import Link from 'next/link'

// There's no blog yet: send visitors home rather than to an empty page
export const metadata: Metadata = {
  title: 'Blog',
  robots: { index: false },
  alternates: {
    canonical: '/',
  },
}

export default function BlogPage() {
  return (
    <main id="main" className="min-h-screen flex items-center justify-center">
      <meta httpEquiv="refresh" content="0; url=/" />
      <p>
        There&apos;s no blog yet.{' '}
        <Link href="/" className="underline underline-offset-4">
          Go to the home page
        </Link>
        .
      </p>
    </main>
  )
}
