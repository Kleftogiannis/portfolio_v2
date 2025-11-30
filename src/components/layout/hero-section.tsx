"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Terminal, Code2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [text, setText] = useState('')
  const fullText = '> Frontend Developer_'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4 overflow-hidden noise"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Dot matrix overlay */}
      <div className="absolute inset-0 dot-matrix-dense" />

      {/* Scanline effect */}
      <div className="scanline absolute inset-0" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,157,0.4) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Terminal window header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="glass-strong rounded-lg p-1 inline-block border border-green/30">
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  ~/portfolio
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading with stagger effect */}
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Code2 className="w-6 h-6 text-cyan" />
              <span className="font-mono text-sm text-cyan">console.log("Hello World!")</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block text-foreground mb-2">Ioannis</span>
              <span className="block gradient-text-alt glow-text-green">Kleftogiannis</span>
            </motion.h1>
          </div>

          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-mono text-green font-medium">
              {text}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Crafting <span className="text-cyan font-medium">performant</span> and{' '}
            <span className="text-green font-medium">engaging</span> digital experiences
            with React, TypeScript, and modern web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-medium overflow-hidden rounded-lg bg-green text-background transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan to-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-medium overflow-hidden rounded-lg border-2 border-green text-green transition-all duration-300 hover:scale-105 glass"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-green opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
          </motion.div>

          {/* Code snippet decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="glass rounded-xl p-6 inline-block border border-green/20 max-w-2xl"
          >
            <pre className="text-left font-mono text-sm md:text-base">
              <code>
                <span className="text-cyan">const</span>{' '}
                <span className="text-foreground">developer</span>{' '}
                <span className="text-cyan">=</span>{' '}
                <span className="text-cyan">{'{'}</span>
                {'\n'}
                {'  '}<span className="text-green">name</span>
                <span className="text-cyan">:</span>{' '}
                <span className="text-yellow-400">"Ioannis Kleftogiannis"</span>
                <span className="text-cyan">,</span>
                {'\n'}
                {'  '}<span className="text-green">role</span>
                <span className="text-cyan">:</span>{' '}
                <span className="text-yellow-400">"Frontend Developer"</span>
                <span className="text-cyan">,</span>
                {'\n'}
                {'  '}<span className="text-green">skills</span>
                <span className="text-cyan">:</span>{' '}
                <span className="text-cyan">['</span>
                <span className="text-yellow-400">React</span>
                <span className="text-cyan">,</span>{' '}
                <span className="text-yellow-400">TypeScript</span>
                <span className="text-cyan">,</span>{' '}
                <span className="text-yellow-400">Next.js</span>
                <span className="text-cyan">']</span>
                {'\n'}
                <span className="text-cyan">{'};'}</span>
              </code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Right side */}
      {/* <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">scroll</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-green/50 flex items-start justify-center p-1"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <motion.div
              className="w-1 h-2 bg-green rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            />
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  )
}

export default HeroSection
