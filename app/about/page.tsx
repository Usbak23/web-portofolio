import type { Metadata } from "next"

import { AboutSection } from "@/components/sections/about-section"
import { MotionSection } from "@/components/shared/motion-section"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Learn more about Ahmad Mubarok — a Fullstack Developer & Project Manager based in Tangerang Selatan, Indonesia. Passionate about building clean, scalable, and user-focused web applications.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <MotionSection>
      <AboutSection />
    </MotionSection>
  )
}
