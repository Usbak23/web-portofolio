import type { ContactItem } from "@/types/contact"

export const contactItems: ContactItem[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "ahmad.mubarok2398@gmail.com",
    href: "mailto:ahmad.mubarok2398@gmail.com",
    external: false,
  },
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    value: "+62 811-1015-0069",
    href: "https://wa.me/6281110150069",
    external: true,
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Tangerang Selatan, Banten",
    href: null,
    external: false,
  },
]
