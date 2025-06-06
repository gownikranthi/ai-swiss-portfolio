
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Species Identification App",
    description: "Detects plant/animal species from images in real-time using CNNs. User-friendly mobile UI with offline support.",
    tags: ["Python", "TensorFlow", "CNN", "React Native"],
    image: "https://images.unsplash.com/photo-1500423190207-8e6b52b7275f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Demand Forecasting Dashboard",
    description: "Predicts meal demand, visualizes delivery metrics using real-world data. Power BI integration.",
    tags: ["Power BI", "Forecasting", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Emotion Detection with LSTM",
    description: "Built an NLP model that detects emotion in dialogue using GoEmotions dataset and LSTM architecture.",
    tags: ["NLP", "LSTM", "TensorFlow", "Sentiment Analysis"],
    image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80"
  },
  {
    title: "YOLOv5 Object-Subobject Detection",
    description: "Detects primary objects and their subparts (like helmet on person) using YOLOv5 & custom hierarchy logic.",
    tags: ["Computer Vision", "YOLO", "PyTorch", "Object Detection"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Convolution Image Recognition Chatbot",
    description: "AI chatbot that combines SigLIP for visual input and LLaMA 3 for natural language output.",
    tags: ["Computer Vision", "NLP", "LLaMA 3", "SigLIP"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80"
  },
  {
    title: "EchoSentinel – Voice Surveillance",
    description: "Trigger-word activated security system using Python, speech APIs, and real-time voice segmentation.",
    tags: ["Audio Processing", "Security", "Python", "Speech Recognition"],
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          A collection of AI/ML projects showcasing my technical skills and problem-solving approach.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="p-0 h-auto group" asChild>
                  <a href={project.link || "#"}>
                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
