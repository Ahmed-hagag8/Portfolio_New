import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { ScrollProgress } from '@/components/portfolio/animations'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Top-of-page gradient base */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-30 bg-background"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-20 h-screen bg-gradient-to-b from-accent/[0.07] via-transparent to-transparent"
      />

      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
