"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedElement } from '../ui/animated-element'
import { Code2, Layers, Zap, Package } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    color: "cyan",
    skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Styling",
    icon: <Layers className="w-5 h-5" />,
    color: "green",
    skills: ["Tailwind CSS", "CSS3", "Styled Components", "Responsive Design"]
  },
  {
    title: "State Management",
    icon: <Package className="w-5 h-5" />,
    color: "cyan",
    skills: ["Redux", "Context API", "Zustand", "React Query"]
  },
  {
    title: "Tools & Testing",
    icon: <Zap className="w-5 h-5" />,
    color: "green",
    skills: ["Vite", "Jest", "Git", "npm/yarn"]
  }
]

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative glass-strong rounded-2xl p-6 border border-green/20 hover:border-green/40 transition-all duration-300 overflow-hidden group"
    >
      {/* Background effects */}
      <div className="absolute inset-0 dot-matrix-dense opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{
              rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              category.color === 'cyan'
                ? 'from-cyan/20 to-cyan/5'
                : 'from-green/20 to-green/5'
            } flex items-center justify-center border ${
              category.color === 'cyan'
                ? 'border-cyan/30'
                : 'border-green/30'
            }`}
          >
            <span className={category.color === 'cyan' ? 'text-cyan' : 'text-green'}>
              {category.icon}
            </span>
          </motion.div>

          <h3 className="text-xl font-bold font-mono">
            {category.title}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`font-mono text-sm px-3 py-1.5 rounded-lg ${
                category.color === 'cyan'
                  ? 'bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20'
                  : 'bg-green/10 text-green border border-green/20 hover:bg-green/20'
              } transition-all duration-200 cursor-default`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 ${
            category.color === 'cyan' ? 'glow-cyan' : 'glow-green'
          } opacity-20 rounded-2xl pointer-events-none`}
        />
      )}
    </motion.div>
  )
}

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
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
            <span className="font-mono text-sm text-green">skills.tsx</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and expertise.
          </p>
        </AnimatedElement>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection
