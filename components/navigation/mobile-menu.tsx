"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { SocialLinks } from "@/components/shared/social-links"
import { Button, buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => setOpen(false), 0)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu className="size-5" />
      </Button>

      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            id="mobile-menu"
          >
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              className="bg-background border-border fixed inset-y-0 right-0 flex w-4/5 max-w-sm flex-col border-l shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <Link
                  href="/"
                  className="focus-visible:ring-ring text-sm font-semibold tracking-tight transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none"
                  onClick={() => setOpen(false)}
                >
                  {SITE_NAME}
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </Button>
              </div>

              {/* Nav Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex-1 overflow-y-auto px-4 py-6"
              >
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map(({ label, href }, index) => {
                    const isActive =
                      pathname === href || pathname.startsWith(`${href}/`)
                    return (
                      <motion.li
                        key={href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.04,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={href}
                          className={cn(
                            "block rounded-md px-4 py-3.5 text-base font-medium transition-colors",
                            "hover:bg-accent hover:text-accent-foreground",
                            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground"
                          )}
                          aria-current={isActive ? "page" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {label}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Footer: Social + Resume */}
              <motion.div
                className="border-t px-6 py-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.2, ease: "easeOut" }}
              >
                <a
                  href={profile.resumeUrl}
                  download
                  aria-label="Download Resume"
                  className={buttonVariants({
                    variant: "outline",
                    size: "sm",
                    className: "mb-4 w-full gap-2",
                  })}
                >
                  <Download className="size-4" />
                  Download CV
                </a>

                <SocialLinks socials={socials} className="justify-center" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
