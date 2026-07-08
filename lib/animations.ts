import type { Variants } from "framer-motion"

// ─── Durations ───────────────────────────────────────────────────────────────
export const DURATION = {
  fast: 0.2,
  medium: 0.3,
  slow: 0.4,
} as const

// ─── Easing ──────────────────────────────────────────────────────────────────
export const EASE = {
  out: [0, 0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1],
} as const

// ─── Variants ────────────────────────────────────────────────────────────────

/** Fade in from transparent */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
}

/** Fade in + slide up slightly */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
}

/** Stagger children entrance */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/** Individual child item for staggered lists */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
}

/** Shared viewport options — trigger once when element enters view */
export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const
