import { residentials, schools } from '@/content/education'

export function Education() {
  return (
    <>
      <ol className="divide-y border-y">
        {schools.map((school) => (
          <li key={school.name} className="py-5">
            <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{school.name}</h3>
              <p className="font-mono text-sm whitespace-nowrap text-muted-foreground">
                {school.period}
              </p>
            </div>
            <p className="text-muted-foreground">
              {school.course} · {school.place}
            </p>
            {school.details.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 leading-relaxed">
                {school.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <h3 className="mt-8 mb-3 font-semibold">Residential programmes</h3>
      <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
        {residentials.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
