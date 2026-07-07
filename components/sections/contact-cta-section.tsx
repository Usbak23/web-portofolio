import { Mail } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

export function ContactCTASection() {
  return (
    <section aria-labelledby="contact-cta-heading" className="py-20">
      <Container>
        <div className="rounded-2xl border border-border bg-card px-8 py-16 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2
              id="contact-cta-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hello — my inbox
              is always open.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                Get In Touch
                <Mail className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Send email to ${profile.email}`}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
