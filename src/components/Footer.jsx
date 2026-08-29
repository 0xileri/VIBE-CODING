import { profile, socials } from '../data'
import { ArrowUp } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <a className="footer__brand" href="#top">
          {profile.name}
          <span className="nav__dot">.</span>
        </a>

        <nav className="footer__socials" aria-label="Social links">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <p className="footer__meta">
          © {new Date().getFullYear()} {profile.name} — {profile.role}
        </p>

        <a className="footer__top" href="#top">
          Back to top
          <ArrowUp width={13} height={13} />
        </a>
      </div>
    </footer>
  )
}
