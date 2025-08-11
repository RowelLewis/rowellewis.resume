import type { Resume } from '../types/resume'

export const resume: Resume = {
  name: 'Rowel Lewis',
  summary:
    'Software Engineer (2+ yrs) specializing in .NET Core services, Sage Intacct integrations, and cloud deployments. Pragmatic problem-solver focused on performance, reliability, and delivering scalable systems in Agile teams.',
  experience: [
    {
      title: 'Software Engineer',
      company: 'Wipfli India',
      start: 'Aug 2023',
      end: 'Present',
      bullets: [
        'Delivered .NET Core features and Sage Intacct integrations with a focus on reliability, throughput, and predictable releases.',
        'Built a dependable PDF export flow for client reporting, reducing turnaround time and support touchpoints.',
        'Standardized deployments across Azure, AWS (Elastic Beanstalk, ECS, EC2), and Heroku; simplified configs and rollbacks to shorten release lead time.',
        'EMR Connect: Implemented a GL credit/debit offset balancer; reduced posting errors and earned internal recognition.',
        'HCM Connect: Migrated core features and optimized import paths to lower memory usage and maintain performance under load.',
        'CI/CD: Authored Azure DevOps pipelines targeting Azure/AWS/Heroku for predictable, low‑friction releases.',
        'Tooling: Created utilities for Heroku app configuration and automated work‑item creation to cut manual effort.',
        'Performance: Reduced allocations, used StringBuilder strategically, and tuned GC for consistent, predictable batch processing times.',
        'Reliability: Performed memory‑dump analysis to resolve leaks and regressions; added guardrails to prevent recurrence.',
        'Reusability: Built and maintain several shared .NET libraries (services, config, API clients, utilities) adopted across teams.',
      ],
    },
  ],
  skills: {
    programmingLanguages: ['.NET Core', 'C#', 'SQL', 'JavaScript'],
    cloudPlatforms: ['Azure', 'AWS (Elastic Beanstalk, ECS, EC2)', 'Heroku'],
    devopsTools: ['Azure DevOps', 'AWS Elastic Beanstalk', 'Heroku Container Apps'],
    webServices: ['RESTful APIs', 'Sage Intacct API Integrations'],
    database: ['PostgreSQL'],
    coreSkills: [
      'Parallel Processing',
      'Multi-threading',
      'Memory Management',
      'Performance Optimization',
    ],
    projectManagement: ['Agile Methodology', 'Scrum'],
    tools: ['Performance Profiler', 'Memory Dump Analysis'],
  },
  education: [
    {
      institution: 'NMAM Institute of Technology, KA',
      degree: 'Bachelor of Engineering in Computer Science',
      graduationDate: 'July 2022',
    },
  ],
  links: [
    { label: 'GitHub', url: 'https://github.com/rowellewis' },
  ],
}
