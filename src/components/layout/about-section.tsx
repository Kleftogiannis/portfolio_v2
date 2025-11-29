"use client"

import { AnimatedElement } from '../ui/animated-element'
import { Download, Code2, Briefcase, MapPin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  const experiences = [
    {
      role: "Front End Engineer",
      company: "Cognity",
      period: "June 2025 - Present",
      description: "Working on frontend development for enterprise telecom projects, designing reusable UI systems and contributing to system architecture and CI/CD pipelines."
    },
    {
      role: "Front End Developer",
      company: "OKTO",
      period: "July 2023 - March 2025",
      description: "Built secure payment platforms (OKTO.Direct, OKTO.Cash) with React and TypeScript, implementing state management and performance optimizations."
    },
    {
      role: "Front End Developer",
      company: "ARHS Developments Hellas",
      period: "August 2022 - March 2023",
      description: "Developed cross-platform apps (React.js, React Native) for pharmaceutical clients, focusing on accessibility and performance."
    },
    {
      role: "Full Stack Developer",
      company: "Solutionist",
      period: "April 2022 - June 2022",
      description: "Created UI components for climate data visualization and gaming platforms with responsive design."
    }
  ]

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedElement
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <div className="inline-flex items-center gap-2 mb-4 glass px-4 py-2 rounded-full border border-green/30">
            <Code2 className="w-4 h-4 text-green" />
            <span className="font-mono text-sm text-green">about.tsx</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-green mx-auto rounded-full" />
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Experience */}
          <AnimatedElement
            className="space-y-6"
            animation="fadeInLeft"
            triggerOnce={true}
          >
            <div className="glass-strong rounded-2xl p-8 border border-green/20">
              <h3 className="text-2xl font-bold mb-6 font-mono gradient-text">
                {'<Experience />'}
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-green/30 hover:border-green transition-colors duration-300"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-green shadow-lg shadow-green/50" />

                    <div>
                      <h4 className="font-mono font-semibold text-lg text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-green mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.company}</span>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground mb-2">
                        {exp.period}
                      </p>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/Kleftogiannis_Ioannis_CV.pdf"
                download
                className="group relative mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gradient-to-r from-cyan to-green text-background font-mono font-medium overflow-hidden"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 40px rgba(0, 255, 157, 0.3)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green to-cyan"
                  initial={{ x: "-100%" }}
                  animate={isHovered ? { x: 0 } : { x: "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.a>
            </div>
          </AnimatedElement>

          {/* Right Column - Bio & Info */}
          <AnimatedElement
            className="space-y-6"
            animation="fadeInRight"
            triggerOnce={true}
          >
            {/* Bio */}
            <div className="glass-strong rounded-2xl p-8 border border-green/20">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green animate-pulse-glow" />
                  <span className="font-mono text-sm text-green">Available for opportunities</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Frontend Developer focused on building{' '}
                  <span className="gradient-text">exceptional</span> web experiences
                </h3>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Frontend Engineer with 3+ years of experience delivering scalable applications
                  across fintech, telecom, and healthcare. Currently at{' '}
                  <span className="text-green font-mono">Cognity</span>, working on enterprise
                  frontend development with focus on system architecture and performance.
                </p>

                <p>
                  Experienced in React, TypeScript, and modern state management. Strong focus on
                  building maintainable, accessible interfaces while collaborating with
                  cross-functional teams in Agile environments.
                </p>

                <p>
                  Passionate about clean code, performance optimization, and leveraging
                  AI-assisted development to accelerate workflows and improve code quality.
                </p>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-xl p-4 border border-green/20 hover:border-green/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:kleftojohn@gmail.com"
                      className="text-sm text-foreground hover:text-green transition-colors font-mono"
                    >
                      kleftojohn@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-xl p-4 border border-green/20 hover:border-green/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm text-foreground font-mono">Athens, Greece</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Code snippet decoration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-green/20 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <span className="text-green">// </span>
                <span>My approach</span>
              </div>
              <pre className="text-foreground/80">
                <code>
                  <span className="text-cyan">const</span> <span className="text-foreground">approach</span> <span className="text-cyan">=</span> <span className="text-cyan">{'{'}</span>
                  {'\n  '}<span className="text-green">clean</span><span className="text-cyan">:</span> <span className="text-yellow-400">true</span><span className="text-cyan">,</span>
                  {'\n  '}<span className="text-green">performant</span><span className="text-cyan">:</span> <span className="text-yellow-400">true</span><span className="text-cyan">,</span>
                  {'\n  '}<span className="text-green">accessible</span><span className="text-cyan">:</span> <span className="text-yellow-400">true</span><span className="text-cyan">,</span>
                  {'\n  '}<span className="text-green">scalable</span><span className="text-cyan">:</span> <span className="text-yellow-400">true</span>
                  {'\n'}<span className="text-cyan">{'}'}</span>
                </code>
              </pre>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
