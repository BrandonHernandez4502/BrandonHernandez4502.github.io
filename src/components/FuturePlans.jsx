import { futurePlans } from '../data'
import { useInView } from '../hooks/useInView'
import './FuturePlans.css'

const categoryColor = {
  Learning: '#a78bfa',
  Projects: '#34d399',
  Career: '#f472b6',
  Community: '#fb923c',
}

function PlanCard({ plan, index }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`plan-card fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span
        className="plan-card__category"
        style={{ color: categoryColor[plan.category] ?? 'var(--accent-light)' }}
      >
        {plan.category}
      </span>
      <h3 className="plan-card__title">{plan.title}</h3>
      <p className="plan-card__desc">{plan.description}</p>
    </div>
  )
}

export default function FuturePlans() {
  return (
    <section id="plans" className="plans">
      <div className="container">
        <span className="section-label">Where I'm Headed</span>
        <h2 className="section-title">Future Plans</h2>
        <div className="plans__grid">
          {futurePlans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
