import { ArrowUpRight, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react'
import SectionReveal from './SectionReveal'
import HlsVideo from './HlsVideo'

const CTA_VIDEO_URL = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hoanghieu2244@gmail.com',
    href: 'mailto:hoanghieu2244@gmail.com',
  },
  {
    icon: Phone,
    label: 'Điện thoại',
    value: '+84 348 622 159',
    href: 'tel:+84348622159',
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: 'Phường Quyết Thắng, TP. Thái Nguyên',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* HLS Video Background */}
      <HlsVideo
        src={CTA_VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.4 }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to top, transparent, hsl(var(--background)))',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 lg:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
                <span className="text-xs font-medium font-[var(--font-body)] text-[hsl(var(--foreground))]">
                  Liên hệ
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] leading-[0.85] max-w-3xl mx-auto">
                Hãy cùng tạo nên điều tuyệt vời.
              </h2>
              <p className="mt-6 text-[hsl(var(--foreground))]/60 font-[var(--font-body)] font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                Bạn có dự án cần thực hiện? Muốn hợp tác sáng tạo nội dung hoặc
                biên tập video? Liên hệ ngay — tôi luôn sẵn sàng lắng nghe.
              </p>
            </div>
          </SectionReveal>

          {/* Contact cards */}
          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const Wrapper = item.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={i}
                    href={item.href || undefined}
                    className="liquid-glass rounded-2xl p-7 flex flex-col items-center text-center gap-4 group hover:scale-[1.02] transition-transform duration-300"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[hsl(var(--foreground))]" />
                    </div>
                    <p className="text-[hsl(var(--foreground))]/50 font-[var(--font-body)] font-light text-xs uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-medium text-sm">
                      {item.value}
                    </p>
                  </Wrapper>
                )
              })}
            </div>
          </SectionReveal>

          {/* CTA Buttons */}
          <SectionReveal delay={0.25}>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href="mailto:hoanghieu2244@gmail.com"
                className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-[hsl(var(--foreground))] text-sm font-[var(--font-body)] font-medium hover:scale-105 transition-transform duration-200"
              >
                Gửi Email
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+84348622159"
                className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-6 py-3 text-sm font-[var(--font-body)] font-medium hover:bg-[hsl(var(--primary))/0.9] transition-colors duration-200"
              >
                Gọi ngay
              </a>
            </div>
          </SectionReveal>

          {/* Social Links */}
          <SectionReveal delay={0.35}>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
              <a
                href="https://www.facebook.com/hoang.hieu.617168/"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[hsl(var(--foreground))/0.1] transition-colors"
              >
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h3l-1 3h-2v6.8C18.56 20.87 22 16.84 22 12z"/>
                </svg>
                <span className="text-sm text-[hsl(var(--foreground))]/80 font-[var(--font-body)]">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@yyokam04?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[hsl(var(--foreground))/0.1] transition-colors"
              >
                <svg className="w-4 h-4 text-[hsl(var(--foreground))]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a8.19 8.19 0 0 0-4.77 1.52v-7.15a8.19 8.19 0 0 0 4.77 1.52V2h3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a8.19 8.19 0 0 0-4.77 1.52v-7.15a8.19 8.19 0 0 0 4.77 1.52z" />
                </svg>
                <span className="text-sm text-[hsl(var(--foreground))]/80 font-[var(--font-body)]">TikTok</span>
              </a>
              <a
                href="https://www.youtube.com/@hieuhoangg2017"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[hsl(var(--foreground))/0.1] transition-colors"
              >
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
                </svg>
                <span className="text-sm text-[hsl(var(--foreground))]/80 font-[var(--font-body)]">YouTube</span>
              </a>
            </div>
          </SectionReveal>

          {/* Footer */}
          <div className="mt-28 pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[hsl(var(--foreground))]/40 text-xs font-[var(--font-body)]">
              © 2026 Hoàng Văn Hiếu. All rights reserved.
            </p>
            <p className="text-[hsl(var(--foreground))]/40 text-xs font-[var(--font-body)]">
              ICTU — ĐH CNTT&TT Thái Nguyên
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))]/40 hover:text-[hsl(var(--foreground))]/70 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))]/40 hover:text-[hsl(var(--foreground))]/70 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:hoanghieu2244@gmail.com"
                className="text-[hsl(var(--foreground))]/40 hover:text-[hsl(var(--foreground))]/70 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
