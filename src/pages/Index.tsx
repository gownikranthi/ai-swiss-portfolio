
import React from 'react'
import { Layout } from '@/components/Layout'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Certifications } from '@/components/Certifications'
import { Timeline } from '@/components/Timeline'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Timeline />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
