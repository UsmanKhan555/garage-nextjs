import {
  Wrench,
  ShieldCheck,
  Settings2,
  Gauge,
  Droplets,
} from 'lucide-react'

export const SITE = {
  // Business identity
  name: 'Your Business Name',
  tagline: 'Your Tagline Here',
  city: 'Your City',
  country: 'Your Country',
  location: 'Your City, Country',

  // Contact
  phone: '+1 234 567 8900',
  whatsapp: '12345678900', // no + sign, with country code
  email: '',
  address: '123 Main Street, Your City',
  hours: [
    'Monday – Saturday',
    '8:00 AM – 7:00 PM',
  ],

  // Demo notice (shown in footer — remove when site goes live)
  demoNotice: 'Demo website created to showcase how this business could appear online.',

  // SEO
  seo: {
    title: 'Your Business Name | Auto Repair & Services',
    titleTemplate: '%s | Your Business Name',
    description:
      'Professional vehicle repair and maintenance services in Your City. Expert technicians, honest pricing, fast turnaround.',
    keywords: [
      'auto repair',
      'car repair',
      'vehicle maintenance',
      'garage',
    ],
  },

  // Hero section
  hero: {
    headlineLines: ['Professional', 'Auto Repair'],
    headlineAccent: 'Services',
    subtext:
      'Your Business Name provides reliable vehicle repair and maintenance services in Your City. Our experienced technicians ensure your vehicle runs safely and efficiently.',
  },

  // About section
  about: {
    story: [
      'Your Business Name is a trusted vehicle repair workshop located in Your City. We provide a wide range of automotive services including diagnostics, maintenance, and repair.',
      'Our goal is to deliver reliable service, honest diagnostics, and quality repairs to keep your vehicle running smoothly.',
    ],
  },

  // Services (used in homepage preview and services page)
  services: [
    {
      id: '01',
      icon: Gauge,
      title: 'Engine Diagnostics & Repair',
      description:
        'Professional engine inspection and repair to identify and fix performance issues.',
    },
    {
      id: '02',
      icon: Droplets,
      title: 'Oil Change & Lubrication',
      description:
        'Regular oil changes and lubrication services to keep your engine running smoothly.',
    },
    {
      id: '03',
      icon: ShieldCheck,
      title: 'Brake Services',
      description:
        'Inspection, repair, and replacement of brake components to ensure safety.',
    },
    {
      id: '04',
      icon: Settings2,
      title: 'Transmission Repair',
      description:
        'Comprehensive transmission maintenance and repair for smooth vehicle performance.',
    },
    {
      id: '05',
      icon: Wrench,
      title: 'Suspension Repair',
      description:
        'Repair and replacement of suspension components for a stable and comfortable ride.',
    },
  ],

  // Service pills shown in hero
  servicePills: ['Engine Repair', 'Brake Services', 'Suspension', 'Maintenance'],

  // Images
  images: {
    // Hero background — drop photo in /public/images/ and update path
    heroBg: '/images/hero.jpg',
    // Gallery — add/remove entries to match the photos you have
    gallery: [
      { src: '/images/photo-1.jpg', alt: 'Workshop photo 1' },
      { src: '/images/photo-2.jpg', alt: 'Workshop photo 2' },
      { src: '/images/photo-3.jpg', alt: 'Workshop photo 3' },
    ],
  },

  // Google Maps embed — Maps → Share → Embed a map → copy the src URL
  mapsEmbedSrc: '',

  // Testimonials
  testimonials: [
    {
      name: 'Customer Name',
      role: 'Google Review',
      body: 'Paste real Google review here.',
    },
    {
      name: 'Customer Name',
      role: 'Google Review',
      body: 'Paste real Google review here.',
    },
    {
      name: 'Customer Name',
      role: 'Google Review',
      body: 'Paste real Google review here.',
    },
  ],
}
