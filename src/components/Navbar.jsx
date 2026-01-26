import React, { useState, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="nav-inner container">
        <div className="brand">Portfolio</div>

        <div className="nav-actions">

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'nav-links--open' : ''}`}>

          <li><a href="#hero" onClick={closeMenu} aria-label="Ir a inicio">Inicio</a></li>
          <li><a href="#about" onClick={closeMenu} aria-label="Ir a sobre mi">Sobre mí</a></li>
          <li><a href="#projects" onClick={closeMenu} aria-label="Ir a proyectos">Proyectos</a></li>
          <li><a href="#contact" onClick={closeMenu} aria-label="Ir a contacto">Contacto</a></li>
          <ThemeToggle />

        </ul>
      </div>
    </nav>
  )
}

