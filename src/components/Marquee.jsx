import { ticker } from '../data'

/**
 * Seamless ticker. The track is rendered twice so the -100% translate loops
 * without a visible seam; the copy is hidden from assistive tech.
 */
export default function Marquee() {
  const track = (
    <div className="marquee__track">
      {ticker.map((t) => (
        <span className="marquee__item" key={t}>
          {t}
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" aria-label="Projects and ecosystems worked with">
      {track}
      <div aria-hidden="true" className="marquee__track">
        {ticker.map((t) => (
          <span className="marquee__item" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
