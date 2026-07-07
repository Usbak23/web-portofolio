import { projects } from "@/data/projects"
import { skills } from "@/data/skills"
import type { SkillCategory } from "@/types/skill"

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

export function getSkillsByCategory(category: SkillCategory) {
  return skills.filter((s) => s.category === category)
}

export function getAllSkillCategories(): SkillCategory[] {
  return [...new Set(skills.map((s) => s.category))]
}
