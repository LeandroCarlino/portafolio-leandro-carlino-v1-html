import React from 'react'

const Achievements = React.memo(() => {
  const calculateYearsOfExperience = () => {
    const startDate = new Date(2022, 3, 1); // Abril 2022 (mes 3 porque los meses son 0-indexed)
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    
    const totalYears = monthsDiff >= 0 ? yearsDiff : yearsDiff - 1;
    return totalYears >= 3 ? `${totalYears}+` : `${totalYears}`;
  };

  const yearsOfExperience = calculateYearsOfExperience();

  const achievements = [
    { number: yearsOfExperience, label: 'Años de experiencia', icon: '💼' },
    { number: '500+', label: 'Horas de formación', icon: '📚' },
        { number: 'SCRUM', label: 'Metodología ágil', icon: '🔄' },

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
})

export default Achievements