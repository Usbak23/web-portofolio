import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { ExperienceCard } from "@/components/cards/experience-card"
import { SectionTitle } from "@/components/shared/section-title"
import { buttonVariants } from "@/components/ui/button"
import { experiences } from "@/data/experiences"
import { cn } from "@/lib/utils"

const PREVIEW_COUNT = 2

export function ExperiencePreviewSection() {
  const recentExperiences = experiences.slice(0, PREVIEW_COUNT)

  return (
    <section aria-labelledby="experience-preview-heading" className="py-20">
      <Container>
        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              id="experience-preview-heading"
              title="Experience"
              subtitle="Where I've worked and what I've built."
            />
            <Link
              href="/experience"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-fit shrink-0"
              )}
            >
              View All Experience
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {recentExperiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
