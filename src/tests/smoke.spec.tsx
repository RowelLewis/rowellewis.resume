import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Resume App (smoke)', () => {
  it('renders name and all primary sections', () => {
    render(<App />)
    // Name
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
    expect(h1.textContent?.length).toBeGreaterThan(0)

    // Sections
    expect(screen.getByRole('heading', { level: 2, name: /summary/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /education/i })).toBeInTheDocument()

    // Experience bullets exist
    const expH2 = screen.getByRole('heading', { level: 2, name: /experience/i })
    const expSection = expH2.closest('section')!
    expect(within(expSection).getAllByRole('listitem').length).toBeGreaterThan(0)
  })

  // Download button removed intentionally; no print action test
})
