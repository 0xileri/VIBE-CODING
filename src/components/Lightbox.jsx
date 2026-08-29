import { useCallback, useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, Close } from './Icons'

/**
 * Image viewer for the proof gallery. Closes on Escape or backdrop click and
 * steps through the gallery with the arrow keys; focus is moved into the panel
 * on open and handed back to the trigger by the caller on close.
 */
export default function Lightbox({ items, index, onClose, onStep }) {
  const panelRef = useRef(null)
  const item = items[index]

  const step = useCallback(
    (delta) => onStep((index + delta + items.length) % items.length),
    [index, items.length, onStep],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, step])

  if (!item) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.project} — ${item.label}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lightbox__panel" ref={panelRef} tabIndex={-1}>
        <img className="lightbox__img" src={item.image} alt={`${item.project} — ${item.label}`} />

        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
          <Close width={18} height={18} />
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous"
            >
              <ChevronLeft width={18} height={18} />
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => step(1)}
              aria-label="Next"
            >
              <ChevronRight width={18} height={18} />
            </button>
          </>
        )}

        <div className="lightbox__bar">
          <div className="lightbox__meta">
            <strong>{item.project}</strong>
            <span>
              {item.label} · {index + 1}/{items.length}
            </span>
          </div>
          <div className="lightbox__actions">
            <a className="lightbox__link" href={item.url} target="_blank" rel="noreferrer">
              View post on X
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
