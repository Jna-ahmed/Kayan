import { Eye, Target, Lightbulb, Users, Rocket, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "القيادة",
    description: "تطوير مهارات القيادة الفعالة لدى الشباب",
  },
  {
    icon: Lightbulb,
    title: "الإبداع",
    description: "تشجيع الأفكار الإبداعية والابتكار",
  },
  {
    icon: Rocket,
    title: "التطوير",
    description: "الاستثمار في قدرات ومهارات الشباب",
  },
  {
    icon: Award,
    title: "التميز",
    description: "السعي الدائم نحو التميز والإتقان",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-background px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-black text-primary md:text-4xl">
          {"من نحن"}
        </h2>

        {/* Vision & Mission */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{"رؤيتنا"}</h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {"تمكين الشباب لقيادة المستقبل بمسؤولية، والتغيير من خلال تطويرهم ليكونوا قادة ملهمين ومبدعين قادرين على إحداث أثر إيجابي ومستدام في مجتمعاتهم، مع مواكبة تحديات المستقبل في شتى المجالات."}
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{"رسالتنا"}</h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {"نحن نرسم مستقبلاً حافلاً بالقادة والمبدعين، ونسعى لإعداد شباب قادرين على قيادة التغيير في المجتمع من خلال برامج تدريبية متنوعة ومبادرات مجتمعية فعالة."}
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-1 text-sm font-bold text-card-foreground">{feature.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mx-auto max-w-3xl rounded-xl bg-secondary p-6 text-center md:p-8">
          <p className="leading-relaxed text-secondary-foreground">
            {"كيان الشباب المستقبل هو منظمة شبابية تهدف إلى بناء جيل من القادة المبدعين من خلال تقديم برامج تدريبية متخصصة، مبادرات مجتمعية فعالة، وأنشطة تطويرية شاملة. نؤمن بأن الشباب هم عماد المستقبل ونعمل على تزويدهم بالمهارات والأدوات اللازمة لتحقيق طموحاتهم وخدمة مجتمعاتهم."}
          </p>
        </div>
      </div>
    </section>
  )
}
