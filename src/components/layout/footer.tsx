"use client"

import Link from 'next/link'
import { ArrowUp, Heart } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              DevPortfolio
            </Link>
            <p className="text-sm text-foreground/60 mt-2">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-lavender-400/10 text-lavender-300 hover:bg-lavender-400/20 transition-colors duration-200 mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-sm text-foreground/60 flex items-center gap-1">
              Built with 
              <Heart size={14} className="text-red-500 fill-red-500" /> 
              and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 