import Path2ProThumb from '../assets/Projects_thumbnail/Path2Pro.jpg'
import EmSJavaThumb from '../assets/Projects_thumbnail/EMS_Java_Swing.jpg'
import CryptoThumb from '../assets/Projects_thumbnail/Up Coming.png'
import CgpaThumb from '../assets/Projects_thumbnail/CGPA_Calculator.jpg'
import RobotThumb from '../assets/Projects_thumbnail/2D Robot Soccer Simulation (Lightweight).jpg'

const projects = [
  {
    title: 'Path2Pro',
    subtitle: 'Academic and Skill Development Platform',
    description:
      'A unified hub where students curate learning pathways, track certifications, and earn micro-credentials that translate into hiring-ready portfolios.',
    tech: ['Next.js', 'Supabase', 'Stripe', 'Shadcn UI'],
    status: 'Concept build',
    featured: true,
    image: Path2ProThumb,
    actions: [
      { label: 'Explore product map', href: '#', type: 'primary' },
      { label: 'Partner with me', href: '#contact', type: 'ghost' }
    ]
  },
  {
    title: 'Employee Management System',
    subtitle: 'Java desktop suite for HR operations',
    description:
      'A Java Swing application that centralises staff onboarding, attendance, payroll, and performance reports for small businesses.',
    tech: ['Java', 'Swing', 'MySQL', 'JasperReports'],
    status: 'Live deployment',
    image: EmSJavaThumb,
    actions: [{ label: 'View project journal', href: '#', type: 'primary' }]
  },
  {
    title: 'CryptoVisualizer',
    subtitle: 'Demystifying cryptography through motion',
    description:
      'Interactive playground showcasing encryption algorithms, key exchanges, and hashing flows with generative animations.',
    tech: ['React', 'Three.js', 'd3.js'],
    status: 'Prototype',
    image: CryptoThumb,
    actions: [
      { label: 'Run the demo', href: '#', type: 'primary' },
      { label: 'Read the notes', href: '#', type: 'ghost' }
    ]
  },
  {
    title: 'CGPA Calculator',
    subtitle: 'Academic insight dashboard',
    description:
      'Responsive SPA for students to project semester targets, simulate retake outcomes, and export advisor-ready summaries.',
    tech: ['Vue', 'Pinia', 'Tailwind', 'Vite'],
    status: 'Live',
    image: CgpaThumb,
    actions: [{ label: 'Open web app', href: '#', type: 'primary' }]
  },
  {
    title: '2D Robot Soccer Simulation',
    subtitle: 'Lightweight Python-based match engine',
    description:
      'A physics-informed simulator to prototype robot tactics, visualise passing lanes, and replay highlight reels in real time.',
    tech: ['Python', 'Pygame', 'NumPy'],
    status: 'Beta',
    image: RobotThumb,
    actions: [{ label: 'Watch match replay', href: '#', type: 'primary' }]
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
          <article
            key={project.title}
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
          >
            <div className="project-card__media" aria-hidden="true">
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} thumbnail artwork`}
                  className="project-card__image"
                  loading="lazy"
                />
              )}
              <div className="project-card__glow" />
              <span className="glass-icon project-card__status">{project.status}</span>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              {project.subtitle && <p className="project-card__subtitle">{project.subtitle}</p>}
              <p>{project.description}</p>
              <ul className="project-card__tags">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.actions && project.actions.length > 0 && (
                <div className="project-card__actions">
                  {project.actions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`project-card__action project-card__action--${action.type || 'primary'}`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
