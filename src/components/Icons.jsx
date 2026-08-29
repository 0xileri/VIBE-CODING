const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  )
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function Plus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3.5v9M3.5 8h9" />
    </svg>
  )
}

export function Close(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  )
}

export function ChevronLeft(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3 5 8l5 5" />
    </svg>
  )
}

export function ChevronRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3l5 5-5 5" />
    </svg>
  )
}

export function ArrowUp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  )
}
