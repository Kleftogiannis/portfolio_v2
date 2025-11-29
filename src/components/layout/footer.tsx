"use client"

import Link from 'next/link'
import { ArrowUp, Terminal, Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls past 300px
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/Kleftogiannis', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ioannis-kleftogiannis-aa52ba21b/', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:kleftojohn@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="relative border-t border-green/20 py-8 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-matrix-dense opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-green flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Terminal className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-mono font-bold gradient-text">
                &lt;IK /&gt;
              </span>
            </Link>

            <div className="h-8 w-px bg-green/20 hidden md:block" />

            <p className="text-sm font-mono text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Ioannis Kleftogiannis
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground/60 hover:text-green border border-green/20 hover:border-green/40 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed Bottom Right (only shows when scrolled) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-green flex items-center justify-center text-background hover:shadow-lg hover:shadow-green/50 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
