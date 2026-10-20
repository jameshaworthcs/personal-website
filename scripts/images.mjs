// Builds the responsive copies of assets/photo.jpg in public/img and records
// its shape in content/photo.ts. The photo can be any shape (1:1 or 4:5,
// say): it is resized, never cropped. Run `npm run images` after replacing
// it, then commit the results.
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const source = 'assets/photo.jpg'
const outDir = 'public/img'
// The hero shows the photo 120 CSS px wide; 480 is for structured data
const displayWidth = 120
const widths = [120, 240, 360, 480]

const { width, height } = await sharp(source).metadata()
if (!width || !height) throw new Error(`Can't read the size of ${source}`)
if (width < widths.at(-1)) {
  console.warn(
    `${source} is ${width} px wide; ${widths.at(-1)} px or more is best`
  )
}

await mkdir(outDir, { recursive: true })
for (const file of await readdir(outDir)) {
  if (file.startsWith('photo-')) await rm(`${outDir}/${file}`)
}
for (const w of widths) {
  const image = sharp(source).resize({ width: w, withoutEnlargement: true })
  await image.clone().avif({ quality: 55 }).toFile(`${outDir}/photo-${w}.avif`)
  await image.clone().webp({ quality: 72 }).toFile(`${outDir}/photo-${w}.webp`)
  await image
    .clone()
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`${outDir}/photo-${w}.jpg`)
}

const displayHeight = Math.round((displayWidth * height) / width)
await writeFile(
  'content/photo.ts',
  `// Written by scripts/images.mjs from ${source}; run \`npm run images\` to update
export const photo = {
  width: ${displayWidth},
  height: ${displayHeight},
  widths: [${widths.join(', ')}],
}
`
)
console.log(
  `${source}: ${width}×${height}; wrote ${widths.length * 3} files and content/photo.ts (${displayWidth}×${displayHeight})`
)
