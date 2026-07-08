import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { MotionSection } from "@/components/shared/motion-section"
import { generatePageMetadata } from "@/lib/metadata"

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then(
      (m) => m.ContactSection
    ),
  { ssr: true }
)

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Ahmad Mubarok — Fullstack Developer & Project Manager. Available for full-time roles and freelance projects.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <MotionSection>
      <ContactSection />
    </MotionSection>
  )
}
