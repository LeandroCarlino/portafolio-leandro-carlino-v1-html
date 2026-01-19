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
          <h2>Educación</h2>
          <div className="education-item">
            <h3>Universidad Nacional de Tucumán</h3>
            <p className="education-degree">Programador Universitario - En curso</p>
          </div>
          <div className="education-item">
            <h3>Esc. De Comercio N°1</h3>
            <p className="education-degree">Humanidades y Ciencias Sociales</p>
          </div>
          <h3 style={{ marginTop: '1.5rem' }}>Formación Complementaria</h3>
          <ul className="education-list">
            <li><strong>Argentina Programa:</strong> #SeProgramar</li>
            <li><strong>Angular de Cero a Experto:</strong> Fernando Herrera</li>
            <li><strong>Responsive Web Design:</strong> freeCodeCamp (300hs)</li>
            <li><strong>Desarrollo Web:</strong> Google Actívate (80hs)</li>
            <li><strong>Inglés:</strong> A.T.I.C.A.N.A (108hs)</li>
          </ul>
        </div>
      </div>

      <div className="about-card">
        <h2>Habilidades técnicas</h2>
        <h3>Habilidades técnicas</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Bootstrap</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Material Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Herramientas</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">GitLab</span>
              <span className="skill-tag">Bitbucket</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">WordPress</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Metodologías</h4>
            <div className="skill-tags">
              <span className="skill-tag">SCRUM</span>
              <span className="skill-tag">RxJS</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Agile</span>
            </div>
          </div>
        </div>
        <h3 style={{ marginTop: '0.75rem' }}>Competencias</h3>
        <ul className="highlights">
          <li>Entrega orientada a resultados y prioridades de producto</li>
          <li>Capacidad de aprendizaje y adaptación rápida a nuevas tecnologías</li>
          <li>Atención a la accesibilidad, rendimiento y calidad del front-end</li>
          <li>Manejo de Git flow y despliegues en plataformas como Vercel/Netlify</li>
        </ul>
      </div>
      <div style={{ marginTop: '1.25rem' }} className="about-card card-float">
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

