export interface School {
  name: string
  place: string
  course: string
  period: string
  details: string[]
}

export const schools: School[] = [
  {
    name: 'University of York',
    place: 'York, UK',
    course:
      'BEng Computer Science with Artificial Intelligence (with a year in industry)',
    period: '09/2023 – 06/2027',
    details: [
      'Second year: First-class average (73.5%); top modules: Data Science (79%), Advanced Computer Systems (79%), Machine Learning & Optimisation (78%)',
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

export const residentials = [
  'Mechatronics, Robotics and Automation Engineering, University of Southampton, 08/2022: built a competition robot in a team of four, programmed in Python.',
  'Engineering with Jaguar Land Rover and Olympus, University of Essex, 07/2019: Smallpeice Trust Momentum Certificate.',
  'Computer Science, Edge Hill University, 08/2022.',
]
