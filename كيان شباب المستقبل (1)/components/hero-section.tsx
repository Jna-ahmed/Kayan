import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[600px] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="فريق كيان الشباب المستقبل"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4a1520]/90 via-[#4a1520]/60 to-[#4a1520]/40" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[600px] flex-col items-center justify-center px-4 text-center text-primary-foreground">
        <p className="mb-4 text-sm font-semibold tracking-wider opacity-90">
          {"معاً نبني المستقبل"}
        </p>
        <h1 className="mb-4 text-4xl font-black leading-tight text-balance md:text-5xl lg:text-6xl">
          {"كيان الشباب المستقبل"}
        </h1>
        <p className="mb-8 max-w-xl text-base leading-relaxed opacity-90 md:text-lg">
          {"نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:scale-105"
          >
            {"انضم إلينا"}
            <ArrowLeft className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="rounded-lg border-2 border-primary-foreground px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {"مبادرتنا"}
          </a>
        </div>
      </div>
    </section>
  )
}
