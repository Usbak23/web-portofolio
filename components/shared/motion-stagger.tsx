"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import {
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  viewportEarly,
} from "@/lib/animations"

type StaggerSpeed = "fast" | "default" | "slow"

interface MotionStaggerProps {
  children: ReactNode
  className?: string
  /** Kecepatan stagger antar children */
  speed?: StaggerSpeed
  /** Delay tambahan sebelum mulai */
  delay?: number
}

const containerMap = {
  fast: staggerContainerFast,
  default: staggerContainer,
  slow: staggerContainerSlow,
}

export function MotionStagger({
  children,
  className,
  speed = "default",
  delay,
}: MotionStaggerProps) {
  const variants = delay
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren:
              speed === "fast" ? 0.07 : speed === "slow" ? 0.12 : 0.1,
            delayChildren: delay,
          },
        },
      }
    : containerMap[speed]

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportEarly}
      className={className}
    >
      {children}
    </motion.div>
  )
}
