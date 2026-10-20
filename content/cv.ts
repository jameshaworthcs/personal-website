// The CV word for word, for /cv; public/cv.pdf is the same page as a PDF

export interface CvRole {
  title: string
  period: string
  bullets: string[]
}

export interface CvEntry {
  organisation: string
  place: string
  roles: CvRole[]
  // Bullets that cover every role in the entry
  bullets?: string[]
}

// Text in the bullets that the CV links, and where it links to
export const cvLinks: Record<string, string> = {
  'verifiedhandles.org': 'https://verifiedhandles.org',
  'j-h.ai/york-wines': 'https://j-h.ai/york-wines',
}

export const cvEducation: CvEntry[] = [
  {
    organisation: 'University of York',
    place: 'York, UK',
    roles: [
      {
        title:
          'BEng Computer Science with Artificial Intelligence (with a year in industry)',
        period: '09/2023 – 06/2027',
        bullets: [
          'Second year: First-class average (73.5%); top modules: Data Science (79%), Advanced Computer Systems (79%), Machine Learning & Optimisation (78%)',
          'Final year: Deep Learning, Natural Language Processing, Large Language Models, Cloud-based Data Analysis',
        ],
      },
    ],
  },
  {
    organisation: 'Richard Hale School',
    place: 'Hertford, UK',
    roles: [
      {
        title:
          'A-Levels: Computer Science, Physics and Mathematics; EPQ (A*); Duke of Edinburgh Gold',
        period: '09/2016 – 06/2023',
        bullets: [],
      },
    ],
  },
]

export const cvExperience: CvEntry[] = [
  {
    organisation: 'ETAS (Bosch Group)',
    place: 'York, UK',
    roles: [
      {
        title: 'Field Application Engineer (part-time)',
        period: '07/2026 – Present',
        bullets: [
          "Lead the team's agent-skills repository; onboarded colleagues to Claude Code and GitHub Copilot (8 use them weekly); wrote skills that investigate tickets and fact-check replies: some now take minutes, not hours",
        ],
      },
      {
        title: 'Software Engineering Intern (placement year)',
        period: '07/2025 – 07/2026',
        bullets: [
          'Resolved 170+ support tickets from car makers and Tier-1 suppliers worldwide on RTA-CAR (AUTOSAR Classic): reproduced faults, found root causes and escalated around 80 defects to R&D, most of them confirmed',
          "Overhauled the team's long-broken Jenkins CI/CD pipeline (Groovy) that builds, tests and releases customer demo projects, cutting release time from several hours to under an hour; adopted as the team standard",
          'Asked for a taster with the internal DevOps team; built a Grafana dashboard tracking a migration off legacy Bosch tools, pre-aggregating the data in InfluxDB so it loads fast; the team lead proposed one per product field',
          'Led SKDocs, a public-facing documentation site built with MkDocs and Jenkins, now ready to go live',
          'Rated by supervisor as “consistently contributing at a level comparable to his full-time peers”',
        ],
      },
    ],
  },
  {
    organisation: 'Verified Handles (JEM Media Ltd)',
    place: 'London Area, UK',
    roles: [
      {
        title: 'Founder & Lead Developer',
        period: '11/2020 – Present',
        bullets: [
          'Founded and run verifiedhandles.org, a public directory of verified social handles for 155,000+ public figures and organisations, 153,000+ linked to Wikidata',
          'Rebuilt it in 2026 as one TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots; migrated all 591k historical revisions with zero data loss; live since 09/2026',
          'Designed the site, its architecture, its hosting (nginx, Varnish) and its monitoring (Prometheus, Grafana); built it with parallel Claude Code agents, each change gated by tests and staging',
          'Built JEMEDIA Accounts, the Go OAuth 2.0/OIDC provider behind sign-in',
          "Created an MCP server for running the directory with AI agents: dry runs by default, confirmation for destructive changes, never above the user's role, every write audited",
        ],
      },
    ],
  },
  {
    organisation: 'York Wines',
    place: 'York, UK',
    roles: [
      {
        title: 'Website/SEO Strategist',
        period: '06/2024 – 05/2025',
        bullets: [],
      },
      {
        title: 'Web Development Intern',
        period: '03/2024 – 06/2024',
        bullets: [],
      },
    ],
    bullets: [
      "Offered a contract after the internship, then an extension (owner's video testimonial: j-h.ai/york-wines)",
      'Grew online shop sales by 30% and website traffic by 20% through SEO, site integrations and UX work',
    ],
  },
]

export const cvProjects = [
  {
    name: 'Counting House',
    stack: 'TypeScript, React, Hono, Go',
    link: {
      label: 'github.com/jameshaworthcs/countinghouse',
      href: 'https://github.com/jameshaworthcs/countinghouse',
    },
    bullets: [
      'Open-source, local-first UK personal finance tracker (50+ GitHub stars); built a field-level extraction eval: Sonnet 100% on 28 synthetic cases for $1.04, local models via my llama.cpp gateway 99.1% on 41 for $0',
    ],
  },
]
