"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react'
import { AnimatedElement } from '../ui/animated-element'

const projects = [
  {
    title: "OurChapter",
    description: "A full-stack SaaS platform for creating personalized digital stories. Built with Next.js and TypeScript, featuring custom authentication (Clerk), database management (Supabase), and payment processing (Stripe). Includes drag-and-drop page builder and shareable story pages.",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Clerk"],
    githubUrl: null,
    liveUrl: "https://ourchapter.app",
    status: "Live",
    featured: false
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Building a modern analytics dashboard with real-time data visualization, user management, and customizable widgets. Features include chart libraries, responsive design, and optimized performance.",
    tags: ["React", "TypeScript", "Recharts", "Zustand"],
    githubUrl: null,
    liveUrl: "#",
    status: "In Development",
    featured: false
  },
  {
    title: "Full-Stack Task Manager",
    description: "End-to-end task management platform with authentication, real-time collaboration, and REST API backend. Practicing full-stack development skills.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    githubUrl: null,
    liveUrl: "#",
    status: "Planning",
    featured: false
  }
]

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`group relative glass-strong border border-green/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green/40 hover:shadow-lg hover:shadow-green/20 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-matrix-dense opacity-20" />
      <div className="absolute inset-0 noise opacity-50" />

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan/20 to-green/20 flex items-center justify-center border border-green/30 group-hover:scale-110 transition-transform duration-300">
              <FolderGit2 className="w-6 h-6 text-green" />
            </div>
            {project.status && (
              <span className={`font-mono text-xs px-3 py-1 rounded-full ${
                project.status === 'Live'
                  ? 'bg-green/20 text-green border border-green/40 animate-pulse-glow'
                  : project.status === 'In Development'
                  ? 'bg-cyan/10 text-cyan border border-cyan/30'
                  : 'bg-muted/50 text-muted-foreground border border-border'
              }`}>
                {project.status === 'Live' && <span className="mr-1">●</span>}
                {project.status}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="text-foreground/60 hover:text-green transition-colors duration-200"
                aria-label="GitHub Repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </Link>
            )}
            <Link
              href={project.liveUrl}
              className={`text-foreground/60 hover:text-cyan transition-colors duration-200 ${
                project.status !== 'Live' ? 'opacity-40 pointer-events-none' : ''
              }`}
              aria-label="Live Demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>

        {/* Title & Description */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-green transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="font-mono text-xs px-3 py-1 rounded-full bg-green/10 text-green border border-green/20 hover:bg-green/20 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green/5 via-transparent to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-matrix opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedElement
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <div className="inline-flex items-center gap-2 mb-4 glass px-4 py-2 rounded-full border border-green/30">
            <Code2 className="w-4 h-4 text-green" />
            <span className="font-mono text-sm text-green">projects.tsx</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing full-stack development, UI/UX design, and modern web technologies.
          </p>
        </AnimatedElement>

        {/* Projects Grid - Bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <AnimatedElement
          className="text-center"
          customAnimation={{
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5, delay: 0.3 },
            viewport: { once: true }
          }}
        >
          <Link
            href="https://github.com/Kleftogiannis"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-mono font-medium rounded-lg glass-strong border-2 border-green/30 text-green hover:border-green hover:bg-green/5 transition-all duration-300"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default ProjectsSection
