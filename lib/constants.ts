export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://my.amtechsolutions.my.id"

export const SITE_NAME = "Ahmad Mubarok"

export const SITE_TITLE = "Ahmad Mubarok | Software Engineering | Full Stack Developer | Mobile Developer | Tech Antusiast"

export const SITE_DESCRIPTION =
  "Personal portfolio of Ahmad Mubarok — Software Engineering specializing in building clean, scalable, and performant web applications."

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
] as const
