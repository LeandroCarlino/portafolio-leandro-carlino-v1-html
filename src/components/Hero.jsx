import React from 'react'

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container hero-inner">
        <img src="/img/photo.png" alt="Leandro Carlino" className="profile" loading="lazy" decoding="async" />
        <div className="hero-text hero-animate">
          <h1>Frontend Developer — Angular · React</h1>
          <p className="lead">
            Construyo interfaces accesibles, escalables y enfocadas en la experiencia de usuario.
            Entrego valor en ciclos ágiles y trabajo de forma cruzada con product, diseño y QA.
          </p>
          <div className="hero-badges" aria-hidden="true">
            <span className="badge">Accesibilidad (A11y)</span>
            <span className="badge">Performance</span>
            <span className="badge">Testing básico</span>
          </div>
          <div className="hero-meta muted" style={{marginTop: '0.8rem'}}>
            <strong>Disponibilidad:</strong> Full‑time · Remoto / Híbrido · Disponible para entrevistas
          </div>
          <div className="cta-row" style={{marginTop: '1rem'}}>
            <a className="btn-primary" href="#projects">Ver proyectos</a>
            <a className="btn-outline" href="mailto:leandro.ca.98@gmail.com">Contactar</a>
            <a className="btn-outline" href="https://drive.google.com/file/d/1zsQwTAZBzJYYbsFciopvNqYDZowcMwB5/preview" target="_blank" rel="noreferrer">Ver CV</a>
          </div>
          <div className="hero-accent" aria-hidden="true"></div>
        </div>
      </div>
    </header>
  )
}

