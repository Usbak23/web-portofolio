import { ExternalLink, GitBranch } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    slug,
    title,
    summary,
    thumbnail,
    technologies,
    status,
    githubUrl,
    liveUrl,
  } = project

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md",
        className
      )}
    >
      <Link
        href={`/projects/${slug}`}
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`View ${title} project details`}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={thumbnail}
            alt={`${title} project thumbnail`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <h3 className="font-semibold leading-snug hover:text-primary">
              {title}
            </h3>
          </Link>
          <Badge
            variant={status === "Completed" ? "default" : "secondary"}
            className="shrink-0 text-xs"
          >
            {status}
          </Badge>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">{summary}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{technologies.length - 4}
            </Badge>
          )}
        </div>

        {(githubUrl ?? liveUrl) && (
          <div className="flex items-center gap-3 border-t border-border pt-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source code on GitHub`}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <GitBranch className="size-3.5" aria-hidden="true" />
                Source
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo`}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
