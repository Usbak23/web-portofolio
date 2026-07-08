import Image from "next/image"

import { Container } from "@/components/layout/container"
import { ProjectDetailHeader } from "@/components/cards/project-detail-header"
import { ProjectDetailSidebar } from "@/components/cards/project-detail-sidebar"
import type { Project } from "@/types/project"

interface ProjectDetailSectionProps {
  project: Project
}

interface DetailBlockProps {
  heading: string
  items: string[]
}

function DetailBlock({ heading, items }: DetailBlockProps) {
  if (items.length === 0) return null
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">{heading}</h2>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
  const {
    title,
    description,
    thumbnail,
    images,
    technologies,
    category,
    status,
    startDate,
    endDate,
    githubUrl,
    liveUrl,
    features,
    challenges,
    solutions,
    lessons,
  } = project

  return (
    <article aria-labelledby="project-title" className="py-20">
      <Container>
        <div className="space-y-12">
          <ProjectDetailHeader
            title={title}
            category={category}
            status={status}
            startDate={startDate}
            endDate={endDate}
            githubUrl={githubUrl}
            liveUrl={liveUrl}
          />

          {/* Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src={thumbnail}
              alt={`${title} project screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {/* Content grid */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-2">
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Overview</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>

              <DetailBlock heading="Key Features" items={features} />
              <DetailBlock heading="Challenges" items={challenges} />
              <DetailBlock heading="Solutions" items={solutions} />
              <DetailBlock heading="Lessons Learned" items={lessons} />
            </div>

            <ProjectDetailSidebar
              title={title}
              technologies={technologies}
              images={images}
            />
          </div>
        </div>
      </Container>
    </article>
  )
}
