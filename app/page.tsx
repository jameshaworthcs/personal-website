import Link from 'next/link'
import { Download } from 'lucide-react'
import { A } from '@/components/a'
import { SiteHeader } from '@/components/site-header'
import { Section } from '@/components/section'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { Tags } from '@/components/tags'
import { Footer } from '@/components/footer'
import { Avatar, Photo } from '@/components/photo'
import { photo } from '@/content/photo'
import { figures, profile } from '@/content/profile'
import { skills } from '@/content/skills'
import { work } from '@/content/work'
import { lastUpdated } from '@/lib/last-updated'

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium transition-colors'

function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateModified: lastUpdated().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: profile.name,
      url: profile.url,
      jobTitle: profile.role,
      image: `${profile.url}/img/photo-${photo.full.width}.jpg`,
      sameAs: [profile.linkedin, profile.github, profile.verifiedHandles],
    },
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
      />
      <SiteHeader />

      <main id="main" className="mx-auto w-full max-w-3xl grow px-4">
        <section className="grid gap-8 pt-12 pb-10 sm:grid-cols-[1fr_120px] sm:pt-16">
          <div>
            <div className="mb-6 flex items-center gap-4 max-[379px]:gap-3">
              <Avatar alt={profile.name} />
              <div>
                <h1 className="text-4xl font-bold tracking-tight max-[379px]:text-[2.125rem] sm:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-2 text-xl text-muted-foreground">
                  {profile.role}
                </p>
              </div>
            </div>
            <p className="mb-4 text-lg leading-relaxed">{profile.lede}</p>
            <p className="mb-7">{profile.target}</p>
            <div className="flex flex-wrap gap-2.5">
              <A
                href="/cv.pdf"
                download="James Haworth CV.pdf"
                className={`${buttonBase} bg-accent-strong text-white hover:bg-accent-strong/90`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV (PDF)
              </A>
              <A
                href={`mailto:${profile.email}`}
                className={`${buttonBase} border hover:bg-muted`}
              >
                {profile.email}
              </A>
              <A
                href={profile.linkedin}
                className={`${buttonBase} border hover:bg-muted`}
              >
                LinkedIn
              </A>
              <A
                href={profile.github}
                className={`${buttonBase} border hover:bg-muted`}
              >
                GitHub
              </A>
            </div>
          </div>
          <Photo alt={profile.name} />
        </section>

        <ul className="mb-16 grid grid-cols-2 border-y sm:grid-cols-4">
          {figures.map((figure, i) => (
            <li
              key={figure.value}
              className={`${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t sm:border-t-0' : ''} ${i === 2 ? 'sm:border-l' : ''}`}
            >
              <A
                href={figure.href}
                className="block h-full px-4 py-4 hover:bg-muted/50"
              >
                <span className="block text-2xl font-semibold">
                  {figure.value}
                </span>
                <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                  {figure.label}
                </span>
              </A>
            </li>
          ))}
        </ul>

        <Section id="work" title="Selected work">
          <ul className="grid gap-3.5">
            {work.map((item) => (
              <li key={item.title} className="rounded-xl border p-5">
                <h3 className="text-lg font-semibold">
                  {item.page ? (
                    <Link
                      href={`/work/${item.page.slug}`}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-1.5 mb-3 leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <A
                          href={link.href}
                          className="font-medium text-link underline underline-offset-4"
                        >
                          {link.label}
                        </A>
                      </li>
                    ))}
                  </ul>
                  <Tags tags={item.tags} />
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section id="education" title="Education">
          <Education />
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[11rem_1fr]">
            {skills.map((skill) => (
              <div key={skill.group} className="contents">
                <dt className="font-semibold">{skill.group}</dt>
                <dd className="mb-2 text-muted-foreground sm:mb-0">
                  {skill.items}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="mb-4 text-lg">
            Email is quickest:{' '}
            <A
              href={`mailto:${profile.email}`}
              className="font-medium text-link underline underline-offset-4"
            >
              {profile.email}
            </A>
            . I&apos;m also on{' '}
            <A
              href={profile.linkedin}
              className="font-medium text-link underline underline-offset-4"
            >
              LinkedIn
            </A>{' '}
            and{' '}
            <A
              href={profile.github}
              className="font-medium text-link underline underline-offset-4"
            >
              GitHub
            </A>
            .
          </p>
          <p className="text-muted-foreground">
            My CV is on{' '}
            <Link href="/cv" className="underline underline-offset-4">
              its own page
            </Link>{' '}
            and as a{' '}
            <A
              href="/cv.pdf"
              download="James Haworth CV.pdf"
              className="underline underline-offset-4"
            >
              PDF
            </A>
            .
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
