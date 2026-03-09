import Link from 'next/link'
import { Wrench, Truck, Settings2, ShieldCheck } from 'lucide-react'

const SERVICES = [
  {
    id: '01',
    icon: Wrench,
    title: 'Suspension Repair',
    description:
      'Reliable diagnosis and repair of truck suspension systems — restoring ride comfort, stability, and control on any terrain.',
  },
  {
    id: '02',
    icon: Truck,
    title: 'Heavy Truck Maintenance',
    description:
      'Complete scheduled maintenance for heavy vehicles. Oil, filters, belts, fluids, and a full health check to keep your fleet running.',
  },
  {
    id: '03',
    icon: Settings2,
    title: 'Leaf Spring Replacement',
    description:
      'Professional leaf spring repair and installation for trucks and heavy-duty vehicles. Single leaf or full pack — done right.',
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Brake Inspection',
    description:
      'Full safety inspection of your brake system — pads, rotors, calipers, and fluid. Because stopping is not optional.',
  },
]

export default function ServicesPreview() {
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
          {SERVICES.map(({ id, icon: Icon, title, description }) => (
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
