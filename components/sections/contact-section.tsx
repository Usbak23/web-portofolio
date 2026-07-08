import { Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react"
import { Download, Link2 } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionTitle } from "@/components/shared/section-title"
import { SocialLinks } from "@/components/shared/social-links"
import { buttonVariants } from "@/components/ui/button"
import { contactItems } from "@/data/contact"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { cn } from "@/lib/utils"

const ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  MessageCircle,
  MapPin,
}

export function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left — intro */}
          <div className="space-y-8">
            <SectionTitle
              id="contact-heading"
              as="h1"
              title="Get In Touch"
              subtitle="I'm currently open to new opportunities. Feel free to reach out."
            />

            <p className="text-base leading-relaxed text-muted-foreground">
              Whether you have a project in mind, a question about my work, or
              just want to say hello — I&apos;d love to hear from you. I
              typically respond within 24 hours.
            </p>

            {/* Contact items */}
            <ul className="space-y-4" aria-label="Contact information">
              {contactItems.map(({ icon, label, value, href, external }) => {
                const Icon = ICON_MAP[icon]
                return (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                    {Icon && <Icon className="size-4 text-muted-foreground" aria-hidden="true" />}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        aria-label={`${label}: ${value}`}
                        className="text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{value}</p>
                    )}
                  </div>
                </li>
                )
              })}
            </ul>

            {/* Social links */}
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Find me on
              </p>
              <SocialLinks socials={socials} />
            </div>
          </div>

          {/* Right — actions */}
          <div className="space-y-6">
            {/* Resume card */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="font-semibold">Resume</h2>
                <p className="text-sm text-muted-foreground">
                  Download my resume to learn more about my experience, skills,
                  and education.
                </p>
              </div>
              <a
                href={profile.resumeUrl}
                download
                aria-label="Download Ahmad Mubarok's resume"
                className={cn(buttonVariants({ variant: "default" }), "w-full justify-center gap-2")}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            {/* Quick links card */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="font-semibold">Quick Links</h2>
                <p className="text-sm text-muted-foreground">
                  Explore my work and professional profiles.
                </p>
              </div>
              <ul className="space-y-2">
                {socials
                  .filter((s) => s.url.startsWith("http"))
                  .map(({ label, url }) => (
                    <li key={label}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${label} profile`}
                        className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {label}
                        <Link2 className="size-3.5 text-muted-foreground" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
              <span
                className="size-2.5 shrink-0 rounded-full bg-green-500"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Available for work
                </span>{" "}
                — open to full-time and freelance opportunities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
