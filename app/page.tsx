import Image from 'next/image'
import { Download, FileText, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiteHeader } from '@/components/site-header'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Education } from '@/components/education'
import { Footer } from '@/components/footer'

const skills = [
  {
    group: 'Languages',
    items: 'Python, TypeScript/JavaScript, Go, Java, C, Groovy, SQL, HTML/CSS',
  },
  {
    group: 'Frameworks & Data',
    items: 'React, Next.js, Node.js, PostgreSQL, MkDocs',
  },
  {
    group: 'AI',
    items:
      'LLM APIs, Model Context Protocol (MCP), Claude Code, GitHub Copilot, llama.cpp',
  },
  {
    group: 'DevOps & Tools',
    items:
      'Jenkins, Git, Docker, Linux, Grafana, Jira Service Management, Google Cloud Platform, AWS',
  },
  {
    group: 'Automotive',
    items: 'RTA-CAR (AUTOSAR Classic), ISO 26262 functional-safety training',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main id="main" className="grow">
        {/* Hero Section */}
        <section className="py-16 md:py-28">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="mb-6 w-[150px] h-[150px] rounded-full relative overflow-hidden border">
              <Image
                src="/Linkedin_JamesHaworth.jpg"
                alt="James Haworth"
                fill
                sizes="150px"
                className="object-cover scale-125 translate-y-2 -translate-x-0.5"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              James Haworth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer
            </p>
            <p className="max-w-2xl text-lg mb-4">
              Final-year Computer Science with AI student at the University of
              York (First-class second year), graduating 06/2027. I spent my
              placement year at ETAS (Bosch Group), where I still work
              part-time, and I founded and run Verified Handles, a public
              directory of verified social handles for 155,000+ public figures
              and organisations, which I rebuilt in 2026.
            </p>
            <p className="max-w-2xl text-lg mb-10">
              Looking for graduate software engineering and AI engineering roles
              in London or Cambridge, where I&apos;m moving in 2027.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/cv.pdf"
                download="James Haworth CV.pdf"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV (PDF)
              </a>
              <a
                href="#contact"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <Education />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <dl className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-[12rem_1fr]">
              {skills.map((skill) => (
                <div key={skill.group} className="contents">
                  <dt className="font-semibold">{skill.group}</dt>
                  <dd className="text-muted-foreground mb-2 sm:mb-0">
                    {skill.items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">CV</h2>
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border shadow-xs">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-full bg-primary/10 p-5">
                  <FileText
                    className="h-10 w-10 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-muted-foreground mb-4">
                    One A4 page, updated 10/2026.
                  </p>
                  <a
                    href="/cv.pdf"
                    download="James Haworth CV.pdf"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Get in Touch
            </h2>
            <div className="max-w-lg mx-auto flex flex-col gap-6">
              <p className="text-center text-lg mb-6">
                Email is quickest. I&apos;m also on LinkedIn and GitHub.
              </p>
              <a
                href="mailto:james@jhaworth.ai"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>james@jhaworth.ai</span>
              </a>
              <a
                href="https://linkedin.com/in/jameshaworthcs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <FaLinkedin
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <span>linkedin.com/in/jameshaworthcs</span>
              </a>
              <a
                href="https://github.com/jameshaworthcs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <FaGithub className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>github.com/jameshaworthcs</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
