import { Container } from "@/components/layout/container"
import { ExperienceCard } from "@/components/cards/experience-card"
import { SectionTitle } from "@/components/shared/section-title"
import { experiences } from "@/data/experiences"
import type { ExperienceType } from "@/types/experience"

const GROUPS: { label: string; types: ExperienceType[] }[] = [
  { label: "Professional Experience", types: ["Full-time", "Part-time", "Internship", "Freelance"] },
  { label: "Organization Experience", types: ["Organization"] },
]

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="py-20">
      <Container>
        <div className="space-y-16">
          <SectionTitle
            id="experience-heading"
            title="Experience"
            subtitle="My professional journey and organizational involvement."
          />

          {GROUPS.map(({ label, types }) => {
            const grouped = experiences.filter((e) =>
              types.includes(e.type)
            )
            if (grouped.length === 0) return null

            return (
              <div key={label} className="space-y-6">
                <h2 className="text-lg font-semibold text-muted-foreground">
                  {label}
                </h2>

                {/* Timeline */}
                <div className="relative space-y-6 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border">
                  {grouped.map((experience, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <span
                        className="absolute -left-[1.5625rem] top-6 size-3 rounded-full border-2 border-primary bg-background"
                        aria-hidden="true"
                      />
                      <ExperienceCard experience={experience} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
