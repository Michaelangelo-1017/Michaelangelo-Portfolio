import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import FadeInView from '@/components/motion/FadeInView' 
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Thank You — Michaelangelo',
  description:
    'Your free website audit has been requested. Check your email shortly.',
  robots: { index: false, follow: false },
}

const CALENDLY_URL = 'https://calendly.com/michael-michaelangelo-digital/15-minute-meeting-clone'

export default function ThankYouPage() {
  return (
    <>
      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
        {/* Confirmation hero */}
        <section
          className="pt-10 sm:pt-6 lg:pt-10 pb-10 sm:pb-16 lg:pb-24"
          aria-label="Confirmation"
        >
          <div className="max-w-2xl mx-auto text-center">
            <FadeInView direction="none">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-blue"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <SectionLabel>Request Received</SectionLabel>
            </FadeInView>

            <FadeInView delay={0.15}>
              <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-none tracking-wider text-off-black mb-6">
                You&apos;re{' '}
                <span className="text-blue">all set</span>
              </h1>
            </FadeInView>

            <FadeInView delay={0.2}>
              <p className="font-body text-base sm:text-lg lg:text-xl text-gray-500 max-w-lg mx-auto leading-relaxed mb-3">
                Your free website audit is on its way. Keep an eye on your inbox, you&apos;ll receive a personalised breakdown with clear,
                actionable recommendations.
              </p>
            </FadeInView>

            <FadeInView delay={0.25}>
              <p className="font-body text-sm sm:text-base text-gray-400">
                This usually takes a few minutes.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Calendly CTA */}
        <section
          className="py-10 sm:py-16 lg:py-24 border-t border-gray-100"
          aria-label="Book a call"
        >
          <div className="max-w-2xl mx-auto text-center">
            <FadeInView>
              <SectionLabel>While You Wait</SectionLabel>
            </FadeInView>

            <FadeInView delay={0.1}>
              <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none tracking-wider text-off-black mb-6">
                Let&apos;s have a{' '}
                <span className="text-purple">quick chat</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.15}>
              <p className="font-body text-base sm:text-lg text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
              Jump on a free 15-minute call and I&apos;ll walk you through your results, 
              highlight the biggest wins, and show you exactly what could be implemented to save you time, money and energy.
              </p>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button href={CALENDLY_URL} target="_blank" size="lg">
                  Book a Free Call
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
