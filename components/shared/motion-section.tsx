"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { fadeUp, viewportOnce } from "@/lib/animations"

interface MotionSectionProps {
  children: ReactNode
  className?: string
}

export function MotionSection({ children, className }: MotionSectionProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}
