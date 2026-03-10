'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE } from '@/lib/config'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-neutral-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-black uppercase tracking-[0.15em] text-neutral-950"
          >
            {SITE.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                  pathname === href
                    ? 'text-neutral-950'
                    : 'text-neutral-400 hover:text-neutral-950'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative md:hidden flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-px w-6 bg-neutral-950 transition-all duration-300 ${
                open ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-neutral-950 transition-all duration-300 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-px w-6 bg-neutral-950 transition-all duration-300 ${
                open ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-neutral-100 bg-white">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex border-b border-neutral-50 px-6 py-4 text-xs font-medium uppercase tracking-widest transition-colors ${
                pathname === href
                  ? 'text-neutral-950'
                  : 'text-neutral-400 hover:text-neutral-950'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
