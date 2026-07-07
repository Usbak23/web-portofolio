import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ProjectDetailSection } from "@/components/sections/project-detail-section"
import { getProjectBySlug } from "@/lib/helpers"
import { generatePageMetadata } from "@/lib/metadata"
import { projects } from "@/data/projects"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  return generatePageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${slug}`,
    image: project.thumbnail,
  })
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return <ProjectDetailSection project={project} />
}
