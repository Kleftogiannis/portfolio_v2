# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Ioannis Kleftogiannis, a frontend developer. The site showcases skills, experience, and projects built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion.

**Live Site:** https://kleftogiannis.com

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server runs on http://localhost:3000 by default.

## Architecture

### Tech Stack
- **Framework:** Next.js 13.5.4 with App Router
- **Language:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS with custom lavender/purple color scheme
- **Animations:** Framer Motion for scroll-based and hover animations
- **UI Components:** Radix UI primitives (Dialog, Dropdown Menu, Icons)
- **Email:** EmailJS for contact form integration (currently disabled)
- **Theme:** next-themes for dark mode support (defaults to dark)

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, custom animations
│   ├── layout.tsx            # Root layout with ThemeProvider
│   └── page.tsx              # Home page assembling all sections
└── components/
    ├── layout/               # Section components for the single-page site
    │   ├── header.tsx        # Navigation header
    │   ├── hero-section.tsx  # Landing section with intro
    │   ├── about-section.tsx # About me section
    │   ├── projects-section.tsx # Projects showcase
    │   ├── skills-section.tsx   # Skills and technologies
    │   ├── contact-section.tsx  # Contact form and links
    │   ├── footer.tsx        # Footer with social links
    │   └── theme-provider.tsx # next-themes wrapper
    └── ui/
        └── animated-element.tsx # Reusable Framer Motion wrapper
```

### Design System

**Color Scheme:** Custom lavender/purple theme defined in tailwind.config.js
- Primary: `hsl(262.1 83.3% 57.8%)` (Medium Purple)
- Secondary: `hsl(260 52.3% 77.3%)` (Light Lavender)
- Lavender scale: 100-500 with varying shades
- Dark background: `hsl(240 10% 3.9%)`

**Typography:** Inter font from Google Fonts

**Path Alias:** `@/*` maps to `./src/*`

### Key Patterns

1. **Single-Page Application:** All content is on the home page divided into sections. Navigation uses anchor links to sections.

2. **Animation System:** The `AnimatedElement` component wraps content with Framer Motion animations:
   - `fadeIn`, `fadeInLeft`, `fadeInRight`, `slideIn`, `scale` presets
   - Scroll-triggered animations with `whileInView`
   - Optional `triggerOnce` for one-time animations
   - Support for custom animations and hover effects

3. **Component Organization:**
   - Layout components are page sections (hero, about, projects, etc.)
   - UI components are reusable utilities (animated-element)
   - All layout components use "use client" directive for interactivity

4. **Contact Form:** EmailJS integration exists but is currently disabled (form is disabled in UI). Environment variables needed:
   - `CONTACT_SERVICE_ID`
   - `CONTACT_TEMPLATE_ID`
   - `CONTACT_PUBLIC_KEY`

5. **Custom CSS:** globals.css includes custom animations (`float`, `glow`), gradient text utility, and custom scrollbar styling.

## Important Notes

- The site defaults to dark mode only (`enableSystem={false}` in theme-provider)
- Contact form submission is currently disabled - users directed to email directly
- CV/Resume PDF is stored in `public/Kleftogiannis_Ioannis_CV.pdf`
- All animations use `triggerOnce={true}` to prevent re-triggering on scroll
- Uses CSS HSL color notation for theme consistency
