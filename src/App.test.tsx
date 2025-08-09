import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the resume app header (name)', () => {
    render(<App />)
    // Top-level heading should be the name from data/resume
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
    expect(h1.textContent?.length).toBeGreaterThan(0)
  })
})
