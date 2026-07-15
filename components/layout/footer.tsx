import { Container } from "@/components/layout/container"
import { SITE_NAME } from "@/lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border/50 border-t py-8">
      <Container>
        <p className="text-muted-foreground text-center text-sm">
          &copy; {year} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
