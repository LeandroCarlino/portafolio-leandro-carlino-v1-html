import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="contacts">
            <a href="mailto:leandro.ca.98@gmail.com" aria-label="Email" className="contact-link">
              <img src="/img/icono-gmail.png" alt="Email" loading="lazy" decoding="async" />
            </a>
            <a href="https://www.linkedin.com/in/leandro-carlino/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="contact-link">
              <img src="/img/icono-linkedin.png" alt="LinkedIn" loading="lazy" decoding="async" />
            </a>
            <a href="https://github.com/LeandroCarlino" target="_blank" rel="noreferrer" aria-label="GitHub" className="contact-link">
              <img src="/img/icono-git.png" alt="GitHub" loading="lazy" decoding="async" />
            </a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Leandro Carlino</p>
      </div>
    </footer>
  )
}

