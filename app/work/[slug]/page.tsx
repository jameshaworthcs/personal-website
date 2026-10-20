import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { Footer } from '@/components/footer'
import { Tags } from '@/components/tags'
import { Screenshot } from '@/components/screenshot'
import { workPages } from '@/content/work'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return workPages.map((item) => ({ slug: item.page.slug }))
}

function find(slug: string) {
  return workPages.find((item) => item.page.slug === slug)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const item = find((await params).slug)
  if (!item) return {}
  const path = `/work/${item.page.slug}`
  return {
    title: item.title,
    description: item.page.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      siteName: 'James Haworth',
      locale: 'en_GB',
      title: `${item.title} · James Haworth`,
      description: item.page.description,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'James Haworth, Software Engineer',
        },
      ],
    },
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<Params>
}) {
  const item = find((await params).slug)
  if (!item) notFound()
  const { page } = item

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main
        id="main"
        className="mx-auto w-full max-w-3xl grow px-4 pt-10 pb-16"
      >
        <p className="mb-3 font-mono text-sm text-muted-foreground">
          <Link href="/#work" className="hover:text-foreground">
            ← Selected work
          </Link>
        </p>
        <h1 className="text-4xl font-bold tracking-tight">{item.title}</h1>
        <p className="mt-4 mb-8 text-lg leading-relaxed text-muted-foreground">
          {page.lede}
        </p>

        <dl className="mb-6 grid overflow-hidden rounded-xl border sm:grid-flow-col sm:auto-cols-fr">
          {page.facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`px-4 py-3 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''}`}
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mb-10 flex flex-wrap gap-2.5">
          {item.links
            .filter((link) => !link.href.startsWith('/work/'))
            .map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex rounded-lg border px-4 py-2.5 font-medium hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>

        {page.figures && (
          <ul className="mb-10 grid gap-4 sm:grid-cols-3">
            {page.figures.map((figure) => (
              <li key={figure.label} className="border-t-2 border-link pt-3">
                <span className="block text-2xl font-semibold">
                  {figure.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {figure.label}
                </span>
              </li>
            ))}
          </ul>
        )}

        {page.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mb-3 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="list-disc space-y-1.5 pl-6 text-lg leading-relaxed">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.screenshot && <Screenshot {...section.screenshot} />}
          </section>
        ))}

        <Tags tags={item.tags} className="mt-10 border-t pt-4" />
      </main>

      <Footer />
    </div>
  )
}
