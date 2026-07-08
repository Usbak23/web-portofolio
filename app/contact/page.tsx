import type { Metadata } from "next"

import { ContactSection } from "@/components/sections/contact-section"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Ahmad Mubarok — Fullstack Developer & Project Manager. Available for full-time roles and freelance projects.",
  path: "/contact",
})

export default function ContactPage() {
  return <ContactSection />
}
