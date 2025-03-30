import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'
import { Github, Linkedin, Mail, FileCode, ArrowDown } from 'lucide-react'
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
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#cv" className="hover:text-primary transition-colors">
                CV
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="hover:text-primary transition-colors">
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
              <Image 
                src="/profile.jpg"
                alt="James Haworth"
                width={150}
                height={150}
                className="rounded-full relative border-2 border-background"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">James Haworth</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">Software Engineer</h2>
            <p className="max-w-2xl text-lg mb-10">
              I build elegant, performant, and accessible web applications with modern technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors">
                Get in touch
              </Link>
              <Link href="#projects" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors">
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
                Computer science and AI student at the University of York with proven experience in coding and team collaboration. My professional background has built strong problem-solving and adaptability skills across various frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
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
                  <p className="text-muted-foreground mb-4">A brief description of this amazing project and the technologies used.</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">React</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">TypeScript</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">Next.js</span>
                  </div>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
                  <p className="text-muted-foreground mb-4">A brief description of this amazing project and the technologies used.</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">Node.js</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">Express</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">MongoDB</span>
                  </div>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
                  <p className="text-muted-foreground mb-4">A brief description of this amazing project and the technologies used.</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">React Native</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">Firebase</span>
                    <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">Redux</span>
                  </div>
                  <div className="flex space-x-3">
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                      <path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">JavaScript</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                      <path fill="currentColor" d="M480 32H32C14.3 32 0 46.3 0 64v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM232 432H184V312h-40v-48h88v168zm56-168h-40v48h40v120h48V312h40v-48H288zm144 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">TypeScript</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566 566" className="h-6 w-6">
                      <path fill="currentColor" d="M89.6 39.4c70.6-96.5 243.7-94.8 310.5 2.3 28.8 40.3 35.9 103.7 17.4 147.6-13.9 38.1-41.1 63.4-58.9 97.7-24.4 32.5-32.3 73.6-41.5 112.7-5.9 30.5-15 75-54.9 74.6-36.7-.4-47.3-42.6-53.8-72.4-10.9-41.6-21.6-85.3-47.5-119.8-20-28.8-47.8-50.5-62.2-83.8-22.1-43.7-31.2-110.7 10.9-158.9z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">Flutter</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
                      <path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">React Native</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-6 w-6">
                      <path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM512 168v64H128V168c0-13.3 10.7-24 24-24H488c13.3 0 24 10.7 24 24z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">AI</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                      <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">Tailwind CSS</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                      <path fill="currentColor" d="M439.6 236.0L244.0 40.5c-13.6-13.6-35.5-13.6-49.1 0l-40.4 40.4l62.3 62.3c14.4-4.9 30.8-1.5 42.2 10.0c11.4 11.4 14.8 27.9 10.0 42.2l60.1 60.1c14.4-4.9 30.8-1.5 42.2 10.0c16.0 16.0 16.0 41.9 0 57.9c-16.0 16.0-41.9 16.0-57.9 0c-12.1-12.1-15.1-29.8-9.0-44.6l-56.0-56.0v147.8c3.9 1.9 7.6 4.5 10.8 7.7c16.0 16.0 16.0 41.9 0 57.9c-16.0 16.0-41.9 16.0-57.9 0c-16.0-16.0-16.0-41.9 0-57.9c4.0-4.0 8.5-6.9 13.4-9.0V199.4c-4.9-2.0-9.5-5.0-13.4-9.0c-12.1-12.1-15.2-29.9-9.1-44.7L83.2 89.3L8.4 164.1C-2.7 175.2-2.7 193.6 8.4 204.7l195.5 195.5c13.6 13.6 35.5 13.6 49.1 0l186.5-186.5C452.8 201.1 452.8 182.7 439.6 236.0z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">Git & GitHub</h3>
                </div>
                <div className="p-4 rounded-lg bg-card shadow-sm flex flex-col items-center">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-6 w-6">
                      <path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H488c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H152c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM512 168v64H128V168c0-13.3 10.7-24 24-24H488c13.3 0 24 10.7 24 24z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-center">RESTful APIs</h3>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-lg mb-4">
                  In addition to technical skills, I bring valuable soft skills to every project:
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
            <h2 className="text-3xl font-bold mb-12 text-center">Curriculum Vitae</h2>
            <div className="max-w-3xl mx-auto bg-card p-8 rounded-lg border shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-full bg-primary/10 p-5">
                  <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3V7C14 7.55228 14.4477 8 15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14L19 8V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Resume / CV Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm currently updating my curriculum vitae with my latest experience and skills.
                    Check back soon to download a comprehensive overview of my professional background.
                  </p>
                  <button 
                    disabled 
                    className="bg-primary/70 text-primary-foreground px-6 py-2 rounded-lg font-medium inline-flex items-center gap-2 cursor-not-allowed opacity-70"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download CV 
                    <span className="text-xs bg-primary/30 px-2 py-0.5 rounded-full">Coming Soon</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="max-w-lg mx-auto flex flex-col gap-6">
              <p className="text-center text-lg mb-6">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
              <a 
                href="mailto:james@j-h.ai" 
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors border"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>james@j-h.ai</span>
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
