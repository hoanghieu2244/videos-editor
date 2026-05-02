import SectionReveal from './SectionReveal'
import HlsVideo from './HlsVideo'

const STATS_VIDEO_URL =
  'https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8'

const stats = [
  { value: '200+', label: 'Projects' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* HLS Video Background - desaturated */}
      <HlsVideo
        src={STATS_VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'saturate(0)' }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to top, transparent, black)',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <SectionReveal className="relative z-10 px-8 lg:px-16 flex items-center justify-center">
        <div className="liquid-glass rounded-3xl p-12 md:p-16 w-full max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white">
                  {stat.value}
                </span>
                <span className="text-white/60 font-[var(--font-body)] font-light text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
