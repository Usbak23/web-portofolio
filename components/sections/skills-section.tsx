import { Container } from "@/components/layout/container"
import { SkillCard } from "@/components/cards/skill-card"
import { SectionTitle } from "@/components/shared/section-title"
import { MotionStagger } from "@/components/shared/motion-stagger"
import { getAllSkillCategories, getSkillsByCategory } from "@/lib/helpers"

export function SkillsSection() {
  const categories = getAllSkillCategories()

  return (
    <section aria-labelledby="skills-heading" className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            id="skills-heading"
            title="Skills & Technologies"
            subtitle="Technologies and tools I work with on a daily basis."
            align="center"
          />

          <MotionStagger
            speed="slow"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category) => {
              const categorySkills = getSkillsByCategory(category)
              return (
                <div key={category} className="space-y-3">
                  <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                    {category}
                  </h3>
                  {/* Stagger skills dalam setiap kategori */}
                  <MotionStagger
                    speed="fast"
                    className="flex flex-wrap gap-2"
                  >
                    {categorySkills.map((skill) => (
                      <SkillCard
                        key={skill.name}
                        skill={skill}
                        className="list-none"
                      />
                    ))}
                  </MotionStagger>
                </div>
              )
            })}
          </MotionStagger>
        </div>
      </Container>
    </section>
  )
}
