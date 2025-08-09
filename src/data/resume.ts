import type { Resume } from '../types/resume'

export const resume: Resume = {
  name: 'Rowel Lewis',
  summary:
    'Software Engineer (2+ yrs) specializing in .NET Core services, Sage Intacct integrations, and cloud deployments. Pragmatic problem-solver focused on performance, reliability, and delivering scalable financial workflows in Agile teams.',
  experience: [
    {
      title: 'Software Engineer',
      company: 'Wipfli India',
      start: 'Aug 2023',
      end: 'Present',
      bullets: [
        'Shipped .NET Core features and Sage Intacct API integrations for finance apps; improved stability and throughput.',
        'Deployed apps to Azure, AWS (Elastic Beanstalk, ECS, EC2), and Heroku; automated configs, routing, and rollouts to cut manual ops.',
        'Built fast, reliable PDF export flows tailored to client reporting needs.',
        'EMR Connect: Implemented credit/debit offset balancer for GL entries; reduced errors and won internal award.',
        'HCM Connect: Migrated core features; optimized API-based imports to reduce memory and improve high-load performance.',
        'Created CI/CD pipelines in Azure DevOps for Azure/AWS/Heroku targets.',
        'Authored tools for Heroku app config management and automated work item creation, reducing manual toil.',
        'Optimized memory usage (string allocation reductions, StringBuilder) and tuned GC for steady performance under load.',
        'Performed memory dump analysis to resolve leaks and regressions.',
        'Maintained internal .NET libraries for reuse across teams.',
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
  links: [],
}
