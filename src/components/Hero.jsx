import React from 'react'
import Modal from './Modal'

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <img src="/img/photo.png" alt="Leandro Carlino" className="profile" loading="lazy" decoding="async" />
          <div className="hero-text hero-animate">
            <div className="hero-title">
              <h1>Leandro Carlino</h1>
              <h2>Frontend Developer</h2>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
            </div>
          <p className="lead">
            Especializado en Angular y React, desarrollo interfaces escalables para bancos digitales y dashboards corporativos. 
            Transformo requisitos de producto en soluciones frontend de alto rendimiento.
          </p>
          <div className="hero-badges" aria-hidden="true">
            <span className="badge">Angular</span>
            <span className="badge">TypeScript</span>
            <span className="badge">SCRUM</span>
            <span className="badge">Performance</span>
          </div>
          <div className="hero-meta muted" style={{marginTop: '0.8rem'}}>
            <strong>Actualmente:</strong> Frontend Developer @ ICBC y MOBYDIGITAL · San Miguel de Tucumán, Argentina
          </div>
            <div className="cta-row">
              <a className="btn-primary" href="#projects">Ver proyectos</a>
              <Modal />
              <a className="btn-outline" href="https://drive.google.com/file/d/1zsQwTAZBzJYYbsFciopvNqYDZowcMwB5/preview" target="_blank" rel="noreferrer">Ver CV</a>
            </div>
            <div className="hero-accent" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

