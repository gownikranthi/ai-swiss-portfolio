
import React from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Kranthi's work on image classification exceeded expectations — he consistently delivered high-quality results with zero compromise on accuracy.",
    author: "Ajay Rastogi",
    title: "Cipher Schools Mentor"
  },
  {
    quote: "One of the most dedicated and adaptive learners I've mentored — especially strong in combining business logic with ML tools.",
    author: "Anjali Bakshi",
    title: "Academic Advisor, LPU"
  },
  {
    quote: "Kranthi took initiative and delivered on-time, high-impact AI models even in pressure situations.",
    author: "Ramandeep Kaur",
    title: "Internship Coordinator"
  }
];

export function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <blockquote className="text-lg italic mb-4">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
