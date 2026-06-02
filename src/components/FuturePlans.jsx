import { futurePlans } from '../data'
import { useInView } from '../hooks/useInView'
import './FuturePlans.css'

function PlanItem({ plan, num, index }) {
  const [ref, visible] = useInView()
  return (
    <li
      ref={ref}
      className={`plan-item fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="plan-item__num">{num}</span>
      <div className="plan-item__body">
        <span className="plan-item__cat">{plan.category}</span>
        <h3 className="plan-item__title">{plan.title}</h3>
        <p className="plan-item__desc">{plan.description}</p>
      </div>
    </li>
  )
}

export default function FuturePlans() {
  return (
    <section id="plans" className="plans">
      <div className="container">
        <header className="section-head">
          <h2 className="section-head__title">What's Next</h2>
          <div className="section-head__rule" aria-hidden="true" />
        </header>
        <ol className="plans__list">
          {futurePlans.map((plan, i) => (
            <PlanItem
              key={plan.id}
              plan={plan}
              num={`0${i + 1}`}
              index={i}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
