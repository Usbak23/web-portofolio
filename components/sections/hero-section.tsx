"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

import SplitText from "@/components/shared/SplitText"
import { SocialLinks } from "@/components/shared/social-links"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-20 text-center"
    >
      <div className="flex max-w-3xl flex-col items-center gap-6">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Available for work
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <SplitText
              text={`Hi, I'm ${profile.name}`}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              tag="span"
            />
          </h1>

          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            {profile.title}
          </p>
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/projects" className={cn(buttonVariants({ size: "lg" }))}>
            View My Projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={profile.resumeUrl}
            download
            aria-label="Download resume"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Download Resume
            <Download className="size-4" aria-hidden="true" />
          </a>
        </div>

        <SocialLinks socials={socials} />
      </div>
    </section>
  )
}
