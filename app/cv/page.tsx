import type { Metadata } from 'next'
import type React from 'react'
import { Download } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { profile } from '@/content/profile'
import { skills } from '@/content/skills'
import {
  cvEducation,
  cvExperience,
  cvLinks,
  cvProjects,
  type CvEntry,
} from '@/content/cv'

export const metadata: Metadata = {
  title: 'CV',
  description:
    'The CV of James Haworth, Software Engineer: education, experience, projects and technical skills.',
  alternates: {
    canonical: '/cv',
  },
}

function CvSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-7 break-inside-avoid-page">
      <h2 className="mb-3 border-b border-foreground/60 pb-1 text-lg font-bold">
        {title}
      </h2>
      {children}
    </section>
  )
}

// A bullet's text, with the parts the CV links turned into links
function Linked({ text }: { text: string }) {
  const label = Object.keys(cvLinks).find((label) => text.includes(label))
  if (!label) return text
  const at = text.indexOf(label)
  return (
    <>
      {text.slice(0, at)}
      <a href={cvLinks[label]} className="underline">
        {label}
      </a>
      <Linked text={text.slice(at + label.length)} />
    </>
  )
}

function Bullets({ items }: { items: string[] }) {
  if (items.length === 0) return null
  return (
    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[15px] leading-snug print:text-[10pt]">
      {items.map((item) => (
        <li key={item}>
          <Linked text={item} />
        </li>
      ))}
    </ul>
  )
}

function Entry({ entry }: { entry: CvEntry }) {
  return (
    <div className="mb-4 break-inside-avoid">
      <div className="flex justify-between gap-4">
        <h3 className="font-bold">{entry.organisation}</h3>
        <span className="shrink-0">{entry.place}</span>
      </div>
      {entry.roles.map((role) => (
        <div key={role.title}>
          <div className="flex justify-between gap-4 italic">
            <span>{role.title}</span>
            <span className="shrink-0 whitespace-nowrap">{role.period}</span>
          </div>
          <Bullets items={role.bullets} />
        </div>
      ))}
      {entry.bullets && <Bullets items={entry.bullets} />}
    </div>
  )
}

export default function CvPage() {
  const contacts = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: 'linkedin.com/in/jameshaworthcs', href: profile.linkedin },
    { label: 'github.com/jameshaworthcs', href: profile.github },
    { label: 'j-h.ai', href: profile.url },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main
        id="main"
        className="mx-auto w-full max-w-3xl grow px-4 pt-10 pb-16 print:max-w-none print:p-0"
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="text-muted-foreground">The same page as the PDF.</p>
          <a
            href="/cv.pdf"
            download="James Haworth CV.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-4 py-2.5 font-medium text-white hover:bg-accent-strong/90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV (PDF)
          </a>
        </div>

        <article className="[overflow-wrap:anywhere]">
          <header className="mb-6 text-center">
            <h1 className="text-4xl font-bold">{profile.name}</h1>
            <p className="mt-1">
              {profile.role} | {profile.location}
            </p>
            <p className="mt-1 text-[15px]">
              {contacts.map((contact, i) => (
                <span key={contact.href}>
                  {i > 0 && ' | '}
                  <a href={contact.href} className="underline">
                    {contact.label}
                  </a>
                </span>
              ))}
            </p>
          </header>

          <CvSection title="Education">
            {cvEducation.map((entry) => (
              <Entry key={entry.organisation} entry={entry} />
            ))}
          </CvSection>

          <CvSection title="Experience and Projects">
            {cvExperience.map((entry) => (
              <Entry key={entry.organisation} entry={entry} />
            ))}
            {cvProjects.map((project) => (
              <div key={project.name} className="mb-4">
                <div className="flex flex-wrap justify-between gap-x-4">
                  <h3>
                    <span className="font-bold">{project.name}</span> |{' '}
                    <span className="italic">{project.stack}</span>
                  </h3>
                  <a href={project.link.href} className="underline">
                    {project.link.label}
                  </a>
                </div>
                <Bullets items={project.bullets} />
              </div>
            ))}
          </CvSection>

          <CvSection title="Technical Skills">
            <dl className="space-y-1 text-[15px] print:text-[10pt]">
              {skills.map((skill) => (
                <div key={skill.group}>
                  <dt className="inline font-bold">{skill.group}: </dt>
                  <dd className="inline">{skill.items}</dd>
                </div>
              ))}
            </dl>
          </CvSection>
        </article>
      </main>

      <Footer />
    </div>
  )
}
