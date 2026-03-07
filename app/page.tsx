"use client"
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { User, Mail, Phone, Calendar, Heart } from 'lucide-react'

const heroImages = [
  { src: "https://i.postimg.cc/VvyzVrhK/image-(5).jpg", alt: "1" },
  { src: "https://i.postimg.cc/vBrKG4B5/image-(6).jpg", alt: "2" },
  { src: "https://i.postimg.cc/NffnwfwJ/image-(7).jpg", alt: "3" },
  { src: "https://i.postimg.cc/RFLgj2ss/image-(8).jpg", alt: "4" },
]

export default function Page() {
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [Autoplay({ delay: 5000 })])

  return (
    <main className="flex flex-col w-full bg-white text-right" dir="rtl">
      
      {/* Hero Section */}
      <section id="hero" className="relative h-[600px] w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((img, i) => (
            <div key={i} className="relative h-full min-w-full flex-[0_0_100%]">
              <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-[#8B0000]/60 z-10" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4">
          <span className="mb-4 rounded-full bg-[#C5A059] px-4 py-1 text-sm font-bold text-black">معاً نبني المستقبل</span>
          <h1 className="mb-6 text-4xl font-black md:text-6xl">كيان الشباب المستقبل</h1>
          <p className="mb-8 max-w-2xl text-lg opacity-90">نمكّن الشباب من تطوير مهارات القيادة والإبداع لبناء جيل مستعد للمستقبل</p>
          <div className="flex gap-4">
            <a href="#register" className="rounded-lg bg-[#C5A059] px-8 py-3 font-bold text-black">انضم إلينا ←</a>
            <a href="#about" className="rounded-lg border-2 border-white px-8 py-3 font-bold">مبادراتنا</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-2">من نحن</h2>
          <div className="h-1 w-20 bg-[#C5A059] mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#C5A059] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">رسالتنا؟! ◎</h3>
              <p>العمل باجتهاد وإخلاص في كل ما يفيد وطننا ويساعد في بناء شباب قوي وإتاحة فرص التمكين لهم في الجمهورية الجديدة.</p>
            </div>
            <div className="bg-[#8B0000] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">رؤيتنا؟! 👁</h3>
              <p>تأهيل الأجيال التي تستكمل مسيرة التطوير والبناء عن طريق تنمية الشباب الحاليين نظراً لأهمية دورهم في المجتمعات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-12">قيمنا الأساسية</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "الإبداع", i: "💡", d: "تشجيع التفكير الإبداعي والابتكار" },
              { t: "القيادة", i: "👥", d: "تطوير مهارات القيادة الفعالة" },
              { t: "التميز", i: "🏅", d: "السعي الدائم نحو التميز والإتقان" },
              { t: "التطوير", i: "📈", d: "الاستثمار في قدرات الشباب" }
            ].map((v, i) => (
              <div key={i} className="bg-[#E5E7EB] p-6 rounded-xl text-center">
                <div className="text-3xl mb-2 text-[#8B0000]">{v.i}</div>
                <h4 className="font-bold text-[#8B0000]">{v.t}</h4>
                <p className="text-xs text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#8B0000] mb-8">معرض الصور</h2>
          <div className="grid grid-cols-2 gap-4">
            {heroImages.map((img, i) => (
              <div key={i} className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#C5A059]">
                <Image src={img.src} alt="gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
          <button className="mt-8 text-[#C5A059] font-bold">رؤية المزيد ←</button>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#8B0000] mb-12">الشراكات</h2>
          <div className="bg-[#8B0000] p-12 rounded-2xl text-white mb-12">
            <h3 className="text-2xl font-bold mb-4">معاً نصنع الفرق</h3>
            <p className="mb-6">شراكتكم معنا تساهم في بناء جيل من القادة المبدعين وتحقيق أثر إيجابي في المجتمع</p>
            <button className="bg-[#C5A059] text-black px-8 py-2 rounded-lg font-bold">شاركنا</button>
          </div>
          <h4 className="text-[#8B0000] font-bold mb-8">شركاؤنا</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["الهيئة العامة للاستعلامات", "وحدة تصدوا معنا", "مؤسسة Awareness", "مكتبة مصر العامة"].map((p, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-xl flex flex-col items-center">
                <div className="bg-[#8B0000] p-2 rounded-full text-white mb-2">🤝</div>
                <span className="text-xs font-bold text-[#8B0000]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Forms Section */}
      <section id="register" className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#8B0000] mb-8 text-center">نموذج التسجيل</h2>
            <form className="space-y-4">
              <div className="flex items-center border p-3 rounded-lg"><User className="ml-2 text-gray-400" size={18} /><input className="w-full outline-none" placeholder="الاسم الكامل" /></div>
              <div className="flex items-center border p-3 rounded-lg"><Mail className="ml-2 text-gray-400" size={18} /><input className="w-full outline-none" placeholder="البريد الإلكتروني" /></div>
              <div className="flex items-center border p-3 rounded-lg"><Phone className="ml-2 text-gray-400" size={18} /><input className="w-full outline-none" placeholder="رقم الجوال" /></div>
              <div className="flex items-center border p-3 rounded-lg"><Calendar className="ml-2 text-gray-400" size={18} /><input className="w-full outline-none" placeholder="العمر" /></div>
              <textarea className="w-full border p-3 rounded-lg outline-none" placeholder="اهتماماتك" rows={3}></textarea>
              <button className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-bold">ارسال الطلب</button>
            </form>
          </div>
          {/* Why join us */}
          <div className="bg-[#8B0000] p-8 rounded-2xl text-white text-right">
            <h3 className="text-2xl font-bold mb-6">لماذا تنضم إلينا؟</h3>
            <ul className="space-y-4">
              <li>✓ تطوير مهارات القيادة والتواصل</li>
              <li>✓ المشاركة في مبادرات مجتمعية مؤثرة</li>
              <li>✓ الحصول على شهادات معتمدة</li>
              <li>✓ بناء شبكة علاقات قوية مع الشباب</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer id="support" className="bg-[#8B0000] text-white py-12 px-4 text-center">
         <p className="mb-4">كيان الشباب المستقبل - ٢٠٢٥</p>
         <div className="flex justify-center gap-6">
            <Phone size={20} /> <Mail size={20} /> <Heart size={20} />
         </div>
      </footer>

    </main>
  )
}
