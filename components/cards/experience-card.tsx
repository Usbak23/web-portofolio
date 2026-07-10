"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { staggerItemLeft } from "@/lib/animations"
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
    <motion.article
      variants={staggerItemLeft}
      whileHover={{
        x: 4,
        transition: { duration: 0.2, ease: [0, 0, 0.2, 1] },
      }}
      className={cn(
        "border-border bg-card rounded-xl border p-6",
        "shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h3 className="leading-snug font-semibold">{position}</h3>
            <div className="text-primary flex items-center gap-1.5 text-sm font-medium">
              <Briefcase className="size-3.5 shrink-0" aria-hidden="true" />
              {company}
            </div>
          </div>
          <Badge variant="secondary" className="w-fit shrink-0 text-xs">
            {type}
          </Badge>
        </div>

        <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">Duration:</span>
            <time>
              {startDate} — {endDate}
            </time>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="sr-only">Location:</span>
            {location}
          </span>
        </div>

        <p className="text-muted-foreground text-sm">{description}</p>

        {responsibilities.length > 0 && (
          <ul className="space-y-1.5" aria-label="Responsibilities">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground flex gap-2 text-sm"
              >
                <span
                  className="bg-primary mt-1.5 size-1.5 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <div className="border-border flex flex-wrap gap-1.5 border-t pt-3">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}
