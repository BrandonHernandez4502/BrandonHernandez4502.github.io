import { interests } from '../data'
import './Interests.css'

export default function Interests() {
  const doubled = [...interests, ...interests]

  return (
    <div id="interests" className="marquee" role="region" aria-label="Areas of interest">
      <ul className="sr-only">
        {interests.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
      <div className="marquee__track" aria-hidden="true">
        {doubled.map((label, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__sep">◆</span>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
