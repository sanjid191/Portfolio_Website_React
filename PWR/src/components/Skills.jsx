const skills = [
  {
    key: 'java',
    name: 'Java',
    level: 50,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    key: 'c',
    name: 'C',
    level: 60,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
  },
  {
    key: 'python',
    name: 'Python',
    level: 40,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    key: 'javascript',
    name: 'JavaScript',
    level: 60,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    key: 'mysql',
    name: 'MySQL',
    level: 70,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  {
    key: 'postgres',
    name: 'PostgreSQL',
    level: 50,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    key: 'git',
    name: 'Git & GitHub',
    level: 80,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    key: 'spring',
    name: 'Java Spring Boot',
    level: 50,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
  },
  {
    key: 'html',
    name: 'HTML',
    level: 90,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    key: 'css',
    name: 'CSS',
    level: 80,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    key: 'latex',
    name: 'LaTeX',
    level: 70,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg'
  },
  {
    key: 'autocad',
    name: 'AutoCAD',
    level: 50,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg'
  }
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__chip">Skills</div>
      <h2 className="section__title">Tooling I rely on every day.</h2>
      <p className="section__description">Languages, frameworks, and platforms measured by hands-on experience.</p>

      <div className="skills__grid">
        {skills.map((skill) => (
          <article key={skill.key} className="skill-card">
            <div className="skill-card__header">
              <span className="glass-icon skill-card__icon" aria-hidden="true">
                <img src={skill.iconUrl} alt="" loading="lazy" />
              </span>
              <div className="skill-card__meta">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
            </div>
            <div
              className="skill-card__meter"
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span style={{ width: `${skill.level}%` }} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
