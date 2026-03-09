import ContactSection from '@/components/contact-section'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Elite Garage Dubai. Call, WhatsApp, or send a message — we respond fast.',
}

export default function ContactPage() {
  return (
    <main className="pt-16">

      {/* Page header */}
      <section className="bg-neutral-950 py-24 md:py-36 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Reach Out
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Let&apos;s Talk
          </h1>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
