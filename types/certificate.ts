export type CertificateCategory =
  "Professional" | "Training" | "Workshop" | "Course"

export interface Certificate {
  name: string
  issuer: string
  date: string
  image: string
  credentialUrl?: string
  category: CertificateCategory
}
