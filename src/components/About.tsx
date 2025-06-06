
import React from 'react'

export function About() {
  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Kranthi working on AI projects"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a postgraduate student specializing in <strong>Artificial Intelligence and Machine Learning</strong> at <strong>Lovely Professional University</strong>, with a strong foundation in business (BBA - Finance & Marketing). I'm passionate about solving real-world problems through ML, NLP, and AI systems. From deep learning models to real-time audio surveillance, I combine data science principles with a human-centered mindset.
            </p>
            <blockquote className="pl-4 border-l-4 border-primary italic text-muted-foreground">
              "I bridge business insights with AI intelligence — one intelligent model at a time."
            </blockquote>
            <p>
              My interdisciplinary background allows me to approach AI problems from both technical and business perspectives, creating solutions that are not only technically sound but also aligned with real-world needs and constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
