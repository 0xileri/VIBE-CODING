import { stats } from '../data'
import SectionHead from './SectionHead'

export default function Stats() {
  return (
    <section className="section shell" id="numbers">
      <SectionHead
        num="04"
        label="By the numbers"
        title={<>The <em>short</em> version</>}
      />

      <div className="stats__grid">
        {stats.map((s, i) => (
          <div className="stat reveal" key={s.label} style={{ '--i': i }}>
            <span className="stat__value">
              {s.value}
              {s.suffix && <span className="stat__suffix">{s.suffix}</span>}
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
