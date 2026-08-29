import { useRef, useState } from 'react'
import { proofOfWork } from '../data'
import SectionHead from './SectionHead'
import Lightbox from './Lightbox'
import { ArrowUpRight, Plus } from './Icons'

export default function Proof() {
  const [open, setOpen] = useState(null)
  const triggerRef = useRef(null)

  // Only entries with a screenshot are viewable in the lightbox; the rest link out.
  const gallery = proofOfWork.filter((p) => p.image)

  const close = () => {
    setOpen(null)
    triggerRef.current?.focus()
  }

  return (
    <section className="section shell" id="proof">
      <SectionHead
        num="07"
        label="Proof of work"
        title={<>The <em>receipts</em></>}
        lead="Screenshots and announcements straight from the campaigns. Open one to read it, or jump to the original post on X."
      />

      <div className="proof__grid">
        {proofOfWork.map((p, i) =>
          p.image ? (
            <button
              type="button"
              className="proof-card reveal"
              key={`${p.project}-${p.label}`}
              style={{ '--i': Math.min(i, 6) }}
              onClick={(e) => {
                triggerRef.current = e.currentTarget
                setOpen(gallery.findIndex((g) => g.url === p.url && g.label === p.label))
              }}
              aria-label={`View ${p.project} — ${p.label}`}
            >
              <span className="proof-card__media">
                <img src={p.image} alt={`${p.project} — ${p.label}`} loading="lazy" />
                <span className="proof-card__zoom">
                  <Plus width={15} height={15} />
                </span>
              </span>
              <span className="proof-card__cap">
                <strong>{p.project}</strong>
                <span>{p.label}</span>
              </span>
            </button>
          ) : (
            <a
              className="proof-card reveal"
              key={`${p.project}-${p.label}`}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              style={{ '--i': Math.min(i, 6) }}
            >
              <span className="proof-card__media">
                <span className="proof-card__none">
                  <strong>{p.project}</strong>
                  View on X
                </span>
                <span className="proof-card__zoom">
                  <ArrowUpRight width={15} height={15} />
                </span>
              </span>
              <span className="proof-card__cap">
                <strong>{p.project}</strong>
                <span>{p.label}</span>
              </span>
            </a>
          ),
        )}
      </div>

      {open !== null && open >= 0 && (
        <Lightbox items={gallery} index={open} onClose={close} onStep={setOpen} />
      )}
    </section>
  )
}
