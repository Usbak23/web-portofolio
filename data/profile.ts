import type { Education, Profile, Value } from "@/types/profile"

export const profile: Profile = {
  name: "Ahmad Mubarok",
  title: "Fullstack Developer & Project Manager",
  tagline: "Building clean, scalable, and user-focused web applications.",
  bio: "Halo, saya Ahmad Mubarok, seorang Fullstack Developer dan Project Manager yang berfokus pada pengembangan aplikasi web modern, skalabel, dan berorientasi pada kebutuhan pengguna. Saya berpengalaman membangun solusi digital menggunakan React, Next.js, Express.js, TypeScript, PostgreSQL, MongoDB, Docker, serta menerapkan praktik CI/CD untuk proses deployment yang efisien. Selain kemampuan teknis, saya memiliki pengalaman memimpin tim, mengelola proyek, dan menerjemahkan kebutuhan bisnis menjadi solusi teknologi yang tepat. Saya senang mempelajari teknologi baru, meningkatkan kualitas produk, dan berkolaborasi dalam menciptakan aplikasi yang memberikan nilai nyata bagi pengguna maupun organisasi. Bagi saya, teknologi adalah sarana untuk menciptakan inovasi dan dampak yang berkelanjutan.",
  location: "Tangerang Selatan, Banten",
  email: "ahmad.mubarok2398@gmail.com",
  avatar: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf",
}

export const values: Value[] = [
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

export const education: Education[] = [
  {
    institution: "Universitas Pamulang",
    degree: "Bachelor of Computer Science",
    field: "Informatics Engineering",
    period: "2019 — 2023",
    location: "Tangerang Selatan, Banten",
  },
]
