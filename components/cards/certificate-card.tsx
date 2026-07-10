"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { cardHoverProps, staggerItemScale } from "@/lib/animations"
import { cn } from "@/lib/utils"
import type { Certificate } from "@/types/certificate"

interface CertificateCardProps {
  certificate: Certificate
  className?: string
}

export function CertificateCard({
  certificate,
  className,
}: CertificateCardProps) {
  const { name, issuer, date, image, credentialUrl, category } = certificate

  return (
    <motion.article
      variants={staggerItemScale}
      {...cardHoverProps}
      className={cn(
        "group border-border bg-card flex flex-col overflow-hidden rounded-xl border",
        "shadow-sm hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <div className="bg-muted relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} certificate from ${issuer}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-1">
          <h3 className="leading-snug font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm">{issuer}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-muted-foreground text-xs">{date}</span>
          </div>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${name} credential`}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 text-xs transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Verify
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
