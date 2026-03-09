export const metadata = {
  title: 'About Us',
  description: 'Learn about Elite Garage Dubai — trusted by hundreds of drivers for professional heavy vehicle repair and truck maintenance services.',
}

const VALUES = [
  {
    id: '01',
    title: 'Honest Pricing',
    description: 'No hidden fees. We provide clear, upfront quotes before any work begins.',
  },
  {
    id: '02',
    title: 'Genuine Parts',
    description: 'We use only quality, manufacturer-approved parts for lasting repairs.',
  },
  {
    id: '03',
    title: 'Expert Mechanics',
    description: 'Our team brings years of hands-on experience across all vehicle types.',
  },
  {
    id: '04',
    title: 'Fast Turnaround',
    description: 'We respect your time. Most repairs are completed the same day.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="bg-neutral-950 py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            About Us
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Built on Trust,<br />Driven by Craft
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-2xl font-black tracking-tight text-neutral-950 md:text-3xl">
                Our Story
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-500">
                <p>
                  Elite Garage was founded with a single mission: deliver professional
                  auto services without the runaround. We believe every driver deserves
                  honest advice, fair pricing, and repairs done right the first time.
                </p>
                <p>
                  From suspension and leaf spring work to full truck maintenance, our
                  team handles it all — combining technical expertise with a genuine
                  commitment to customer satisfaction.
                </p>
                <p>
                  Hundreds of drivers trust us to keep their vehicles safe and
                  roadworthy. We&apos;d love to earn your trust too.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-neutral-100 self-start">
              {[
                { value: '500+', label: 'Vehicles Serviced' },
                { value: '10+', label: 'Years Experience' },
                { value: '100%', label: 'Quality Parts' },
                { value: '5★', label: 'Customer Rating' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8">
                  <p className="mb-1 text-3xl font-black tracking-tight text-neutral-950">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              What We Stand For
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-px bg-neutral-100 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.id} className="bg-neutral-50 p-8 md:p-10">
                <span className="mb-6 block text-xs font-medium text-neutral-300">{v.id}</span>
                <h3 className="mb-3 text-base font-bold tracking-tight text-neutral-950">{v.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
