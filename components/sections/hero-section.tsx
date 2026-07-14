"use client"

import { Component, useEffect, useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

import SplitText from "@/components/shared/split-text"
import TextType from "@/components/shared/text-type"
import { SocialLinks } from "@/components/shared/social-links"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import {
  buttonHoverProps,
  heroBadge,
  heroContainer,
  heroItem,
} from "@/lib/animations"
import { cn } from "@/lib/utils"

const Orb = dynamic(() => import("@/components/shared/orb"), { ssr: false })

const Lanyard = dynamic(() => import("@/components/shared/lanyard"), {
  ssr: false,
})

// Error boundary to prevent Lanyard WebGL errors from crashing the page
class LanyardErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

const TITLES = [
  "Fullstack Developer",
  "Software Engineer",
  "Web Developer",
  "Mobile Developer",
]

export function HeroSection() {
  // Defer heavy WebGL components until after page is interactive
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestIdleCallback(
      () => setMounted(true),
      { timeout: 2000 },
    )
    return () => cancelIdleCallback(id)
  }, [])

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-20 text-center"
    >
      {/* Orb — full section background, deferred */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Orb
            hue={0}
            hoverIntensity={2}
            rotateOnHover
            forceHoverState={false}
          />
        </div>
      )}

      {/* Lanyard — absolute full area, desktop only, deferred */}
      {mounted && (
        <div
          className="absolute inset-0 hidden xl:block"
          aria-hidden="true"
        >
          <LanyardErrorBoundary>
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/images/avatar.png"
              imageFit="cover"
              groupPositionY={6}
            />
          </LanyardErrorBoundary>
        </div>
      )}

      {/* Hero content — stays centered */}
      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge "Available for work" */}
        <motion.div variants={heroBadge}>
          <span className="text-muted-foreground inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
            <span className="inline-block size-1.5 rounded-full bg-green-500" aria-hidden="true" />
            Available for work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={heroItem} className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <SplitText
              text={`Hi, I'm ${profile.name}`}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              tag="span"
              delay={30}
              duration={0.8}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
        </motion.div>

        {/* Typing subtitle */}
        <motion.p
          variants={heroItem}
          className="text-muted-foreground text-xl font-medium sm:text-2xl"
        >
          <TextType
            text={TITLES}
            as="span"
            className="text-muted-foreground text-xl font-medium sm:text-2xl"
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            loop
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={heroItem}
          className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItem}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div {...buttonHoverProps}>
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              View My Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </motion.div>
          <motion.div {...buttonHoverProps}>
            <a
              href={profile.resumeUrl}
              download
              aria-label="Download resume"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Download Resume
              <Download className="size-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={heroItem}>
          <SocialLinks socials={socials} />
        </motion.div>
      </motion.div>
    </section>
  )
}
