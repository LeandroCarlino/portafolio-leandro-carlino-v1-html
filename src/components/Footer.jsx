import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>¿Buscas talento Frontend?</h3>
          <p className="muted">Envía la descripción del puesto o invita a una entrevista técnica — adapto mi CV y portfolio para cada proceso.</p>
        </div>
        <div className="contacts">
          <a href="mailto:leandro.ca.98@gmail.com"><img src="/img/icono-gmail.png" alt="gmail" loading="lazy" decoding="async" /></a>
          <a href="https://www.linkedin.com/in/leandro-carlino/" target="_blank" rel="noreferrer"><img src="/img/icono-linkedin.png" alt="linkedin" loading="lazy" decoding="async" /></a>
          <a href="https://github.com/LeandroCarlino" target="_blank" rel="noreferrer"><img src="/img/icono-git.png" alt="github" loading="lazy" decoding="async" /></a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Leandro Carlino — Frontend Developer</p>
    </footer>
  )
}

