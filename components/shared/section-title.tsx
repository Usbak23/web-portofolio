import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
