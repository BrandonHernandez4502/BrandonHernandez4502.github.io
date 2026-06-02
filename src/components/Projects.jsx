import { projects } from '../data'
import { useInView } from '../hooks/useInView'
import './Projects.css'

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function FeaturedProject({ project }) {
  const [ref, visible] = useInView()
  return (
    <article ref={ref} className={`proj-featured fade-in${visible ? ' visible' : ''}`}>
      <div className="proj-featured__top">
        <span className="proj-num">01</span>
        <div className="proj-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHubIcon /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link"
              aria-label={`${project.title} live site`}
            >
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </div>
      <h3 className="proj-featured__title">{project.title}</h3>
      <p className="proj-featured__desc">{project.description}</p>
      <ul className="proj-tags">
        {project.tech.map((t) => (
          <li key={t} className="proj-tag">{t}</li>
        ))}
      </ul>
    </article>
  )
}

function ProjectCard({ project, num, index }) {
  const [ref, visible] = useInView()
  return (
    <article
      ref={ref}
      className={`proj-card fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="proj-card__top">
        <span className="proj-num">{num}</span>
        <div className="proj-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link proj-link--icon"
              aria-label={`${project.title} on GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-link proj-link--icon"
              aria-label={`${project.title} live site`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className="proj-card__title">{project.title}</h3>
      <p className="proj-card__desc">{project.description}</p>
      <ul className="proj-tags">
        {project.tech.map((t) => (
          <li key={t} className="proj-tag">{t}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  return (
    <section id="projects" className="projects">
      <div className="container">
        <header className="section-head">
          <h2 className="section-head__title">Projects</h2>
          <div className="section-head__rule" aria-hidden="true" />
        </header>
        <FeaturedProject project={featured} />
        {rest.length > 0 && (
          <div className="projects__grid">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} num={`0${i + 2}`} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
