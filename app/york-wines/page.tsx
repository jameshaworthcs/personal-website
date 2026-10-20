'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'

const videoSrc = 'https://video.j-h.ai/James-Haworth-York-Wines-CV.mp4'

export default function YorkWinesPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  const playVideo = () => {
    const video = videoRef.current
    if (!video) return
    setStarted(true)
    // The button disappears, so keep keyboard focus on the player
    video.focus()
    video.play().catch((e) => console.error('Error playing video:', e))
  }

  return (
    <div className="min-h-screen bg-[#181818] text-[#e0e0e0]">
      <header className="mx-auto max-w-[960px] p-4">
        <Link href="/" className="hover:underline">
          ← James Haworth
        </Link>
      </header>
      <main id="main" className="mx-auto max-w-[960px] px-4">
        <h1 className="mt-2 mb-2 text-[1.75rem] font-bold">
          York Wines: the owner on my work
        </h1>
        <p className="mb-5 leading-normal text-[#c8c8c8]">
          I worked at York Wines as Web Development Intern (03/2024 – 06/2024),
          then Website/SEO Strategist (06/2024 – 05/2025).
        </p>
        <div className="relative bg-black">
          {/* Before the player, so it is the first thing Tab reaches */}
          {!started && (
            <button
              type="button"
              onClick={playVideo}
              aria-label="Play the video (43 seconds)"
              className="absolute inset-0 z-[1] m-auto h-[100px] w-[100px] cursor-pointer rounded-full focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:transition-transform motion-safe:hover:scale-110"
            >
              <svg
                viewBox="0 0 100 100"
                width="100"
                height="100"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="45" fill="rgba(0,0,0,0.7)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </button>
          )}
          <video
            ref={videoRef}
            controls
            preload="none"
            poster="/york-wines-poster.webp"
            width={1280}
            height={720}
            onPlay={() => setStarted(true)}
            className="block h-auto w-full"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <section
          className="mx-auto mt-8 max-w-[720px] leading-relaxed [&_p]:mb-3"
          aria-labelledby="transcript-heading"
        >
          <h2 id="transcript-heading" className="mb-3 text-xl font-semibold">
            Transcript
          </h2>
          <p className="text-[#a8a8a8]">
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
      <footer className="mx-auto my-5 max-w-[960px] border-t border-[#444] px-4 pt-2.5 md:flex md:justify-between">
        <div>
          <a href={videoSrc} download className="hover:underline">
            Download the video (MP4, 106 MB)
          </a>{' '}
          |{' '}
          <Link href="/" className="hover:underline">
            Back to j-h.ai
          </Link>
        </div>
        <div>
          Filmed July 2024 by Paul Richardson (
          <a
            href="https://instagram.com/ambientcinema"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @ambientcinema
          </a>
          )
        </div>
      </footer>
    </div>
  )
}

function Time({ children }: { children: React.ReactNode }) {
  return <span className="mr-1 text-[#a8a8a8] tabular-nums">{children}</span>
}
