import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/navigation/navbar"
import { ThemeProvider } from "@/components/shared/theme-provider"
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"

import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground focus:ring-ring absolute -top-full left-4 z-[9999] rounded-md px-4 py-2 text-sm font-medium transition-[top] duration-100 focus:top-4 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: SITE_NAME,
                  jobTitle: profile.title,
                  description: SITE_DESCRIPTION,
                  url: SITE_URL,
                  email: profile.email,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Tangerang Selatan",
                    addressRegion: "Banten",
                    addressCountry: "ID",
                  },
                  sameAs: socials
                    .filter((s) => s.url.startsWith("http"))
                    .map((s) => s.url),
                },
                {
                  "@type": "WebSite",
                  name: SITE_NAME,
                  url: SITE_URL,
                  description: SITE_DESCRIPTION,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
