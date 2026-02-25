export default function CTASection() {
  return (
    <section className="bg-primary px-4 py-16 text-center text-primary-foreground">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-black text-balance md:text-4xl">
          {"هل تريد المشاركة في مبادراتنا؟"}
        </h2>
        <p className="mb-8 text-base leading-relaxed opacity-90">
          {"انضم إلينا اليوم وكن جزءاً من رحلة التغيير والتطوير. معاً نبني المستقبل!"}
        </p>
        <a
          href="#register"
          className="inline-block rounded-lg bg-primary-foreground px-8 py-3 text-sm font-bold text-primary transition-transform hover:scale-105"
        >
          {"سجل الآن"}
        </a>
      </div>
    </section>
  )
}
