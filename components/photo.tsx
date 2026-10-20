import { photo } from '@/content/photo'

// Shown at its own shape (1:1, 4:5…), never cropped
export function Photo({ alt }: { alt: string }) {
  const [one, two, three] = photo.widths
  const srcSet = (format: string) =>
    `/img/photo-${one}.${format} 1x, /img/photo-${two}.${format} 2x, /img/photo-${three}.${format} 3x`
  return (
    <picture className="hidden sm:block">
      <source type="image/avif" srcSet={srcSet('avif')} />
      <source type="image/webp" srcSet={srcSet('webp')} />
      <img
        src={`/img/photo-${two}.jpg`}
        alt={alt}
        width={photo.width}
        height={photo.height}
        className="h-auto w-full rounded-xl border"
      />
    </picture>
  )
}
