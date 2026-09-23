'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Coffee } from 'lucide-react'

import { fadeUp, staggerContainer } from './motion'
import { SectionHeading } from './section-heading'

const TRAITS = [
  {
    Icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'Writing clean, maintainable code. Specializing in Laravel, PHP, React, and MySQL to deliver reliable and scalable solutions.',
  },
  {
    Icon: Rocket,
    title: 'Scalable Systems',
    description:
      'Focusing on building secure RESTful APIs, integrating third-party services, AI solutions, payments, and real-time features.',
  },
  {
    Icon: Palette,
    title: 'Front-End Interfaces',
    description:
      'Developing responsive, user-centric interfaces using React and Bootstrap to enhance user experience.',
  },
  {
    Icon: Coffee,
    title: 'Continuous Learning',
    description:
      'Proactive, learning-oriented mindset. Eager to take ownership of challenges and improve both the product and the process.',
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
                  I am a Full-Stack Web Developer specializing in Laravel, PHP, React, and MySQL, with hands-on experience building secure, scalable, and real-world web applications. 
                </p>
                <p>
                  I bring a strong backend mindset with the ability to work across the full application lifecycle — from designing databases and RESTful APIs to integrating frontend interfaces, third-party services, AI solutions, payments, and real-time features.
                </p>
                <p>
                  I focus on writing clean, maintainable code, solving problems efficiently, and building systems that are reliable, scalable, and valuable to the business. I am eager to bring a proactive, learning-oriented mindset to a team where I can contribute from day one.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Currently
                </div>
                <div className="mt-1 text-sm font-medium">
                  Full-Stack Web Developer
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Focus
                </div>
                <div className="mt-1 text-sm font-medium">
                  Laravel, React &amp; System Architecture
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Learning
                </div>
                <div className="mt-1 text-sm font-medium">
                  Microservices &amp; AI Integration
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
