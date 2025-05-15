"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Copy, Check } from 'lucide-react'
import { AnimatedElement } from '../ui/animated-element'
import emailjs from '@emailjs/browser'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // EmailJS integration
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }
    
    emailjs
      .send(
        process.env.CONTACT_SERVICE_ID as string,
        process.env.CONTACT_TEMPLATE_ID as string,
        templateParams,
        {
          publicKey: process.env.CONTACT_PUBLIC_KEY as string,
        }
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSubmitting(false);
          setSubmitError(true);
          
          // Reset error message after 5 seconds
          setTimeout(() => {
            setSubmitError(false);
          }, 5000);
        }
      );
  }

  const copyToClipboard = (email: string) => {
    if (email) {
      navigator.clipboard.writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
    }
  }

  const socialLinks = [
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: 'mailto:kleftojohn@gmail.com',
      value: 'kleftojohn@gmail.com' 
    },
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/Kleftogiannis' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/ioannis-kleftogiannis-aa52ba21b/' },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-background/30">
      <div className="container mx-auto max-w-5xl">
        <AnimatedElement 
          className="text-center mb-16"
          animation="fadeIn"
          triggerOnce={true}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">Get In Touch</h2>
          <div className="w-20 h-1 bg-lavender-300 mx-auto mt-2 mb-6 rounded-full" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </AnimatedElement>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <AnimatedElement 
            className="flex-1"
            animation="fadeInLeft"
            triggerOnce={true}
          >
            <h3 className="text-xl font-semibold mb-6 text-lavender-200">Contact Information</h3>
            <p className="text-foreground/70 mb-8">
              I'm currently open to new opportunities and collaborations. If you have a project that could use my help or if you just want to say hi, don't hesitate to reach out!
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              {socialLinks.map(link => (
                <div 
                  key={link.name} 
                  className="flex items-center gap-3"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-lavender-400/10">
                    {link.icon}
                  </span>
                  {link.name === 'Email' ? (
                    <div className="flex items-center gap-2 w-full">
                      <a 
                        href={link.url} 
                        className="text-foreground/70 hover:text-lavender-300 transition-colors duration-200"
                      >
                        {link.value}
                      </a>
                      <button
                        onClick={() => link.value && copyToClipboard(link.value)}
                        className="ml-2 p-1.5 rounded-full hover:bg-lavender-400/10 transition-colors duration-200"
                        title="Copy email to clipboard"
                      >
                        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-lavender-300" />}
                      </button>
                    </div>
                  ) : (
                    <a 
                      href={link.url} 
                      className="text-foreground/70 hover:text-lavender-300 transition-colors duration-200"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span>{link.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </AnimatedElement>

          {/* Contact Form */}
          <AnimatedElement 
            className="flex-1"
            animation="fadeInRight"
            delay={0.2}
            triggerOnce={true}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300/50 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300/50 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-300/50 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>
              <div className="rounded-lg bg-lavender-400/10 p-4 text-center">
                <p className="text-lavender-200 mb-2">Contact form temporarily unavailable</p>
                <p className="text-foreground/70 text-sm">Please email me directly or use the copy button above.</p>
              </div>
              <button
                type="submit"
                disabled={true}
                className="w-full flex items-center justify-center gap-2 bg-lavender-400/50 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-sm text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg text-sm text-center">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 