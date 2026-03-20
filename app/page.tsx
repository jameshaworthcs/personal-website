import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import {
  Github,
  Linkedin,
  Mail,
  FileCode,
  ArrowDown,
  Brain,
  Globe,
} from 'lucide-react'
import {
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiReact,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon.svg"
              alt="JH Logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-bold text-xl">James Haworth</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
              {/* <Link
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </Link> */}
              <Link href="#cv" className="hover:text-primary transition-colors">
                CV
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
            <ThemeToggle />
            <MobileNav />
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 blur opacity-70"></div>
              <div className="w-[150px] h-[150px] rounded-full relative border-2 border-background overflow-hidden">
                <Image
                  src="/Linkedin_JamesHaworth.jpg"
                  alt="James Haworth"
                  fill
                  className="object-cover scale-125 translate-y-2 -translate-x-0.5"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              James Haworth
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Engineer
            </h2>
            <p className="max-w-2xl text-lg mb-10">
              I build elegant, performant, and accessible web applications with
              modern technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="#experience"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View my work
              </Link>
            </div>
            <div className="mt-16">
              <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Computer science and AI student at the University of York with
                proven experience in coding and team collaboration. My
                professional background has built strong problem-solving and
                adaptability skills across various frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <ExperienceTimeline />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-muted">
                    <FileCode className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Project Name</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      React
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Next.js
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.8 3L21 9.2V21H3V3H14.8ZM15 4H4V20H20V9.5L15 4.5V4Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-muted">
                    <FileCode className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Project Name</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Node.js
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Express
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.8 3L21 9.2V21H3V3H14.8ZM15 4H4V20H20V9.5L15 4.5V4Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video relative bg-muted">
                  <div className="flex h-full items-center justify-center bg-muted">
                    <FileCode className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Project Name</h3>
                  <p className="text-muted-foreground mb-4">
                    A brief description of this amazing project and the
                    technologies used.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      React Native
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Firebase
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      Redux
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.8 3L21 9.2V21H3V3H14.8ZM15 4H4V20H20V9.5L15 4.5V4Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    name: 'JavaScript',
                    icon: <SiJavascript className="h-6 w-6" />,
                  },
                  {
                    name: 'TypeScript',
                    icon: <SiTypescript className="h-6 w-6" />,
                  },
                  { name: 'Flutter', icon: <SiFlutter className="h-6 w-6" /> },
                  {
                    name: 'React Native',
                    icon: <SiReact className="h-6 w-6" />,
                  },
                  { name: 'AI', icon: <Brain className="h-6 w-6" /> },
                  {
                    name: 'Tailwind CSS',
                    icon: <SiTailwindcss className="h-6 w-6" />,
                  },
                  { name: 'Git & GitHub', icon: <SiGit className="h-6 w-6" /> },
                  { name: 'RESTful APIs', icon: <Globe className="h-6 w-6" /> },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center"
                  >
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium text-center">{skill.name}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg mb-4">
                  In addition to technical skills, I bring valuable soft skills
                  to every project:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-medium mb-1">Critical Thinking</h4>
                    <p className="text-sm text-muted-foreground">
                      Analytical problem-solving and thoughtful decision-making
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-medium mb-1">Project Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Experience guiding teams through complex projects
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="font-medium mb-1">Team Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear and effective collaboration across disciplines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Curriculum Vitae
            </h2>
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-full bg-primary/10 p-5">
                  <svg
                    className="h-10 w-10 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3V7C14 7.55228 14.4477 8 15 8H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 17H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">
                    Resume / CV Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    I&apos;m currently updating my curriculum vitae with my
                    latest experience and skills. Check back soon to download a
                    comprehensive overview of my professional background.
                  </p>
                  <button
                    disabled
                    className="bg-primary/70 text-primary-foreground px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 cursor-not-allowed opacity-70"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Download CV
                    <span className="text-xs bg-primary/30 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </button>
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
                Feel free to reach out for collaborations, opportunities, or
                just to say hello!
              </p>
              <a
                href="mailto:james@jhaworth.ai"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>james@jhaworth.ai</span>
              </a>
              <a
                href="https://github.com/jameshaworthcs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <Github className="h-5 w-5 text-primary" />
                <span>github.com/jameshaworthcs</span>
              </a>
              <a
                href="https://linkedin.com/in/jameshaworthcs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span>linkedin.com/in/jameshaworthcs</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
