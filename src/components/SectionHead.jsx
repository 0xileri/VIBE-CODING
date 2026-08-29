/**
 * Shared section header: mono rail (number + label) beside a display title.
 * `title` accepts JSX so callers can italicise a word for accent.
 */
export default function SectionHead({ num, label, title, lead }) {
  return (
    <header className="head reveal">
      <div className="rail">
        <span className="rail__num">{num}</span>
        <span className="rail__label">{label}</span>
      </div>
      <div>
        <h2 className="head__title">{title}</h2>
        {lead && <p className="head__lead">{lead}</p>}
      </div>
    </header>
  )
}
