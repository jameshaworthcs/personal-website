'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'
import { Maximize2, X } from 'lucide-react'
import { photo } from '@/content/photo'

const fullSrc = `/img/photo-${photo.full.width}.jpg`
const avatarFullSrc = `/img/avatar-${photo.avatar.full}.jpg`

// Once the page has loaded and the browser is idle, fetches src and reports
// when it's ready to swap in, so the photo is crisp on any screen and "open
// image in new tab" or "save image" gets the big copy. Skipped when the image
// is hidden (the other breakpoint's copy) or the visitor has asked to save
// data.
function useUpgrade(imgRef: RefObject<HTMLImageElement | null>, src: string) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection
    if (connection?.saveData) return

    let cancelled = false
    const load = () => {
      if (cancelled || !imgRef.current?.offsetParent) return
      const image = new Image()
      image.src = src
      image
        .decode()
        .then(() => !cancelled && setReady(true))
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
  }, [imgRef, src])

  return ready
}

// The full photo in a modal <dialog>, which brings Esc, focus trapping and
// the backdrop for free. A click anywhere but the photo closes it. The full
// JPEG is only fetched once it's opened.
function useLightbox(alt: string) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const [, , three] = photo.widths

  const show = () => {
    setOpen(true)
    dialogRef.current?.showModal()
  }

  const dialog = (
    <dialog
      ref={dialogRef}
      aria-label={alt}
      onClose={() => setOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      className="m-0 h-dvh max-h-none w-dvw max-w-none items-center justify-center bg-black/90 p-4 open:flex backdrop:bg-transparent"
    >
      {open && (
        <img
          src={fullSrc}
          alt={alt}
          width={photo.full.width}
          height={photo.full.height}
          className="h-auto bg-cover"
          style={{
            width: `min(100%, calc((100dvh - 2rem) * ${photo.full.width} / ${photo.full.height}))`,
            backgroundImage: `url(/img/photo-${three}.jpg)`,
          }}
        />
      )}
      <button
        type="button"
        onClick={() => dialogRef.current?.close()}
        className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
      >
        <X className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Close</span>
      </button>
    </dialog>
  )

  return { show, dialog }
}

// Both hint at the lightbox with an expand icon shown on hover or keyboard
// focus only. Tailwind's hover: applies only where the device can hover, so
// touch screens never show it (tapping a profile photo to enlarge it is
// familiar enough, and a badge on the avatar reads as "change photo").
// Clicking or tapping always opens the lightbox either way.

// Desktop: shown at its own shape (1:1, 4:5…), never cropped, beside the
// intro. Hidden on phones, which get the Avatar instead.
export function Photo({ alt }: { alt: string }) {
  const [one, two, three] = photo.widths
  const srcSet = (format: string) =>
    `/img/photo-${one}.${format} 1x, /img/photo-${two}.${format} 2x, /img/photo-${three}.${format} 3x`
  const imgRef = useRef<HTMLImageElement>(null)
  const full = useUpgrade(imgRef, fullSrc)
  const { show, dialog } = useLightbox(alt)

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="group relative hidden cursor-zoom-in self-start rounded-xl sm:block"
      >
        <picture>
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
        <span className="absolute right-1.5 bottom-1.5 grid h-6 w-6 place-items-center rounded-md bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="sr-only">View full size</span>
      </button>
      {dialog}
    </>
  )
}

// Phones: a round avatar beside the name, cut the way the LinkedIn square
// is, 72 px (56 px on the narrowest phones, which also get a slightly
// smaller name, so it stays on one line down to 360 px).
// Tapping it opens the same lightbox as on desktop.
export function Avatar({ alt }: { alt: string }) {
  const [one, two, three] = photo.avatar.widths
  const srcSet = (format: string) =>
    `/img/avatar-${one}.${format} ${one}w, /img/avatar-${two}.${format} ${two}w, /img/avatar-${three}.${format} ${three}w`
  const sizes = '(max-width: 379px) 56px, 72px'
  const imgRef = useRef<HTMLImageElement>(null)
  const full = useUpgrade(imgRef, avatarFullSrc)
  const { show, dialog } = useLightbox(alt)

  return (
    <>
      <button
        type="button"
        onClick={show}
        className="group relative shrink-0 cursor-zoom-in rounded-full sm:hidden"
      >
        <picture>
          {!full && (
            <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
          )}
          {!full && (
            <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
          )}
          <img
            ref={imgRef}
            src={full ? avatarFullSrc : `/img/avatar-${three}.jpg`}
            alt={alt}
            width={72}
            height={72}
            className="h-18 w-18 rounded-full border max-[379px]:h-14 max-[379px]:w-14"
          />
        </picture>
        <span className="absolute -right-0.5 -bottom-0.5 grid h-6 w-6 place-items-center rounded-full border-2 border-background bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
        </span>
        <span className="sr-only">View full size</span>
      </button>
      {dialog}
    </>
  )
}
