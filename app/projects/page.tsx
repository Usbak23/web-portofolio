import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { MotionSection } from "@/components/shared/motion-section"
import { generatePageMetadata } from "@/lib/metadata"

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (m) => m.ProjectsSection
    ),
  { ssr: true }
)

export const metadata: Metadata = generatePageMetadata({
  title: "Projects",
  description:
    "Explore Ahmad Mubarok's portfolio of web applications, APIs, and tools — built with Next.js, TypeScript, React, Node.js, and more.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <MotionSection>
      <ProjectsSection />
    </MotionSection>
  )
}
