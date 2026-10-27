// The CV word for word, for /cv: the two-page CV that public/cv.pdf is

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
          'Predicted First; second year First-class (73.5%): Introduction to Data Science 79%, Advanced Computer Systems 79%, Machine Learning & Optimisation 78%',
          'Final year: capstone on ML entity resolution, linking WHOIS records to the companies behind them, to be measured against a published baseline; Deep Learning, NLP, LLMs, Cloud-based Data Analysis',
        ],
      },
    ],
  },
  {
    organisation: 'Richard Hale School',
    place: 'Hertford, UK',
    roles: [
      {
        title: 'A levels: Computer Science, Mathematics, Physics; EPQ (A*)',
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
          "Lead the team's AI tooling: onboarded colleagues to Claude Code and GitHub Copilot, which most of the team now use weekly",
          'Write agent skills: one investigates a support ticket from scratch and drafts a Jira comment, another fact-checks the draft; subagents on cheaper models with small contexts keep API costs down; some investigations now take minutes, not hours',
          'Track recurring RTA-CAR UI/UX issues across product teams, from using the product and from customer, first-line and internal Jira tickets (JQL filters, some automation); my reports to product owners have brought small fixes forward',
        ],
      },
      {
        title: 'Software Engineering Intern (placement year)',
        period: '07/2025 – 07/2026',
        bullets: [
          'Overhauled the Jenkins CI/CD pipeline (Groovy, Python) for customer demo projects: releases that took several hours, mostly by hand, now run reproducibly in under an hour; adopted as the team standard',
          'Resolved 170+ RTA-CAR (AUTOSAR Classic) tickets from car makers and Tier-1 suppliers worldwide: reproduced faults in C, found root causes and escalated around 80 defects to R&D, most confirmed',
          "Worked with customers' engineers by email, by phone and in person, and coordinated many of the escalated defects with R&D",
          'Wrote Jenkins pipelines that build the documentation and Confluence pages and automate Git commits',
          "Volunteered to join the internal DevOps team's stand-ups and retrospectives; built the team a Grafana dashboard tracking its migration from legacy Bosch tools to Artifactory and Bitbucket, pre-aggregating the data in InfluxDB; its lead proposed one like it for every product line",
          'Led the Jenkins deployment of a public MkDocs documentation site to replace PDFs: agreed its scope and editorial standards with technical authors and management through changing requirements',
          "Supervisor's placement review: “consistently contributing at a level comparable to his full-time peers”",
        ],
      },
    ],
  },
  {
    organisation: 'Verified Handles (JEM Media Ltd)',
    place: 'London, UK',
    roles: [
      {
        title: 'Founder & Engineer',
        period: '11/2020 – Present',
        bullets: [
          'Run verifiedhandles.org, a public directory of verified social handles for 155,000+ public figures and organisations, nearly all matched to Wikidata',
          'In 2026, rebuilt it as a TypeScript/PostgreSQL platform replacing MediaWiki, PHP and Python bots; migrated all 591,000 revisions with zero data loss; live since 09/2026',
          'Designed its architecture, hosting and monitoring: production and staging behind Google Project Shield, nginx and Varnish; Prometheus, Loki and Grafana for metrics, logs and alerts; daily backups',
          'Developed it with parallel Claude Code agents, each in its own clone: I review every change, and each is gated by 10,000+ tests and a staging deploy',
          "Built the Go OAuth 2.0/OpenID Connect provider behind the site's sign-in",
          'Built an MCP server (120+ tools), listed in the official MCP Registry, through which I run the live directory with AI agents, every write audited',
        ],
      },
    ],
  },
  {
    organisation: 'RosettaPath',
    place: 'London, UK',
    roles: [
      {
        title: 'Cyber Security and IT Engineer (part-time)',
        period: '07/2024 – 06/2025, 07/2026 – Present',
        bullets: [
          "Advise the directors on cyber security for the company's data and hardware, including full-disk encryption and backups",
          'Resolved the findings of a third-party security audit',
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
      'Grew online sales by 30% and website traffic by 20% over my time there through SEO, site integrations and UX, using Google Analytics, Search Console, Tag Manager, Looker Studio and Merchant Center',
      'As an intern, evaluated with management how the old website sold wine, and helped build the new one',
    ],
  },
  {
    organisation: "McDonald's",
    place: 'Hertford and York, UK',
    roles: [
      {
        title: 'Crew Trainer (part-time)',
        period: '10/2021 – 10/2024',
        bullets: [
          'Promoted to Crew Trainer, training new crew members in a fast-paced team',
          'Fixed card-payment and screen faults during service, keeping customers served and queues moving',
        ],
      },
    ],
  },
]

export const cvProjects = [
  {
    name: 'Counting House',
    stack: 'TypeScript, React, Hono, llama.cpp',
    link: {
      label: 'github.com/jameshaworthcs/countinghouse',
      href: 'https://github.com/jameshaworthcs/countinghouse',
    },
    bullets: [
      'Open-source, local-first UK personal finance tracker: bank statements, CSV exports and screenshots go in; validated, Git-versioned data comes out (spending, tax year, projections)',
      'Built a field-level eval of its import pipeline on 40 synthetic CSV exports, PDF statements and phone screenshots: fully local on llama.cpp (Qwen3.6-35B-A3B), it reads 99.3% of 2,614 fields correctly',
    ],
  },
]

export const cvCertificates: { name: string; issuer?: string; date: string }[] =
  [
    {
      name: 'Functional Safety and ISO 26262 Deep Dive',
      issuer: 'ETAS',
      date: '11/2025',
    },
    {
      name: 'CyberFirst Futures (SCQF Level 5)',
      issuer: 'National Cyber Security Centre',
      date: '08/2021',
    },
    { name: "The Duke of Edinburgh's Award, Gold", date: '06/2023' },
  ]

export const cvActivities = [
  'Volunteered with a Beaver Scout group; played and coached badminton; built and coded a competition robot on a University of Southampton residential; expeditions in Snowdonia and the Lake District',
]
