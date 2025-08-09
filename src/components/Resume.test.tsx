// import vitest globals types
import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Resume from './Resume'
import type { Resume as ResumeType } from '../types/resume'

const sample: ResumeType = {
  name: 'Test User',
  summary: 'A brief summary.',
  links: [{ label: 'GitHub', url: 'https://github.com/test' }],
  experience: [
    {
      title: 'Engineer',
      company: 'Acme Inc',
      start: 'Jan 2024',
      end: 'Present',
      location: 'Remote',
      bullets: ['Did things', 'Improved stuff'],
    },
  ],
  skills: {
    programmingLanguages: ['TypeScript'],
    cloudPlatforms: ['Azure'],
    devopsTools: ['Azure DevOps'],
    webServices: ['REST'],
    database: ['PostgreSQL'],
    coreSkills: ['Optimization'],
    projectManagement: ['Scrum'],
    tools: ['Profiler'],
  },
  education: [
    { institution: 'Uni', degree: 'BSc', graduationDate: '2022' },
  ],
}

describe('Resume', () => {
  it('renders header, sections, and footer', () => {
    render(<Resume data={sample} />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /test user/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /profile links/i })).toBeInTheDocument()

    // Sections by headings
    expect(screen.getByRole('heading', { level: 2, name: /summary/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /education/i })).toBeInTheDocument()

    // Experience list contains job bullets
    const experienceHeading = screen.getByRole('heading', { level: 2, name: /experience/i })
    const experienceSection = experienceHeading.closest('section')!
    expect(within(experienceSection).getAllByRole('listitem').length).toBeGreaterThan(0)

    // Footer print button exists
    const printBtns = screen.getAllByRole('button', { name: /download pdf/i })
    expect(printBtns[0]).toBeInTheDocument()
  })

  it('calls window.print when clicking Download PDF', () => {
    const spy = vi.spyOn(window, 'print').mockImplementation(() => {})
    render(<Resume data={sample} />)
    const [btn] = screen.getAllByRole('button', { name: /download pdf/i })
    btn.click()
    expect(spy).toHaveBeenCalledTimes(1)
    spy.mockRestore()
  })
})
