"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { fadeUp, viewportOnce } from "@/lib/animations"

interface MotionSectionProps {
  children: ReactNode
  className?: string
}

export function MotionSection({ children, className }: MotionSectionProps) {
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
