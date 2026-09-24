'use client'

import { motion } from 'framer-motion'

import { slideInLeft, staggerContainer, fadeUp } from './motion'
import { SectionHeading } from './section-heading'

interface Role {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  emoji: string
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
    emoji: '🏢',
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
    emoji: '⚡',
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
    emoji: '🤖',
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
    emoji: '🎨',
  },
  {
    company: 'MCIT',
    role: 'Full-Stack Web Developer Intern',
    period: '06/2025 — 07/2025',
    location: 'Remote',
    description:
      'Built and maintained enterprise-level web applications using .NET and SQL Server.',
    highlights: [
      'Built responsive front-end interfaces using Bootstrap.',
      'Optimized client-side performance by implementing modular, memorized React component architectures and a library of reusable UI elements.',
      'Enhanced data management and application performance through optimized SQL Server queries and modular, reusable application components.',
    ],
    emoji: '🌐',
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
    emoji: '🎓',
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      {/* Decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -z-10 h-[400px] w-[300px] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Building products with small, opinionated teams across multiple internships."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 relative space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-accent/20 before:to-transparent sm:before:left-[11px]"
        >
          {ROLES.map((role, i) => (
            <motion.li
              key={role.company + role.period}
              variants={slideInLeft}
              className="relative pl-8 sm:pl-12"
            >
              {/* Animated marker */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.1 * i,
                }}
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background sm:h-6 sm:w-6"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              </motion.span>

              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-6 relative overflow-hidden"
              >
                {/* Subtle gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight flex items-center gap-2">
                      <span>{role.emoji}</span>
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
                  {role.highlights.map((h, j) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + 0.05 * j }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70"
                      />
                      <span className="leading-relaxed">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
