'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, MapPin, Download, ChevronDown } from 'lucide-react'
import * as React from 'react'

const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio_New' : ''

import { Button } from '@/components/ui/button'
import { fadeUp, staggerContainer, popIn, slideInRight } from './motion'
import {
  FloatingParticles,
  GradientMesh,
  TypewriterText,
  MagneticHover,
} from './animations'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Ahmed-hagag8', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-m-hagag', Icon: Linkedin },
]

const ROLES = [
  'Full-Stack Developer',
  'Laravel Specialist',
  'React Engineer',
  'API Architect',
]

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-16 sm:pt-40"
    >
      {/* Animated backgrounds */}
      <GradientMesh />
      <FloatingParticles />
      <div
        aria-hidden
        className="bg-dot mask-radial-faded pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20"
      />

      <motion.div
        style={{ y: parallaxY, opacity }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16"
        >
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
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
              className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
            >
              Hey, I&apos;m Ahmed{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, oklch(0.7 0.18 320) 25%, var(--accent) 50%, oklch(0.75 0.15 200) 75%, var(--accent) 100%)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 6s ease-in-out infinite',
                }}
              >Hagag.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="text-lg text-muted-foreground sm:text-xl">
              <TypewriterText
                texts={ROLES}
                className="text-accent font-semibold"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              I&apos;m a Full-Stack Web Developer specializing in Laravel, PHP, React, and MySQL. I bring a strong backend mindset with the ability to work across the full application lifecycle.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
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
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <MagneticHover strength={0.15}>
                <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
                  <a href="#projects">
                    <span className="relative z-10 flex items-center">
                      View my work
                      <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                    </span>
                    <motion.span
                      className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </a>
                </Button>
              </MagneticHover>
              <MagneticHover strength={0.15}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-card/40 backdrop-blur"
                >
                  <a href="#contact">Get in touch</a>
                </Button>
              </MagneticHover>

              <div className="ml-1 flex items-center gap-1">
                {SOCIALS.map(({ label, href, Icon }, i) => (
                  <motion.div key={label} variants={popIn}>
                    <MagneticHover strength={0.4}>
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-accent/15 hover:text-accent transition-colors"
                        aria-label={label}
                      >
                        <a href={href} target="_blank" rel="noreferrer noopener">
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    </MagneticHover>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Photo with animated ring — 2 cols */}
          <motion.div
            variants={slideInRight}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glowing ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent via-accent/40 to-accent/80 blur-md opacity-60"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Orbiting dot */}
              <motion.div
                className="absolute -inset-6 z-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
              </motion.div>

              {/* Photo container */}
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full border-2 border-accent/30 bg-card/50 p-1 backdrop-blur-sm">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={`${basePath}/ahmed-hagag.png`}
                    alt="Ahmed Hagag"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 z-30 rounded-2xl border border-border/60 bg-card/90 px-3 py-2 text-xs font-medium backdrop-blur-sm shadow-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="flex items-center gap-1.5">
                  💻 Full-Stack Developer
                </span>
              </motion.div>

              {/* Another floating badge */}
              <motion.div
                className="absolute -top-2 -left-4 z-30 rounded-2xl border border-border/60 bg-card/90 px-3 py-2 text-xs font-medium backdrop-blur-sm shadow-xl"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="flex items-center gap-1.5">
                  🚀 7+ Projects
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-border/50 pt-8 sm:grid-cols-4"
        >
          {[
            { value: '7+', label: 'Projects shipped' },
            { value: '5+', label: 'Internships' },
            { value: '1+', label: 'Years of experience' },
            { value: '∞', label: 'Cups of coffee' },
          ].map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col rounded-2xl border border-transparent p-3 transition-colors hover:border-border/40 hover:bg-card/30"
            >
              <span
                className="text-3xl font-semibold tracking-tight sm:text-4xl"
                style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, oklch(0.7 0.18 320) 25%, var(--accent) 50%, oklch(0.75 0.15 200) 75%, var(--accent) 100%)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 6s ease-in-out infinite',
                }}
              >
                {s.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground/50" />
      </motion.div>
    </section>
  )
}
