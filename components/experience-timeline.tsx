import { Fragment } from 'react'

interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  description: string
  links?: { label: string; href: string }[]
  tags: string[]
}

interface EarlierRole {
  title: string
  company: string
  period: string
  summary: string
}

const experiences: Experience[] = [
  {
    title: 'Field Application Engineer (part-time)',
    company: 'ETAS (Bosch Group)',
    companyUrl: 'https://etas.com',
    period: '07/2026 – Present',
    description:
      "Part-time, retained as an expert after my placement year. Since September 2026 I've owned the team's AI enablement, and I lead its shared repository of agent skills. I onboarded colleagues to Claude Code and GitHub Copilot, which over half the team now use weekly. I write agent skills that investigate a support ticket from scratch, draft a Jira comment and fact-check it, so some investigations now take minutes instead of hours, and I keep model API costs down with cheaper models for subagents and less context.",
    tags: ['Claude Code', 'GitHub Copilot', 'AI enablement'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'ETAS (Bosch Group)',
    companyUrl: 'https://etas.com',
    period: '07/2025 – 07/2026',
    description:
      "Year-long industrial placement in Field Application Engineering. Since July 2025 I've resolved 170+ RTAHotline support tickets from automotive OEMs and Tier-1 suppliers worldwide using RTA-CAR (AUTOSAR Classic): reproducing faults, finding root causes and escalating around 80 defects to R&D. I overhauled the team's long-broken Jenkins CI/CD pipeline (Groovy) that builds, tests and releases customer demo projects, cutting release time from several hours to under an hour; it was adopted as the team standard. I led SKDocs, a public-facing documentation site built with MkDocs and Jenkins that is now ready to go live, agreeing editorial standards across departments and helping to shape the department's documentation strategy. I also built and debugged internal tools. My supervisor rated me as \"consistently contributing at a level comparable to his full-time peers\".",
    tags: ['RTA-CAR (AUTOSAR Classic)', 'Jenkins', 'Groovy', 'MkDocs'],
  },
  {
    title: 'Founder & Lead Developer',
    company: 'Verified Handles (JEM Media Ltd)',
    companyUrl: 'https://verifiedhandles.org',
    period: '11/2020 – Present',
    description:
      "I founded and run Verified Handles, a public directory of verified social handles for 155,000+ public figures and organisations, 153,000+ of them linked to Wikidata. In 2026 I rebuilt it as one TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots, and migrated all 591k historical revisions with zero data loss; it has been live since September 2026. I designed and directed the rebuild with parallel Claude Code agents, each in its own clone and gated by tests and staging before release, and built JEMEDIA Accounts, the Go OAuth 2.0/OIDC provider behind sign-in. I also created an MCP server with 120+ tools, listed in the MCP Registry, and use it to manage the live directory with AI agents; it is designed so an agent can do nothing its user couldn't, and nothing by accident. I run production and staging with edge caching, monitoring, daily backups and moderated editing.",
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
    tags: ['TypeScript', 'PostgreSQL', 'Go', 'MCP', 'Claude Code'],
  },
  {
    title: 'Cyber Security and IT Engineer (part-time)',
    company: 'RosettaPath',
    companyUrl: 'https://rosettapath.com',
    period: '07/2024 – 06/2025, 07/2026 – Present',
    description:
      'Resolved the findings of a third-party security audit, including email authentication (DMARC).',
    tags: ['Cybersecurity', 'DMARC'],
  },
  {
    title: 'Website/SEO Strategist',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '06/2024 – 05/2025',
    description:
      'Grew online shop sales by 30% and website traffic by 20% through SEO, site integrations and UX work. York Wines offered me a contract after my internship, then an extension.',
    links: [{ label: "The owner's video (43 s)", href: '/york-wines' }],
    tags: ['SEO', 'Google Analytics', 'UX'],
  },
  {
    title: 'Web Development Intern',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '03/2024 – 06/2024',
    description:
      'Through York Internships (University of York): worked with management to evaluate how the old website sold wine, and helped build the new website.',
    tags: ['Web development'],
  },
]

const earlier: EarlierRole[] = [
  {
    title: 'Software Developer (part-time)',
    company: 'York Community Consulting',
    period: '06/2024 – 05/2025',
    summary:
      'Enhanced the performance and user experience of an existing Next.js website.',
  },
  {
    title: 'Software Engineer work experience (one week)',
    company: 'MBDA',
    period: '04/2022',
    summary:
      "Built a Raspberry Pi missile project in Python with a partner and presented it to the company's senior developers.",
  },
]

export function ExperienceTimeline() {
  return (
    <div className="max-w-3xl mx-auto">
      {experiences.map((exp, i) => {
        const isFirst = i === 0
        const isLast = i === experiences.length - 1

        return (
          <div
            key={`${exp.company}-${exp.period}`}
            className="flex gap-6 md:gap-8"
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center" aria-hidden="true">
              <div
                className={`w-px flex-1 ${isFirst ? 'bg-transparent' : 'bg-border'}`}
              />
              <div className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary bg-background shadow-xs shadow-primary/20" />
              <div
                className={`w-px flex-1 ${isLast ? 'bg-transparent' : 'bg-border'}`}
              />
            </div>

            {/* Card */}
            <div className={`flex-1 ${isLast ? '' : 'pb-6'}`}>
              <div className="rounded-lg border bg-card p-5 shadow-xs">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-sm">
                    <span className="font-medium text-muted-foreground">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </span>
                    <span className="hidden sm:block text-muted-foreground/50">
                      /
                    </span>
                    <span className="font-medium text-blue-700 dark:text-primary">
                      {/* Let two date ranges wrap at the comma on narrow screens */}
                      {exp.period.split(', ').map((range, j, ranges) => (
                        <Fragment key={range}>
                          {j > 0 && ' '}
                          <span className="whitespace-nowrap">
                            {range}
                            {j < ranges.length - 1 && ','}
                          </span>
                        </Fragment>
                      ))}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {exp.links && (
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {exp.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="font-medium text-blue-700 dark:text-primary underline underline-offset-4"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tags.length > 0 && (
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5"
                    aria-label="Skills"
                  >
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-primary"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )
      })}

      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Earlier</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {earlier.map((role) => (
            <li key={role.company}>
              <span className="font-medium text-foreground">{role.title}</span>,{' '}
              {role.company}, {role.period}: {role.summary}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
