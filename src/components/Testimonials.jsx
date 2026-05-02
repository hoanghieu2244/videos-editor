import SectionReveal from './SectionReveal'

const testimonials = [
  {
    quote:
      'A complete rebuild in five days. The result outperformed everything we\'d spent months building before.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'Conversions up 4x. That\'s not a typo. The design just works differently when it\'s built on real data.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      'They didn\'t just design our site. They defined our brand. World-class doesn\'t begin to cover it.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-8 lg:px-16">
      {/* Section header */}
      <SectionReveal>
        <div className="text-center mb-16">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-[var(--font-body)]">
              What They Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>
      </SectionReveal>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <SectionReveal key={i} delay={i * 0.12}>
            <div className="liquid-glass rounded-2xl p-8 flex flex-col gap-6 h-full">
              <p className="text-white/80 font-[var(--font-body)] font-light text-sm italic leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-[var(--font-body)] font-medium text-sm">
                  {t.name}
                </p>
                <p className="text-white/50 font-[var(--font-body)] font-light text-xs">
                  {t.role}
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
