import Link from 'next/link'
import { ArrowLeft, Pencil } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto p-4">
          <Link href="/" className="flex items-center space-x-2 w-fit">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-flex p-3 rounded-full bg-primary/10">
            <Pencil className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Blog Coming Soon</h1>
          <p className="text-xl text-muted-foreground mb-10">
            I&apos;m currently working on some interesting articles to share
            with you. Check back soon for insights on software development, tech
            trends, and more.
          </p>

          <div className="bg-muted/30 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">What to expect</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 text-primary items-center justify-center text-xs">
                  ✓
                </span>
                <span>Technical tutorials and code walkthroughs</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 text-primary items-center justify-center text-xs">
                  ✓
                </span>
                <span>Insights into my development workflow and tools</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 text-primary items-center justify-center text-xs">
                  ✓
                </span>
                <span>Project showcases and case studies</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 text-primary items-center justify-center text-xs">
                  ✓
                </span>
                <span>
                  Thoughts on emerging technologies and industry trends
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors inline-flex"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
