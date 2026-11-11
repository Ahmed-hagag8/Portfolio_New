'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Star } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { fadeUp, scaleIn, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'
import { MagneticHover } from './animations'

interface Project {
  name: string
  tagline: string
  description: string
  tags: string[]
  year: string
  href?: string
  repo?: string
  featured?: boolean
  accent: string
  initials: string
  iconBg: string
}

const PROJECTS: Project[] = [
  {
    name: 'Sigma Safe',
    tagline: 'Bilingual corporate platform for a fire-safety company',
    description:
      'Built a scalable bilingual (AR/EN, RTL/LTR) web platform with Next.js 16 and React 19 featuring zero-flicker hydration, dark/light themes, a scroll-driven card deck, Canvas particles, and 3D tilt cards. Engineered a security-hardened REST API (Zod validation, IP rate limiting, honeypot traps, CSP/HSTS, WhatsApp alerts) and invested in technical SEO with rich JSON-LD schemas, dynamic sitemaps, and AVIF/WebP optimization.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'Zod', 'Docker', 'Vercel'],
    year: '2026',
    href: 'https://segma-safe.com/',
    featured: true,
    accent: 'from-red-500/20 via-red-500/5 to-transparent',
    initials: 'SS',
    iconBg: 'from-red-500 to-orange-600',
  },
  {
    name: 'Sal7ly',
    tagline: 'On-demand marketplace system',
    description:
      'Developed a scalable on-demand marketplace integrating AI models for dynamic price prediction, automated image detection, and AI chat support. Designed multi-role workflows (Admin/Customer/Technician) for technician bidding, document verification, and real-time job tracking, plus a financial ecosystem with Stripe webhooks, internal wallets, and automated withdrawals.',
    tags: ['Laravel', 'MySQL', 'Stripe', 'Redis', 'WebSockets (Pusher)', 'Sanctum', 'Railway'],
    year: '2026',
    featured: true,
    accent: 'from-amber-500/20 via-amber-500/5 to-transparent',
    initials: 'Sa',
    iconBg: 'from-amber-500 to-orange-600',
  },
  {
    name: 'D-store',
    tagline: 'Full-stack e-commerce platform',
    description:
      'Developed a full-stack e-commerce platform enabling users to browse products, add items to cart, place orders, and track purchase history. Implemented secure authentication, search and filtering, payment integration, and an RBAC admin dashboard for products, orders, users, and inventory.',
    tags: ['React.js', 'Laravel', 'SQL', 'RESTful APIs'],
    year: '2026',
    accent: 'from-rose-500/20 via-rose-500/5 to-transparent',
    initials: 'Ds',
    iconBg: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Car Services',
    tagline: 'Car service management platform',
    description:
      'Developed a full-stack car service management platform enabling users to book maintenance appointments, browse services, and track service history, with notifications and an RBAC admin dashboard for cars, mechanics, and appointments.',
    tags: ['React.js', 'Laravel', 'SQL', 'RESTful APIs'],
    year: '2025',
    accent: 'from-teal-500/20 via-teal-500/5 to-transparent',
    initials: 'Cs',
    iconBg: 'from-teal-500 to-cyan-600',
  },
  {
    name: 'SEED',
    tagline: 'Online assessment system',
    description:
      'Developed a scalable online assessment system integrating AI microservices for automated evaluation of MCQ, essay, and voice-based answers, with secure workflows, result processing, and history tracking.',
    tags: ['Python', 'Laravel', 'SQL', 'ngrok'],
    year: '2025',
    accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
    initials: 'Se',
    iconBg: 'from-violet-500 to-purple-600',
  },
  {
    name: 'D-Clinic',
    tagline: 'Clinic management platform',
    description:
      'Developed a full-stack clinic management platform to streamline patient and appointment management, with secure authentication, patient records, doctor schedules, booking, and an RBAC admin dashboard.',
    tags: ['React.js', 'Laravel', 'SQL'],
    year: '2025',
    accent: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    initials: 'Dc',
    iconBg: 'from-emerald-500 to-green-600',
  },
  {
    name: 'Star Movies',
    tagline: 'Movie streaming platform',
    description:
      'Developed a full-stack movie streaming platform with authentication, catalog, search, filtering, watchlists, and ratings using MVC architecture, plus an RBAC admin dashboard for movies, categories, and users.',
    tags: ['React.js', 'Laravel', 'SQL', 'RESTful APIs'],
    year: '2025',
    accent: 'from-sky-500/20 via-sky-500/5 to-transparent',
    initials: 'Sm',
    iconBg: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Security Gate',
    tagline: 'Security gate management platform',
    description:
      'Developed a full-stack security gate management platform for visitor and vehicle management with real-time entry/exit logging, authentication, and an RBAC admin dashboard for staff, visitors, and vehicle records.',
    tags: ['PHP', 'Laravel', 'SQL', 'JavaScript'],
    year: '2024',
    accent: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    initials: 'Sg',
    iconBg: 'from-indigo-500 to-blue-700',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5',
        project.featured && 'lg:col-span-2'
      )}
    >
      {/* Gradient accent */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-70 transition-opacity duration-500 group-hover:opacity-100',
          project.accent
        )}
      />

      {/* Top glow line */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />

      <div className="flex h-full flex-col p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.1 }}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold tracking-tight text-white shadow-lg bg-gradient-to-br',
                project.iconBg
              )}
            >
              {project.initials}
            </motion.div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                {project.name}
                {project.featured && (
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent ring-1 ring-accent/30"
                  >
                    <Star className="h-2.5 w-2.5 fill-current" /> Featured
                  </motion.span>
                )}
              </h3>
              <p className="text-xs text-muted-foreground">{project.tagline}</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
        </div>

        {/* Description */}
        <p className="mt-5 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag, j) => (
            <motion.li
              key={tag}
              whileHover={{ scale: 1.08, y: -1 }}
              transition={{ duration: 0.15 }}
            >
              <Badge
                variant="secondary"
                className="bg-background/40 font-mono text-[11px] font-normal transition-colors duration-200 hover:bg-accent/15 hover:text-accent cursor-default"
              >
                {tag}
              </Badge>
            </motion.li>
          ))}
        </ul>

        {(project.href || project.repo) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.href && (
              <Button asChild size="sm" className="rounded-full group/link">
                <a href={project.href} target="_blank" rel="noreferrer noopener">
                  Visit live site
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </Button>
            )}
            {project.repo && (
              <Button asChild size="sm" variant="outline" className="rounded-full bg-background/40">
                <a href={project.repo} target="_blank" rel="noreferrer noopener">
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  Source
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      {/* Decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[400px] rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few products I'm proud of — from live client platforms to marketplaces, e-commerce, and AI-powered systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 flex justify-center"
        >
          <MagneticHover strength={0.2}>
            <Button asChild variant="outline" size="lg" className="rounded-full group relative overflow-hidden">
              <a
                href="https://github.com/Ahmed-hagag8"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                See more on GitHub
                <motion.span
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </a>
            </Button>
          </MagneticHover>
        </motion.div>
      </div>
    </section>
  )
}
