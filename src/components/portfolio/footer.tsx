'use client'

import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', Icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', Icon: Twitter },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium">Alex Rivera</p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {year} · Built with Next.js, Tailwind &amp; a lot of coffee.
          </p>
        </div>

        <div className="flex items-center gap-2">
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
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Back to top"
          >
            <a href="#home">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
