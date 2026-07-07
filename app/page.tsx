import type { Metadata } from "next"

import { AboutPreviewSection } from "@/components/sections/about-preview-section"
import { ContactCTASection } from "@/components/sections/contact-cta-section"
import { ExperiencePreviewSection } from "@/components/sections/experience-preview-section"
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section"
import { HeroSection } from "@/components/sections/hero-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { Container } from "@/components/layout/container"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata()

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
      </Container>
      <AboutPreviewSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ExperiencePreviewSection />
      <ContactCTASection />
    </>
  )
}
