export type WorkItem = {
  title: string
  company: string
  location?: string
  start: string
  end: string
  bullets: string[]
}

export type EducationItem = {
  institution: string
  degree: string
  graduationDate?: string
  location?: string
}

export type Resume = {
  name: string
  summary: string
  experience: WorkItem[]
  skills: {
    programmingLanguages: string[]
    cloudPlatforms: string[]
    devopsTools: string[]
    webServices: string[]
    database: string[]
    coreSkills: string[]
    projectManagement: string[]
    tools: string[]
  }
  education: EducationItem[]
  links?: { label: string; url: string }[]
}
