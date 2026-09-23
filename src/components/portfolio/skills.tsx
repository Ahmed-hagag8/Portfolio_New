'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Database,
  Cloud,
  PenTool,
  GitBranch,
} from 'lucide-react'

import { fadeUp, scaleIn, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'

const SKILL_GROUPS = [
  {
    Icon: Code2,
    title: 'Languages',
    items: ['PHP', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    Icon: Layers,
    title: 'Frontend',
    items: ['React', 'Vue.js', 'jQuery', 'Bootstrap'],
  },
  {
    Icon: Database,
    title: 'Backend',
    items: ['Laravel', 'MySQL', 'RESTful APIs', 'Microservices'],
  },
  {
    Icon: Cloud,
    title: 'Infra',
    items: ['ngrok', 'Docker', 'Railway'],
  },
  {
    Icon: Database,
    title: 'Databases',
    items: ['MySQL', 'SQLite', 'PostgreSQL'],
  },
  {
    Icon: GitBranch,
    title: 'Workflow',
    items: ['Git', 'GitHub', 'Composer', 'Postman'],
  },
]

const TOOLS = [
  'VS Code',
  'Postman',
  'Docker',
  'Git',
  'GitHub',
  'Composer',
  'ngrok',
  'Railway',
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A T-shaped toolkit"
          description="Deep in frontend and product engineering, comfortable across the stack — from infrastructure to the last pixel."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map(({ Icon, title, items }) => (
            <motion.div
              key={title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Toolbelt */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-6 rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">Daily toolbelt</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The apps I actually have open all day.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
