import type { Experience } from "@/types/experience"

export const experiences: Experience[] = [
  {
    company: "PT Teknologi Solusi Digital",
    position: "Fullstack Developer & Project Manager",
    type: "Full-time",
    startDate: "January 2024",
    endDate: "Present",
    location: "Tangerang Selatan, Banten",
    description:
      "Leading development of enterprise web applications while managing cross-functional teams to deliver projects on time and within scope.",
    responsibilities: [
      "Developed and maintained scalable web applications using Next.js, TypeScript, and PostgreSQL.",
      "Led a team of 4 developers, conducted code reviews, and ensured adherence to best practices.",
      "Translated business requirements into technical specifications and implementation plans.",
      "Implemented CI/CD pipelines using GitHub Actions and Docker for automated deployments.",
      "Collaborated with stakeholders to define project scope, timelines, and deliverables.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Prisma",
    ],
  },
  {
    company: "CV Kreasi Inovasi Nusantara",
    position: "Fullstack Developer",
    type: "Full-time",
    startDate: "June 2022",
    endDate: "December 2023",
    location: "Jakarta Selatan, DKI Jakarta",
    description:
      "Built and maintained multiple client-facing web applications, focusing on performance, scalability, and clean code architecture.",
    responsibilities: [
      "Developed RESTful APIs using Express.js and Node.js to support frontend applications.",
      "Built responsive user interfaces using React and Tailwind CSS.",
      "Integrated MongoDB and PostgreSQL databases with Prisma ORM.",
      "Optimized application performance, reducing average page load time by 40%.",
      "Participated in agile sprints, daily standups, and sprint retrospectives.",
    ],
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    type: "Freelance",
    startDate: "January 2021",
    endDate: "May 2022",
    location: "Remote",
    description:
      "Delivered custom web solutions for small businesses and startups across various industries.",
    responsibilities: [
      "Designed and developed company profile websites and landing pages.",
      "Built e-commerce solutions with product management and order tracking features.",
      "Provided ongoing maintenance and feature enhancements for existing client projects.",
      "Communicated directly with clients to gather requirements and deliver solutions.",
    ],
    technologies: ["React", "Next.js", "MySQL", "Tailwind CSS", "Vercel"],
  },
  {
    company: "Himpunan Mahasiswa Teknik Informatika",
    position: "Head of Technology Division",
    type: "Organization",
    startDate: "March 2020",
    endDate: "March 2021",
    location: "Tangerang Selatan, Banten",
    description:
      "Led the technology division of the student association, organizing workshops and managing the division's digital infrastructure.",
    responsibilities: [
      "Organized programming workshops and tech talks attended by 100+ students.",
      "Developed and maintained the organization's official website.",
      "Mentored junior members in web development fundamentals.",
      "Coordinated with other divisions to support technology needs for events.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
]
