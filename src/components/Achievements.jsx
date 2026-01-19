import React from 'react'

export default function Achievements() {
  const achievements = [
    { number: '500+', label: 'Horas de formación', icon: '📚' },
    { number: '3+', label: 'Años de experiencia', icon: '💼' },
    { number: 'SCRUM', label: 'Metodología ágil', icon: '🔄' }
  ]

  return (
    <section id="achievements" className="achievements container">
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-number">{achievement.number}</div>
            <div className="achievement-label">{achievement.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}