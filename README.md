# J-H.AI Personal website

This is the personal website of James Haworth, located at [j-h.ai](https://j-h.ai)

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)

## Development

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/jameshaworthcs/personal-website.git
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Build the site locally:

```bash
npm run build
```

2. The static files will be generated in the `out` directory.

3. Push your changes to the main branch:

```bash
git push origin main
```

4. The GitHub Actions workflow will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Make it available at https://j-h.ai

### GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Under "Build and deployment":
   - Source: "GitHub Actions"
   - Branch: `main`

## Quality Checks

This project uses several tools to ensure code quality:

- **TypeScript** for static type checking
- **ESLint** for code linting
- **Prettier** for code formatting

These checks run automatically on pull requests through GitHub Actions.
