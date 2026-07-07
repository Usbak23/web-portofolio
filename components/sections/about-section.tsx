import { Download, Mail, MapPin } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SkillCard } from "@/components/cards/skill-card"
import { SectionTitle } from "@/components/shared/section-title"
import { SocialLinks } from "@/components/shared/social-links"
import { buttonVariants } from "@/components/ui/button"
import { profile } from "@/data/profile"
import { socials } from "@/data/socials"
import { getAllSkillCategories, getSkillsByCategory } from "@/lib/helpers"
import { cn } from "@/lib/utils"

const VALUES = [
  {
    title: "Clean Code",
    description:
      "I believe code should be readable, maintainable, and easy to understand. Writing clean code is a form of respect for future developers — including yourself.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves fast. I stay curious, keep learning, and embrace new tools and practices that help me build better products.",
  },
  {
    title: "User-Centered Thinking",
    description:
      "Every feature I build starts with the user in mind. Good software solves real problems and delivers genuine value to the people who use it.",
  },
  {
    title: "Collaboration",
    description:
      "Great products are built by great teams. I value open communication, constructive feedback, and working together toward a shared goal.",
  },
]

const EDUCATION = [
  {
    institution: "Universitas Pamulang",
    degree: "Bachelor of Computer Science",
    field: "Informatics Engineering",
    period: "2019 — 2023",
    location: "Tangerang Selatan, Banten",
  },
]

export function AboutSection() {
  const categories = getAllSkillCategories()

  return (
    <div className="space-y-20 py-20">
      {/* Biography */}
      <section aria-labelledby="biography-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <SectionTitle
                id="biography-heading"
                title="About Me"
                subtitle="Fullstack Developer & Project Manager based in Indonesia."
              />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>{profile.bio}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Send email to ${profile.email}`}
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {profile.email}
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {profile.location}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.resumeUrl}
                  download
                  aria-label="Download resume"
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years of Experience", value: "3+" },
                  { label: "Projects Completed", value: "20+" },
                  { label: "Technologies", value: "25+" },
                  { label: "Happy Clients", value: "15+" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <SocialLinks socials={socials} className="justify-center" />
            </div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section aria-labelledby="education-heading">
        <Container>
          <div className="space-y-8">
            <SectionTitle
              id="education-heading"
              title="Education"
            />
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm font-medium text-primary">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground sm:justify-end">
                        <MapPin className="size-3 shrink-0" aria-hidden="true" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-about-heading">
        <Container>
          <div className="space-y-8">
            <SectionTitle
              id="skills-about-heading"
              title="Skills & Technologies"
              subtitle="Technologies and tools I work with regularly."
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const categorySkills = getSkillsByCategory(category)
                return (
                  <div key={category} className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Values */}
      <section aria-labelledby="values-heading">
        <Container>
          <div className="space-y-8">
            <SectionTitle
              id="values-heading"
              title="Personal Values"
              subtitle="Principles that guide how I work and collaborate."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {VALUES.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-6 space-y-2"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
