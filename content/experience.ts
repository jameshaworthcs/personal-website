export interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  description: string
  links?: { label: string; href: string }[]
  tags: string[]
}

export interface EarlierRole {
  title: string
  company: string
  period: string
  summary?: string
}

export const experiences: Experience[] = [
  {
    title: 'Field Application Engineer (part-time)',
    company: 'ETAS (Bosch Group)',
    companyUrl: 'https://etas.com',
    period: '07/2026 – Present',
    description:
      "ETAS kept me on part-time after my placement year. Since September 2026 I've led the Field Application Engineering team's shared repository of agent skills. I onboarded colleagues to Claude Code and GitHub Copilot, and 8 of the team now use them every week. I write agent skills for customer support and day-to-day development: one investigates a support ticket from scratch and drafts a Jira comment, and another fact-checks the draft. Some investigations that took hours now take minutes.",
    tags: ['Claude Code', 'GitHub Copilot', 'LLMs'],
  },
  {
    title: 'Software Engineering Intern (placement year)',
    company: 'ETAS (Bosch Group)',
    companyUrl: 'https://etas.com',
    period: '07/2025 – 07/2026',
    description:
      "Year-long industrial placement in the Field Application Engineering team. Since July 2025 I've resolved 170+ support tickets from car makers (OEMs) and Tier-1 suppliers worldwide on RTA-CAR (AUTOSAR Classic): reproducing faults, finding root causes and escalating around 80 defects to R&D, most of them confirmed. I overhauled the team's long-broken Jenkins CI/CD pipeline (Groovy), which builds, tests and releases the team's customer demo projects, cutting release time from several hours to under an hour; it became the team standard. I asked for a taster with ETAS's internal DevOps team and built a Grafana dashboard tracking a migration off legacy Bosch tools, pre-aggregating the data in InfluxDB; the team lead proposed one for each product field. I led SKDocs, a public-facing documentation site built with MkDocs and Jenkins, now ready to go live. My supervisor rated me as \"consistently contributing at a level comparable to his full-time peers\".",
    tags: [
      'RTA-CAR (AUTOSAR Classic)',
      'Jenkins',
      'Groovy',
      'MkDocs',
      'Grafana',
      'Terraform',
    ],
  },
  {
    title: 'Founder & Lead Developer',
    company: 'Verified Handles (JEM Media Ltd)',
    companyUrl: 'https://verifiedhandles.org',
    period: '11/2020 – Present',
    description:
      "I founded and run Verified Handles, a public directory of verified social handles for 155,000+ public figures and organisations, 153,000+ of them linked to Wikidata. In 2026 I rebuilt it as one TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots, and migrated all 591k historical revisions with zero data loss; it has been live since September 2026. I designed the site, its architecture, its hosting and its monitoring: production and staging behind Google Project Shield, nginx and Varnish, with Prometheus, Grafana and Loki for metrics, logs and alerts. I built it with parallel Claude Code agents, each in its own clone, with every change gated by tests and staging before release. In its first four weeks the new site had six times the Google Search clicks of the old site's last four weeks, from about the same number of impressions. I also built JEMEDIA Accounts, the Go OAuth 2.0/OpenID Connect provider behind sign-in, and an MCP server, listed in the MCP Registry, for running the directory with AI agents: writes are dry runs by default, destructive changes need confirmation, an agent never acts above its user's role, and every write is audited.",
    links: [
      {
        label: 'MCP server on GitHub',
        href: 'https://github.com/jameshaworthcs/verifiedhandles-mcp',
      },
      {
        label: 'My Verified Handles entry',
        href: 'https://verifiedhandles.org/james',
      },
    ],
    tags: ['TypeScript', 'PostgreSQL', 'Go', 'MCP', 'Claude Code', 'Grafana'],
  },
  {
    title: 'Cyber Security and IT Engineer (part-time)',
    company: 'RosettaPath',
    companyUrl: 'https://rosettapath.com',
    period: '07/2024 – 06/2025, 07/2026 – Present',
    description: 'Resolved the findings of a third-party security audit.',
    tags: ['Cybersecurity'],
  },
  {
    title: 'Website/SEO Strategist',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '06/2024 – 05/2025',
    description:
      'Grew online shop sales by 30% and website traffic by 20% through SEO, site integrations and UX work. York Wines offered me a contract after my internship, then an extension.',
    links: [{ label: "The owner's video (43 s)", href: '/york-wines' }],
    tags: ['SEO', 'UX'],
  },
  {
    title: 'Web Development Intern',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '03/2024 – 06/2024',
    description:
      'Through York Internships (University of York). Worked with management to evaluate how the old website sold wine, and helped build the new website.',
    tags: ['Web Development'],
  },
]

export const earlier: EarlierRole[] = [
  {
    title: 'Software Developer (part-time)',
    company: 'York Community Consulting',
    period: '06/2024 – 05/2025',
  },
  {
    title: 'Work experience (one week)',
    company: 'MBDA',
    period: '04/2022',
    summary:
      "Built a Raspberry Pi missile project in Python with a partner and presented it to the company's senior software developers.",
  },
]
