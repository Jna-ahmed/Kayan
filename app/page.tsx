"use client"
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const heroImages = [
  { src: "https://i.postimg.cc/VvyzVrhK/image-(5).jpg", alt: "كيان الشباب المستقبل 1" },
  { src: "https://i.postimg.cc/vBrKG4B5/image-(6).jpg", alt: "كيان الشباب المستقبل 2" },
  { src: "https://i.postimg.cc/NffnwfwJ/image-(7).jpg", alt: "كيان الشباب المستقبل 3" },
  { src: "https://i.postimg.cc/RFLgj2ss/image-(8).jpg", alt: "كيان الشباب المستقبل 4" },
]

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  return (
    <section id="hero" className="relative h-[600px] w-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {heroImages.map((img, index) => (
          <div key={index} className="relative h-full min-w-full flex-[0_0_100%]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />\
            <div className="absolute inset-0 bg-[#8B0000]/60 z-10" /> 
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
        <span className="mb-4 rounded-full bg-[#C5A059] px-4 py-1 text-sm font-bold text-black">
          {"معاً نبني المستقبل"}
        </span>
        <h1 className="mb-6 text-4xl font-black md:text-6xl text-balance">
          {"كيان الشباب المستقبل"}
        </h1>
        <p className="mb-8 max-w-2xl text-lg opacity-90 text-balance">
          {"نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل"}
        </p>
        <div className="flex gap-4">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-lg bg-[#C5A059] px-8 py-3 font-bold text-black transition-transform hover:scale-105"
          >
            {"انضم إلينا"}
            <span className="text-xl">←</span>
          </a>
          <a
            href="#about"
            className="rounded-lg border-2 border-white px-8 py-3 font-bold transition-colors hover:bg-white/10"
          >
            {"مبادراتنا"}
          </a>
        </div>
      </div>
    </section>
  )
}