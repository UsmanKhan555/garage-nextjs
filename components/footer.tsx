import Link from 'next/link'

const PHONE = '+1234567890'
const WHATSAPP = '1234567890'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">

          {/* Brand */}
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-white">
              Elite Garage
            </p>
            <p className="text-xs leading-relaxed text-neutral-600">
              Professional auto services.<br />
              Trusted by hundreds of drivers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">
              Navigation
            </p>
            <ul className="space-y-3">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-neutral-500 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-widest text-neutral-600">
              Contact
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="block text-xs text-neutral-500 transition-colors hover:text-white"
              >
                {PHONE}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-neutral-500 transition-colors hover:text-white"
              >
                WhatsApp
              </a>
              <p className="text-xs text-neutral-700">123 Main Street, Your City</p>
              <p className="text-xs text-neutral-700">Mon – Sat &nbsp; 8:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-neutral-900 pt-8 flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-neutral-700">
            © {new Date().getFullYear()} Elite Garage. All rights reserved.
          </p>
          <p className="text-xs text-neutral-800">Professional Auto Services</p>
        </div>
      </div>
    </footer>
  )
}
