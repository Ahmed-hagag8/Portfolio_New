'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Coffee } from 'lucide-react'
import Image from 'next/image'

import { fadeUp, scaleIn, staggerContainer, slowStagger, fadeUpRotate } from './motion'
import { SectionHeading } from './section-heading'

const TRAITS = [
  {
    Icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'Writing clean, maintainable code. Specializing in Laravel, PHP, React, and MySQL to deliver reliable and scalable solutions.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    Icon: Rocket,
    title: 'Scalable Systems',
    description:
      'Focusing on building secure RESTful APIs, integrating third-party services, AI solutions, payments, and real-time features.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    Icon: Palette,
    title: 'Front-End Interfaces',
    description:
      'Developing responsive, user-centric interfaces using React and Bootstrap to enhance user experience.',
    gradient: 'from-violet-500/20 to-pink-500/20',
  },
  {
    Icon: Coffee,
    title: 'Continuous Learning',
    description:
      'Proactive, learning-oriented mindset. Eager to take ownership of challenges and improve both the product and the process.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[500px] w-[400px] rounded-full bg-accent/5 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A developer who cares about the details"
          description="I build products end-to-end — from database schema to last pixel — with a focus on craft and speed."
        />

        <motion.div
          variants={slowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {TRAITS.map(({ Icon, title, description, gradient }, i) => (
            <motion.div
              key={title}
              variants={fadeUpRotate}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              {/* Gradient background on hover */}
              <div
                aria-hidden
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              {/* Top line glow */}
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />

              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20 group-hover:shadow-lg group-hover:shadow-accent/20">
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
          className="mt-12 rounded-3xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-10 overflow-hidden relative"
        >
          {/* Subtle gradient corner */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="grid gap-8 md:grid-cols-3 relative">
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
              {[
                { label: 'Currently', value: 'Full-Stack Web Developer' },
                { label: 'Focus', value: 'Laravel, React & System Architecture' },
                { label: 'Learning', value: 'Microservices & AI Integration' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-border/60 p-4 transition-colors hover:border-accent/30 hover:bg-accent/5"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
