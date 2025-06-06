
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download, Github } from 'lucide-react'

export function Hero() {
  return (
    <section className="container pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Hi, I'm Gowni Kranthi Kumar
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{animationDelay: "0.1s"}}>
            AI/ML Specialist & Postgraduate at LPU
          </h2>
          <p className="text-lg md:text-xl max-w-[600px] animate-fade-in" style={{animationDelay: "0.2s"}}>
            I build intelligent, context-aware systems that blend code, data, and creativity.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/gownikranthi" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View GitHub
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="group" asChild>
              <a href="#contact">
                Let's Connect <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-lg animate-fade-in" style={{animationDelay: "0.4s"}}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Gowni Kranthi Kumar" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
