"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only rendered on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
          </motion.div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

