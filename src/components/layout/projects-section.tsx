"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink, AlertTriangle, Construction } from 'lucide-react'
import { AnimatedElement } from '../ui/animated-element'

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for an e-commerce platform with analytics, product management, and order tracking features.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/images/project1.jpg", // Will need to add images later
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Weather Application",
    description: "A weather forecast application that allows users to search for weather information by location with animated visualizations.",
    tags: ["Next.js", "React", "API Integration", "Geolocation"],
    image: "/images/project2.jpg", // Will need to add images later
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application with features for creating boards, lists, and cards with real-time updates.",
    tags: ["React", "Redux", "TypeScript", "Firebase"],
    image: "/images/project3.jpg", // Will need to add images later
    githubUrl: "#",
    liveUrl: "#"
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <AnimatedElement 
      className="group bg-background border border-border rounded-xl overflow-hidden hover:border-lavender-300/50 transition-all duration-300 relative"
      customAnimation={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        viewport: { once: true, margin: "-100px" }
      }}
    >
      {/* Under Construction Overlay */}
      <div className="absolute inset-0 z-10 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
        <Construction size={40} className="text-lavender-400 mb-4" />
        <h3 className="text-xl font-semibold text-lavender-200 mb-2">Under Construction</h3>
        <p className="text-foreground/70 mb-4">
          This project is currently being built and will be available soon.
        </p>
        <div className="inline-flex items-center justify-center bg-lavender-400/20 text-lavender-300 px-3 py-1 rounded-full text-sm">
          Coming Soon
        </div>
      </div>

      {/* Project Image */}
      <div className="h-48 bg-muted overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-lavender-400/20 to-transparent opacity-60" />
        <div className="w-full h-full flex items-center justify-center text-8xl text-lavender-300/20">
          {/* This is a placeholder, will be replaced with actual project images */}
          &lt;/&gt;
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-lavender-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-lavender-400/10 text-lavender-200 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            className="text-foreground/70 hover:text-lavender-300 transition-colors duration-200"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </Link>
          <Link
            href={project.liveUrl}
            className="text-foreground/70 hover:text-lavender-300 transition-colors duration-200"
            aria-label="Live Demo"
          >
            <ExternalLink size={20} />
          </Link>
        </div>
      </div>
    </AnimatedElement>
  )
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background/30">
      <div className="container mx-auto max-w-5xl">
        <AnimatedElement 
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">My Projects</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <AnimatedElement 
          className="text-center mt-12"
          customAnimation={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5, delay: 0.3 },
            viewport: { once: true }
          }}
        >
          <Link 
            href="https://github.com/Kleftogiannis"
            className="inline-flex items-center justify-center bg-transparent border border-lavender-300 text-lavender-300 hover:bg-lavender-300/10 px-6 py-3 rounded-lg font-medium transition-colors duration-200 gap-2"
          >
            <Github size={18} />
            <span>View More on GitHub</span>
          </Link>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default ProjectsSection 