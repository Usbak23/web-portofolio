import { ArrowLeft, Calendar, ExternalLink, GitBranch } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/types/project"

type ProjectDetailHeaderProps = Pick<
  Project,
  | "title"
  | "category"
  | "status"
  | "startDate"
  | "endDate"
  | "githubUrl"
  | "liveUrl"
>

export function ProjectDetailHeader({
  title,
  category,
  status,
  startDate,
  endDate,
  githubUrl,
  liveUrl,
}: ProjectDetailHeaderProps) {
  return (
    <div className="space-y-4">
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

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary">{category}</Badge>
        <Badge variant={status === "Completed" ? "default" : "secondary"}>
          {status}
        </Badge>
      </div>

      {/* Title */}
      <h1
        id="project-title"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h1>

      {/* Date */}
      <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="flex items-center gap-1.5">
          <Calendar className="size-4 shrink-0" aria-hidden="true" />
          {startDate}
          {endDate ? ` — ${endDate}` : ""}
        </span>
      </div>

      {/* Links */}
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
  )
}
