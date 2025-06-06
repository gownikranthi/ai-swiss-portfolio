
import React from 'react'

interface TimelineItem {
  year: string;
  milestone: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2019",
    milestone: "BBA – Finance & Marketing",
    description: "Graduated from Shree Medha Degree College with business foundation"
  },
  {
    year: "2023",
    milestone: "Joined MCA (AI & ML) at Lovely Professional University",
    description: "Started postgraduate studies focusing on artificial intelligence and machine learning"
  },
  {
    year: "2024",
    milestone: "Internship at Cipher Schools",
    description: "Worked on Image Classification with SVM, gaining hands-on experience"
  },
  {
    year: "2025",
    milestone: "Advanced AI/ML Projects",
    description: "Developed CIRC, YOLO-based systems, and Emotion detection models"
  }
];

export function Timeline() {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Career Timeline</h2>
        
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
              <div className="mb-1 text-xl font-semibold">{item.year}</div>
              <h3 className="text-lg font-medium">{item.milestone}</h3>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
