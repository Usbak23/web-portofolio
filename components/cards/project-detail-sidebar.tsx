import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import type { Project } from "@/types/project"

type ProjectDetailSidebarProps = Pick<
  Project,
  "title" | "technologies" | "images"
>

export function ProjectDetailSidebar({
  title,
  technologies,
  images,
}: ProjectDetailSidebarProps) {
  return (
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
                className="border-border bg-muted relative aspect-video overflow-hidden rounded-lg border"
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
  )
}
