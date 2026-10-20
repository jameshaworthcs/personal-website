export function Tags({
  tags,
  className = '',
}: {
  tags: string[]
  className?: string
}) {
  if (tags.length === 0) return null
  return (
    <ul
      aria-label="Skills"
      className={`flex flex-wrap gap-x-3 gap-y-1 font-mono text-[13px] text-muted-foreground ${className}`}
    >
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}
