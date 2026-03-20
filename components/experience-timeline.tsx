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
    title: 'Software Engineer',
    company: 'ETAS',
    companyUrl: 'https://etas.com',
    period: '07/2025 - Present',
    description: 'Placement working as a Field Application Engineer.',
    tags: ['Software Engineering', 'Field Application'],
  },
  {
    title: 'Director',
    company: 'JEM MEDIA LTD',
    companyUrl: 'https://jemmedia.xyz',
    period: '05/2020 - Present',
    tags: [],
  },
  {
    title: 'Software Developer',
    company: 'York Community Consulting',
    period: '06/2024 - 07/2025',
    description:
      'Enhanced performance and user experience of existing Next.js website.',
    tags: ['Next.js', 'Web Development', 'UX/UI'],
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
    title: 'Developer',
    company: 'York Wines',
    companyUrl: 'https://yorkwines.co.uk',
    period: '03/2024 - 05/2025',
    description:
      'Drove significant growth in online shop sales through strategic website integrations, SEO optimization, and enhancements to user experience. Full stack development expertise enabled rapid implementation and measurable results.',
    tags: ['Full Stack Development', 'SEO', 'UX/UI'],
  },
  {
    title: 'Lead Developer',
    company: 'Verified Handles',
    companyUrl: 'https://verifiedhandles.org',
    period: '11/2020 - 02/2025',
    description:
      "At the helm of Verified Handles, I drive the company's vision, strategy, and execution as its CEO and Founder. My passion lies in connecting brands with influencers across social media platforms, and I bring this to life by harnessing my expertise in Python and AI to craft cutting-edge solutions for our clients.",
    tags: ['Python', 'AI', 'Leadership'],
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
              <div className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary bg-background shadow-sm shadow-primary/20" />
              <div
                className={`w-px flex-1 ${isLast && !(!showAll && hiddenCount > 0) ? 'bg-transparent' : 'bg-border'}`}
              />
            </div>

            {/* Card */}
            <div className={`flex-1 ${isLast ? '' : 'pb-6'}`}>
              <div className="rounded-lg border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
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
