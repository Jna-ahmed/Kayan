import Image from "next/image"
import { ArrowLeft } from "lucide-react"

const galleryImages = [
  { 
    src: "https://i.postimg.cc/52cQcyhY/image.jpg", 
    alt: "منحة الاسعافات الاولية لتدريب متطوعي الشباب بناة المستقبل بمحافظة الدقهلية - ابريل 2025" 
  },
  { 
    src: "https://i.postimg.cc/PxFNS5b8/image-2.jpg", 
    alt: "تدشين برنامج رحلة التحول \" من طالب الي خريج \" بحضور الدكتور اشرف صبحي وزير الشباب والرياضة ، يوليو 2024" 
  },
  { 
    src: "https://i.postimg.cc/KYGzFMJx/image-(4).jpg", 
    alt: "النسخة الاولي من المنتدي الوطني لشباب المستقبل والذي تم تنفيذة برعايه وحضور الاستاذ الدكتور اشرف صبحي وزير الشباب والرياضة ، اكتوبر 2025" 
  },
  { 
    src: "https://i.postimg.cc/vm0rf9BD/image-1.jpg", 
    alt: "النسخة الاولي من المنتدي الوطني لشباب المستقبل والذي تم تنفيذة برعايه وحضور الاستاذ الدكتور اشرف صبحي وزير الشباب والرياضة ، اكتوبر 2025" 
  },
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