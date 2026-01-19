import React, { useState } from 'react'
import '../styles/Modal.css'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/leandro-carlino',
      icon: '💼'
    }
  ]

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('¡Correo copiado al portapapeles!')
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  return (
    <>
      <button className="btn-outline" onClick={openModal} style={{textDecoration: 'none', cursor: 'pointer', border: '1px solid rgba(255, 255, 255, 0.06)', background: 'transparent', padding: '.6rem 1rem', borderRadius: '12px', color: 'var(--text)', display: 'inline-block', textAlign: 'center', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit'}}>
        Contactar
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contactarme</h3>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <p>¡Hablemos! Puedes contactarme a través de:</p>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>

              <div className="or-divider">o</div>

              <div className="gmail-section">
                <div className="gmail-display">
                  <span className="gmail-icon">📧</span>
                  <span className="gmail-address">leandro.ca.98@gmail.com</span>
                </div>
                <button 
                  className="copy-button" 
                  onClick={() => copyToClipboard('leandro.ca.98@gmail.com')}
                >
                  Click para copiar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}