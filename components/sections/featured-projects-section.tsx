import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/cards/project-card"
import { SectionTitle } from "@/components/shared/section-title"
import { buttonVariants } from "@/components/ui/button"
import { getFeaturedProjects } from "@/lib/helpers"
import { cn } from "@/lib/utils"

export function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section aria-labelledby="featured-projects-heading" className="py-20">
      <Container>
        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              id="featured-projects-heading"
              title="Featured Projects"
              subtitle="A selection of projects I'm most proud of."
            />
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline" }), "w-fit shrink-0")}
            >
              View All Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
