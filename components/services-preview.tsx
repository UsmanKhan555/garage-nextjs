import Link from 'next/link'
import { SITE } from '@/lib/config'

// Show first 4 services on the homepage; full list is on /services
const PREVIEW_COUNT = 4

export default function ServicesPreview() {
  const preview = SITE.services.slice(0, PREVIEW_COUNT)

  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
              What We Do
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="self-start text-xs font-medium uppercase tracking-widest text-neutral-400 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline md:self-auto"
          >
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-950 text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>

              {/* Number */}
              <p className="mb-2 text-[10px] font-medium uppercase tracking-widest text-neutral-300">
                {id}
              </p>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold leading-snug tracking-tight text-neutral-950">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-auto text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
