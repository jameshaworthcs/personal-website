// Captures the project screenshots at 3840 px wide and builds the sizes the
// pages use, plus a tiny blurred placeholder shown until each image loads.
// usage: npm run screenshots              capture and build
//        npm run screenshots -- --build   rebuild from the captures only
// The captures go to assets/screenshots (not committed); the sizes go to
// public/img/work and their shapes to content/screenshots.ts (committed).
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { chromium } from '@playwright/test'
import sharp from 'sharp'

const shots = [
  { name: 'vh-home', url: 'https://verifiedhandles.org/' },
  { name: 'vh-entry', url: 'https://verifiedhandles.org/Netflix' },
  { name: 'vh-mcp', url: 'https://verifiedhandles.org/developers/mcp' },
]
const viewport = { width: 1440, height: 900 }
const scale = 3840 / viewport.width
const widths = [480, 960, 1440, 1920, 2880, 3840]
const sourceDir = 'assets/screenshots'
const outDir = 'public/img/work'

if (!process.argv.includes('--build')) {
  await mkdir(sourceDir, { recursive: true })
  const browser = await chromium.launch({
    channel: process.env.PLAYWRIGHT_CHANNEL,
  })
  for (const shot of shots) {
    const context = await browser.newContext({
      viewport,
      deviceScaleFactor: scale,
      colorScheme: 'light',
    })
    const page = await context.newPage()
    await page.goto(shot.url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: `${sourceDir}/${shot.name}.png` })
    await context.close()
    console.log(`captured ${shot.url}`)
  }
  await browser.close()
}

await mkdir(outDir, { recursive: true })
for (const file of await readdir(outDir)) await rm(`${outDir}/${file}`)

const manifest = {}
for (const shot of shots) {
  const source = `${sourceDir}/${shot.name}.png`
  const { width, height } = await sharp(source).metadata()
  for (const w of widths) {
    const image = sharp(source).resize({ width: w })
    await image
      .clone()
      .avif({ quality: 50, effort: 6 })
      .toFile(`${outDir}/${shot.name}-${w}.avif`)
    await image
      .clone()
      .webp({ quality: 80 })
      .toFile(`${outDir}/${shot.name}-${w}.webp`)
  }
  await sharp(source)
    .resize({ width: 1440 })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(`${outDir}/${shot.name}-1440.jpg`)
  const placeholder = await sharp(source)
    .resize({ width: 24 })
    .blur(1)
    .webp({ quality: 40 })
    .toBuffer()
  manifest[shot.name] = {
    width,
    height,
    widths,
    placeholder: `data:image/webp;base64,${placeholder.toString('base64')}`,
  }
}

await writeFile(
  'content/screenshots.ts',
  `// Written by scripts/screenshots.mjs; run \`npm run screenshots\` to update
export const screenshots = ${JSON.stringify(manifest, null, 2)} as const

export type ScreenshotName = keyof typeof screenshots
`
)
console.log(`wrote ${outDir} and content/screenshots.ts`)
