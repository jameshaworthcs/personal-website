interface School {
  name: string
  place: string
  course: string
  period: string
  details: string[]
}

const schools: School[] = [
  {
    name: 'University of York',
    place: 'York, UK',
    course:
      'BEng Computer Science with Artificial Intelligence (with a year in industry)',
    period: '09/2023 – 06/2027',
    details: [
      'Second year: First-class average (73.5%); top modules: Data Science (79%), Advanced Computer Systems (79%), Machine Learning & Optimisation (78%); 96% in a first-year Java practical exam',
      'Final year: Deep Learning, Natural Language Processing, Large Language Models, Cloud-based Data Analysis',
    ],
  },
  {
    name: 'Richard Hale School',
    place: 'Hertford, UK',
    course:
      'A-Levels: Computer Science, Physics and Mathematics; EPQ (A*); Duke of Edinburgh Gold',
    period: '09/2016 – 06/2023',
    details: [],
  },
]

const residentials = [
  'Mechatronics, Robotics and Automation Engineering, University of Southampton, 08/2022: built a competition robot in a team of four, programmed in Python.',
  'Engineering with Jaguar Land Rover and Olympus, University of Essex, 07/2019: Smallpeice Trust Momentum Certificate.',
  'Computer Science, Edge Hill University, 08/2022.',
]

export function Education() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {schools.map((school) => (
        <div key={school.name} className="rounded-lg border bg-card p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold">{school.name}</h3>
            <span className="text-sm font-medium text-blue-700 dark:text-primary whitespace-nowrap">
              {school.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {school.course} · {school.place}
          </p>
          {school.details.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed">
              {school.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div>
        <h3 className="text-lg font-semibold mb-3">Residential programmes</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {residentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
