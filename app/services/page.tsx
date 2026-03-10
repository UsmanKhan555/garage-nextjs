import Link from 'next/link'
import { SITE } from '@/lib/config'

export const metadata = {
  title: 'Our Services',
  description: `Engine diagnostics, brake repair, suspension service, and more in ${SITE.city}. Fast turnaround and honest pricing at ${SITE.name}.`,
}

export default function ServicesPage() {
  return (
    <main className="pt-16">

      {/* Page header */}
      <section className="bg-neutral-950 py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            What We Offer
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Our Services
          </h1>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.services.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="rounded-xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-md"
              >
                {/* Icon + number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-950 text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium tabular-nums text-neutral-200">{id}</span>
                </div>

                {/* Title + description */}
                <h2 className="mb-3 text-xl font-black tracking-tight text-neutral-950">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl bg-neutral-950 px-8 py-12 text-center">
            <p className="mb-2 text-xl font-black text-white">Ready to book?</p>
            <p className="mb-8 text-sm text-neutral-500">Get in touch and we'll take care of the rest.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
