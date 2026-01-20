import React, { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './styles/Creative.css'

function AppContent() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <ThemeProvider>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default AppContent

