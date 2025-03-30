'use client'

import { useState } from 'react'

export function ShowHiddenExperiences() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      {/* Show More Button */}
      {!isVisible && (
        <div className="text-center py-6 relative">
          <button
            className="group bg-primary/10 hover:bg-primary/20 text-primary px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            onClick={() => setIsVisible(true)}
          >
            <span>Show 4 More Experiences</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}

      {/* Hidden Experiences that become visible */}
      <div className={`space-y-10 ${isVisible ? 'block' : 'hidden'}`}>
        {/* York Community Consulting */}
        <div className="relative">
          <div className="absolute -left-11 mt-1.5 h-7 w-7 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  York Community Consulting
                </span>
                <span className="hidden md:block text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">
                  06/2024 - Present
                </span>
              </div>
            </div>
            <ul className="text-muted-foreground mb-4 list-disc pl-5 space-y-1">
              <li>
                Collaborated with a team of software developers to build full
                stack applications using React and Next.js.
              </li>
              <li>
                Integrated cloud databases to support scalable and efficient web
                applications within the team.
              </li>
              <li>
                Enhanced website usability and performance, ensuring seamless
                access and responsiveness across all devices.
              </li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                React
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Next.js
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Cloud Databases
              </span>
            </div>
          </div>
        </div>

        {/* Verified Handles */}
        <div className="relative">
          <div className="absolute -left-11 mt-1.5 h-7 w-7 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Lead Developer</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Verified Handles
                </span>
                <span className="hidden md:block text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">
                  11/2020 - Present
                </span>
              </div>
            </div>
            <ul className="text-muted-foreground mb-4 list-disc pl-5 space-y-1">
              <li>
                Developed and scaled Verified Handles, using AI and Python to
                build a database of 155,000+ key figures and organisations.
              </li>
              <li>
                Drove data analysis improvements, boosting match accuracy by 25%
                for better brand-influencer connections.
              </li>
              <li>
                Utilised proficiency in gCloud and AWS to optimize cloud
                infrastructure, ensuring a scalable and secure product.
              </li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                AI
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Python
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                AWS
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                gCloud
              </span>
            </div>
          </div>
        </div>

        {/* MBDA */}
        <div className="relative">
          <div className="absolute -left-11 mt-1.5 h-7 w-7 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">
                Software Engineer Work Experience
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  MBDA
                </span>
                <span className="hidden md:block text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">
                  5 days, 04/2022
                </span>
              </div>
            </div>
            <ul className="text-muted-foreground mb-4 list-disc pl-5 space-y-1">
              <li>
                Developed a Raspberry Pi Missile project using Python,
                collaborating closely with a partner during a week-long work
                experience.
              </li>
              <li>
                Presented the innovative project to senior software developers,
                demonstrating strong technical skills and creativity.
              </li>
              <li>
                Gained experience in a professional setting, taking part in a
                poster session with industry leaders and demonstrating teamwork.
              </li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Python
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Raspberry Pi
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Presentation
              </span>
            </div>
          </div>
        </div>

        {/* McDonald's */}
        <div className="relative">
          <div className="absolute -left-11 mt-1.5 h-7 w-7 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold">Crew Trainer</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  McDonald&apos;s
                </span>
                <span className="hidden md:block text-muted-foreground">•</span>
                <span className="text-sm font-medium text-primary">
                  10/2021 - 10/2024
                </span>
              </div>
            </div>
            <ul className="text-muted-foreground mb-4 list-disc pl-5 space-y-1">
              <li>
                Advanced to Crew Trainer position, demonstrating leadership and
                teamwork in a fast-paced environment over 3 years.
              </li>
              <li>
                Resolved technical issues with card payments and internal
                screens, keeping customers satisfied and transaction times
                quick.
              </li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Leadership
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Training
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
