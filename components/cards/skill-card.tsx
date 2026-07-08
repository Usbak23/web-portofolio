import { cn } from "@/lib/utils"
import type { Skill } from "@/types/skill"

interface SkillCardProps {
  skill: Skill
  className?: string
}

export function SkillCard({ skill, className }: SkillCardProps) {
  const { name } = skill

  return (
    <li
      className={cn(
        "flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2",
        "text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      <span>{name}</span>
    </li>
  )
}
