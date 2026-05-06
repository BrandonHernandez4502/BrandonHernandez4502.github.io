import { personal } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__dots" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          {personal.name}
          <span className="hero__cursor" aria-hidden="true" />
        </h1>
        <p className="hero__title">{personal.title}</p>
        <p className="hero__tagline">{personal.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
