'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, Twitter, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer } from './motion'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Ahmed-hagag8', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-m-hagag', Icon: Linkedin },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 sm:pt-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="bg-dot mask-radial-faded pointer-events-none absolute inset-0 -z-20 opacity-50 dark:opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-accent/15 via-accent/5 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hey, I&apos;m Ahmed{' '}
          <span className="text-gradient">Hagag.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
        >
          I&apos;m a Full-Stack Web Developer specializing in Laravel, PHP, React, and MySQL. I bring a strong backend mindset with the ability to work across the full application lifecycle.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent" /> Cairo, Egypt
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
            1+ years of experience
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full group">
            <a href="#projects">
              View my work
              <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-card/40 backdrop-blur"
          >
            <a href="#contact">Get in touch</a>
          </Button>

          <div className="ml-1 flex items-center gap-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Button
                key={label}
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label={label}
              >
                <a href={href} target="_blank" rel="noreferrer noopener">
                  <Icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-border/50 pt-8 sm:grid-cols-4"
        >
          {[
            { value: '7+', label: 'Projects shipped' },
            { value: '5+', label: 'Internships' },
            { value: '1+', label: 'Years of experience' },
            { value: '∞', label: 'Cups of coffee' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
