import { personal } from '../data'
import { useInView } from '../hooks/useInView'
import './About.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-label">Who I Am</span>
        <h2 className="section-title">About Me</h2>

        <div ref={ref} className={`about__grid fade-in${visible ? ' visible' : ''}`}>
          <div className="about__avatar-wrap">
            <div className="about__avatar">
              <span>
                {personal.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
            <div className="about__avatar-ring" aria-hidden="true" />
          </div>

          <div className="about__content">
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="about__bio">
                {paragraph}
              </p>
            ))}

            <div className="about__skills">
              <h3 className="about__skills-heading">Technologies I work with</h3>
              <ul className="about__skills-list">
                {personal.skills.map((skill) => (
                  <li key={skill} className="about__skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
