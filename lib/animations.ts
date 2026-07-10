import type { Variants } from "framer-motion"

// ─── Durations ───────────────────────────────────────────────────────────────
export const DURATION = {
  fast: 0.2,
  medium: 0.35,
  slow: 0.5,
  slower: 0.7,
} as const

// ─── Easing ──────────────────────────────────────────────────────────────────
export const EASE = {
  out: [0, 0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1],
  spring: [0.175, 0.885, 0.32, 1.1],
  expo: [0.16, 1, 0.3, 1],
} as const

// ─── Basic Variants ───────────────────────────────────────────────────────────

/** Fade in dari transparent */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.medium, ease: EASE.out },
  },
}

/** Fade in + slide up — lebih jauh & lebih dramatis */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

/** Fade in + slide up subtle, untuk elemen kecil */
export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE.expo },
  },
}

/** Fade in + slide dari kiri */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

/** Fade in + slide dari kanan */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

/** Fade in + scale up sedikit — premium reveal */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

/** Scale untuk hero section, scale lebih besar */
export const heroScale: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DURATION.slower, ease: EASE.expo },
  },
}

// ─── Stagger Containers ───────────────────────────────────────────────────────

/** Stagger children entrance — default */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

/** Stagger lebih lambat, untuk card grid yang lebih besar */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

/** Stagger cepat, untuk item list kecil */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.0,
    },
  },
}

/** Individual child item untuk staggered list */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.medium, ease: EASE.expo },
  },
}

/** Child item dengan scale — untuk card */
export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

/** Child item slide dari kiri — untuk timeline */
export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

// ─── Hero Cascade ─────────────────────────────────────────────────────────────

/** Container untuk hero — cascade semua anak */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
}

/** Setiap elemen hero — fade + slide up */
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slower, ease: EASE.expo },
  },
}

/** Badge/label kecil di hero — subtle */
export const heroBadge: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.expo },
  },
}

// ─── Hover Variants ───────────────────────────────────────────────────────────

/** Card hover — lift ke atas + shadow */
export const cardHoverProps = {
  whileHover: {
    y: -6,
    transition: { duration: 0.25, ease: EASE.out },
  },
  whileTap: {
    y: -2,
    scale: 0.99,
    transition: { duration: 0.1 },
  },
}

/** Subtle card hover — untuk skill / badge */
export const subtleHoverProps = {
  whileHover: {
    y: -3,
    scale: 1.03,
    transition: { duration: 0.2, ease: EASE.out },
  },
}

/** Button hover scale */
export const buttonHoverProps = {
  whileHover: {
    scale: 1.03,
    transition: { duration: 0.2, ease: EASE.out },
  },
  whileTap: {
    scale: 0.97,
    transition: { duration: 0.1 },
  },
}

// ─── Viewport Options ─────────────────────────────────────────────────────────

/** Trigger sekali ketika elemen masuk viewport */
export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const

/** Trigger lebih cepat — untuk elemen besar seperti section title */
export const viewportEarly = {
  once: true,
  margin: "-40px",
} as const

/** Trigger untuk item yang ada di dalam stagger container */
export const viewportLazy = {
  once: true,
  margin: "-60px",
} as const
