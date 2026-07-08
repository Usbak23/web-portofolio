import { Container } from "@/components/layout/container"
import { SectionTitle } from "@/components/shared/section-title"
import { ProjectFilter } from "@/components/shared/project-filter"
import { projects } from "@/data/projects"
import type { ProjectCategory } from "@/types/project"

export function ProjectsSection() {
  const categories = [
    ...new Set(projects.map((p) => p.category)),
  ] as ProjectCategory[]

  return (
    <section aria-labelledby="projects-heading" className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            id="projects-heading"
            as="h1"
            title="Projects"
            subtitle="A collection of things I've built — from web apps to APIs."
          />
          <ProjectFilter projects={projects} categories={categories} />
        </div>
      </Container>
    </section>
  )
}
