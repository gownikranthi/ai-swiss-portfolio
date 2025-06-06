
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <a href="#" className="font-ibm-plex text-xl font-semibold">
              Gowni Kranthi
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary link-underline">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary link-underline">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary link-underline">
              Skills
            </a>
            <a href="#certifications" className="text-sm font-medium hover:text-primary link-underline">
              Certifications
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary link-underline">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/gownikranthi" target="_blank" rel="noopener noreferrer">
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/gowni-kranthi-kumar-58a1141a1/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gowni Kranthi Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gownikranthi" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gowni-kranthi-kumar-58a1141a1/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
              LinkedIn
            </a>
            <a href="mailto:gownikranthi2000@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
