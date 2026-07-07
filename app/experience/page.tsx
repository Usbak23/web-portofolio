import type { Metadata } from "next"

import { ExperienceSection } from "@/components/sections/experience-section"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Experience",
  description:
    "Ahmad Mubarok's professional experience as a Fullstack Developer and Project Manager — including full-time roles, freelance work, and organizational involvement.",
  path: "/experience",
})

export default function ExperiencePage() {
  return <ExperienceSection />
}
