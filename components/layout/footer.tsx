import Link from "next/link"

import { Container } from "@/components/layout/container"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border/50 border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-sm">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground focus-visible:ring-ring text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
