
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SkillsCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillsCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "Java (Basic)"]
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "NLTK", "Matplotlib"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Power BI", "Git", "VS Code", "Docker", "Kubernetes", "PostgreSQL", "Apache Spark", "Apache Kafka", "Apache Airflow"]
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Teamwork", "Adaptability", "Communication", "Project Ownership"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-spacing bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Stack</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Technical and soft skills I've developed throughout my education and projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-sm py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
