import { Fragment } from 'react'
import { earlier, experiences } from '@/content/experience'
import { Tags } from '@/components/tags'

export function Experience() {
  return (
    <>
      <ol className="divide-y border-y">
        {experiences.map((exp) => (
          <li key={`${exp.company}-${exp.period}`} className="py-5">
            <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="font-mono text-sm text-muted-foreground sm:text-right">
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
              </p>
            </div>
            <p className="text-muted-foreground">
              {exp.companyUrl ? (
                <a href={exp.companyUrl} className="hover:text-foreground">
                  {exp.company}
                </a>
              ) : (
                exp.company
              )}
            </p>
            <p className="mt-3 leading-relaxed">{exp.description}</p>
            {exp.links && (
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                {exp.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-medium text-link underline underline-offset-4"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <Tags tags={exp.tags} className="mt-3" />
          </li>
        ))}
      </ol>

      <h3 className="mt-8 mb-3 font-semibold">Earlier</h3>
      <ul className="space-y-2 text-muted-foreground">
        {earlier.map((role) => (
          <li key={role.company}>
            <span className="font-medium text-foreground">{role.title}</span>,{' '}
            {role.company}, {role.period}
            {role.summary && `: ${role.summary}`}
          </li>
        ))}
      </ul>
    </>
  )
}
