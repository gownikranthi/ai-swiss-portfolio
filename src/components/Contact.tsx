
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="section-spacing bg-secondary/30">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message"
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can I help you?"
                    maxLength={500}
                  />
                  <div className="text-xs text-right text-muted-foreground">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Social Media</h3>
              <div className="flex flex-col space-y-4">
                <a href="https://github.com/gownikranthi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span>github.com/gownikranthi</span>
                </a>
                <a href="https://www.linkedin.com/in/gowni-kranthi-kumar-58a1141a1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span>linkedin.com/in/gowni-kranthi-kumar</span>
                </a>
                <a href="mailto:gownikranthi2000@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                  <span>gownikranthi2000@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Resume</h3>
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Full Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
