import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
} from "@/components/shared/brand-icons"
import { cn } from "@/lib/utils"
import type { Social } from "@/types/social"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: MailIcon,
  MessageCircle: WhatsappIcon,
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
    <ul
      className={cn("flex items-center gap-2", className)}
      aria-label="Social links"
    >
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
                "text-muted-foreground inline-flex items-center justify-center rounded-md transition-colors",
                "hover:text-foreground focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                iconSize === "sm" ? "size-8" : "size-9"
              )}
            >
              {Icon && (
                <Icon className={iconSize === "sm" ? "size-4" : "size-5"} />
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
