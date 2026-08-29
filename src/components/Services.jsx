import { services, profile } from '../data'
import SectionHead from './SectionHead'
import { ArrowRight, ArrowUpRight } from './Icons'

export default function Services() {
  return (
    <section className="section section--invert" id="services">
      <div className="shell">
        <SectionHead
          num="02"
          label="Services"
          title={<>What I <em>do</em> for projects</>}
          lead="Three ways I plug into a team — pick one, or run all three as a single campaign."
        />

        <div className="services__list">
          {services.map((s, i) => (
            <article className="service reveal" key={s.id} style={{ '--i': i }}>
              <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__summary">{s.summary}</p>
                {s.link && (
                  <a
                    className="service__link"
                    href={s.link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.link.label}
                    <ArrowUpRight width={14} height={14} />
                  </a>
                )}
              </div>
              <ul className="service__tags">
                {s.deliverables.map((d) => (
                  <li className="service__tag" key={d}>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services__foot reveal">
          <p className="services__note">
            Need something that isn't listed? If it involves content, community, or
            AI-assisted creative, ask — most of my best work started as a one-off request.
          </p>
          <a className="btn btn--line" href={`mailto:${profile.email}`}>
            Tell me what you need
            <ArrowRight className="btn__arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
