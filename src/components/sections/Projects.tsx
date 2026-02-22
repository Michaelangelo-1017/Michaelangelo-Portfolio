import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 sm:py-16 lg:py-24"
      aria-label="Projects section"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <SectionLabel>Selected Work</SectionLabel>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-wider text-off-black mb-4">
            Recent Builds
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 mb-12">
            A selection of recent builds. More available on request.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeInView key={project.title + i} delay={0.1 * (i + 1)}>
              <ProjectCard {...project} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
