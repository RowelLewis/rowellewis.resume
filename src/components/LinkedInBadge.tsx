import { useEffect, useRef } from 'react'

type LinkedInBadgeProps = {
  vanity: string
  href: string
  size?: 'small' | 'medium' | 'large'
  theme?: 'light' | 'dark'
  locale?: string
}

/**
 * Renders the LinkedIn profile badge using LinkedIn's script.
 * Hidden when printing.
 */
export function LinkedInBadge({
  vanity,
  href,
  size = 'medium',
  theme = 'dark',
  locale = 'en_US',
}: LinkedInBadgeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Load LinkedIn badge script only once per page
    const id = 'linkedin-badge-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://platform.linkedin.com/badges/js/profile.js'
      s.defer = true
      document.body.appendChild(s)
    } else {
      // If script already present, attempt to reprocess badges
      const w = window as unknown as { LIRenderAll?: () => void }
      if (typeof w.LIRenderAll === 'function') {
        w.LIRenderAll()
      }
    }
  }, [])

  return (
    <div className="print:hidden" ref={containerRef}>
      <div
        className="badge-base LI-profile-badge"
        data-locale={locale}
        data-size={size}
        data-theme={theme}
        data-type="VERTICAL"
        data-vanity={vanity}
        data-version="v1"
      >
      </div>
    </div>
  )
}

export default LinkedInBadge
