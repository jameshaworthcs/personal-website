// Builds the responsive copies of assets/photo.jpg in public/img, plus one
// full-size JPEG that the page swaps in once it has loaded (for crisp
// high-DPI screens, and for anyone who opens or saves the image), and records
// its shape in content/photo.ts. The photo can be any shape (1:1 or 4:5,
// say): it is resized, never cropped. Run `npm run images` after replacing
// it, then commit the results.
//
// Phones show a round avatar instead, from assets/avatar.jpg: the square crop
// of the LinkedIn headshot (James_Haworth_2026.jpg, 6048×7560, cropped to the
// 4460 px square at 620,1320), cut from the full-resolution original. It gets
// small copies for first paint and a 1440 px JPEG swapped in after load, which
// stays sharp on a 3x screen even when pinch-zoomed.
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const source = 'assets/photo.jpg'
const avatarSource = 'assets/avatar.jpg'
const outDir = 'public/img'
// The hero shows the photo 120 CSS px wide (3x is 360); 480 is spare
const displayWidth = 120
const widths = [120, 240, 360, 480]
// The avatar shows 72 CSS px wide (56 on the narrowest phones)
const avatarWidths = [72, 144, 216]
const avatarFull = 1440

const { width, height } = await sharp(source).metadata()
if (!width || !height) throw new Error(`Can't read the size of ${source}`)
if (width < widths.at(-1)) {
  console.warn(
    `${source} is ${width} px wide; ${widths.at(-1)} px or more is best`
  )
}

await mkdir(outDir, { recursive: true })
for (const file of await readdir(outDir)) {
  if (file.startsWith('photo-') || file.startsWith('avatar-'))
    await rm(`${outDir}/${file}`)
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
// JPEG, not AVIF, so a saved copy opens anywhere
await sharp(source)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(`${outDir}/photo-${width}.jpg`)

for (const w of avatarWidths) {
  const image = sharp(avatarSource).resize({ width: w })
  await image.clone().avif({ quality: 55 }).toFile(`${outDir}/avatar-${w}.avif`)
  await image.clone().webp({ quality: 72 }).toFile(`${outDir}/avatar-${w}.webp`)
  await image
    .clone()
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`${outDir}/avatar-${w}.jpg`)
}
await sharp(avatarSource)
  .resize({ width: avatarFull })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(`${outDir}/avatar-${avatarFull}.jpg`)

const displayHeight = Math.round((displayWidth * height) / width)
await writeFile(
  'content/photo.ts',
  `// Written by scripts/images.mjs from ${source}; run \`npm run images\` to update
export const photo = {
  width: ${displayWidth},
  height: ${displayHeight},
  widths: [${widths.join(', ')}],
  full: { width: ${width}, height: ${height} },
  avatar: { widths: [${avatarWidths.join(', ')}], full: ${avatarFull} },
}
`
)
console.log(
  `${source}: ${width}×${height}; wrote ${(widths.length + avatarWidths.length) * 3 + 2} files and content/photo.ts (${displayWidth}×${displayHeight})`
)
