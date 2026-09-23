'use client'

import { motion } from 'framer-motion'

import { slideInLeft, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'

interface Role {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
}

const ROLES: Role[] = [
  {
    company: 'NTI',
    role: 'Full-Stack Web Developer Intern',
    period: '05/2026 — 08/2026',
    location: 'Onsite',
    description:
      'Developed and maintained enterprise-grade web applications utilizing Laravel, React, PHP, and MySQL to deliver reliable and scalable solutions.',
    highlights: [
      'Developed scalable full-stack features using Laravel and React',
      'Applied software engineering best practices throughout the development lifecycle',
      'Enhanced user experience and system reliability',
    ],
  },
  {
    company: 'CREATIEVO',
    role: 'Back-End Developer Intern',
    period: '10/2025 — 03/2026',
    location: 'Onsite',
    description:
      'Engineered and maintained high-performance web applications utilizing the Laravel framework and MySQL databases.',
    highlights: [
      'Architected secure RESTful APIs and facilitated third-party integrations',
      'Optimized database query structures, resulting in faster data retrieval',
      'Improved overall application responsiveness',
    ],
  },
  {
    company: 'X-Clan',
    role: 'Back-End Developer Intern',
    period: '09/2025 — 10/2025',
    location: 'Remote',
    description:
      'Developed robust back-end infrastructure for mobile applications, integrating ML and DL models into the Laravel ecosystem.',
    highlights: [
      'Built scalable RESTful APIs and implemented microservices',
      'Enhanced system modularity by transitioning monolithic features to microservices',
      'Improved deployment flexibility',
    ],
  },
  {
    company: 'CREATIVA',
    role: 'Full-Stack Web Developer Intern',
    period: '08/2025 — 09/2025',
    location: 'Remote',
    description:
      'Designed and managed dynamic web applications by leveraging Laravel for back-end logic and MySQL for data persistence.',
    highlights: [
      'Developed responsive and user-centric front-end interfaces using Bootstrap and React.js',
      'Reduced front-end load times by implementing efficient React component structures',
      'Created a library of reusable UI elements',
    ],
  },
  {
    company: 'New Mansoura University',
    role: 'B.Sc. Software Engineering',
    period: 'Graduating 2026',
    location: 'Mansoura, Egypt',
    description:
      'Faculty of Computer Science and Engineering – Software Engineering Division. CGPA: 3.0',
    highlights: [
      'Key Coursework: Data Structures & Algorithms, Database Management',
      'Web Development, API Design, and Software Engineering',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Six years of building products with small, opinionated teams."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-accent/40 before:via-border before:to-transparent sm:before:left-[11px]"
        >
          {ROLES.map((role) => (
            <motion.li
              key={role.company + role.period}
              variants={slideInLeft}
              className="relative pl-8 sm:pl-12"
            >
              {/* Marker */}
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {role.role}
                    </h3>
                    <div className="mt-0.5 text-sm font-medium text-accent">
                      {role.company}
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div className="font-mono">{role.period}</div>
                    <div className="mt-0.5">{role.location}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/70"
                      />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

