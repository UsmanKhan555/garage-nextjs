import { SITE } from '@/lib/config'

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            What Clients Say
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl">
            Testimonials
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SITE.testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-neutral-100 bg-neutral-50 p-7"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-neutral-950" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                &ldquo;{t.body}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-neutral-200 pt-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
