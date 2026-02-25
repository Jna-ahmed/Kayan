"use client"

import { useState } from "react"
import { Building2, User, Phone, Mail, FileText, MessageSquare, Send } from "lucide-react"

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    phone: "",
    email: "",
    partnershipType: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("تم إرسال طلب الشراكة بنجاح!")
    setFormData({
      organizationName: "",
      contactName: "",
      phone: "",
      email: "",
      partnershipType: "",
      details: "",
    })
  }

  return (
    <section id="partnership-form" className="bg-secondary px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-3xl font-black text-primary md:text-4xl">
          {"تقدم بطلب شراكة"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Organization Name & Contact Name */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                <Building2 className="h-4 w-4" />
                {"اسم المؤسسة / الشركة"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="اسم المؤسسة / الشركة"
                required
                value={formData.organizationName}
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                <User className="h-4 w-4" />
                {"اسم المسؤول"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="الاسم كامل"
                required
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                <Phone className="h-4 w-4" />
                {"رقم الجوال"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                placeholder="01XXXXXXXXX"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
                <Mail className="h-4 w-4" />
                {"البريد الإلكتروني"}
                <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                placeholder="Example@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
          </div>

          {/* Partnership Type */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
              <FileText className="h-4 w-4" />
              {"نوع الشراكة المطلوبة"}
              <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="أدخل نوع الشراكة"
              required
              value={formData.partnershipType}
              onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
              className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Details */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-bold text-secondary-foreground">
              <MessageSquare className="h-4 w-4" />
              {"تفاصيل إضافية"}
            </label>
            <textarea
              placeholder="أخبرنا المزيد عن اهتماماتكم في الشراكة و أهدافكم المشتركة معنا"
              rows={4}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-card-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send className="h-5 w-5" />
            {"ارسال الطلب"}
          </button>
        </form>
      </div>
    </section>
  )
}
