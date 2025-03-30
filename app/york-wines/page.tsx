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
              src="https://video.jameshaworth.dev/YK-video-thumbnail.png"
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
            src="https://video.jameshaworth.dev/James-Haworth-York-Wines-CV.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <footer>
        <div>
          <a
            href="https://video.jameshaworth.dev/James-Haworth-York-Wines-CV.mp4"
            download
          >
            Download from video.jameshaworth.dev
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
