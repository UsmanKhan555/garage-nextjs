import {
  Gauge,
  Droplets,
  ShieldCheck,
  Settings2,
  Wrench,
  Wind,
  Zap,
  Flame,
  ClipboardList,
} from 'lucide-react'

export const SITE = {
  // Business identity
  name: 'Al Mezan Garage',
  tagline: 'Auto Repair Services in Dubai',
  city: 'Dubai',
  country: 'United Arab Emirates',
  location: 'Deira, Dubai',

  // Contact
  phone: '+971 56 287 1360',
  whatsapp: '971562871360', // no + sign, with country code
  email: '',
  address: '12B, Alkabaisi, Muraqabat, Deira, Dubai, United Arab Emirates',
  hours: [
    'Monday – Saturday',
    '8:00 AM – 1:00 PM  ·  2:00 PM – 8:00 PM',
    'Sunday – Closed',
  ],

  // Images
  images: {
    // Hero background — swap path to change the hero photo
    heroBg: '/images/pexels-artempodrez-8986070.jpg',
    // Gallery — add/remove entries to match the photos you have
    gallery: [
      { src: '/images/Screenshot 2026-03-09 225649.png', alt: 'Al Mezan Garage work 1' },
      { src: '/images/pexels-artempodrez-8986070.jpg', alt: 'Al Mezan Garage work 2' },
      { src: '/images/pexels-daniel-andraski-197681005-13065690.jpg', alt: 'Al Mezan Garage work 3' },
      { src: '/images/pexels-maltelu-2244746.jpg', alt: 'Al Mezan Garage work 4' },
      { src: '/images/pexels-olly-3807277.jpg', alt: 'Al Mezan Garage work 5' },
      { src: '/images/pexels-olly-3807386.jpg', alt: 'Al Mezan Garage work 6' },
    ],
  },

  // Google Maps embed — Al Mezan Garage, Deira Dubai
  mapsEmbedSrc: 'https://maps.google.com/maps?q=25.2671577,55.335857&z=17&output=embed',

  // Demo notice (shown in footer — remove when site goes live)
  demoNotice: 'Demo website created to showcase how this business could appear online.',

  // SEO
  seo: {
    title: 'Al Mezan Garage Dubai | Auto Repair & Vehicle Services',
    titleTemplate: '%s | Al Mezan Garage Dubai',
    description:
      'Professional vehicle diagnostics, repair, and maintenance services in Deira, Dubai. Expert technicians for engine, brakes, suspension, AC, and electrical repairs.',
    keywords: [
      'auto repair Dubai',
      'car repair Deira Dubai',
      'engine diagnostics Dubai',
      'brake repair Dubai',
      'suspension repair Dubai',
      'car maintenance Dubai',
      'garage Deira Dubai',
    ],
  },

  // Hero section
  hero: {
    headlineLines: ['Professional', 'Auto Repair'],
    headlineAccent: 'Services',
    subtext:
      'Al Mezan Garage provides reliable vehicle diagnostics, repair, and maintenance services in Deira, Dubai. Our experienced technicians ensure your vehicle runs safely and efficiently.',
  },

  // About section (used on homepage if applicable and about page)
  about: {
    story: [
      'Al Mezan Garage is a trusted vehicle repair workshop located in Deira, Dubai. We provide a wide range of automotive services including diagnostics, maintenance, and repair for various vehicle systems.',
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
      title: 'Transmission Repair & Service',
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
    {
      id: '06',
      icon: Wind,
      title: 'AC & Heating Service',
      description:
        'Diagnosis and repair of vehicle air conditioning and heating systems.',
    },
    {
      id: '07',
      icon: Zap,
      title: 'Electrical System Repair',
      description:
        'Troubleshooting and repair of vehicle electrical systems and components.',
    },
    {
      id: '08',
      icon: Flame,
      title: 'Exhaust System Repair',
      description:
        'Inspection and repair of exhaust systems to improve performance and efficiency.',
    },
    {
      id: '09',
      icon: ClipboardList,
      title: 'Preventative Maintenance',
      description:
        'Routine maintenance services designed to prevent costly repairs and extend vehicle life.',
    },
  ],

  // Service pills shown in hero
  servicePills: ['Engine Repair', 'Brake Services', 'Suspension', 'AC Service'],

  // Testimonials — real Google reviews
  testimonials: [
    {
      name: 'Mohamed Mossad',
      role: 'Google Review',
      body: 'Both of this guy they have good service really thanks.',
    },
    {
      name: 'Shahood Shaz',
      role: 'Google Review',
      body: 'Best budget friendly auto service in Dubai.',
    },
    {
      name: 'Heba Sallam',
      role: 'Local Guide · Google Review',
      body: 'Good service, looks professional clean place.',
    },
  ],
}
