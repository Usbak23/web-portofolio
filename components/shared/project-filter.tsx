"use client"

import { useState } from "react"

import { ProjectCard } from "@/components/cards/project-card"
import { cn } from "@/lib/utils"
import type { Project, ProjectCategory } from "@/types/project"

const ALL = "All"

interface ProjectFilterProps {
  projects: Project[]
  categories: ProjectCategory[]
}

export function ProjectFilter({ projects, categories }: ProjectFilterProps) {
  const [active, setActive] = useState<ProjectCategory | typeof ALL>(ALL)

  const filtered =
    active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="space-y-8">
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {[ALL, ...categories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat as ProjectCategory | typeof ALL)}
            className={cn(
              "rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Screen reader announcement */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {filtered.length === 0
          ? `No projects found in the ${active} category.`
          : `Showing ${filtered.length} ${filtered.length === 1 ? "project" : "projects"}${active !== ALL ? ` in ${active}` : ""}.`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card text-center">
          <p className="font-medium">No projects found</p>
          <p className="text-sm text-muted-foreground">
            No projects in the &quot;{active}&quot; category yet.
          </p>
        </div>
      )}
    </div>
  )
}
