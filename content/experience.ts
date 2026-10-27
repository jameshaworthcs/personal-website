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
      "ETAS kept me on part-time after my placement year. Since September 2026 I've led the Field Application Engineering team's shared repository of agent skills. I onboarded colleagues to Claude Code and GitHub Copilot, and most of the team now use them every week. I write agent skills for customer support and day-to-day development, alone and with colleagues: one investigates a support ticket from scratch and drafts a Jira comment, and another fact-checks the draft. Some investigations that took hours now take minutes. I keep model API costs down by running subagents on cheaper models and keeping their context small. I also track recurring RTA-CAR UI/UX issues across product teams, from using the product and from customer, first-line and internal Jira tickets, with JQL filters and some automation; my reports to product owners have brought small fixes forward.",
    tags: ['Claude Code', 'GitHub Copilot', 'LLMs', 'Jira'],
  },
  {
    title: 'Software Engineering Intern (placement year)',
    company: 'ETAS (Bosch Group)',
    companyUrl: 'https://etas.com',
    period: '07/2025 – 07/2026',
    description:
      "Year-long industrial placement in the Field Application Engineering team. I overhauled the Jenkins CI/CD pipeline (Groovy, Python) that builds, tests and releases the team's customer demo projects. Before it, most releases were done by hand over several hours; they now run reproducibly in under an hour, and the pipeline became the team standard. Since July 2025 I've resolved 170+ support tickets from car makers (OEMs) and Tier-1 suppliers worldwide on RTA-CAR (AUTOSAR Classic): reproducing faults in C, finding root causes and escalating around 80 defects to R&D, most of them confirmed. I worked with customers' engineers by email, by phone and in person, and coordinated many of the escalated defects with R&D. I also wrote Jenkins pipelines that build the documentation and Confluence pages and automate Git commits. I volunteered to join the stand-ups and retrospectives of ETAS's internal DevOps team, and built the team a Grafana dashboard tracking its migration from legacy Bosch tools to Artifactory and Bitbucket, pre-aggregating the data in InfluxDB; its lead proposed one like it for every product line. I led the Jenkins deployment of SKDocs, a public documentation site built with MkDocs to replace PDF documentation, and agreed its scope and editorial standards with technical authors and management through changing requirements; the deployment is wired up ahead of launch. My supervisor's placement review described me as \"consistently contributing at a level comparable to his full-time peers\".",
    tags: [
      'RTA-CAR (AUTOSAR Classic)',
      'Jenkins',
      'Groovy',
      'Python',
      'MkDocs',
      'Grafana',
      'InfluxDB',
    ],
  },
  {
    title: 'Founder & Engineer',
    company: 'Verified Handles (JEM Media Ltd)',
    companyUrl: 'https://verifiedhandles.org',
    period: '11/2020 – Present',
    description:
      "I founded and run Verified Handles, a public directory of verified social handles for 155,000+ public figures and organisations, nearly all of them linked to Wikidata. In 2026 I rebuilt it as a TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots, and migrated all 591,000 historical revisions with zero data loss; it has been live since September 2026. I designed the site, its architecture, its hosting and its monitoring: production and staging behind Google Project Shield, nginx and Varnish, with Prometheus, Loki and Grafana for metrics, logs and alerts, and daily backups. I developed it with parallel Claude Code agents, each in its own clone: I review every change, and each is gated by 10,000+ tests and a staging deploy. In its first four weeks the new site had six times the Google Search clicks of the old site's last four weeks, from about the same number of impressions. I also built JEMEDIA Accounts, the Go OAuth 2.0/OpenID Connect provider behind sign-in, and an MCP server (120+ tools), listed in the official MCP Registry, for running the directory with AI agents: writes are dry runs by default, destructive changes need confirmation, an agent never acts above its user's role, and every write is audited.",
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
    description:
      "I advise the directors on cyber security for the company's data and hardware, including full-disk encryption and backups, and resolved the findings of a third-party security audit.",
    tags: ['Cyber security'],
  },
  {
    title: 'Website/SEO Strategist',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '06/2024 – 05/2025',
    description:
      'Grew online shop sales by 30% and website traffic by 20% over my time there through SEO, site integrations and UX work, using Google Analytics, Search Console, Tag Manager, Looker Studio and Merchant Center. York Wines offered me a contract after my internship, then an extension.',
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
  {
    title: 'Crew Trainer (part-time)',
    company: "McDonald's",
    period: '10/2021 – 10/2024',
    description:
      'Promoted to Crew Trainer, training new crew members in a fast-paced team, in Hertford and York. I fixed card-payment and screen faults during service, keeping customers served and queues moving.',
    tags: ['Training', 'Customer service'],
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
