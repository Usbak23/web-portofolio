export type SkillCategory =
  "Frontend" | "Backend" | "Mobile" | "Database" | "DevOps" | "Tools"

export interface Skill {
  name: string
  icon?: string
  category: SkillCategory
}
