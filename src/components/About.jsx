import { useRef, useEffect, useState } from 'react'
import { Clapperboard, MonitorPlay, GraduationCap, Sparkles } from 'lucide-react'
import HlsVideo from './HlsVideo'

const START_VIDEO_URL = 'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

const highlights = [
  { icon: Clapperboard, title: '2+ Năm Kinh Nghiệm', desc: 'Entertainment Video & Motion Graphics cho các thương hiệu lớn.' },
  { icon: MonitorPlay, title: 'VFX & Compositing', desc: 'Chuyên xử lý kỹ xảo hình ảnh, thiết kế chuyển động và biên tập video chất lượng cao.' },
  { icon: GraduationCap, title: 'Sinh viên CNTT — ICTU', desc: 'Trường ĐH Công nghệ Thông tin & Truyền thông Thái Nguyên.' },
  { icon: Sparkles, title: 'Content Creator', desc: 'Từng sáng tạo nội dung cho @valorant.vietnam và nhiều dự án digital khác.' },
]

const tools = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'CapCut',
  'Photoshop',
  'Illustrator',
  'Cinema 4D',
  'Figma',
]

export default function About() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative overflow-hidden">
      <HlsVideo src={START_VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.2 }} />

      <div className="absolute top-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to top, transparent, hsl(var(--background)))' }} />
      <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />

      <div ref={sectionRef} className="relative z-10 px-8 lg:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className="text-center mb-16"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <div
              className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6"
              style={{
                transform: isInView ? 'scale(1)' : 'scale(0.8)',
                opacity: isInView ? 1 : 0,
                transition: 'transform 0.6s 0.2s ease, opacity 0.6s 0.2s ease',
              }}
            >
              <span className="text-xs font-medium font-[var(--font-body)] text-[hsl(var(--foreground))]">Giới thiệu</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] tracking-tight leading-tight mb-6"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s 0.3s ease, transform 0.8s 0.3s ease',
              }}
            >
              Xin chào, tôi là Hoàng Văn Hiếu
            </h2>
            <p
              className="text-[hsl(var(--foreground)/0.7)] font-[var(--font-body)] font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s 0.5s ease, transform 0.8s 0.5s ease',
              }}
            >
              Một Video Editor chuyên nghiệp đến từ Thái Nguyên. Với hơn 2 năm kinh nghiệm trong lĩnh vực sáng tạo nội dung số và hậu kỹ video, tôi luôn ưu tiên kết hợp tư duy nghệ thuật và kỹ năng kể chuyện bằng hình ảnh để tạo ra những sản phẩm giải trí vượt kỳ vọng.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 h-full cursor-pointer group hover:-translate-y-2 transition-transform duration-300"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                    transition: `opacity 0.6s ${0.6 + i * 0.15}s ease, transform 0.6s ${0.6 + i * 0.15}s ease`,
                  }}
                  data-hover
                >
                  <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0 group-hover:rotate-360 transition-transform duration-600">
                    <Icon className="w-5 h-5 text-[hsl(var(--foreground))]" />
                  </div>
                  <h3 className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-semibold text-base group-hover:text-[hsl(var(--primary))] transition-colors">{item.title}</h3>
                  <p className="text-[hsl(var(--foreground)/0.6)] font-[var(--font-body)] font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Tools */}
          <div
            className="text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s 1.2s ease, transform 0.8s 1.2s ease',
            }}
          >
            <p className="text-[hsl(var(--foreground)/0.5)] font-[var(--font-body)] font-light text-xs uppercase tracking-widest mb-6">Công cụ & Kỹ năng</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="liquid-glass rounded-full px-4 py-2 text-sm text-[hsl(var(--foreground)/0.8)] font-[var(--font-body)] font-light cursor-pointer hover:scale-110 hover:bg-[hsl(var(--primary)/0.1)] transition-all"
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'scale(1)' : 'scale(0.8)',
                    transition: `opacity 0.4s ${1.4 + index * 0.05}s ease, transform 0.4s ${1.4 + index * 0.05}s ease`,
                  }}
                  data-hover
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
