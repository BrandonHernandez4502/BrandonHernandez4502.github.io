import { personal } from '../data'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__body">
          <p className="hero__eyeline">
            <span className="hero__pulse" aria-hidden="true" />
            Boston, MA
          </p>
          <h1 className="hero__name">
            Brandon<br />
            Hernandez<span className="hero__period" aria-hidden="true">.</span>
          </h1>
          <p className="hero__role">Software Developer / Data Scientist</p>
          <p className="hero__tagline">{personal.tagline}</p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">View My Work</a>
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

        <div className="hero__photo-col">
          <div className="hero__photo-glow" aria-hidden="true" />
          <div className="hero__photo-outer">
            <div className="hero__photo-wrap">
              <img
                src="/2D1A3531.jpg"
                alt="Brandon Hernandez"
                className="hero__photo"
              />
            </div>
            <div className="hero__photo-ring" aria-hidden="true" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
