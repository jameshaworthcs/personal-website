import type React from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { YorkWinesPlayer } from '@/components/york-wines-player'

const video = 'https://video.j-h.ai/James-Haworth-York-Wines-CV-1080p.mp4'

function Time({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-1.5 font-mono text-sm text-muted-foreground tabular-nums">
      {children}
    </span>
  )
}

export default function YorkWinesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main
        id="main"
        className="mx-auto w-full max-w-3xl grow px-4 pt-10 pb-16"
      >
        <p className="mb-3 font-mono text-sm text-muted-foreground">
          <Link href="/#experience" className="hover:text-foreground">
            ← Experience
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          York Wines: the owner on my work
        </h1>
        <p className="mt-4 mb-8 text-lg leading-relaxed text-muted-foreground">
          I worked at York Wines as Web Development Intern (03/2024 – 06/2024),
          then Website/SEO Strategist (06/2024 – 05/2025).
        </p>

        <YorkWinesPlayer src={video} />
        <p className="mt-2 text-sm text-muted-foreground">
          43 seconds, with captions. Filmed in July 2024 by Paul Richardson (
          <a
            href="https://instagram.com/ambientcinema"
            className="underline underline-offset-4"
          >
            @ambientcinema
          </a>
          ) for the University of York.{' '}
          <a href={video} download className="underline underline-offset-4">
            Download the video (MP4, 13 MB)
          </a>
        </p>

        <ul className="my-10 grid gap-4 sm:grid-cols-2">
          <li className="border-t-2 border-link pt-3">
            <span className="block text-2xl font-semibold">30%</span>
            <span className="text-muted-foreground">
              growth in online shop sales
            </span>
          </li>
          <li className="border-t-2 border-link pt-3">
            <span className="block text-2xl font-semibold">20%</span>
            <span className="text-muted-foreground">
              growth in website traffic
            </span>
          </li>
        </ul>
        <p className="mb-10 text-lg leading-relaxed">
          Through SEO, site integrations and UX work. York Wines offered me a
          contract after my internship, then an extension.
        </p>

        <section
          aria-labelledby="transcript-heading"
          className="leading-relaxed [&_p]:mb-3"
        >
          <h2 id="transcript-heading" className="mb-3 text-2xl font-semibold">
            Transcript
          </h2>
          <p className="text-muted-foreground">
            Alex Edwards, the owner of York Wines, and James Haworth talk about
            James&apos;s work on the York Wines website. Filmed on 24 July 2024
            by Paul Richardson for the University of York.
          </p>
          <p>
            <Time>0:02</Time> <strong>Alex Edwards:</strong> I&apos;m Alex
            Edwards and I&apos;m the owner of York Wines. We&apos;ve had a
            website for a long time, and we wanted to give it the best shot at
            being as successful as possible.
          </p>
          <p>
            <Time>0:11</Time> <strong>James Haworth:</strong> I was basically
            managing the website, trying to get it to rank better in search
            results and also optimising the content and the user flow, so that
            when people visited the website they&apos;d have just a really
            seamless experience.
          </p>
          <p>
            <Time>0:23</Time> <strong>Alex Edwards:</strong> James has had a
            really positive impact on the business, so much so that we went on
            to offer James a permanent fixed contract to continue the fantastic
            work that he had started.
          </p>
          <p>
            <Time>0:35</Time> <em>Closing card: Thank you for watching.</em>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
