import { ArrowUpRight } from 'lucide-react'
import SectionReveal from './SectionReveal'
import HlsVideo from './HlsVideo'

const START_VIDEO_URL =
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

export default function StartSection() {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* HLS Video Background */}
      <HlsVideo
        src={START_VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
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
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-8"
        style={{ minHeight: 500 }}
      >
        <SectionReveal>
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="liquid-glass rounded-full px-3.5 py-1">
              <span className="text-xs font-medium text-white font-[var(--font-body)]">
                How It Works
              </span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9] max-w-2xl mx-auto">
            You dream it. We ship it.
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/60 font-[var(--font-body)] font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Share your vision. Our AI handles the rest—wireframes, design, code,
            launch. All in days, not quarters.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white text-sm font-[var(--font-body)] font-medium hover:scale-105 transition-transform duration-200"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
