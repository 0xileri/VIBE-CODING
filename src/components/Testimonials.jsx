import { testimonials } from '../data'
import SectionHead from './SectionHead'

/**
 * Renders nothing until real quotes are added to `testimonials` in data.js —
 * an empty section is worse than no section.
 */
export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <section className="section shell" id="testimonials">
      <SectionHead num="08" label="Words" title={<>What partners <em>say</em></>} />

      <div className="quotes__grid">
        {testimonials.map((t, i) => (
          <figure className="quote reveal" key={t.quote} style={{ '--i': i }}>
            <span className="quote__mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="quote__text">{t.quote}</blockquote>
            <figcaption className="quote__by">
              <span className="quote__name">
                {t.url ? (
                  <a href={t.url} target="_blank" rel="noreferrer">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}
              </span>
              {(t.title || t.org) && (
                <span className="quote__role">{[t.title, t.org].filter(Boolean).join(' · ')}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
