import Link from "next/link"

import { Container } from "@/components/layout/container"
import { MobileMenu } from "@/components/navigation/mobile-menu"
import { NavLinks } from "@/components/navigation/nav-links"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { SITE_NAME } from "@/lib/constants"

export function Navbar() {
  return (
    <header className="border-border/50 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="focus-visible:ring-ring text-sm font-semibold tracking-tight transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:outline-none"
          >
            {SITE_NAME}
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex">
              <NavLinks />
            </div>
            <ThemeSwitcher />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}
