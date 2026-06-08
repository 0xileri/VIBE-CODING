import {
  profile,
  stats,
  roles,
  achievements,
  recognition,
  proofOfWork,
} from './data'
import avatar from './assets/avatar.jpg'
import './App.css'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'numbers', label: 'By the Numbers' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'proof', label: 'Proof of Work' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <header className="nav">
        <a className="nav__brand" href="#top">
          <img className="nav__avatar" src={avatar} alt="" />
          {profile.name}
        </a>
        <nav className="nav__links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta" href={profile.handleUrl} target="_blank" rel="noreferrer">
          {profile.handle}
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero__avatar" src={avatar} alt={`${profile.name} logo`} />
          <p className="hero__eyebrow">{profile.handle} · {profile.tagline}</p>
          <h1 className="hero__title">
            Hi, I'm <span className="accent">{profile.name}</span> —
            content that helps web3 projects grow.
          </h1>
          <p className="hero__subtitle">{profile.bio}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={profile.handleUrl} target="_blank" rel="noreferrer">
              Follow on X
            </a>
            <a className="btn btn--ghost" href="#achievements">
              See my wins
            </a>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>{profile.bio}</p>
          <div className="about__roles">
            {roles.map((r) => (
              <div key={r.org} className="role-pill">
                <span className="role-pill__role">{r.role}</span>
                <span className="role-pill__org">{r.org}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="numbers" className="numbers">
          <h2>By the Numbers</h2>
          <div className="numbers__grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="achievements">
          <h2>Notable Achievements</h2>
          <p className="section-lead">Bounty wins &amp; placements across web3 ecosystems.</p>
          <div className="achievements__grid">
            {achievements.map((a) => (
              <article key={a.project} className="achievement-card">
                <div className="achievement-card__head">
                  <h3>{a.project}</h3>
                  <span className="badge">{a.result}</span>
                </div>
                <p>{a.detail}</p>
              </article>
            ))}
          </div>
          <p className="recognition">{recognition}</p>
        </section>

        <section id="proof" className="proof">
          <h2>Proof of Work</h2>
          <p className="section-lead">
            Screenshots, certificates, and announcements coming soon — swap these
            placeholders for the real thing.
          </p>
          <div className="proof__grid">
            {proofOfWork.map((p) => (
              <div key={`${p.project}-${p.label}`} className="proof-card">
                <span className="proof-card__placeholder">Image</span>
                <div className="proof-card__caption">
                  <strong>{p.project}</strong>
                  <span>{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Let's work together</h2>
          <p>
            Looking for a creator who can grow your community and ship content
            that wins? Reach out on X or drop an email.
          </p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={profile.handleUrl} target="_blank" rel="noreferrer">
              DM on X — {profile.handle}
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </>
  )
}

export default App
