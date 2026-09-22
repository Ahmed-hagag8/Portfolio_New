'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Coffee } from 'lucide-react'

import { fadeUp, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'

const TRAITS = [
  {
    Icon: Code2,
    title: 'Engineering',
    description:
      'Type-safe, well-tested code with a bias for simplicity. I reach for the right tool, not the trendy one.',
  },
  {
    Icon: Palette,
    title: 'Design sense',
    description:
      'Comfortable in Figma as in the IDE. I sweat the details — spacing, type rhythm, motion, accessibility.',
  },
  {
    Icon: Rocket,
    title: 'Shipping',
    description:
      'I move quickly without breaking things. Pragmatic scope, fast feedback loops, weekly demos.',
  },
  {
    Icon: Coffee,
    title: 'Collaboration',
    description:
      'Async-first communicator. I document decisions, write clear PRs, and mentor junior engineers.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A developer who cares about the details"
          description="I build products end-to-end — from database schema to last pixel — with a focus on craft and speed."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {TRAITS.map(({ Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-10"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold sm:text-2xl">
                The story so far
              </h3>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed sm:text-base">
                <p>
                  I&apos;ve been building for the web for over six years — first
                  as a frontend-obsessed engineer at a series B startup, then as
                  a full-stack generalist at a small product studio. Along the
                  way I&apos;ve shipped design systems, real-time dashboards,
                  internal tools, and the occasional weekend side project.
                </p>
                <p>
                  These days I&apos;m most interested in the seam between
                  design and engineering: motion systems, type, design tokens,
                  and the workflow that lets small teams ship like big ones. I
                  love a tough accessibility bug and a clean git history.
                </p>
                <p>
                  Outside the editor you&apos;ll find me on long runs through
                  Golden Gate Park, sketching typography, or arguing about
                  monospace fonts.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Currently
                </div>
                <div className="mt-1 text-sm font-medium">
                  Senior Engineer @ Northwind Studio
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Focus
                </div>
                <div className="mt-1 text-sm font-medium">
                  Design systems &amp; DX tooling
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Learning
                </div>
                <div className="mt-1 text-sm font-medium">
                  Rust, WebGL shaders, type design
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
