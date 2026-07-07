import { ExternalLink } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Certificate } from "@/types/certificate"

interface CertificateCardProps {
  certificate: Certificate
  className?: string
}

export function CertificateCard({ certificate, className }: CertificateCardProps) {
  const { name, issuer, date, image, credentialUrl, category } = certificate

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${name} certificate from ${issuer}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-1">
          <h3 className="font-semibold leading-snug">{name}</h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} credential`}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Verify
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
