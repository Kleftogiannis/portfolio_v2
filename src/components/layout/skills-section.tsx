"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedElement } from '../ui/animated-element'

// Array of skills with their logo paths
const skills = [
  { name: "HTML5", logo: "/skills/html5.svg" },
  { name: "CSS3", logo: "/skills/css3.svg" },
  { name: "TypeScript", logo: "/skills/typescript.svg" },
  { name: "React", logo: "/skills/react.svg" },
  { name: "Next.js", logo: "/skills/nextjs.svg" },
  { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
  { name: "Redux", logo: "/skills/redux.svg" },
  { name: "Context API", logo: "/skills/react.svg" },
  { name: "Vite", logo: "/skills/vite.svg" },
  { name: "Jest", logo: "/skills/jest.svg" },
]

// Particle effect for the skill card
const SkillParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-lavender-400/70"
          initial={{ 
            x: "50%", 
            y: "50%", 
            opacity: 0, 
            scale: 0 
          }}
          animate={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: 1.5 + Math.random(),
            delay: i * 0.2,
            repeat: Infinity, 
            repeatType: "loop",
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ skill }: { skill: { name: string, logo: string } }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a random animation variant for each card
  const randomAnimation = Math.floor(Math.random() * 4);
  
  const getHoverAnimation = () => {
    switch(randomAnimation) {
      case 0:
        return { 
          y: -15, 
          scale: 1.05, 
          boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" 
        };
      case 1:
        return { 
          rotate: 5, 
          scale: 1.08, 
          boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" 
        };
      case 2:
        return { 
          x: 10, 
          y: -10, 
          scale: 1.05, 
          boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" 
        };
      case 3:
      default:
        return { 
          scale: 1.1, 
          boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" 
        };
    }
  };
  
  const getLogoAnimation = () => {
    switch(randomAnimation) {
      case 0:
        return { rotateY: 360 };
      case 1:
        return { rotate: 360 };
      case 2:
        return { scale: [1, 1.2, 1] };
      case 3:
      default:
        return { 
          y: [0, -5, 0, 5, 0],
          transition: {
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 0.25
          }
        };
    }
  };
  
  return (
    <AnimatedElement 
      className="relative flex flex-col items-center justify-center p-5 rounded-xl bg-background/30 border border-border hover:border-lavender-300 transition-all duration-300 overflow-hidden"
      hover={true}
      getHoverAnimation={getHoverAnimation}
      customAnimation={{
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.4 },
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false)
      }}
    >
      {isHovered && <SkillParticles />}
      
      <motion.div 
        className="w-16 h-16 mb-3 flex items-center justify-center relative z-10"
        animate={isHovered ? getLogoAnimation() : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img 
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      <motion.span 
        className="text-sm font-medium text-center text-foreground relative z-10"
        animate={isHovered ? { scale: 1.1, color: "#c4b5fd" } : {}}
      >
        {skill.name}
      </motion.span>
      
      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-lavender-400/10 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatedElement>
  )
}

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <AnimatedElement 
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">My Skills</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skill set.
          </p>
        </AnimatedElement>

        <AnimatedElement 
          className="bg-background border border-border rounded-xl p-8"
          animation="fadeIn"
          delay={0.2}
          triggerOnce={true}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default SkillsSection 