import type { Metadata } from 'next'
import FadeInView from '@/components/motion/FadeInView'

export const metadata: Metadata = {
  title: 'All Done — Michaelangelo',
  description: 'Your action has been confirmed successfully.',
  robots: { index: false, follow: false },
}

export default function AllDonePage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <section
        className="w-full max-w-lg text-center"
        aria-label="Confirmation"
      >
        <FadeInView direction="none">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12 text-blue"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h1 className="font-display text-[clamp(48px,10vw,80px)] leading-none tracking-wider text-off-black mb-4">
            You&apos;re all done!
          </h1>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            Your details have been confirmed. We&apos;ll take it from here.
          </p>
        </FadeInView>
      </section>
    </main>
  )
}
