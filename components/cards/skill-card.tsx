import { cn } from "@/lib/utils"
import type { Skill } from "@/types/skill"
import * as Icons from "@/components/shared/skill-icons"

interface SkillCardProps {
  skill: Skill
  className?: string
}

// Map skill names to icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  React: Icons.ReactIcon,
  "Next.js": Icons.NextjsIcon,
  TypeScript: Icons.TypescriptIcon,
  "Tailwind CSS": Icons.TailwindIcon,
  HTML: Icons.HtmlIcon,
  CSS: Icons.CssIcon,
  "Node.js": Icons.NodejsIcon,
  "Express.js": Icons.ExpressIcon,
  NestJS: Icons.NestjsIcon,
  "REST API": Icons.RestApiIcon,
  "React Native": Icons.ReactNativeIcon,
  PostgreSQL: Icons.PostgresqlIcon,
  MongoDB: Icons.MongodbIcon,
  MySQL: Icons.MysqlIcon,
  Prisma: Icons.PrismaIcon,
  Docker: Icons.DockerIcon,
  Git: Icons.GitIcon,
  "GitHub Actions": Icons.GithubActionsIcon,
  Vercel: Icons.VercelIcon,
  "CI/CD": Icons.CiCdIcon,
  "VS Code": Icons.VsCodeIcon,
  Figma: Icons.FigmaIcon,
  Postman: Icons.PostmanIcon,
  Linux: Icons.LinuxIcon,
  Jira: Icons.JiraIcon,
}

export function SkillCard({ skill, className }: SkillCardProps) {
  const { name } = skill
  const Icon = ICON_MAP[name]

  return (
    <li
      className={cn(
        "border-border bg-card flex items-center gap-2 rounded-lg border px-3 py-2",
        "hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors",
        className
      )}
    >
      {Icon && <Icon className="size-4 shrink-0" />}
      <span>{name}</span>
    </li>
  )
}
