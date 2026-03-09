import Image from 'next/image'

const IMAGES = [
  { src: '/images/pexels-cottonbro-4480466.jpg', alt: 'Garage work 1' },
  { src: '/images/pexels-cottonbro-4480505.jpg', alt: 'Garage work 2' },
  { src: '/images/pexels-cottonbro-4481940.jpg', alt: 'Garage work 3' },
  { src: '/images/pexels-cottonbro-4489704.jpg', alt: 'Garage work 4' },
  { src: '/images/pexels-cottonbro-4489707.jpg', alt: 'Garage work 5' },
  { src: '/images/pexels-cottonbro-4489716.jpg', alt: 'Garage work 6' },
]

export default function Gallery() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Our Work
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-neutral-950 md:text-4xl">
            Gallery
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((image) => (
            <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
