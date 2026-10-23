import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { isFollowed } from '../lib/links'

// Every page a visitor can reach, plus the 404 page
const pages = [
  '/',
  '/cv',
  '/work/counting-house',
  '/work/verified-handles',
  '/work/verified-handles-mcp',
  '/york-wines',
  '/privacy',
  '/does-not-exist',
]

test.beforeEach(async ({ page }) => {
  // Keep the tests from talking to the analytics server
  await page.route('https://analytics.cloud.jhaworth.ai/**', (route) =>
    route.abort()
  )
})

for (const path of pages) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test(`${path} passes axe in ${colorScheme} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme })
      await page.goto(path)
      const results = await new AxeBuilder({ page })
        .withTags([
          'wcag2a',
          'wcag2aa',
          'wcag21a',
          'wcag21aa',
          'wcag22aa',
          'best-practice',
        ])
        .analyze()
      expect(results.violations).toEqual([])
    })
  }

  test(`${path} fits a 320 px screen`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 })
    await page.goto(path)
    const overflows = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth
    )
    expect(overflows).toBe(false)
  })
}

test('URLs already on CVs keep working', async ({ request }) => {
  for (const path of ['/', '/york-wines', '/cv.pdf']) {
    const response = await request.get(path)
    expect(response.status(), path).toBe(200)
  }
  const pdf = await request.get('/cv.pdf')
  expect(pdf.headers()['content-type']).toBe('application/pdf')
})

test('every internal link leads somewhere', async ({ page, request }) => {
  const targets = new Set<string>()
  for (const path of pages.slice(0, -1)) {
    await page.goto(path)
    const hrefs = await page.$$eval('a[href]', (links) =>
      links.map((link) => (link as HTMLAnchorElement).href)
    )
    for (const href of hrefs) {
      const url = new URL(href)
      if (url.origin === new URL(page.url()).origin) targets.add(url.href)
    }
  }
  for (const target of targets) {
    const url = new URL(target)
    const response = await request.get(url.pathname)
    expect(response.status(), url.pathname).toBe(200)
    if (url.hash) {
      await page.goto(url.pathname)
      await expect(page.locator(url.hash), target).toHaveCount(1)
    }
  }
})

test('only links off our own domains are nofollow', async ({ page }) => {
  for (const path of pages) {
    await page.goto(path)
    const links = await page.$$eval('a[href]', (anchors) =>
      anchors.map((a) => ({
        href: a.getAttribute('href') ?? '',
        rel: (a.getAttribute('rel') ?? '').split(/\s+/),
      }))
    )
    for (const { href, rel } of links) {
      expect(rel.includes('nofollow'), `${path}: ${href}`).toBe(
        !isFollowed(href)
      )
    }
  }
})

test('the first Tab reaches the skip link', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.locator(':focus')).toHaveText('Skip to content')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main$/)
})

test('the theme toggle switches on the first click', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('html')).toHaveClass(/dark/)
})

test('the York Wines video plays from the keyboard', async ({ page }) => {
  await page.goto('/york-wines')
  // Skip link, then the back link, then the play button
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: '← Experience' })).toBeFocused()
  await page.keyboard.press('Tab')
  const play = page.getByRole('button', { name: /Play the video/ })
  await expect(play).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(play).toHaveCount(0)
  await expect(page.locator('video')).toBeFocused()
})

test('a trailing slash still reaches the page', async ({ page }) => {
  await page.goto('/york-wines/')
  await expect(page).toHaveURL(/\/york-wines$/)
  await expect(page.locator('h1')).toHaveText(/York Wines/)
})

test('/blog sends readers home', async ({ page }) => {
  await page.goto('/blog')
  await expect(page).toHaveURL(/\/$/)
})

test('the privacy page can switch visit counting off and on', async ({
  page,
}) => {
  await page.goto('/privacy')
  await page.getByRole('button', { name: 'Stop counting my visits' }).click()
  expect(
    await page.evaluate(() => localStorage.getItem('plausible_ignore'))
  ).toBe('true')
  await page.getByRole('button', { name: 'Count my visits again' }).click()
  expect(
    await page.evaluate(() => localStorage.getItem('plausible_ignore'))
  ).toBeNull()
})

test('each page has its own title and canonical URL', async ({ page }) => {
  const seen = new Set<string>()
  for (const path of pages.slice(0, -1)) {
    await page.goto(path)
    const title = await page.title()
    expect(seen.has(title), `${path}: ${title}`).toBe(false)
    seen.add(title)
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute('href')
    expect(canonical, path).toBe(
      path === '/' ? 'https://j-h.ai' : `https://j-h.ai${path}`
    )
  }
})

test('the home page describes James in structured data', async ({ page }) => {
  await page.goto('/')
  const json = await page
    .locator('script[type="application/ld+json"]')
    .textContent()
  const data = JSON.parse(json ?? '{}')
  expect(data['@type']).toBe('ProfilePage')
  expect(data.mainEntity.name).toBe('James Haworth')
})

test('project screenshots load and link to their full size', async ({
  page,
  request,
}) => {
  for (const path of ['/work/verified-handles', '/work/verified-handles-mcp']) {
    await page.goto(path)
    const figures = page.locator('figure')
    await expect(figures.first()).toBeVisible()
    for (const figure of await figures.all()) {
      await figure.scrollIntoViewIfNeeded()
      const img = figure.locator('img')
      await expect(img).toHaveAttribute('loading', 'lazy')
      await expect
        .poll(() => img.evaluate((el: HTMLImageElement) => el.naturalWidth))
        .toBeGreaterThan(0)
      const full = await figure.getByRole('link').getAttribute('href')
      const response = await request.get(full ?? '')
      expect(response.status(), full ?? '').toBe(200)
    }
  }
})

test('the headshot opens full size and closes again', async ({ page }) => {
  await page.goto('/')
  const dialog = page.getByRole('dialog')
  const open = page.getByRole('button', { name: /view full size/i })

  await open.click()
  await expect(dialog).toBeVisible()
  await expect
    .poll(() =>
      dialog.locator('img').evaluate((el: HTMLImageElement) => el.naturalWidth)
    )
    .toBeGreaterThan(1000)
  await page.getByRole('button', { name: 'Close' }).click()
  await expect(dialog).toBeHidden()

  // A click on the photo itself leaves it open; one beside it closes it
  await open.click()
  await dialog.locator('img').click()
  await expect(dialog).toBeVisible()
  await page.mouse.click(5, 300)
  await expect(dialog).toBeHidden()

  await open.click()
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
})

test('the headshot swaps in a high-resolution copy after load', async ({
  page,
}) => {
  // Phones get the round avatar beside the name, desktops the photo.
  // naturalWidth isn't checked: Chrome keeps the density it picked from the
  // srcset, so a 1440 px swap-in can report 480
  await page.goto('/')
  const img = page
    .getByRole('button', { name: /view full size/i })
    .locator('img')
  await expect
    .poll(() => img.evaluate((el: HTMLImageElement) => el.currentSrc))
    .toMatch(/\/img\/(avatar-1440|photo-4234)\.jpg$/)
})

test('the name stays on one line beside the avatar', async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== 'phone')
  for (const width of [390, 375, 360]) {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    const lines = await page
      .getByRole('heading', { level: 1 })
      .evaluate(
        (el) =>
          el.getBoundingClientRect().height /
          parseFloat(getComputedStyle(el).lineHeight)
      )
    expect(lines, `at ${width} px`).toBeLessThan(1.5)
  }
})

test('the full-size hint shows on hover or keyboard focus only', async ({
  page,
}) => {
  await page.goto('/')
  const open = page.getByRole('button', { name: /view full size/i })
  const hint = open.locator('span').first()
  const opacity = () =>
    hint.evaluate((el) => Number(getComputedStyle(el).opacity))

  expect(await opacity()).toBe(0)
  await open.hover()
  await expect.poll(opacity).toBe(1)
  await page.mouse.move(0, 0)
  await expect.poll(opacity).toBe(0)
  await open.focus()
  await page.keyboard.press('Shift+Tab')
  await page.keyboard.press('Tab')
  await expect.poll(opacity).toBe(1)
})
