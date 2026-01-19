import React from 'react'

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about-grid">
        <div className="about-card">
          <h2>Perfil profesional</h2>
          <p>
            Soy Frontend Developer con experiencia profesional en Angular y proyectos en React.
            Me especializo en transformar requisitos de producto en interfaces accesibles y
            usables, con foco en la experiencia de usuario y la mantenibilidad del código.
          </p>
          <ul className="highlights">
            <li>Colaboración en equipos ágiles (SCRUM/Kanban)</li>
            <li>Comunicación con product, diseño y QA para entregas alineadas</li>
            <li>Prácticas: componentización, testing básico y code review</li>
          </ul>
        </div>
        <div className="about-card">
          <h2>Formación y habilidades</h2>
          <p>Estudio la carrera de Programador Universitario y complemento mi formación con cursos prácticos y proyectos reales. Me enfoco en aprendizaje continuo, buenas prácticas y entrega de producto.</p>
          <h3>Habilidades técnicas</h3>
          <div className="tech-row" aria-hidden="false">
            <img src="/img/icono-html.png" alt="HTML" title="HTML" loading="lazy" decoding="async" />
            <img src="/img/icono-css.png" alt="CSS" title="CSS" loading="lazy" decoding="async" />
            <img src="/img/icono-js.png" alt="JavaScript" title="JavaScript" loading="lazy" decoding="async" />
            <img src="/img/icono-typescript.png" alt="TypeScript" title="TypeScript" loading="lazy" decoding="async" />
            <img src="/img/icono-angular.png" alt="Angular" title="Angular" loading="lazy" decoding="async" />
            <img src="/img/icono-git.png" alt="Git" title="Git" loading="lazy" decoding="async" />
          </div>
          <h3 style={{marginTop: '0.75rem'}}>Competencias</h3>
          <ul className="highlights">
            <li>Entrega orientada a resultados y prioridades de producto</li>
            <li>Capacidad de aprendizaje y adaptación rápida a nuevas tecnologías</li>
            <li>Atención a la accesibilidad, rendimiento y calidad del front-end</li>
            <li>Manejo de Git flow y despliegues en plataformas como Vercel/Netlify</li>
          </ul>
        </div>
      </div>
      <div style={{marginTop: '1.25rem'}} className="about-card card-float">
        <h2>Logros seleccionados</h2>
        <ul className="highlights">
          <li>Participación en entregas regulares dentro de sprints, priorizando calidad y plazos.</li>
          <li>Mejoras de accesibilidad y experiencia en proyectos con foco en usuarios reales.</li>
          <li>Colaboración en revisiones de código y documentación para facilitar onboarding.</li>
        </ul>
      </div>
    </section>
  )
}

