'use client'

import React, { useState } from 'react'

export default function YorkWinesPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    const videoPlayer = document.getElementById(
      'videoPlayer'
    ) as HTMLVideoElement
    if (videoPlayer) {
      videoPlayer.style.display = 'block'
      videoPlayer.play().catch((e) => console.error('Error playing video:', e))
      setIsPlaying(true)
    }
  }

  const handleVideoEnd = () => {
    const videoPlayer = document.getElementById(
      'videoPlayer'
    ) as HTMLVideoElement
    if (videoPlayer) {
      videoPlayer.style.display = 'none'
      setIsPlaying(false)
    }
  }

  return (
    <div className="york-wines-container">
      <div className="video-container">
        {!isPlaying && (
          <>
            <img
              className="thumbnail"
              id="thumbnail"
              src="https://video.j-h.ai/YK-video-thumbnail.png"
              alt="Video thumbnail for York Wines"
              onClick={playVideo}
            />
            <div
              className="play-button"
              id="playButton"
              onClick={playVideo}
              role="button"
              tabIndex={0}
              aria-label="Play video"
            >
              <svg viewBox="0 0 100 100" width="100" height="100">
                <circle cx="50" cy="50" r="45" fill="rgba(0,0,0,0.7)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </>
        )}
        <video
          controls
          id="videoPlayer"
          style={{ display: isPlaying ? 'block' : 'none' }}
          onEnded={handleVideoEnd}
        >
          <source
            src="https://video.j-h.ai/James-Haworth-York-Wines-CV.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="transcript" aria-labelledby="transcript-heading">
        <h2 id="transcript-heading">Transcript</h2>
        <p className="intro">
          Alex Edwards, the owner of York Wines, and James Haworth talk about
          James&apos;s work on the York Wines website. Filmed on 24 July 2024 by
          Paul Richardson for the University of York.
        </p>
        <p>
          <span className="time">0:02</span> <strong>Alex Edwards:</strong>{' '}
          I&apos;m Alex Edwards and I&apos;m the owner of York Wines. We&apos;ve
          had a website for a long time, and we wanted to give it the best shot
          at being as successful as possible.
        </p>
        <p>
          <span className="time">0:11</span> <strong>James Haworth:</strong> I
          was basically managing the website, trying to get it to rank better in
          search results and also optimising the content and the user flow, so
          that when people visited the website they&apos;d have just a really
          seamless experience.
        </p>
        <p>
          <span className="time">0:23</span> <strong>Alex Edwards:</strong>{' '}
          James has had a really positive impact on the business, so much so
          that we went on to offer James a permanent fixed contract to continue
          the fantastic work that he had started.
        </p>
        <p>
          <span className="time">0:35</span>{' '}
          <em>Closing card: Thank you for watching.</em>
        </p>
      </section>
      <footer>
        <div>
          <a
            href="https://video.j-h.ai/James-Haworth-York-Wines-CV.mp4"
            download
          >
            Download from video.j-h.ai
          </a>{' '}
          |{' '}
          <a href="https://j-h.ai" target="_blank" rel="noopener noreferrer">
            Visit j-h.ai
          </a>
        </div>
        <div>
          Filmed July 2024 by Paul Richardson (
          <a
            href="https://instagram.com/ambientcinema"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ambientcinema
          </a>
          )
        </div>
      </footer>
      <style jsx>{`
        .york-wines-container {
          background-color: #181818;
          color: #e0e0e0;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          min-height: 100vh;
        }

        .video-container {
          position: relative;
          width: 100%;
          margin: auto;
          background-color: #000;
        }

        .thumbnail {
          width: 100%;
          cursor: pointer;
          display: block;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        video {
          width: 100%;
          display: block;
        }

        .transcript {
          max-width: 720px;
          margin: 32px auto 0;
          padding: 0 16px;
          line-height: 1.6;
        }

        .transcript h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .transcript p {
          margin: 0 0 12px;
        }

        .transcript .intro {
          color: #a8a8a8;
        }

        .transcript .time {
          color: #a8a8a8;
          font-variant-numeric: tabular-nums;
          margin-right: 4px;
        }

        footer {
          display: flex;
          justify-content: space-between;
          margin: 20px auto;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 10px;
          border-top: 1px solid #444;
        }

        footer a {
          color: inherit;
          text-decoration: none;
          transition: text-decoration 0.3s ease;
        }

        footer a:hover {
          text-decoration: underline;
        }

        @media only screen and (max-width: 768px) {
          footer {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
