import FadeInView from '@/components/motion/FadeInView'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 overflow-hidden"
      aria-label="Contact section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <SectionLabel>Get In Touch</SectionLabel>
        </FadeInView>

        <FadeInView delay={0.1}>
          <h2 className="font-display text-[clamp(56px,10vw,130px)] leading-none tracking-wider text-off-black mb-8">
            Ready to build<br />
            <span className="text-blue">something real?</span>
          </h2>
        </FadeInView>

        <FadeInView delay={0.2}>
          <p className="font-body text-xl text-gray-500 max-w-lg mx-auto mb-12 leading-relaxed">
            I&apos;m currently taking on new projects. If you&apos;re a small business owner
            who wants a fast, clean website with automation built in then let&apos;s talk.
          </p>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button href="mailto:jagbodyke01@gmail.com" size="lg">
              Start a Project
            </Button>
            <Button href="mailto:jagbodyke01@gmail.com" variant="ghost" size="lg">
              Or email me directly →
            </Button>
          </div>
        </FadeInView>

        {/* Email display */}
        <FadeInView delay={0.4}>
          <p className="mt-12 font-body text-gray-300 text-lg">
            jagbodyke01@gmail.com
          </p>
        </FadeInView>
      </div>
    </section>
  )
}
