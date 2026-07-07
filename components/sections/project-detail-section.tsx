import { ArrowLeft, Calendar, ExternalLink, GitBranch } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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

          {/* Back link */}
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "-ml-2 w-fit gap-1.5"
            )}
            aria-label="Back to all projects"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Projects
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{category}</Badge>
              <Badge
                variant={status === "Completed" ? "default" : "secondary"}
              >
                {status}
              </Badge>
            </div>

            <h1
              id="project-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4 shrink-0" aria-hidden="true" />
                {startDate}
                {endDate ? ` — ${endDate}` : ""}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                  className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
                >
                  <GitBranch className="size-4" aria-hidden="true" />
                  Source Code
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} live demo`}
                  className={cn(buttonVariants({ variant: "default" }), "gap-1.5")}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

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

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Tech stack */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              {images.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">Screenshots</h2>
                  <div className="space-y-3">
                    {images.map((src, i) => (
                      <div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-lg border border-border bg-muted"
                      >
                        <Image
                          src={src}
                          alt={`${title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 400px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </Container>
    </article>
  )
}
