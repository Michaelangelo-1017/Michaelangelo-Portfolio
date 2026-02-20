import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import SkillTag from '@/components/ui/SkillTag'
import { skills } from '@/data/skills'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50/50"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <FadeInView>
            <SectionLabel>About Me</SectionLabel>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-wider text-off-black mb-8">
              Developer.<br />
              <span className="text-blue">Builder.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <div className="space-y-4 font-body text-lg text-gray-600 leading-relaxed">
              <p>
                I&apos;m Michaelangelo, a full-stack developer who builds fast, clean websites
                for small businesses that want to show up professionally online.
              </p>
              <p>
                I work with founders, small business owners and solo operators who need a site that actually does
                something: captures leads, looks sharp on every device, and doesn&apos;t need
                constant babysitting.
              </p>
              <p className="italic text-gray-400">
                When I&apos;m not building, I&apos;m{' '}
                <span className="bg-blue/10 text-blue rounded px-1">
                  writing songs, singing and teaching the next generation of builders and creators.
                </span>
                .
              </p>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.2} direction="left">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>

            {/* Decorative stat-style boxes — use only non-fabricated copy */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 text-center">
                <p className="font-display text-5xl tracking-wide text-blue leading-none mb-2">
                  10–14
                </p>
                <p className="font-body text-sm text-gray-400">Day turnaround</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-gray-100 text-center">
                <p className="font-display text-5xl tracking-wide text-purple leading-none mb-2">
                  £450
                </p>
                <p className="font-body text-sm text-gray-400">Introductory rate</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
