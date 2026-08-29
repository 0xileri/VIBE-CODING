import { profile, heroMeta } from '../data'
import avatar from '../assets/avatar.jpg'
import { ArrowRight, ArrowUpRight } from './Icons'

export default function Hero() {
  return (
    <section className="section hero shell" id="top">
      <div className="hero__grid">
        <div>
          <p className="hero__status reveal">
            <span className="pulse" />
            {profile.available} · {profile.tagline}
          </p>

          <h1 className="hero__title reveal" style={{ '--i': 1 }}>
            <span>Content that</span>
            <span>
              <em>earns</em> attention
            </span>
            <span className="thin">— and keeps it.</span>
          </h1>

          <p className="hero__lead reveal" style={{ '--i': 2 }}>
            {profile.bioShort}
          </p>

          <div className="hero__actions reveal" style={{ '--i': 3 }}>
            <a className="btn btn--solid" href="#contact">
              Start a project
              <ArrowRight className="btn__arrow" />
            </a>
            <a className="btn btn--line" href="#work">
              See the receipts
              <ArrowRight className="btn__arrow" />
            </a>
          </div>
        </div>

        <figure className="hero__portrait reveal" style={{ '--i': 2 }}>
          <div className="hero__frame">
            <img src={avatar} alt={`${profile.name} — profile`} width="300" height="300" />
          </div>
          <figcaption className="hero__caption">
            <span>{profile.name}</span>
            <a href={profile.handleUrl} target="_blank" rel="noreferrer">
              {profile.handle}
              <ArrowUpRight width={10} height={10} />
            </a>
          </figcaption>
        </figure>
      </div>

      <dl className="hero__meta reveal" style={{ '--i': 4 }}>
        {heroMeta.map((m) => (
          <div key={m.key}>
            <dt>{m.key}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
