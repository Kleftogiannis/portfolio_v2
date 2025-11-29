"use client"

import { AnimatedElement } from '../ui/animated-element'
import { Mail, Github, Linkedin, Code2, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactSection = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      value: 'kleftojohn@gmail.com',
      href: 'mailto:kleftojohn@gmail.com',
      color: 'green',
      copyable: true
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      value: '@Kleftogiannis',
      href: 'https://github.com/Kleftogiannis',
      color: 'cyan',
      copyable: false
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      value: 'Ioannis Kleftogiannis',
      href: 'https://www.linkedin.com/in/ioannis-kleftogiannis-aa52ba21b/',
      color: 'green',
      copyable: false
    }
  ]

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-matrix opacity-20" />
      <div className="absolute inset-0 noise" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <AnimatedElement
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <div className="inline-flex items-center gap-2 mb-4 glass px-4 py-2 rounded-full border border-green/30">
            <Code2 className="w-4 h-4 text-green" />
            <span className="font-mono text-sm text-green">contact.tsx</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan to-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together to create something amazing.
          </p>
        </AnimatedElement>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-strong rounded-2xl p-6 border border-green/20 hover:border-green/40 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  link.color === 'cyan'
                    ? 'from-cyan/20 to-cyan/5 border-cyan/30'
                    : 'from-green/20 to-green/5 border-green/30'
                } border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={link.color === 'cyan' ? 'text-cyan' : 'text-green'}>
                    {link.icon}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-mono font-semibold text-lg mb-2">{link.name}</h3>

                {/* Value with copy/link */}
                <div className="flex items-center gap-2 w-full justify-center">
                  <a
                    href={link.href}
                    className={`text-sm ${
                      link.color === 'cyan' ? 'text-cyan' : 'text-green'
                    } hover:underline font-mono transition-colors duration-200`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.value}
                  </a>

                  {link.copyable && (
                    <button
                      onClick={() => copyToClipboard(link.value)}
                      className="p-1.5 rounded-lg glass hover:bg-green/10 transition-colors duration-200"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <Check size={14} className="text-green" />
                      ) : (
                        <Copy size={14} className="text-muted-foreground" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedElement
          customAnimation={{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: true }
          }}
          className="glass-strong rounded-2xl p-8 md:p-12 border border-green/20 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start a project?
            </h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              I'm currently <span className="text-green font-mono">available</span> for freelance work and full-time opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.a
              href="mailto:kleftojohn@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan to-green text-background font-mono font-medium hover:shadow-lg hover:shadow-green/30 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Send me an email</span>
            </motion.a>
          </div>

          {/* Code snippet decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 glass rounded-xl p-6 inline-block border border-green/20 font-mono text-sm text-left"
          >
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <span className="text-green">// </span>
              <span>Let's collaborate</span>
            </div>
            <pre className="text-foreground/80">
              <code>
                <span className="text-cyan">const</span> <span className="text-foreground">contact</span> <span className="text-cyan">=</span> <span className="text-cyan">{'{'}</span>
                {'\n  '}<span className="text-green">email</span><span className="text-cyan">:</span> <span className="text-yellow-400">"kleftojohn@gmail.com"</span><span className="text-cyan">,</span>
                {'\n  '}<span className="text-green">status</span><span className="text-cyan">:</span> <span className="text-yellow-400">"available"</span><span className="text-cyan">,</span>
                {'\n  '}<span className="text-green">responseTime</span><span className="text-cyan">:</span> <span className="text-yellow-400">"24 hours"</span>
                {'\n'}<span className="text-cyan">{'}'}</span>
              </code>
            </pre>
          </motion.div>
        </AnimatedElement>
      </div>
    </section>
  )
}

export default ContactSection
