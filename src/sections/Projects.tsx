import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Projects() {
  const [openProject, setOpenProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I've designed, built, and shipped."
          description="Each of these started as a clear problem and ended as a working product — with the interface treated as seriously as the backend."
          action={
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-[0.8125rem] text-muted transition-colors duration-200 hover:text-fg"
            >
              Start a project
              <ArrowUpRight className="size-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} as="div" className="h-full">
              <ProjectCard
                project={project}
                index={index}
                onOpen={setOpenProject}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
