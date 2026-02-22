import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import { Mail, Timer, Users } from 'lucide-react'

const columns = [
  {
    icon: Users,
    title: 'Capture Every Lead',
    body: 'I connect your site to a newsletter platform so every visitor who opts in is saved automatically. No manual exports. No lost contacts. No more manually chasing down leads.',
    accent: 'blue',
  },
  {
    icon: Mail,
    title: 'Follow Up Without Lifting a Finger',
    body: 'Once someone signs up, a pre-written email sequence kicks in automatically - introducing your business, building trust, and nudging them toward a purchase or booking. Set it once. Let it run.',
    accent: 'purple',
  },
  {
    icon: Timer,
    title: 'Save Time and Focus on What Matters',
    body: 'With automation in place, you can focus on growing your business while the system works for you. No more manual follow-ups or chasing down leads. You can focus on what you do best.',
    accent: 'blue',
  }
]

export default function AutomationAngle() {
  return (
    <section
      id="automation"
      className="w-screen relative left-1/2 -translate-x-1/2 py-10 sm:py-16 lg:py-24 bg-off-black text-white overflow-hidden"
      aria-label="Automation section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <SectionLabel light>Why Automation Matters</SectionLabel>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-[clamp(52px,8vw,120px)] leading-none tracking-wider text-white mb-16">
            Your website should work<br />
            <span className="text-blue">while you sleep.</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {columns.map(({ icon: Icon, title, body, accent }, i) => (
            <FadeInView key={title} delay={0.1 * (i + 2)} className="min-w-0">
              <article
                className={`h-full min-h-[320px] p-8 rounded-2xl border flex flex-col ${
                  accent === 'blue'
                    ? 'border-blue/30 bg-blue/5'
                    : 'border-purple/30 bg-purple/5'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                    accent === 'blue' ? 'bg-blue/20' : 'bg-purple/20'
                  }`}
                >
                  <Icon
                    size={24}
                    className={accent === 'blue' ? 'text-blue' : 'text-purple'}
                  />
                </div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-white mb-4 leading-tight">
                  {title}
                </h3>
                <p className="font-body text-sm sm:text-base text-gray-400 leading-relaxed flex-1">{body}</p>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
