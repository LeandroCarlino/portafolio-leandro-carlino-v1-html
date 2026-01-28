import React from 'react'

export default function Experience() {
  const experiences = [
    {
      company: 'ICBC',
      position: 'SSR Frontend Developer',
      period: 'Noviembre 2022 - Actualidad',
      description: 'Desarrollo de nuevas funcionalidades, corrección de errores, refactorización de servicios y componentes, conexión con API, mantenimiento frontend y aporte de mejoras técnicas para el banco digital YOY.',
      technologies: ['Angular', 'TypeScript', 'API', 'Frontend Maintenance']
    },
    {
      company: 'MOBYDIGITAL',
      position: 'Frontend Developer',
      period: 'Abril 2022 - Actualidad',
      description: 'Trabajo colaborativo en un dashboard para el área de Recursos Humanos y desarrollo en la página web corporativa de la consultora.',
      technologies: ['React', 'Dashboard', 'Corporate Website']
    }
  ]

  return (
    <section id="experience" className="experience container">
      <h2 class="title-h2">Experiencia Laboral</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.company} className="experience-item">
            <div className="experience-date">{exp.period}</div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.position}</h3>
                <span className="company-name">@ {exp.company}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}