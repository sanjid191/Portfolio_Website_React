const projects = [
  {
    title: 'GlowStudio Creative Platform',
    description: 'Immersive portfolio hub for a creative agency featuring motion-driven case studies and a modular CMS.',
    tech: ['React', 'Vite', 'Storyblok', 'Framer Motion'],
    status: 'Live',
  },
  {
    title: 'Pulse Analytics Dashboard',
    description: 'High-contrast analytics workspace with realtime collaboration, canvas annotations, and adaptive theming.',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'Supabase'],
    status: 'Beta',
  },
  {
    title: 'Muse Music Experience',
    description: 'Audio-visual storytelling experience with spatial audio triggers and layered 3D scenes built for launch events.',
    tech: ['Three.js', 'GSAP', 'Node.js'],
    status: 'In production',
  }
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__chip">Projects</div>
      <div className="projects__header">
        <div>
          <h2 className="section__title">Selected work scaling beauty and performance.</h2>
          <p className="section__description">
            Browse a handful of builds that spotlight storytelling, systems thinking, and engineering precision.
          </p>
        </div>
        <a className="projects__cta" href="#contact">Request full case studies</a>
      </div>

      <div className="projects__grid magic-bento">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__media" aria-hidden="true">
              <div className="project-card__glow" />
              <span className="glass-icon project-card__status">{project.status}</span>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-card__tags">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <button type="button" className="project-card__button">See details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
