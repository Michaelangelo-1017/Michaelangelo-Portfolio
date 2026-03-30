import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import FeatureItem from '@/components/ui/FeatureItem'
import Button from '@/components/ui/Button'
import { features } from '@/data/features'
import { FileText, Mail, Bell } from 'lucide-react'

const automationOnlyFeatures = [
  { icon: FileText, label: 'Quote request collection' },
  { icon: Mail, label: 'Instant email confirmation to clients and yourself' },
  { icon: Bell, label: 'Reminders to follow up with clients' },
]

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

        {/* Automation-only service */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeInView delay={0.1}>
              <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none tracking-wider text-off-black mb-6">
                Automation System Only
              </h2>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="font-body text-sm sm:text-base lg:text-lg text-gray-500 leading-relaxed mb-10">
                Add automation to your existing site. Manage quote requests, confirm leads instantly, and never miss a follow-up.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="relative p-8 rounded-2xl border-2 border-purple bg-white overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full -translate-y-1/2 translate-x-1/2"
                />
                <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-purple mb-2">
                  Introductory Rate
                </p>
                <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-off-black leading-none mb-2">
                  £249
                </p>
                <p className="font-body text-sm text-gray-400">
                  First 3 clients only · 5-7 day delivery time
                </p>
                <div className="mt-6">
                  <Button href="https://docs.google.com/forms/d/e/1FAIpQLScnMMovS_9QgxEWBpsQOv_J_dle06smWlPquOb-poBdqefyuQ/viewform?usp=publish-editor" size="lg" className="w-full justify-center bg-purple hover:bg-purple/90 focus-visible:ring-purple" target="_blank">
                    Claim Your Spot
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={0.15} direction="left">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                What&apos;s included
              </p>
              <div>
                {automationOnlyFeatures.map(({ icon, label }) => (
                  <FeatureItem key={label} icon={icon} label={label} iconColor="text-purple" backgroundColor="bg-purple/10" />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Website + Automation Launch Package */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
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
                  £549
                </p>
                <p className="font-body text-sm text-gray-400">
                  First 3 clients only · 10-14 day delivery time
                </p>
                <div className="mt-6">
                  <Button href="https://docs.google.com/forms/d/e/1FAIpQLScWoGxg-HqF1kDaSsPBG1B-SERR8UinopxGDwTnI-3vlIvi_A/viewform?usp=dialog" size="lg" className="w-full justify-center" target="_blank">
                    Claim Your Spot
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>

          <FadeInView delay={0.15} direction="left">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                Everything included
              </p>
              <div>
                {features.map(({ icon, label }) => (
                  <FeatureItem key={label} icon={icon} label={label} iconColor="text-blue" backgroundColor="bg-blue/10" />
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
