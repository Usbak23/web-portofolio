"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import {
  buttonHoverProps,
  fadeScale,
  heroItem,
  staggerContainerSlow,
  viewportEarly,
} from "@/lib/animations"
import { cn } from "@/lib/utils"

export function ContactCTASection() {
  return (
    <section aria-labelledby="contact-cta-heading" className="py-20">
      <Container>
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportEarly}
        >
          {/* Card dengan gradient border via ring effect */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Animated gradient background */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              animate={{
                background: [
                  "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.922 0 0 / 0.06) 0%, transparent 70%)",
                  "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.922 0 0 / 0.06) 0%, transparent 70%)",
                  "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.922 0 0 / 0.06) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />

            <div className="border-border bg-card rounded-2xl border px-8 py-16 text-center">
              <motion.div
                className="mx-auto max-w-2xl space-y-6"
                variants={staggerContainerSlow}
                initial="hidden"
                whileInView="visible"
                viewport={viewportEarly}
              >
                {/* Heading */}
                <motion.h2
                  id="contact-cta-heading"
                  variants={heroItem}
                  className="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Let&apos;s Work Together
                </motion.h2>

                {/* Description */}
                <motion.p
                  variants={heroItem}
                  className="text-muted-foreground text-base leading-relaxed sm:text-lg"
                >
                  I&apos;m currently open to new opportunities. Whether you have
                  a project in mind, a question, or just want to say hello —
                  my inbox is always open.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  variants={heroItem}
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  <motion.div {...buttonHoverProps}>
                    <Link
                      href="/contact"
                      className={cn(buttonVariants({ size: "lg" }))}
                    >
                      Get In Touch
                      <Mail className="size-4" aria-hidden="true" />
                    </Link>
                  </motion.div>
                  <motion.div {...buttonHoverProps}>
                    <a
                      href={`mailto:${profile.email}`}
                      aria-label={`Send email to ${profile.email}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" })
                      )}
                    >
                      {profile.email}
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
