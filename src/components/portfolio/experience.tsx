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
    company: 'Northwind Studio',
    role: 'Senior Full-Stack Engineer',
    period: '2023 — Present',
    location: 'San Francisco · Hybrid',
    description:
      'Lead engineer on a multi-tenant SaaS analytics platform. Own the frontend architecture and a chunk of the backend services.',
    highlights: [
      'Cut initial bundle size by 38% with route-level code splitting & RSC',
      'Built the design system used by 5 product teams',
      'Mentored 3 engineers; led weekly architecture reviews',
    ],
  },
  {
    company: 'Cobalt Labs',
    role: 'Full-Stack Engineer',
    period: '2021 — 2023',
    location: 'Remote',
    description:
      'Shipped customer-facing features for a developer-tools startup. Owned the dashboard rewrite end-to-end.',
    highlights: [
      'Migrated legacy CRA app to Next.js App Router with zero downtime',
      'Built a realtime collaboration feature using CRDTs',
      'Reduced p95 API latency from 480ms to 90ms',
    ],
  },
  {
    company: 'Field & Co.',
    role: 'Frontend Engineer',
    period: '2019 — 2021',
    location: 'New York · On-site',
    description:
      'Built marketing sites and product UIs for early-stage clients. First job out of college — learned a ton, fast.',
    highlights: [
      'Delivered 20+ client sites with a 99% Lighthouse score',
      'Designed and built the internal component library',
      'Wrote the team\'s first a11y checklist',
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
