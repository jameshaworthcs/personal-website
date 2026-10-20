# j-h.ai

The personal website of James Haworth, live at [j-h.ai](https://j-h.ai).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router), exported as a static site
- React 19 and TypeScript, Server Components everywhere except the theme
  toggle, the mobile menu, the York Wines player and the analytics opt-out
- [Tailwind CSS 4](https://tailwindcss.com/), with Geist from `next/font`
  (served from the site, not from Google)
- Hosted on GitHub Pages; visits counted with a self-hosted
  [Plausible](https://plausible.io/) instance (no cookies)

## Layout

| Path                    | What it holds                                                                   |
| ----------------------- | ------------------------------------------------------------------------------- |
| `content/`              | Every fact on the site, as typed data: profile, experience, work, education, CV |
| `app/`                  | Pages: home, `/cv`, `/work/[slug]`, `/york-wines`, `/privacy`, metadata files   |
| `components/`           | The pieces the pages are built from                                             |
| `tests/`                | Playwright tests, including axe in both themes                                  |
| `scripts/serve-out.mjs` | Serves `./out` the way GitHub Pages does, for the tests and Lighthouse          |
| `scripts/images.mjs`    | Builds the photo's AVIF, WebP and JPEG sizes from `assets/photo.jpg`            |

## Running it

Requires Node.js 24.

```bash
npm ci
npm run dev       # http://localhost:3000
npm run build     # static site in ./out
npm run serve:out # serve ./out on http://localhost:4173
```

## Checks

CI runs all of these on every pull request; a failure stops the deploy.

```bash
npm run format:check   # Prettier
npm run lint           # ESLint
npm run typecheck      # TypeScript
npm run build          # type-checks too
npm run validate:html  # html-validate on ./out
npm run test:e2e       # Playwright: axe, keyboard, links, URLs on sent CVs
```

Lighthouse CI then audits five pages three times each against the scores and
budgets in `lighthouserc.json`. To run the tests in an installed Chrome rather
than Playwright's own, set `PLAYWRIGHT_CHANNEL=chrome`.

## Deployment

Every push to `main` builds and tests the site, then deploys `./out` to GitHub
Pages once the deployment is approved (`.github/workflows/ci.yml`). After a
deploy, CI checks that `/`, `/york-wines` and `/cv.pdf` still answer.

## Content

- Facts live in `content/` and match my CV; `content/cv.ts` is the CV word
  for word.
- `public/cv.pdf` is the public build of my CV: the same page as the one I
  send, without my phone number.
- `/york-wines` is linked from my CV, so its URL must not change. The video is
  served from `video.j-h.ai`.
- To change the photo, replace `assets/photo.jpg` (square) and run
  `npm run images`.

## Licence

The code is under the [MIT licence](LICENSE). The words, photos, video and CV
are mine and aren't covered by it.
