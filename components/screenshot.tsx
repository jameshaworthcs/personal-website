import { A } from '@/components/a'
import { screenshots, type ScreenshotName } from '@/content/screenshots'

// The blurred placeholder paints at once; the browser then fetches only the
// size the layout needs. The full 3840 px image is one click away.
const sizes = '(min-width: 768px) 736px, calc(100vw - 2rem)'

export function Screenshot({
  name,
  alt,
  caption,
}: {
  name: ScreenshotName
  alt: string
  caption: string
}) {
  const shot = screenshots[name]
  const srcSet = (format: string) =>
    shot.widths.map((w) => `/img/work/${name}-${w}.${format} ${w}w`).join(', ')
  const full = `/img/work/${name}-${shot.width}.webp`

  return (
    <figure className="my-6">
      <div
        className="overflow-hidden rounded-xl border bg-cover bg-center"
        style={{
          backgroundImage: `url(${shot.placeholder})`,
          aspectRatio: `${shot.width} / ${shot.height}`,
        }}
      >
        <picture>
          <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
          <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
          <img
            src={`/img/work/${name}-1440.jpg`}
            alt={alt}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />
        </picture>
      </div>
      <figcaption className="mt-2 text-sm text-muted-foreground">
        {caption}{' '}
        <A href={full} className="underline underline-offset-4">
          Full size ({shot.width} × {shot.height})
        </A>
      </figcaption>
    </figure>
  )
}
