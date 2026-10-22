'use client'

import { useEffect, useRef, useState } from 'react'
import { photo } from '@/content/photo'

const fullSrc = `/img/photo-${photo.full.width}.jpg`

// Shown at its own shape (1:1, 4:5…), never cropped. The small copies paint
// first; once the page has loaded and the browser is idle, the full-size JPEG
// is fetched and swapped in, so the photo is crisp on any screen and "open
// image in new tab" or "save image" gets the full photo. Skipped when the
// photo is hidden (phones) or the visitor has asked to save data.
export function Photo({ alt }: { alt: string }) {
  const [one, two, three] = photo.widths
  const srcSet = (format: string) =>
    `/img/photo-${one}.${format} 1x, /img/photo-${two}.${format} 2x, /img/photo-${three}.${format} 3x`
  const imgRef = useRef<HTMLImageElement>(null)
  const [full, setFull] = useState(false)

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection
    if (connection?.saveData) return

    let cancelled = false
    const load = () => {
      if (cancelled || !imgRef.current?.offsetParent) return
      const image = new Image()
      image.src = fullSrc
      image
        .decode()
        .then(() => !cancelled && setFull(true))
        .catch(() => {})
    }
    // Safari has no requestIdleCallback
    const upgrade = () =>
      'requestIdleCallback' in window
        ? requestIdleCallback(load)
        : setTimeout(load, 200)
    if (document.readyState === 'complete') upgrade()
    else window.addEventListener('load', upgrade, { once: true })
    return () => {
      cancelled = true
      window.removeEventListener('load', upgrade)
    }
  }, [])

  return (
    <picture className="hidden sm:block">
      {!full && <source type="image/avif" srcSet={srcSet('avif')} />}
      {!full && <source type="image/webp" srcSet={srcSet('webp')} />}
      <img
        ref={imgRef}
        src={full ? fullSrc : `/img/photo-${two}.jpg`}
        alt={alt}
        width={photo.width}
        height={photo.height}
        className="h-auto w-full rounded-xl border"
      />
    </picture>
  )
}
