import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    slug: "project-management-system",
    title: "Project Management System",
    summary:
      "A full-featured project management platform for teams to plan, track, and collaborate on projects in real time.",
    description:
      "A comprehensive project management system built to help teams manage tasks, track progress, and collaborate efficiently. The platform supports multiple user roles, real-time notifications, and detailed project analytics to improve team productivity.",
    thumbnail: "/images/projects/project-management-system/thumbnail.jpg",
    images: [
      "/images/projects/project-management-system/screenshot-1.jpg",
      "/images/projects/project-management-system/screenshot-2.jpg",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Docker",
    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/project-management-system",
    startDate: "March 2024",
    endDate: "June 2024",
    features: [
      "Multi-role authentication (Admin, Manager, Member)",
      "Kanban board with drag-and-drop task management",
      "Real-time notifications and activity feed",
      "Project analytics and progress tracking dashboard",
      "File attachment and comment system per task",
    ],
    challenges: [
      "Designing a flexible role-based access control system that scales across multiple projects.",
      "Implementing real-time updates without introducing significant performance overhead.",
    ],
    solutions: [
      "Used a permission matrix approach with middleware-level guards to handle RBAC cleanly.",
      "Leveraged server-sent events for lightweight real-time notifications instead of WebSockets.",
    ],
    lessons: [
      "Proper database schema design upfront saves significant refactoring time later.",
      "User feedback during development leads to better UX decisions than assumptions.",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary:
      "A scalable e-commerce platform with product management, cart, checkout, and order tracking features.",
    description:
      "A full-stack e-commerce platform designed for small to medium businesses. It includes a customer-facing storefront, an admin dashboard for product and order management, and a secure checkout flow integrated with a payment gateway.",
    thumbnail: "/images/projects/ecommerce-platform/thumbnail.jpg",
    images: [
      "/images/projects/ecommerce-platform/screenshot-1.jpg",
      "/images/projects/ecommerce-platform/screenshot-2.jpg",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Docker",
    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/ecommerce-platform",
    startDate: "September 2023",
    endDate: "December 2023",
    features: [
      "Product catalog with search, filter, and category navigation",
      "Shopping cart and wishlist functionality",
      "Secure checkout with payment gateway integration",
      "Order tracking and history for customers",
      "Admin dashboard for product, order, and user management",
    ],
    challenges: [
      "Managing complex product variants (size, color) with independent stock tracking.",
      "Ensuring a smooth and secure checkout experience across devices.",
    ],
    solutions: [
      "Designed a flexible product schema with variant support and individual inventory records.",
      "Implemented server-side validation and HTTPS-only payment flows to secure transactions.",
    ],
    lessons: [
      "Performance optimization for product listing pages significantly impacts conversion rates.",
      "Clear error messages during checkout reduce cart abandonment.",
    ],
  },
  {
    slug: "hr-management-system",
    title: "HR Management System",
    summary:
      "An internal HR platform for managing employee data, attendance, leave requests, and payroll.",
    description:
      "A web-based HR management system built for a mid-sized company to digitize and streamline HR operations. The system covers employee onboarding, attendance tracking, leave management, and payroll calculation.",
    thumbnail: "/images/projects/hr-management-system/thumbnail.jpg",
    images: [
      "/images/projects/hr-management-system/screenshot-1.jpg",
      "/images/projects/hr-management-system/screenshot-2.jpg",
    ],
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "GitHub Actions",
    ],
    category: "Web",
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Usbak23/hr-management-system",
    startDate: "January 2024",
    endDate: "April 2024",
    features: [
      "Employee profile and document management",
      "Attendance tracking with clock-in/clock-out system",
      "Leave request and approval workflow",
      "Automated payroll calculation based on attendance data",
      "Role-based access for HR staff, managers, and employees",
    ],
    challenges: [
      "Automating payroll calculation with complex rules for overtime, deductions, and allowances.",
      "Building an approval workflow that supports multi-level authorization.",
    ],
    solutions: [
      "Created a configurable payroll rule engine that HR admins can adjust without code changes.",
      "Implemented a state machine pattern for the approval workflow to handle all edge cases.",
    ],
    lessons: [
      "Domain knowledge is critical — understanding HR processes deeply improved the system design.",
      "Automated testing for payroll logic prevented costly calculation errors.",
    ],
  },
  {
    slug: "e-plantation",
    title: "e-plantation",
    summary:
      "A lightweight API gateway for routing, rate limiting, and authentication across microservices.",
    description:
      "A custom API gateway service built to centralize request routing, enforce rate limiting, and handle authentication for a microservices architecture. It acts as a single entry point for all client requests.",
    thumbnail: "/images/projects/api-gateway-service/thumbnail.jpg",
    images: ["/images/projects/api-gateway-service/screenshot-1.jpg"],
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Docker",
      "GitHub Actions",
      "Redis",
    ],
    category: "API",
    status: "Completed",
    featured: false,
    githubUrl: "https://github.com/Usbak23/api-gateway-service",
    startDate: "July 2023",
    endDate: "September 2023",
    features: [
      "Dynamic request routing to downstream microservices",
      "JWT-based authentication and authorization",
      "Rate limiting per client IP and API key",
      "Request logging and monitoring",
      "Health check endpoints for all registered services",
    ],
    challenges: [
      "Ensuring low latency overhead while adding authentication and rate limiting layers.",
    ],
    solutions: [
      "Used Redis for in-memory rate limit counters and JWT caching to minimize database calls.",
    ],
    lessons: [
      "A well-designed gateway simplifies security and observability across all services.",
    ],
  },
]
