"use client"

import { AnimatedElement } from '../ui/animated-element'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <AnimatedElement 
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">About Me</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and what drives me as a frontend developer.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimatedElement 
            className="flex-1"
            animation="fadeInLeft"
            triggerOnce={true}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-lavender-300 to-lavender-400 blur-md opacity-30 animate-pulse" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-lavender-300/20 to-lavender-400/20 backdrop-blur-sm overflow-hidden border border-lavender-300/30">
                {/* Replace this with your actual profile image */}
                <div className="w-full h-full flex items-center justify-center text-7xl text-lavender-300">
                  👨‍💻
                </div>
              </div>
            </div>

            {/* CV Download Button */}
            <div className="mt-8 flex justify-center">
              <motion.a
                href="/cv_ioannis_kleftogiannis.pdf" 
                download
                className="group relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-lavender-400 to-lavender-500 text-white font-medium inline-flex items-center gap-2"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }}
              >
                <span className="relative z-10">Download CV</span>
                <motion.div 
                  className="relative z-10"
                  animate={isHovered ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Download size={18} />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-lavender-500 to-lavender-600"
                  initial={{ x: "-100%" }}
                  animate={isHovered ? { x: 0 } : { x: "-100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </motion.a>
            </div>
          </AnimatedElement>

          {/* Content */}
          <AnimatedElement 
            className="flex-1"
            animation="fadeInRight"
            triggerOnce={true}
          >
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                Frontend Developer focused on building <span className="text-lavender-300">engaging</span> web experiences
              </h3>
              
              <p className="text-foreground/70">
                I'm a dedicated frontend developer with experience at <span className="text-lavender-300 font-medium">OKTO</span>, a fintech company specializing in digital payments, where I developed secure, high-performance web applications using React and TypeScript for the gaming industry. I've implemented state management solutions using Redux and Context API while collaborating with cross-functional teams in an Agile environment.
              </p>
              
              <p className="text-foreground/70">
                Previously at <span className="text-lavender-300 font-medium">ARHS Developments Hellas</span> and <span className="text-lavender-300 font-medium">Solutionist</span>, I built React.js and React Native applications in the pharmaceutical and climate analysis domains, focusing on responsive interfaces and optimized performance.
              </p>
              
              <div className="mt-6 p-4 bg-lavender-400/5 border border-lavender-300/10 rounded-lg">
                <h4 className="text-lavender-200 font-medium mb-2">Professional Experience</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex flex-col">
                    <span className="font-medium">Front-end Developer at OKTO</span>
                    <span className="text-xs">July 2023 - March 2025</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Programmer/Developer at ARHS Developments Hellas</span>
                    <span className="text-xs">August 2022 - March 2023</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Front-end Developer at Solutionist</span>
                    <span className="text-xs">April 2022 - June 2022</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lavender-300 font-medium">Name:</span>
                  <span className="text-foreground/70">Ioannis Kleftogiannis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lavender-300 font-medium">Email:</span>
                  <span className="text-foreground/70">kleftojohn@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lavender-300 font-medium">Location:</span>
                  <span className="text-foreground/70">Athens, Greece</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lavender-300 font-medium">Availability:</span>
                  <span className="text-foreground/70">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 