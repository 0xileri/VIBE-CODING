import { useEffect } from 'react'

/**
 * Fades elements marked with `.reveal` into view as they enter the viewport.
 * Elements are revealed once and then unobserved. Honours reduced-motion by
 * revealing everything immediately.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-in)')
    if (!nodes.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  })
}

/**
 * Tracks which section is currently in view so the nav can highlight it.
 */
export function useScrollSpy(ids, offset = 96) {
  useEffect(() => {
    if (!ids.length) return

    const onScroll = () => {
      // Nothing is "current" until the first section reaches the nav.
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) current = id
      }
      document
        .querySelectorAll('.nav__link')
        .forEach((a) => a.classList.toggle('is-active', a.dataset.target === current))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])
}
