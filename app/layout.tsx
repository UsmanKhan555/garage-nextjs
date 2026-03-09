import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Elite Garage Dubai | Heavy Vehicle Repair & Truck Services',
    template: '%s | Elite Garage Dubai',
  },
  description:
    'Professional truck repair and suspension services in Dubai. Expert mechanics for suspension repair, leaf spring replacement, brake inspection, and heavy vehicle maintenance.',
  keywords: [
    'truck repair Dubai',
    'suspension repair Dubai',
    'leaf spring repair Dubai',
    'heavy vehicle maintenance Dubai',
    'brake inspection Dubai',
    'garage Dubai',
  ],
  openGraph: {
    title: 'Elite Garage Dubai | Heavy Vehicle Repair & Truck Services',
    description:
      'Professional truck repair and suspension services in Dubai. Expert mechanics, genuine parts, honest pricing.',
    type: 'website',
    locale: 'en_AE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
