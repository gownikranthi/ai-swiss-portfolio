
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "IBM AI & ML Certificate",
    issuer: "IBM",
    date: "May 2025",
    description: "Completed IBM's learning path with courses on Python, ML, DL with GPUs, Business Intelligence, and AI Analyst tools."
  },
  {
    title: "Building Chatbots with IBM Watson – Cognitive AI",
    issuer: "IBM",
    date: "October 2023",
    description: "Trained in creating enterprise-grade conversational bots."
  },
  {
    title: "Machine Learning Summer Training",
    issuer: "Cipher Schools",
    date: "July 2024",
    description: "Hands-on training in SVM, image classification, and model deployment."
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="section-spacing">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Professional certifications that validate my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
