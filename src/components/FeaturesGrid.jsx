import { Zap, Palette, BarChart3, Shield } from 'lucide-react'
import SectionReveal from './SectionReveal'

const features = [
  {
    icon: Zap,
    title: 'Fast-cut Delivery',
    body: 'Concept to launch at a pace that redefines fast. Because waiting isn\'t a strategy.',
  },
  {
    icon: Palette,
    title: 'Cinematic Aesthetic',
    body: 'Every detail considered. Every element refined. Design so precise, it feels inevitable.',
  },
  {
    icon: BarChart3,
    title: 'Data-Backed Storytelling',
    body: 'Layouts informed by data. Decisions backed by performance. Results you can measure.',
  },
  {
    icon: Shield,
    title: 'ICTU Certified Tech',
    body: 'Enterprise-grade protection comes standard. SSL, DDoS mitigation, compliance. All included.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-8 lg:px-16">
      {/* Section header */}
      <SectionReveal>
        <div className="text-center mb-16">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-[var(--font-body)]">
              Why Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>
      </SectionReveal>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feat, i) => {
          const Icon = feat.icon
          return (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 h-full">
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-[var(--font-body)] font-semibold text-base">
                  {feat.title}
                </h3>
                <p className="text-white/60 font-[var(--font-body)] font-light text-sm leading-relaxed">
                  {feat.body}
                </p>
              </div>
            </SectionReveal>
          )
        })}
      </div>
    </section>
  )
}
