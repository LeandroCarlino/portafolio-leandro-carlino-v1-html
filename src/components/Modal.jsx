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
      <button className="btn-primary" onClick={openModal} style={{textDecoration: 'none', cursor: 'pointer', background: 'linear-gradient(90deg, var(--accent), #28d0e8)', color: '#022', padding: '.75rem 1.15rem', borderRadius: '12px', fontWeight: '700', boxShadow: '0 8px 20px rgba(31, 190, 207, 0.12)', border: 'none', display: 'inline-block', textAlign: 'center', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit'}}>
        Contactar
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
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