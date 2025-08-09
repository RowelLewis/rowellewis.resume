import type { Resume as ResumeType } from '../types/resume'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useEffect, useState, type ComponentType } from 'react'
import { EnvelopeIcon, MapPinIcon, UserIcon, BriefcaseIcon, WrenchScrewdriverIcon, AcademicCapIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/24/solid'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const Icon = (
    title === 'Summary' ? UserIcon :
    title === 'Experience' ? BriefcaseIcon :
    title === 'Skills' ? WrenchScrewdriverIcon :
    title === 'Education' ? AcademicCapIcon : undefined
  ) as ComponentType<React.SVGProps<SVGSVGElement>> | undefined
  return (
    <section aria-labelledby={`section-${title}`} className="section">
      <h2 id={`section-${title}`} className="text-lg font-semibold tracking-tight border-b border-border pb-1 mt-6 first:mt-0 flex items-center gap-2">
        {Icon ? <Icon aria-hidden="true" className="size-4 text-primary" /> : null}
        <span>{title}</span>
      </h2>
  <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}

export function Resume({ data }: { data: ResumeType }) {
  const [active, setActive] = useState<string>('Summary')
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    // Initial theme
    try {
      const stored = localStorage.getItem('theme')
      const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const dark = stored ? stored === 'dark' : !!prefers
      document.documentElement.classList.toggle('dark', dark)
      setIsDark(dark)
    } catch {}

    const ids = ['Summary', 'Experience', 'Skills', 'Education']
    const els = ids
      .map((s) => document.getElementById(`section-${s}`))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop)
        const top = visible[0]?.target as HTMLElement | undefined
        if (top?.id?.startsWith('section-')) setActive(top.id.replace('section-', ''))
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 1] }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }
  return (
    <div className="resume mx-auto max-w-7xl px-4 md:px-8 py-8 print:px-0">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-10 bg-background/80 backdrop-blur border-b py-2 print:hidden">
        <div className="flex items-center justify-between">
          <div className="font-bold">{data.name}</div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
            </Button>
            <Button size="sm" onClick={() => window.print()}>Download PDF</Button>
          </div>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Sidebar / Banner */}
        <header className="header lg:col-span-4 print:static lg:sticky lg:top-8 self-start" role="banner">
          <h1 className="name text-5xl font-extrabold tracking-tight leading-tight">{data.name}</h1>
          <p className="mt-1 text-muted-foreground">Software Engineer · .NET Core · Integrations · Cloud</p>
          <p className="mt-1 flex flex-wrap gap-3 items-center text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPinIcon className="size-4" /> Bengaluru</span>
            <span className="inline-flex items-center gap-1"><EnvelopeIcon className="size-4" /> rowellewis550@gmail.com</span>
          </p>
          {data.links && data.links.length > 0 && (
            <nav aria-label="Profile links" className="links mt-3">
              <ul className="flex gap-2 flex-wrap text-sm text-muted-foreground">
                {data.links.map((l) => (
                  <li key={l.url}>
                    <a className="hover:underline inline-flex items-center gap-1" href={l.url} target="_blank" rel="noreferrer">
                      <LinkIcon className="size-4" /> {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* In-page navigation */}
          <nav aria-label="Sections" className="mt-6 hidden lg:block">
            <ul className="space-y-1 text-sm">
              {['Summary', 'Experience', 'Skills', 'Education'].map((s) => {
                const isActive = active === s
                return (
                  <li key={s} className="relative">
                    <a
                      href={`#section-${s}`}
                      className={[
                        'group flex items-center gap-2 pl-3 pr-2 py-1 rounded-sm transition-colors',
                        'text-primary/80 hover:text-primary focus:text-primary',
                        isActive ? 'text-primary font-semibold' : 'font-medium'
                      ].join(' ')}
                    >
                      <span
                        aria-hidden
                        className={[
                          'absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-primary/60',
                          'opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity',
                          isActive ? 'opacity-100' : ''
                        ].join(' ')}
                      />
                      {s}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="mt-6 print:hidden">
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
              </Button>
              <Button onClick={() => window.print()} className="print-btn">Download PDF</Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="lg:col-span-8 space-y-10">
          <Section title="Summary">
            <p className="text-sm leading-7 text-muted-foreground max-w-prose">{data.summary}</p>
          </Section>

        <Section title="Experience">
          <ul className="experience relative grid gap-8 scroll-smooth">
            <div className="absolute left-3 top-1 bottom-1 border-s border-primary/30 pointer-events-none" aria-hidden="true" />
            {data.experience.map((job, idx) => (
              <li key={`${job.company}-${idx}`} className="job relative pl-10">
                <div className="absolute left-0 top-2 size-2 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/20" aria-hidden="true" />
                <h3 className="text-base font-semibold">
                  {job.title} · {job.company}
                </h3>
                <div className="meta text-sm text-muted-foreground">
                  <span>
                    {job.start} — {job.end}
                  </span>
                  {job.location && <span> · {job.location}</span>}
                </div>
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="bullets mt-3 grid gap-2 list-disc pl-5 max-w-prose">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-sm leading-7">{b}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <div className="skills">
            <dl className="grid sm:grid-cols-[220px_1fr] gap-x-3 gap-y-2 text-sm">
              <div>
                <dt className="font-semibold">Programming Languages</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.programmingLanguages.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Cloud Platforms</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.cloudPlatforms.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">DevOps Tools</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.devopsTools.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Web Services</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.webServices.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Database</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.database.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Core Skills</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.coreSkills.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Project Management</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.projectManagement.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Tools</dt>
                <dd className="mt-0.5 text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.tools.map((s) => (
                      <Badge key={s} variant="secondary">{s}</Badge>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </Section>

        <Section title="Education">
          <ul>
            {data.education.map((e, i) => (
              <li key={i} className="edu">
                <div>
                  <h3 className="font-semibold">{e.institution}</h3>
                  <p className="text-sm text-muted-foreground">
                    {e.degree}
                    {e.graduationDate ? ` · ${e.graduationDate}` : ''}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
        </main>
      </div>
    </div>
  )
}

export default Resume
