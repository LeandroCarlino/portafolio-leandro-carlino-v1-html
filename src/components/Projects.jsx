import React from 'react'
import '../styles/ProjectCard.css'

const projects = [
  { title: 'Post and View', img: '/img/post-and-view.png', href: 'https://post-and-view.vercel.app/home', desc: 'Aplicación full-stack para crear y ver publicaciones. Frontend centrado en usabilidad y rendimiento.', tags: ['Angular', 'Firebase'] },
  { title: 'Generador de personas', img: '/img/people-generator.png', href: 'https://people-generator.vercel.app/', desc: 'Herramienta UI para generar datos de prueba, útil en prototipos y testing de interfaces.', tags: ['Angular', 'API'] },
  { title: 'Gifs App', img: '/img/gifs-app.png', href: 'https://gifs-app-beryl.vercel.app', desc: 'Integración con APIs públicas para búsqueda y visualización eficiente de GIFs.', tags: ['Vanilla JS', 'API'] },
  { title: 'Paises App', img: '/img/paises-app.png', href: 'https://paises-app-eight.vercel.app', desc: 'Explorador de países que muestra consumo de APIs y gestión de estado en el frontend.', tags: ['Angular', 'API'] }
]

const Projects = React.memo(() => {
  return (
    <section id="projects" className="projects container">
      <h2>Proyectos destacados</h2>
      <p className="muted">Haz clic en cualquier tarjeta para revisar la demo y el código.</p>
      <div className="projects-grid" role="list">
        {projects.map((p) => (
          <a className="project-card" key={p.title} href={p.href} target="_blank" rel="noreferrer" role="listitem" aria-label={`Abrir ${p.title}`}>
            <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
            <div className="project-info">
              <strong>{p.title}</strong>
              <p className="muted">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
})

export default Projects

