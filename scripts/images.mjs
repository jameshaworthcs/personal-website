// Builds the responsive copies of assets/photo.jpg in public/img.
// Run `npm run images` after replacing the photo; commit the results.
import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

const source = 'assets/photo.jpg'
const outDir = 'public/img'
// The hero shows the photo at 104 CSS px; 416 is for link previews and
// structured data
const widths = [104, 208, 312, 416]

await mkdir(outDir, { recursive: true })
for (const width of widths) {
  const image = sharp(source).resize(width, width, { fit: 'cover' })
  await image
    .clone()
    .avif({ quality: 55 })
    .toFile(`${outDir}/photo-${width}.avif`)
  await image
    .clone()
    .webp({ quality: 72 })
    .toFile(`${outDir}/photo-${width}.webp`)
  await image
    .clone()
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`${outDir}/photo-${width}.jpg`)
}
console.log(`Wrote ${widths.length * 3} files to ${outDir}`)
