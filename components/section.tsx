import type React from 'react'

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16">
      <h2
        id={`${id}-heading`}
        className="mb-5 font-mono text-sm font-medium uppercase tracking-wider text-muted-foreground"
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
