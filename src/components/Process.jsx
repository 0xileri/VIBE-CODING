import { process } from '../data'
import SectionHead from './SectionHead'

export default function Process() {
  return (
    <section className="section shell">
      <SectionHead num="03" label="Process" title={<>How a collaboration <em>runs</em></>} />

      <div className="process__grid">
        {process.map((step, i) => (
          <article className="process__step reveal" key={step.title} style={{ '--i': i }}>
            <span className="process__i">STEP {String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
