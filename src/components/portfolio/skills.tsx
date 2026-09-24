'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Layers,
  Database,
  Cloud,
  GitBranch,
} from 'lucide-react'

import { fadeUp, scaleIn, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'
import { AnimatedGrid } from './animations'

const SKILL_GROUPS = [
  {
    Icon: Code2,
    title: 'Languages',
    items: ['PHP', 'JavaScript', 'SQL', 'HTML5', 'CSS3'],
    color: 'from-blue-500/15 to-cyan-500/15',
  },
  {
    Icon: Layers,
    title: 'Frontend',
    items: ['React', 'Vue.js', 'jQuery', 'Bootstrap'],
    color: 'from-violet-500/15 to-purple-500/15',
  },
  {
    Icon: Database,
    title: 'Backend',
    items: ['Laravel', 'MySQL', 'RESTful APIs', 'Microservices'],
    color: 'from-amber-500/15 to-orange-500/15',
  },
  {
    Icon: Cloud,
    title: 'Infra',
    items: ['ngrok', 'Docker', 'Railway'],
    color: 'from-sky-500/15 to-blue-500/15',
  },
  {
    Icon: Database,
    title: 'Databases',
    items: ['MySQL', 'SQLite', 'PostgreSQL'],
    color: 'from-emerald-500/15 to-green-500/15',
  },
  {
    Icon: GitBranch,
    title: 'Workflow',
    items: ['Git', 'GitHub', 'Composer', 'Postman'],
    color: 'from-rose-500/15 to-pink-500/15',
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
          {SKILL_GROUPS.map(({ Icon, title, items, color }, i) => (
            <motion.div
              key={title}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Gradient overlay on hover */}
              <div
                aria-hidden
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="mb-4 flex items-center gap-3">
                <motion.span
                  whileHover={{ rotate: 12 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-md group-hover:shadow-accent/20"
                >
                  <Icon className="h-4.5 w-4.5" />
                </motion.span>
                <h3 className="text-base font-semibold">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item, j) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * j, duration: 0.3 }}
                    whileHover={{ scale: 1.08 }}
                    className="cursor-default rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:text-foreground hover:bg-accent/10"
                  >
                    {item}
                  </motion.li>
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
          className="mt-6 rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8 overflow-hidden relative"
        >
          {/* Animated shimmer */}
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">Daily toolbelt</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The apps I actually have open all day.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.map((tool, i) => (
                <motion.li
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="cursor-default rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:text-foreground hover:bg-accent/10 hover:shadow-md hover:shadow-accent/10"
                >
                  {tool}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
