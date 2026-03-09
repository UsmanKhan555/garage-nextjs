'use client'

import { useState, FormEvent } from 'react'

// ── Update with your real info ──────────────────────────────────────────────
const PHONE = '+1234567890'
const WHATSAPP = '1234567890'
// Google Maps: Go to maps.google.com → Share → Embed a map → copy the src URL
const MAPS_EMBED_SRC = ''
// ───────────────────────────────────────────────────────────────────────────

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: connect to your form handler (Formspree, EmailJS, server action, etc.)
    setSubmitted(true)
  }

  return (
    <section className="bg-neutral-950 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Get In Touch
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
            Contact Us
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left — info + map */}
          <div className="space-y-10">
            <div className="space-y-7">

              {/* Phone */}
              <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-white group-hover:text-white">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">Phone</p>
                  <p className="text-sm font-medium text-white">{PHONE}</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500 transition-colors group-hover:border-[#25D366] group-hover:text-[#25D366]">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">WhatsApp</p>
                  <p className="text-sm font-medium text-white">Message us anytime</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500">
                  <LocationIcon />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">Location</p>
                  <p className="text-sm font-medium text-white">123 Main Street, Your City</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 text-neutral-500">
                  <ClockIcon />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">Hours</p>
                  <p className="text-sm font-medium text-white">Mon – Sat &nbsp; 8:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="aspect-video w-full overflow-hidden rounded bg-neutral-900">
              {MAPS_EMBED_SRC ? (
                <iframe
                  src={MAPS_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                  title="Elite Garage Location"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-neutral-700">
                  <MapIcon />
                  <p className="text-xs uppercase tracking-widest">Add Google Maps Embed</p>
                  <p className="text-[10px] text-neutral-800">
                    Maps → Share → Embed a map → paste src URL above
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex h-full min-h-64 items-center justify-center rounded border border-neutral-800 p-12 text-center">
                <div>
                  <p className="mb-2 text-2xl font-black text-white">Message Sent</p>
                  <p className="text-sm text-neutral-500">We&apos;ll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full rounded border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 234 567 890"
                    className="w-full rounded border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors focus:border-neutral-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-neutral-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your vehicle issue..."
                    className="w-full resize-none rounded border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors focus:border-neutral-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-white py-3.5 text-xs font-bold uppercase tracking-widest text-neutral-950 transition-colors hover:bg-neutral-100"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}
