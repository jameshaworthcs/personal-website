'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  description?: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    title: 'Field Application Engineer',
    company: 'ETAS',
    companyUrl: 'https://etas.com',
    period: '07/2026 - Present',
    description:
      "Part-time, retained as an expert after my placement year. Since September 2026 I've owned the team's AI enablement, and I lead its shared repository of agent skills. I onboarded colleagues to Claude Code and GitHub Copilot, which over half the team now use weekly. I write agent skills that investigate a support ticket from scratch, draft a Jira comment and fact-check it, so some investigations now take minutes instead of hours, and I keep model API costs down with cheaper models for subagents and less context.",
    tags: ['Field Application Engineering'],
  },
  {
    title: 'Cyber Security and IT Engineer (part-time)',
    company: 'RosettaPath',
    companyUrl: 'https://rosettapath.com',
    period: '07/2026 - Present',
    description:
      'Resolved the findings of a third-party security audit, including email authentication (DMARC).',
    tags: ['Cybersecurity', 'IT Engineering'],
  },
  {
    title: 'Software Engineering Intern',
    company: 'ETAS',
    companyUrl: 'https://etas.com',
    period: '07/2025 - 07/2026',
    description:
      "Year-long industrial placement in Field Application Engineering. Since July 2025 I've resolved 170+ RTAHotline support tickets from automotive OEMs and Tier-1 suppliers worldwide using RTA-CAR (AUTOSAR Classic): reproducing faults, finding root causes and escalating around 80 defects to R&D. I overhauled the team's long-broken Jenkins CI/CD pipeline (Groovy) that builds, tests and releases customer demo projects, cutting release time from several hours to under an hour; it was adopted as the team standard. I led SKDocs, a public-facing documentation site built with MkDocs and Jenkins that is now ready to go live, agreeing editorial standards across departments and helping to shape the department's documentation strategy. I also built and debugged internal tools. My supervisor rated me as \"consistently contributing at a level comparable to his full-time peers\".",
    tags: ['Software Engineering', 'Field Application'],
  },
  {
    title: 'Founder & Lead Developer',
    company: 'Verified Handles',
    companyUrl: 'https://verifiedhandles.org',
    period: '11/2020 - Present',
    description:
      "I founded and run Verified Handles, a public directory of verified social handles for 155,000+ public figures and organisations, 153,000+ of them linked to Wikidata. In 2026 I rebuilt it as one TypeScript/PostgreSQL platform, replacing MediaWiki, PHP and Python bots, and migrated all 591k historical revisions with zero data loss; it has been live since September 2026. I designed and directed the rebuild with parallel Claude Code agents, each in its own clone and gated by tests and staging before release. I also created an MCP server with 120+ tools and use it to manage the live directory with AI agents; it is designed so an agent can do nothing its user couldn't, and nothing by accident. I run production and staging with edge caching, monitoring, daily backups, OIDC sign-in and moderated editing.",
    tags: ['TypeScript', 'PostgreSQL', 'Leadership'],
  },
  {
    title: 'Founder',
    company: 'JEM MEDIA LTD',
    companyUrl: 'https://jemedia.xyz',
    period: '05/2020 - Present',
    tags: ['Business Ownership'],
  },
  {
    title: 'Software Developer',
    company: 'York Community Consulting',
    period: '06/2024 - 05/2025',
    description:
      'Enhanced performance and user experience of existing Next.js website.',
    tags: ['Next.js', 'Web Development', 'UX/UI'],
  },
  {
    title: 'Website/SEO Strategist',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '06/2024 - 05/2025',
    description:
      'Grew online shop sales by 30% and website traffic by 20% through SEO, site integrations and user experience work. Watch a short video about the work at j-h.ai/york-wines.',
    tags: ['Full Stack Development', 'SEO', 'UX/UI'],
  },
  {
    title: 'Cyber Security and IT Engineer',
    company: 'RosettaPath',
    companyUrl: 'https://rosettapath.com',
    period: '07/2024 - 06/2025',
    description:
      'Oversaw the management of security protocols and preventative measures, ensuring the confidentiality, integrity, and availability of data.',
    tags: ['Cybersecurity', 'Cloud Security', 'Data Protection'],
  },
  {
    title: 'Web Development Intern',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '03/2024 - 06/2024',
    description:
      'Worked directly with management to evaluate how the existing website was used to sell wine, and contributed to the development of the new website.',
    tags: ['Business Research', 'Software Infrastructure'],
  },
  {
    title: 'Software Engineer Work Experience',
    company: 'MBDA',
    companyUrl: 'https://www.mbda-systems.com',
    period: '04/2022',
    description:
      'During my week-long work experience at MBDA Missile Systems, I collaborated with a partner to develop a Raspberry Pi Missile project using Python. This innovative project was presented to a board of leading software developers at the company, showcasing our technical skills and collaborative efforts in a professional setting.',
    tags: ['Python', 'Raspberry Pi', 'Embedded Systems'],
  },
  {
    title: 'Theoretical and Mathematical Physics',
    company: 'PhysicsBeyond',
    period: '2021 - 2022',
    description:
      'Engaged in PhysicsBeyond society at St Albans School, delving into Theoretical and Mathematical Physics concepts through collaborative study. Contributed to group problem-solving, enhancing teamwork and analytical skills. Actively participated in research projects, demonstrating a passion for advancing theoretical physics understanding.',
    tags: ['Physics', 'Mathematics', 'Research'],
  },
]

const INITIAL_COUNT = 4

export function ExperienceTimeline() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? experiences : experiences.slice(0, INITIAL_COUNT)
  const hiddenCount = experiences.length - INITIAL_COUNT

  return (
    <div className="max-w-3xl mx-auto">
      {visible.map((exp, i) => {
        const isFirst = i === 0
        const isLast = i === visible.length - 1

        return (
          <div
            key={`${exp.company}-${exp.period}`}
            className="flex gap-6 md:gap-8"
          >
            {/* Timeline spine */}
            <div className="flex flex-col items-center">
              <div
                className={`w-px flex-1 ${isFirst ? 'bg-transparent' : 'bg-border'}`}
              />
              <div className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary bg-background shadow-xs shadow-primary/20" />
              <div
                className={`w-px flex-1 ${isLast && !(!showAll && hiddenCount > 0) ? 'bg-transparent' : 'bg-border'}`}
              />
            </div>

            {/* Card */}
            <div className={`flex-1 ${isLast ? '' : 'pb-6'}`}>
              <div className="rounded-lg border bg-card p-5 shadow-xs transition-shadow hover:shadow-md">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
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
                    <span className="font-medium text-primary">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                )}

                {exp.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}

      {/* Show more / less toggle */}
      {hiddenCount > 0 && (
        <div className="flex gap-6 md:gap-8">
          <div className="flex flex-col items-center">
            <div
              className={`w-px flex-1 ${showAll ? 'bg-transparent' : 'bg-transparent'}`}
            />
          </div>
          <div className="flex-1 pt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              {showAll ? (
                <>
                  Show less
                  <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  Show {hiddenCount} more
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
