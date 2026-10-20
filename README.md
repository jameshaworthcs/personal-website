# j-h.ai

The personal website of James Haworth, live at [j-h.ai](https://j-h.ai).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router), exported as a static site
- React 19 and TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- Hosted on GitHub Pages; visits counted with a self-hosted
  [Plausible](https://plausible.io/) instance (no cookies)

## Running it

Requires Node.js 24.

```bash
npm ci
npm run dev       # http://localhost:3000
npm run build     # static site in ./out
```

## Checks

CI runs these on every pull request, and they must pass before the build:

```bash
npm run format:check   # Prettier
npm run lint           # ESLint
npm run typecheck      # TypeScript
```

`npm run build` type-checks too.

## Deployment

Every push to `main` builds the site and deploys `./out` to GitHub Pages
(`.github/workflows/ci.yml`). Changes go through pull requests.

## Content

- `public/cv.pdf` is the public build of my CV: the same page as the one I send,
  without my phone number.
- `/york-wines` is linked from my CV, so its URL must not change. The video
  itself is served from `video.j-h.ai`.
