export type ProjectCategory = "Web" | "Mobile" | "API" | "Tool" | "Other"

export type ProjectStatus = "Completed" | "In Progress" | "Archived"

export interface Project {
  slug: string
  title: string
  summary: string
  description: string 
  thumbnail: string
  images: string[]
  technologies: string[]
  category: ProjectCategory
  status: ProjectStatus
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  startDate: string
  endDate?: string
  features: string[]
  challenges: string[]
  solutions: string[]
  lessons: string[]
}
