import Image from 'next/image'
import { SITE } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-neutral-950">

      {/* Background image */}
      <Image
        src={SITE.images.heroBg}
        alt={`${SITE.name} workshop`}
        fill
        priority
        className="object-cover"
      />

      {/* Layered dark overlay — heavy at bottom so text is always readable */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content — left-aligned, anchored to bottom */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 md:pb-28">

        {/* Location tag */}
        <div className="mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-white/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
            {SITE.location}
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="mb-6 max-w-4xl font-black uppercase leading-[0.9] tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          {SITE.hero.headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <span className="text-white/40">{SITE.hero.headlineAccent}</span>
        </h1>

        {/* Subtext */}
        <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          {SITE.hero.subtext}
        </p>

        {/* Service pills */}
        <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2">
          {SITE.servicePills.map((service, i) => (
            <span key={service} className="flex items-center gap-4">
              <span className="text-sm font-medium text-white/70 md:text-base">
                {service}
              </span>
              {i < SITE.servicePills.length - 1 && <span className="text-white/20">•</span>}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center gap-2.5 rounded bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-100 sm:justify-start"
          >
            <PhoneIcon />
            Call Now
          </a>

          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#20c45a] sm:justify-start"
          >
            <WhatsAppIcon />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/5" />
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
