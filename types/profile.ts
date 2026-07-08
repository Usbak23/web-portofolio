export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  location: string
  email: string
  avatar: string
  resumeUrl: string
}

export interface Value {
  title: string
  description: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  location: string
}
