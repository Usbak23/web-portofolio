import { Container } from "@/components/layout/container"
import { CertificateCard } from "@/components/cards/certificate-card"
import { SectionTitle } from "@/components/shared/section-title"
import { certificates } from "@/data/certificates"
import type { CertificateCategory } from "@/types/certificate"

export function CertificatesSection() {
  const categories = [
    ...new Set(certificates.map((c) => c.category)),
  ] as CertificateCategory[]

  return (
    <section aria-labelledby="certificates-heading" className="py-20">
      <Container>
        <div className="space-y-12">
          <SectionTitle
            id="certificates-heading"
            title="Certificates"
            subtitle="Professional certifications, courses, and training I've completed."
          />

          {categories.map((category) => {
            const items = certificates.filter((c) => c.category === category)
            return (
              <div key={category} className="space-y-6">
                <h2 className="text-lg font-semibold text-muted-foreground">
                  {category}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((certificate) => (
                    <CertificateCard
                      key={certificate.name}
                      certificate={certificate}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
