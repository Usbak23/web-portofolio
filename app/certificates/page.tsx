import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { generatePageMetadata } from "@/lib/metadata"

const CertificatesSection = dynamic(
  () =>
    import("@/components/sections/certificates-section").then(
      (m) => m.CertificatesSection
    ),
  { ssr: true }
)

export const metadata: Metadata = generatePageMetadata({
  title: "Certificates",
  description:
    "Ahmad Mubarok's professional certifications, online courses, and training — including AWS, Scrum, React, Node.js, Docker, and more.",
  path: "/certificates",
})

export default function CertificatesPage() {
  return <CertificatesSection />
}
