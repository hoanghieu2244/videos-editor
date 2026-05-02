import { ArrowUpRight } from 'lucide-react'
import SectionReveal from './SectionReveal'
import feature1 from '../assets/feature-1.gif'
import feature2 from '../assets/feature-2.gif'

const rows = [
  {
    title: 'Motion Graphics Mastery.',
    body: 'Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all. Powered by Premiere and After Effects precision.',
    cta: 'Learn more',
    image: feature1,
    reverse: false,
  },
  {
    title: 'AI-Driven Evolution.',
    body: 'Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever. Powered by custom AI Agent engineering.',
    cta: 'See how it works',
    image: feature2,
    reverse: true,
  },
]

export default function FeaturesChess() {
  return (
    <section id="work" className="py-24 px-8 lg:px-16">
      {/* Section header */}
      <SectionReveal>
        <div className="text-center mb-16">
          <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
            <span className="text-xs font-medium text-white font-[var(--font-body)]">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>
      </SectionReveal>

      {/* Rows */}
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {rows.map((row, i) => (
          <SectionReveal key={i} delay={0.15}>
            <div
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                row.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col items-start gap-6">
                <h3 className="text-3xl md:text-4xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.95]">
                  {row.title}
                </h3>
                <p className="text-white/60 font-[var(--font-body)] font-light text-sm md:text-base leading-relaxed max-w-md">
                  {row.body}
                </p>
                <a
                  href="#contact"
                  className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-[var(--font-body)] font-medium hover:scale-105 transition-transform duration-200"
                >
                  {row.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Image */}
              <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
                <img
                  src={row.image}
                  alt={row.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
