const education = [
  {
    school: 'American International University-Bangladesh',
    program: 'BSc in Computer Science & Engineering',
    period: '2022 — Present',
    summary: 'Focused on human-computer interaction, immersive storytelling, and full-stack experimentation.'
  },
  {
    school: 'UX Design Collective',
    program: 'Visual Systems & Design Strategy',
    period: '2024',
    summary: 'Built a modular design system with advanced accessibility patterns and prototyping workflows.'
  }
]

const experience = [
  {
    company: 'Pixel Pulse Studio',
    role: 'Front-End Engineer · Contract',
    period: '2024 — Present',
    impact: 'Launched interactive marketing sites with cinematic motion and optimized Core Web Vitals (LCP 1.3s avg).'
  },
  {
    company: 'Nova Labs',
    role: 'Product Designer & Developer',
    period: '2023 — 2024',
    impact: 'Co-led design sprints, delivered design system foundations, and shipped responsive dashboards with React + TypeScript.'
  }
]

const leadership = [
  {
    org: 'AIUB Developer Community',
    role: 'Lead Visual Engineer',
    period: '2024 — Present',
    detail: 'Mentored 40+ students, produced weekly design critiques, and organized rapid prototyping hack sessions.'
  },
  {
    org: 'Design Jam Dhaka',
    role: 'Workshop Facilitator',
    period: '2023',
    detail: 'Guided teams through experience mapping and motion explorations for real-world brands.'
  }
]

function Resume() {
  return (
    <section id="resume" className="section section--alt">
      <div className="section__chip">Resume</div>
      <h2 className="section__title">Experience layered with leadership and craft.</h2>
      <p className="section__description">
        Strategizing bold ideas, writing production-ready code, and rallying teams around design excellence.
      </p>

      <div className="resume__grid">
        <div className="resume__column">
          <h3 className="resume__heading">Education</h3>
          <ul className="resume__list">
            {education.map((item) => (
              <li key={item.school} className="resume__item">
                <div>
                  <h4>{item.school}</h4>
                  <p className="resume__meta">{item.program}</p>
                </div>
                <span className="resume__period">{item.period}</span>
                <p className="resume__detail">{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume__column">
          <h3 className="resume__heading">Experience</h3>
          <ul className="resume__list">
            {experience.map((item) => (
              <li key={item.company} className="resume__item">
                <div>
                  <h4>{item.company}</h4>
                  <p className="resume__meta">{item.role}</p>
                </div>
                <span className="resume__period">{item.period}</span>
                <p className="resume__detail">{item.impact}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume__column">
          <h3 className="resume__heading">Leadership</h3>
          <ul className="resume__list">
            {leadership.map((item) => (
              <li key={item.org} className="resume__item">
                <div>
                  <h4>{item.org}</h4>
                  <p className="resume__meta">{item.role}</p>
                </div>
                <span className="resume__period">{item.period}</span>
                <p className="resume__detail">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume
