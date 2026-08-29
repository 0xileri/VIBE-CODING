import { featured } from '../data'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'

export default function Featured() {
  return (
    <section className="section shell" id="work">
      <SectionHead
        num="05"
        label="Featured wins"
        title={<>Three that <em>stand out</em></>}
        lead="Judged against the full field of entrants — not handed out. Every one links to the public announcement."
      />

      <div className="featured__list">
        {featured.map((f, i) => (
          <a
            className="feature reveal"
            key={f.project}
            href={f.url}
            target="_blank"
            rel="noreferrer"
            style={{ '--i': i }}
          >
            <div className="feature__thumb">
              <img src={f.image} alt={`${f.project} — ${f.result} announcement`} loading="lazy" />
            </div>

            <div>
              <p className="feature__kicker">{f.kicker}</p>
              <h3 className="feature__title">
                {f.project}
                <span className="feature__result">{f.result}</span>
              </h3>
              <p className="feature__detail">{f.detail}</p>
            </div>

            <span className="feature__go" aria-hidden="true">
              <ArrowUpRight width={18} height={18} />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
