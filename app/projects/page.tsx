import type { Metadata } from "next"

import { ProjectsSection } from "@/components/sections/projects-section"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Explore Ahmad Mubarok's portfolio of web applications, APIs, and tools — built with Next.js, TypeScript, React, Node.js, and more.",
  path: "/projects",
})

export default function ProjectsPage() {
  return <ProjectsSection />
}
