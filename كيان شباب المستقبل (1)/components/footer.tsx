import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{"كيان الشباب المستقبل"}</h3>
            <p className="text-sm leading-relaxed opacity-80">
              {"منظمة شبابية تهدف إلى بناء جيل من القادة المبدعين من خلال برامج تدريبية متخصصة ومبادرات مجتمعية فعالة."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{"روابط سريعة"}</h3>
            <nav className="flex flex-col gap-2">
              <a href="#hero" className="text-sm opacity-80 transition-opacity hover:opacity-100">{"الرئيسية"}</a>
              <a href="#about" className="text-sm opacity-80 transition-opacity hover:opacity-100">{"من نحن"}</a>
              <a href="#register" className="text-sm opacity-80 transition-opacity hover:opacity-100">{"التسجيل"}</a>
              <a href="#gallery" className="text-sm opacity-80 transition-opacity hover:opacity-100">{"معرض الصور"}</a>
              <a href="#partnerships" className="text-sm opacity-80 transition-opacity hover:opacity-100">{"الشراكات"}</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{"تواصل معنا"}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4" />
                <span>info@kayan-youth.org</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4" />
                <span dir="ltr">+20 100 000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="h-4 w-4" />
                <span>{"القاهرة، مصر"}</span>
              </div>
              {/* Social Icons */}
              <div className="mt-2 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          <p>{"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} {"كيان الشباب المستقبل"}</p>
        </div>
      </div>
    </footer>
  )
}
