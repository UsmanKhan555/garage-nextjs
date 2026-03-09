import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import { SITE } from '@/lib/config'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SITE.seo.title,
    template: SITE.seo.titleTemplate,
  },
  description: SITE.seo.description,
  keywords: SITE.seo.keywords,
  openGraph: {
    title: SITE.seo.title,
    description: SITE.seo.description,
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
