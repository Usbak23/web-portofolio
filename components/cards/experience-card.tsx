import { Briefcase, Calendar, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Experience } from "@/types/experience"

interface ExperienceCardProps {
  experience: Experience
  className?: string
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  const {
    company,
    position,
    type,
    startDate,
    endDate,
    location,
    description,
    responsibilities,
    technologies,
  } = experience

  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold leading-snug">{position}</h3>
            <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <Briefcase className="size-3.5 shrink-0" aria-hidden="true" />
              {company}
            </div>
          </div>
          <Badge variant="secondary" className="w-fit shrink-0 text-xs">
            {type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">Duration:</span>
            <time>{startDate} — {endDate}</time>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">Location:</span>
            {location}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>

        {responsibilities.length > 0 && (
          <ul className="space-y-1.5" aria-label="Responsibilities">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 border-t border-border pt-3">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
