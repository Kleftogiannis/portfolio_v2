# Frontend Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌙 Dark theme with a lavender color palette
- 🎨 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive design for all device sizes
- ⚡ Fast performance with Next.js
- 🔍 SEO-friendly
- 🛠️ Built with TypeScript for type safety

## Sections

- **Hero** - Eye-catching introduction with animated elements
- **About** - Professional information and background
- **Projects** - Showcase of recent work with descriptions and links
- **Skills** - Visual representation of technical skills
- **Contact** - Contact form and social media links
- **Footer** - Copyright information and back-to-top button

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Personal Information
Update your personal information in the following files:
- `src/components/layout/hero-section.tsx` - Update name and introduction
- `src/components/layout/about-section.tsx` - Update professional information
- `src/components/layout/contact-section.tsx` - Update contact information and social links

### Projects
Edit the projects array in `src/components/layout/projects-section.tsx` to showcase your own work.

### Skills
Modify the skill categories and levels in `src/components/layout/skills-section.tsx` to match your expertise.

### Colors
The color scheme can be modified in:
- `tailwind.config.js` - Update the color palette
- `src/app/globals.css` - Update the CSS variables

## Deployment

This portfolio can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages:

```bash
npm run build
# or
yarn build
```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/) (component patterns)

## License

This project is licensed under the MIT License.

## Acknowledgments

- Design inspired by modern portfolio trends
- Animation techniques from Framer Motion documentation
- Color palette based on lavender theme 