export type ExperienceType =
  | "Full-time"
  | "Part-time"
  | "Internship"
  | "Freelance"
  | "Organization"

export interface Experience {
  company: string
  position: string
  type: ExperienceType
  startDate: string
  endDate: string
  location: string
  description: string
  responsibilities: string[]
  technologies: string[]
}
