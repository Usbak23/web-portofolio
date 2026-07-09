import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SectionTitle } from "@/components/shared/section-title"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

export function AboutPreviewSection() {
  return (
    <section aria-labelledby="about-preview-heading" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <SectionTitle
              id="about-preview-heading"
              title="About Me"
              subtitle="A little bit about who I am and what I do."
            />
            <p className="text-muted-foreground text-base leading-relaxed">
              {profile.bio}
            </p>
            <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {profile.location}
            </div>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              More About Me
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years of Experience", value: "3+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Technologies", value: "25+" },
              { label: "Happy Clients", value: "15+" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="border-border bg-card rounded-xl border p-6 text-center"
              >
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-muted-foreground mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
