import { personal } from '../data'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="about">
      <div className="container">
        <header className="section-head">
          <h2 className="section-head__title">About</h2>
          <div className="section-head__rule" aria-hidden="true" />
        </header>

        <div ref={ref} className={`about__layout fade-in${visible ? ' visible' : ''}`}>
          <div className="about__text">
            {personal.bio.map((p, i) => (
              <p key={i} className="about__bio">{p}</p>
            ))}
          </div>

          <aside className="about__sidebar">
            <div className="about__block">
              <span className="about__label">Location</span>
              <span className="about__val">{personal.location}</span>
            </div>
            <div className="about__block">
              <span className="about__label">Stack</span>
              <ul className="about__skills">
                {personal.skills.map((s) => (
                  <li key={s} className="about__skill">{s}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
