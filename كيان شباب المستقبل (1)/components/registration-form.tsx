"use client"

import { useState } from "react"
import { User, Mail, Phone, Calendar, Heart, UserPlus, Check } from "lucide-react"

const benefits = [
  "تطوير مهارات القيادة والتواصل",
  "المشاركة في مبادرات مجتمعية مؤثرة",
  "الحصول على شهادات معتمدة",
  "بناء شبكة علاقات قوية مع الشباب",
  "الوصول إلى فرص تدريب وتطوير حصرية",
]

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    interests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("تم تسجيل الانضمام بنجاح!")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      interests: "",
    })
  }

  return (
    <section id="register" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black text-primary md:text-4xl">
          {"نموذج التسجيل"}
        </h2>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {/* Full Name */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-card-foreground">
                <User className="h-4 w-4 text-primary" />
                {"الاسم الكامل"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-card-foreground">
                <Mail className="h-4 w-4 text-primary" />
                {"البريد الإلكتروني"}
              </label>
              <input
                type="email"
                placeholder="Example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-card-foreground">
                <Phone className="h-4 w-4 text-primary" />
                {"رقم الجوال"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {/* Age */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-card-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                {"العمر"}
              </label>
              <input
                type="text"
                placeholder="أدخل عمرك"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {/* Interests */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-card-foreground">
                <Heart className="h-4 w-4 text-primary" />
                {"اهتماماتك"}
              </label>
              <textarea
                placeholder="أخبرنا عن اهتماماتك و مجالات التطوير التي ترغب فيها"
                rows={3}
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <UserPlus className="h-5 w-5" />
              {"تسجيل الانضمام"}
            </button>
          </form>

          {/* Why Join Us */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                  <UserPlus className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">{"لماذا تنضم إلينا؟"}</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="mb-4 leading-relaxed text-muted-foreground italic">
                {'"كانت تجربة من أفضل التجارب بمراحل. المنظمة حجات مختلفة و طورت نفسي في حاجات كتير و كونت علية فخورة بيها جداً"'}
              </p>
              <p className="text-sm font-bold text-primary">{"- أحد أعضاء الكيان"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
