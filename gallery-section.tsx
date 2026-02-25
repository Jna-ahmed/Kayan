import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery1.jpg", alt: "مبادرة تطوعية مع الأطفال" },
  { src: "/images/gallery2.jpg", alt: "فريق العمل في مؤتمر شبابي" },
  { src: "/images/gallery3.jpg", alt: "فعالية مجتمعية خارجية" },
  { src: "/images/gallery4.jpg", alt: "ملتقى شباب المستقبل" },
  { src: "/images/gallery5.jpg", alt: "زيارة الهيئة العامة للاستعلامات" },
  { src: "/images/gallery6.jpg", alt: "لقاء رسمي مع مسؤولين" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black text-primary md:text-4xl">
          {"معرض الصور"}
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p className="absolute bottom-3 right-3 text-sm font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
          >
            {"رؤية المزيد"}
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
