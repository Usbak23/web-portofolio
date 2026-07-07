import type { Metadata } from "next"

import { CertificatesSection } from "@/components/sections/certificates-section"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata: Metadata = generatePageMetadata({
  title: "Certificates",
  description:
    "Ahmad Mubarok's professional certifications, online courses, and training — including AWS, Scrum, React, Node.js, Docker, and more.",
  path: "/certificates",
})

export default function CertificatesPage() {
  return <CertificatesSection />
}
