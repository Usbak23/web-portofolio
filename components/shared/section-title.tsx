import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
  id?: string
  as?: "h1" | "h2"
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "left",
  id,
  as: Tag = "h2",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "text-center",
        className
      )}
    >
      <Tag id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
