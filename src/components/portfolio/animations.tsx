'use client'

import { motion } from 'framer-motion'
import * as React from 'react'

/** Deterministic orb configs — avoids Math.random() hydration mismatch */
const ORB_CONFIGS = [
  { id: 0, size: 350, x: 15, y: 20, duration: 22, delay: 0 },
  { id: 1, size: 280, x: 70, y: 10, duration: 25, delay: 1.5 },
  { id: 2, size: 420, x: 40, y: 60, duration: 20, delay: 3 },
  { id: 3, size: 300, x: 85, y: 45, duration: 28, delay: 0.8 },
  { id: 4, size: 380, x: 25, y: 80, duration: 24, delay: 2.2 },
  { id: 5, size: 260, x: 60, y: 35, duration: 19, delay: 4 },
]

/** Floating orb particles for hero background */
export function FloatingParticles() {

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {ORB_CONFIGS.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-accent/[0.06] blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

/** Animated gradient mesh background */
export function GradientMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      <motion.div
        className="absolute -top-1/2 -left-1/4 h-[120vh] w-[150vw] opacity-30 dark:opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, var(--accent) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, oklch(0.7 0.15 280) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, oklch(0.65 0.12 180) 0%, transparent 50%)',
        }}
        animate={{
          rotate: [0, 5, -3, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

/** Animated grid lines background */
export function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-grid mask-radial-faded absolute inset-0 opacity-40 dark:opacity-20" />
      {/* Animated scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

/** Animated counter hook */
export function useAnimatedCounter(
  target: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = React.useState(0)
  const [started, setStarted] = React.useState(!startOnView)
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!startOnView || !ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [startOnView])

  React.useEffect(() => {
    if (!started) return
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

/** Typewriter text animation */
export function TypewriterText({
  texts,
  className,
}: {
  texts: string[]
  className?: string
}) {
  const [index, setIndex] = React.useState(0)
  const [displayed, setDisplayed] = React.useState(texts[0])
  const [deleting, setDeleting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Wait for client mount before starting animation to avoid hydration mismatch
  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    const current = texts[index]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (displayed.length < current.length) {
            setDisplayed(current.slice(0, displayed.length + 1))
          } else {
            setTimeout(() => setDeleting(true), 2000)
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(current.slice(0, displayed.length - 1))
          } else {
            setDeleting(false)
            setIndex((i) => (i + 1) % texts.length)
          }
        }
      },
      deleting ? 40 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts, mounted])

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle"
      />
    </span>
  )
}

/** Magnetic hover wrapper */
export function MagneticHover({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode
  className?: string
  strength?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

/** Scroll progress indicator */
export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-accent via-accent/80 to-accent/50"
      style={{ scaleX: progress }}
    />
  )
}
