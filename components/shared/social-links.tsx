import {
  GitBranch,
  Link2,
  Mail,
  MessageCircle,
  Globe,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import type { Social } from "@/types/social"

const ICON_MAP: Record<string, LucideIcon> = {
  Github: GitBranch,
  Linkedin: Link2,
  Mail,
  MessageCircle,
  Twitter: Globe,
  Globe,
}

interface SocialLinksProps {
  socials: Social[]
  className?: string
  iconSize?: "sm" | "md"
}

export function SocialLinks({
  socials,
  className,
  iconSize = "md",
}: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)} aria-label="Social links">
      {socials.map(({ label, url, icon }) => {
        const Icon = ICON_MAP[icon]
        const isExternal = url.startsWith("http")

        return (
          <li key={label}>
            <a
              href={url}
              aria-label={label}
              {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={cn(
                "inline-flex items-center justify-center rounded-md text-muted-foreground transition-colors",
                "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                iconSize === "sm" ? "size-8" : "size-9"
              )}
            >
              {Icon && (
                <Icon
                  className={iconSize === "sm" ? "size-4" : "size-5"}
                  aria-hidden="true"
                />
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
