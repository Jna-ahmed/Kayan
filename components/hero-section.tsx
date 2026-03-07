"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft } from "lucide-react"

const heroImages = [
  "https://i.postimg.cc/VvyzVrhK/image-(5).jpg",
  "https://i.postimg.cc/vBrKG4B5/image-(6).jpg",
  "https://i.postimg.cc/NffnwfwJ/image-(7).jpg",
  "https://i.postimg.cc/RFLgj2ss/image-(8).jpg",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="relative h-[600px] w-full overflow-hidden bg-[#8B0000]">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Hero Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            unoptimized // لضمان ظهور روابط postimg
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-sm font-bold tracking-widest text-[#C5A059] uppercase">
          معاً نبني المستقبل
        </p>
        <h1 className="mb-6 text-4xl font-black md:text-6xl drop-shadow-2xl">
          كيان الشباب المستقبل
        </h1>
        <p className="mb-10 max-w-2xl text-lg font-medium opacity-95 md:text-xl leading-relaxed">
          نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل في الجمهورية الجديدة
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-full bg-[#C5A059] px-8 py-4 text-sm font-black text-black transition-all hover:scale-105 hover:bg-white"
          >
            انضم إلينا الآن
            <ArrowLeft className="h-5 w-5" />
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-white px-8 py-4 text-sm font-black text-white transition-all hover:bg-white/10"
          >
            اكتشف مبادراتنا
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "w-8 bg-[#C5A059]" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
