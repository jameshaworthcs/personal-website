'use client'

import { useRef, useState } from 'react'

export function YorkWinesPlayer({ src }: { src: string }) {
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
    <div className="relative overflow-hidden rounded-xl bg-black">
      {/* Before the player, so it is the first thing Tab reaches */}
      {!started && (
        <button
          type="button"
          onClick={playVideo}
          aria-label="Play the video (43 seconds, with captions)"
          className="absolute inset-0 z-[1] m-auto h-[88px] w-[88px] cursor-pointer rounded-full focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:transition-transform motion-safe:hover:scale-110"
        >
          <svg viewBox="0 0 100 100" width="88" height="88" aria-hidden="true">
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
        {/* The captions are burned into the video itself */}
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
