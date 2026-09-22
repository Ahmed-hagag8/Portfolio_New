'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, MapPin, Clock, Check } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { fadeUp } from './motion'
import { SectionHeading } from './section-heading'

const CONTACT_INFO = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'hello@alexrivera.dev',
    href: 'mailto:hello@alexrivera.dev',
  },
  {
    Icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: undefined,
  },
  {
    Icon: Clock,
    label: 'Response time',
    value: 'Usually within 24 hours',
    href: undefined,
  },
]

export function Contact() {
  const [sending, setSending] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    // Simulate a network request — wire to a real endpoint when ready
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSent(true)
    toast.success('Message sent!', {
      description: 'Thanks — I\u2019ll get back to you within 24 hours.',
    })
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project, a question, or just want to say hi? Drop me a note."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Left: contact details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I&apos;m currently taking on a small number of freelance and
                full-time engagements for Q1. If your problem sounds
                interesting, I&apos;d love to hear about it.
              </p>

              <ul className="mt-4 space-y-4">
                {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 block text-sm font-medium hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="mt-0.5 text-sm font-medium">
                          {value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-600 dark:text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for new projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ada Lovelace"
                    required
                    autoComplete="name"
                    className="bg-background/50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ada@example.com"
                    required
                    autoComplete="email"
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="A new product, a question, a hello…"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, timeline, and what success looks like."
                  required
                  rows={6}
                  className="min-h-32 flex-1 resize-none bg-background/50"
                />
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  Your details are only used to reply to you.
                </p>
                <Button
                  type="submit"
                  size="lg"
                  disabled={sending || sent}
                  className="rounded-full group"
                >
                  {sent ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Sent
                    </>
                  ) : sending ? (
                    <>
                      <span className="mr-2 h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
