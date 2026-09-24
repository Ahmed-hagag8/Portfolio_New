'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from './motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 'auto', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'inline-flex items-center gap-2 overflow-hidden rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur',
          align === 'center' && 'mx-auto'
        )}
      >
        <motion.span
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-1.5 w-1.5 rounded-full bg-accent"
        />
        {eyebrow}
      </motion.div>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
