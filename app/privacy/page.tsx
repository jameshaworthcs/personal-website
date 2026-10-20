import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { AnalyticsOptOut } from '@/components/analytics-opt-out'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What this site records about visitors, and how to opt out.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main id="main" className="grow">
        <div className="container mx-auto px-4 py-16 max-w-2xl space-y-6 text-lg leading-relaxed">
          <h1 className="text-4xl font-bold mb-8">Privacy</h1>
          <p>
            This site has no adverts and sets no cookies. I&apos;m James
            Haworth, and you can ask me anything about it at{' '}
            <a
              href="mailto:james@jhaworth.ai"
              className="underline underline-offset-4"
            >
              james@jhaworth.ai
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold pt-4">Visit counts</h2>
          <p>
            I count visits with Plausible Analytics, which I host myself at
            analytics.cloud.jhaworth.ai, to see which pages are read. It sets no
            cookies, doesn&apos;t store IP addresses, and only gives me totals,
            such as how many people opened a page and which site sent them. You
            can turn it off for this browser:
          </p>
          <AnalyticsOptOut />

          <h2 className="text-2xl font-semibold pt-4">Hosting</h2>
          <p>
            The site is hosted on GitHub Pages, and GitHub logs visitors&apos;
            IP addresses for security (
            <a
              href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
              className="underline underline-offset-4"
            >
              GitHub&apos;s statement
            </a>
            ). The York Wines video is served from video.j-h.ai through Amazon
            CloudFront.
          </p>

          <h2 className="text-2xl font-semibold pt-4">Your settings</h2>
          <p>
            If you pick a light or dark theme, or turn off visit counting, your
            browser keeps that choice on your device. Clearing this site&apos;s
            data removes it.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
