import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-20"
    >
      <Container>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
          {/* Status code */}
          <p className="text-8xl font-bold tracking-tight text-muted-foreground/30 sm:text-9xl">
            404
          </p>

          {/* Message */}
          <div className="space-y-2">
            <h1
              id="not-found-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Page Not Found
            </h1>
            <p className="text-base text-muted-foreground">
              Sorry, the page you are looking for doesn&apos;t exist or has
              been moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "default" }), "gap-2")}
            >
              <Home className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              View Projects
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
