import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import FeatureItem from '@/components/ui/FeatureItem'
import Button from '@/components/ui/Button'
import { features } from '@/data/features'

export default function Services() {
  return (
    <section
      id="services"
      className="py-10 sm:py-16 lg:py-24 bg-gray-50/50"
      aria-label="Services section"
    >
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <SectionLabel>What I Offer</SectionLabel>
        </FadeInView>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + description */}
          <div>
            <FadeInView delay={0.1}>
              <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-wider text-off-black mb-6">
                Website + Automation Launch Package
              </h2>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="font-body text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed mb-10">
                Everything a small business needs to launch online. Built <span className="text-blue">clean</span>, built <span className="text-blue">fast</span>, built to <span className="text-blue">grow</span>.
              </p>
            </FadeInView>

            {/* Price callout */}
            <FadeInView delay={0.3}>
              <div className="relative p-8 rounded-2xl border-2 border-blue bg-white overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-blue/5 rounded-full -translate-y-1/2 translate-x-1/2"
                />
                <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-blue mb-2">
                  Introductory Rate
                </p>
                <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-off-black leading-none mb-2">
                  £450
                </p>
                <p className="font-body text-sm text-gray-400">
                  First 3 clients only · 10-14 day delivery time
                </p>
                <div className="mt-6">
                  <Button href="#contact" size="lg" className="w-full justify-center">
                    Claim Your Spot
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right: feature list */}
          <FadeInView delay={0.15} direction="left">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                Everything included
              </p>
              <div>
                {features.map(({ icon, label }) => (
                  <FeatureItem key={label} icon={icon} label={label} />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
