import { profile, socials, telegram } from '../data'
import { ArrowUpRight } from './Icons'

export default function Contact() {
  const links = [
    { where: 'X — DM open', who: profile.handle, url: profile.handleUrl },
    { where: 'Telegram', who: telegram.handle, url: telegram.url },
    { where: 'Email', who: profile.email, url: `mailto:${profile.email}` },
    ...socials
      .filter((s) => s.label !== 'X')
      .map((s) => ({ where: s.label, who: s.handle, url: s.url })),
  ]

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <h2 className="contact__title reveal">
          Let's make
          <br />
          something <em>land</em>.
        </h2>

        <p className="contact__lead reveal" style={{ '--i': 1 }}>
          Campaign to run, community to grow, or a launch that needs content people
          actually share? Tell me what you're building and I'll tell you straight
          whether I'm the right person for it.
        </p>

        <div className="contact__links reveal" style={{ '--i': 2 }}>
          {links.map((l) => (
            <a
              className="contact__link"
              key={l.where}
              href={l.url}
              {...(l.url.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
            >
              <span className="contact__where">{l.where}</span>
              <span className="contact__who">{l.who}</span>
              <span className="contact__go" aria-hidden="true">
                <ArrowUpRight width={20} height={20} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
