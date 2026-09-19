import { useMemo } from 'react'
import { GitFork, Github, Star } from 'lucide-react'
import { githubStats, repos } from '../data/github'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

/** Deterministic pseudo-random so the activity grid is stable across renders. */
function useActivityGrid(weeks = 26) {
  return useMemo(() => {
    let seed = 20260815
    const next = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }
    return Array.from({ length: weeks }, () =>
      Array.from({ length: 7 }, () => {
        const value = next()
        if (value > 0.82) return 4
        if (value > 0.62) return 3
        if (value > 0.4) return 2
        if (value > 0.2) return 1
        return 0
      }),
    )
  }, [weeks])
}

const intensity = [
  'bg-surface-2',
  'bg-fg/15',
  'bg-fg/30',
  'bg-fg/50',
  'bg-fg/75',
]

export function GithubActivity() {
  const grid = useActivityGrid()

  return (
    <section className="border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Open source"
          title="Code, experiments, and public repos."
          description="Most of what I learn ends up here — small libraries, starter kits, and utilities I got tired of rewriting."
          action={
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-[0.8125rem] text-fg transition-all duration-200 ease-smooth hover:border-fg/20 hover:bg-surface-2"
            >
              <Github className="size-3.5" aria-hidden="true" />
              @{githubStats.handle}
            </a>
          }
        />

        <Reveal className="mt-12">
          <div className="surface-card p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow">Contribution activity</span>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-2xs text-subtle">Less</span>
                {intensity.map((tone, index) => (
                  <span
                    key={index}
                    className={`size-2.5 rounded-[2px] border border-border ${tone}`}
                    aria-hidden="true"
                  />
                ))}
                <span className="font-mono text-2xs text-subtle">More</span>
              </div>
            </div>

            <div className="no-scrollbar mt-5 overflow-x-auto pb-1">
              <div
                className="flex gap-[3px]"
                role="img"
                aria-label={`Contribution activity grid for the last ${grid.length} weeks. Illo demonstration data.`}
              >
                {grid.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((level, dayIndex) => (
                      <span
                        key={dayIndex}
                        className={`size-2.5 rounded-[2px] border border-border/60 ${intensity[level]}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4">
              {[
                { label: 'Contributions', value: githubStats.contributions },
                { label: 'Repositories', value: githubStats.repositories },
                { label: 'Followers', value: githubStats.followers },
              ].map((stat) => (
                <span key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-sm font-medium tracking-[-0.01em] text-fg">
                    {stat.value}
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-[0.12em] text-subtle">
                    {stat.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {repos.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.04} className="h-full">
              <a
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className="surface-card group flex h-full flex-col gap-3 p-5 hover:border-fg/20 hover:shadow-lifted sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.8125rem] text-fg">{repo.name}</span>
                  <span className="font-mono text-2xs text-subtle">{repo.updated}</span>
                </div>
                <p className="text-pretty text-[0.8125rem] leading-relaxed text-muted">
                  {repo.description}
                </p>
                <div className="mt-auto flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-1.5 font-mono text-2xs text-muted">
                    <span className="size-2 rounded-full bg-fg/30" aria-hidden="true" />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-2xs text-muted">
                    <Star className="size-3" aria-hidden="true" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-2xs text-muted">
                    <GitFork className="size-3" aria-hidden="true" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
