"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedElement } from '../ui/animated-element'

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lavender-400/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-lavender-300/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <AnimatedElement 
            className="flex-1 text-center md:text-left"
            customAnimation={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 }
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm </span>
              <span className="gradient-text animate-glow">Ioannis Kleftogiannis</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-light mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg mx-auto md:mx-0">
              Crafting engaging digital experiences with React, TypeScript and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link 
                href="#projects"
                className="inline-flex items-center justify-center bg-lavender-400 hover:bg-lavender-500 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View My Work
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent border border-lavender-300 text-lavender-300 hover:bg-lavender-300/10 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Me
              </Link>
            </div>
          </AnimatedElement>

          {/* Hero image or animated element */}
          <AnimatedElement 
            className="flex-1 flex justify-center"
            customAnimation={{
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5, delay: 0.2 }
            }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender-200 via-lavender-300 to-lavender-400 blur-md opacity-20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-lavender-200 via-lavender-300 to-lavender-400 opacity-20 animate-float" />
              <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-lavender-300 animate-float">
                {/* replace this with an actual image */}
                &lt;/&gt;
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-lavender-300 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection 