import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Navegación principal">
      <div className="nav-inner container">
        <div className="brand">Leandro Carlino</div>
        <ul className="nav-links">
          <li><a href="#hero" aria-label="Ir a inicio">Inicio</a></li>
          <li><a href="#about" aria-label="Ir a sobre mi">Sobre mí</a></li>
          <li><a href="#projects" aria-label="Ir a proyectos">Proyectos</a></li>
          <li><a href="#contact" aria-label="Ir a contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

