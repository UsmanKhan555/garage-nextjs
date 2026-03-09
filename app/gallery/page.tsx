import Gallery from '@/components/gallery'

export const metadata = {
  title: 'Gallery',
  description: 'See our work — truck repairs, suspension jobs, and heavy vehicle maintenance completed at Elite Garage Dubai.',
}

export default function GalleryPage() {
  return (
    <main className="pt-16">

      {/* Page header */}
      <section className="bg-neutral-950 py-24 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
            Our Work
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <Gallery />
    </main>
  )
}
