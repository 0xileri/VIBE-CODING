import { profile, roles } from '../data'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section className="section shell" id="about">
      <SectionHead num="01" label="About" title={<>Who you'd be <em>working with</em></>} />

      <div className="about__body">
        <div />
        <div className="about__cols">
          <p className="about__statement reveal">
            I've spent years learning what makes crypto natives <em>stop scrolling</em> — and
            turning that into growth for the projects I back.
          </p>

          <div className="about__text reveal" style={{ '--i': 1 }}>
            <p>{profile.bio}</p>
            <p>
              Most of that work has been earned rather than assigned: campaigns entered
              alongside thousands of other creators, and content judged on its own merit.
              On the building side, LEAPSY — an options-strategy agent I built for
              long-horizon crypto investors — took a $3,000 prize at the OKX hackathon and
              is listed on OKX.AI.
            </p>
          </div>

          <ul className="roles reveal" style={{ '--i': 2 }}>
            {roles.map((r) => (
              <li className="role" key={r.org}>
                <span className="role__org">{r.org}</span>
                <span className="role__role">{r.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
