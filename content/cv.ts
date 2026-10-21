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
          'Second year: First-class (73.5%); Data Science 79%, Advanced Computer Systems 79%, Machine Learning 78%',
          'Final year: capstone on improving WHOIS with ML; Deep Learning, NLP, LLMs, Cloud-based Data Analysis',
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
          'Own AI tooling for the team: onboarded colleagues to Claude Code and GitHub Copilot (most use them weekly); wrote agent skills that investigate tickets and fact-check replies; some now take minutes, not hours',
          'Track recurring RTA-CAR UI/UX issues through hands-on use and customer, first-line and internal Jira tickets (JQL filters, automation); my ongoing reports to product owners have moved neglected fixes forward',
        ],
      },
      {
        title: 'Software Engineering Intern (placement year)',
        period: '07/2025 – 07/2026',
        bullets: [
          'Resolved 170+ support tickets from car makers and Tier-1 suppliers worldwide on RTA-CAR (AUTOSAR Classic): reproduced faults in C, found root causes and escalated around 80 defects to R&D, most confirmed',
          "Overhauled the team's broken Jenkins CI/CD pipeline (Groovy, Python) for customer demo projects: releases, once mostly by hand over several hours, now run reproducibly in under an hour; adopted as the team standard",
          'Arranged a taster with the internal DevOps team: wrote Terraform; built a Grafana dashboard for its Artifactory and Bitbucket migration, pre-aggregated in InfluxDB; the lead proposed one per product line',
          'Led deployment of a public-facing MkDocs documentation site to replace PDF documentation, through conflicting opinions and changing requirements across technical authors and management; ready to go live',
          'Rated by supervisor as “consistently contributing at a level comparable to his full-time peers”',
        ],
      },
    ],
  },
  {
    organisation: 'Verified Handles (JEM Media Ltd)',
    place: 'London, UK',
    roles: [
      {
        title: 'Founder & Lead Developer',
        period: '11/2020 – Present',
        bullets: [
          'Founded and run verifiedhandles.org, a public directory of verified social handles for 155,000+ public figures and organisations (nearly all linked to Wikidata); in 2026, rebuilt it as one TypeScript/PostgreSQL platform replacing MediaWiki, PHP and Python bots; migrated all 591k revisions with zero data loss; live since 09/2026',
          'Designed its architecture, hosting (nginx, Varnish) and monitoring (Prometheus, Grafana); built it with parallel Claude Code agents in isolated clones, each change gated by 10,000+ tests and staging',
          "Built the Go OAuth 2.0/OpenID Connect provider behind the site's sign-in",
          "Built an MCP server (120+ tools) and run the live directory through it with AI agents; an agent can do nothing its user couldn't, and nothing by accident",
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
      'Grew online sales by 30% and website traffic by 20% over my time there through SEO, site integrations and UX',
    ],
  },
]

export const cvProjects = [
  {
    name: 'Counting House',
    stack: 'TypeScript, React, Hono',
    link: {
      label: 'github.com/jameshaworthcs/countinghouse',
      href: 'https://github.com/jameshaworthcs/countinghouse',
    },
    bullets: [
      'Open-source, local-first UK personal finance tracker (50+ GitHub stars) that turns bank statements and screenshots into validated data; built an eval comparing Claude with local models on my llama.cpp gateway',
    ],
  },
]
