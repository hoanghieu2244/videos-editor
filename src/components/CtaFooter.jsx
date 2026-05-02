import { ArrowUpRight } from 'lucide-react'
import SectionReveal from './SectionReveal'
import HlsVideo from './HlsVideo'

const CTA_VIDEO_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export default function CtaFooter() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* HLS Video Background */}
      <HlsVideo
        src={CTA_VIDEO_URL}
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
      <div className="relative z-10 flex flex-col items-center text-center px-8 py-32">
        <SectionReveal>
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] italic text-white leading-[0.85] max-w-3xl mx-auto">
            Your next cinematic website starts here.
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-white/60 font-[var(--font-body)] font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Book a free strategy call. See what AI-powered design can do. No
            commitment, no pressure. Just possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
            <a
              href="tel:+84348622159"
              className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-white text-sm font-[var(--font-body)] font-medium hover:scale-105 transition-transform duration-200"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#pricing"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-[var(--font-body)] font-medium hover:bg-white/90 transition-colors duration-200"
            >
              View Pricing
            </a>
          </div>
        </SectionReveal>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-[var(--font-body)]">
            © 2026 Studio — Hoàng Văn Hiếu. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-[var(--font-body)]">
            Phường Quyết Thắng, Tỉnh Thái Nguyên
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-xs font-[var(--font-body)] hover:text-white/70 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs font-[var(--font-body)] hover:text-white/70 transition-colors"
            >
              Terms
            </a>
            <a
              href="mailto:hoanghieu2244@gmail.com"
              className="text-white/40 text-xs font-[var(--font-body)] hover:text-white/70 transition-colors"
            >
              Contact
            </a>
            <a
              href="tel:+84348622159"
              className="text-white/40 text-xs font-[var(--font-body)] hover:text-white/70 transition-colors"
            >
              +84348622159
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
