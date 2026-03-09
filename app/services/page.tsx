import Link from 'next/link'
import { Wrench, Truck, Settings2, ShieldCheck, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Services',
  description: 'Suspension repair, leaf spring replacement, heavy truck maintenance, and brake inspection in Dubai. Fast turnaround and honest pricing.',
}

const SERVICES = [
  {
    id: '01',
    icon: Wrench,
    title: 'Suspension Repair',
    description:
      'Full diagnosis and repair of suspension systems including shocks, struts, control arms, and bushings. We restore ride comfort and vehicle handling to factory standards.',
    details: ['Shock & strut replacement', 'Control arm repair', 'Bushing replacement', 'Wheel alignment check'],
  },
  {
    id: '02',
    icon: Truck,
    title: 'Heavy Truck Maintenance',
    description:
      'Comprehensive scheduled maintenance for heavy trucks and commercial vehicles. Everything needed to keep your fleet reliable, efficient, and road-legal.',
    details: ['Oil & filter change', 'Fluid top-ups & inspection', 'Belt & hose check', 'Full vehicle health report'],
  },
  {
    id: '03',
    icon: Settings2,
    title: 'Leaf Spring Replacement',
    description:
      'Specialist leaf spring services for trucks, SUVs, and heavy-duty vehicles. From single leaf replacement to full pack overhauls — done right.',
    details: ['Single leaf replacement', 'Full pack replacement', 'U-bolt replacement', 'Spring re-arching'],
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Brake Inspection',
    description:
      'Thorough inspection and servicing of your entire brake system — from pads and rotors to calipers and brake fluid. Safety is never a compromise.',
    details: ['Brake pad replacement', 'Rotor resurfacing / replacement', 'Caliper service', 'Brake fluid flush'],
  },
]

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
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map(({ id, icon: Icon, title, description, details }) => (
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
                <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                  {description}
                </p>

                {/* Detail checklist */}
                <ul className="space-y-2 border-t border-neutral-100 pt-6">
                  {details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-neutral-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-neutral-300" strokeWidth={1.75} />
                      {d}
                    </li>
                  ))}
                </ul>
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
