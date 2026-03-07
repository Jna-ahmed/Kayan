"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "التسجيل", href: "#register" },
  { label: "المعرض", href: "#gallery" },
  { label: "الشراكات", href: "#partnerships" },
  { label: "الدعم لنا", href: "#support" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-[100] bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary-foreground bg-white">
            <Image 
              src="https://i.postimg.cc/26H0kMvJ/image.png" 
              alt="لوجو كيان الشباب المستقبل"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-lg font-bold">{"كيان الشباب المستقبل"}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary-foreground md:hidden"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="border-t border-primary-foreground/20 bg-primary px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}