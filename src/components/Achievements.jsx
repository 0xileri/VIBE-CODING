import { useMemo, useState } from 'react'
import { achievements, recognition } from '../data'
import SectionHead from './SectionHead'
import { ArrowUpRight } from './Icons'

const ALL = 'All'

export default function Achievements() {
  const [filter, setFilter] = useState(ALL)

  const tabs = useMemo(() => {
    const counts = new Map([[ALL, achievements.length]])
    achievements.forEach((a) => counts.set(a.type, (counts.get(a.type) ?? 0) + 1))
    return [...counts.entries()].map(([label, count]) => ({ label, count }))
  }, [])

  const rows = filter === ALL ? achievements : achievements.filter((a) => a.type === filter)

  return (
    <section className="section shell" id="achievements">
      <SectionHead
        num="06"
        label="Index"
        title={<>Every <em>result</em>, on the record</>}
        lead="Hackathon prizes, bounty wins, leaderboard placements, and NFT spots across web3 ecosystems."
      />

      <div className="filters reveal">
        {tabs.map((t) => (
          <button
            type="button"
            key={t.label}
            className={`filter${filter === t.label ? ' is-on' : ''}`}
            aria-pressed={filter === t.label}
            onClick={() => setFilter(t.label)}
          >
            {t.label}
            <span className="filter__count">{t.count}</span>
          </button>
        ))}
      </div>

      <div className="index reveal" style={{ '--i': 1 }}>
        {rows.map((a, i) => {
          // Entries without a public post render as plain rows, not dead links.
          const Row = a.url ? 'a' : 'div'
          const linkProps = a.url
            ? { href: a.url, target: '_blank', rel: 'noreferrer' }
            : undefined

          return (
            <Row
              className={`index__row${a.url ? '' : ' index__row--static'}`}
              key={a.project}
              {...linkProps}
            >
              <span className="index__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="index__project">{a.project}</span>
              <span className="index__detail">{a.detail}</span>
              <span className="index__result">{a.result}</span>
              {a.url && (
                <span className="index__go" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              )}
            </Row>
          )
        })}
        {!rows.length && <p className="index__empty">Nothing in this category yet.</p>}
      </div>

      <div className="recognition reveal">
        <div className="rail">
          <span className="rail__num">✦</span>
          <span className="rail__label">In short</span>
        </div>
        <p>{recognition}</p>
      </div>
    </section>
  )
}
