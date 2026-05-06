import { interests } from '../data'
import { useInView } from '../hooks/useInView'
import './Interests.css'

export default function Interests() {
  const [ref, visible] = useInView()

  return (
    <section id="interests" className="interests">
      <div className="container">
        <span className="section-label">What Drives Me</span>
        <h2 className="section-title">Interests</h2>

        <ul ref={ref} className={`interests__grid fade-in${visible ? ' visible' : ''}`}>
          {interests.map((label) => (
            <li key={label} className="interest-item">
              <span className="interest-item__label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
