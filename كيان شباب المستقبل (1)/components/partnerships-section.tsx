import { Building2, BookOpen, Handshake, Radio } from "lucide-react"

const partners = [
  { name: "الهيئة العامة للاستعلامات", icon: Building2 },
  { name: "مؤسسة تحدوا معنا", icon: Handshake },
  { name: "Awareness", icon: Radio },
  { name: "مكتبة مصر العامة", icon: BookOpen },
]

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black text-primary md:text-4xl">
          {"الشراكات"}
        </h2>

        {/* CTA Banner */}
        <div className="mb-12 rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground">
          <h3 className="mb-4 text-2xl font-black text-balance md:text-3xl">
            {"معاً نصنع الفرق"}
          </h3>
          <p className="mb-6 text-sm leading-relaxed opacity-90">
            {"شراكتكم معنا تساهم في بناء جيل من القادة المبدعين وتحقيق أثر إيجابي في المجتمع"}
          </p>
          <a
            href="#partnership-form"
            className="inline-block rounded-lg bg-primary-foreground px-8 py-3 text-sm font-bold text-primary transition-transform hover:scale-105"
          >
            {"شاركنا"}
          </a>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <partner.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-card-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
