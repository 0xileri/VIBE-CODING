import { useEffect, useState } from 'react'
import { profile } from '../data'
import { ArrowUpRight } from './Icons'

export default function Nav({ sections }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <div className="shell nav__inner">
          <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
            {profile.name}
            <span className="nav__dot">.</span>
          </a>

          <nav className="nav__links" aria-label="Sections">
            {sections.map((s) => (
              <a key={s.id} className="nav__link" data-target={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href="#contact">
            Work with me
            <ArrowUpRight width={12} height={12} />
          </a>

          <button
            type="button"
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Menu">
          {sections.map((s, i) => (
            <a
              key={s.id}
              className="drawer__link"
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
            >
              <span className="drawer__num">{String(i + 1).padStart(2, '0')}</span>
              {s.label}
            </a>
          ))}
          <div className="drawer__foot">
            <a className="btn btn--solid" href="#contact" onClick={() => setOpen(false)}>
              Work with me
              <ArrowUpRight className="btn__arrow" />
            </a>
            <a
              className="btn btn--line"
              href={profile.handleUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              {profile.handle}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
