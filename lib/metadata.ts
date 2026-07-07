import type { Metadata } from "next"

import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/constants"

interface PageMetadataOptions {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function generatePageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  image = "/og-image.jpg",
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE
  const url = `${SITE_URL}${path}`
  const imageUrl = `${SITE_URL}${image}`

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: pageTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  }
}
