import Header from '@/components/layout/header'
import HeroSection from '@/components/layout/hero-section'
import AboutSection from '@/components/layout/about-section'
import ProjectsSection from '@/components/layout/projects-section'
import SkillsSection from '@/components/layout/skills-section'
import ContactSection from '@/components/layout/contact-section'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 