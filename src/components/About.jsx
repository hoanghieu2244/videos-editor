import { Clapperboard, MonitorPlay, GraduationCap, Sparkles } from 'lucide-react'
import SectionReveal from './SectionReveal'
import HlsVideo from './HlsVideo'

const START_VIDEO_URL =
  'https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8'

const highlights = [
  {
    icon: Clapperboard,
    title: '2+ Năm Kinh Nghiệm',
    desc: 'Entertainment Video & Motion Graphics cho các thương hiệu lớn.',
  },
  {
    icon: MonitorPlay,
    title: 'VFX & Compositing',
    desc: 'Chuyên xử lý kỹ xảo hình ảnh, thiết kế chuyển động và biên tập video chất lượng cao.',
  },
  {
    icon: GraduationCap,
    title: 'Sinh viên CNTT — ICTU',
    desc: 'Trường ĐH Công nghệ Thông tin & Truyền thông Thái Nguyên.',
  },
  {
    icon: Sparkles,
    title: 'Content Creator',
    desc: 'Từng sáng tạo nội dung cho @valorant.vietnam và nhiều dự án digital khác.',
  },
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
  return (
    <section id="about" className="relative overflow-hidden">
      {/* HLS Video Background */}
      <HlsVideo
        src={START_VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
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
      <div className="relative z-10 px-8 lg:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <SectionReveal>
            <div className="text-center mb-16">
              <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
                <span className="text-xs font-medium text-white font-[var(--font-body)]">
                  Giới thiệu
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-heading)] italic text-white tracking-tight leading-tight mb-6">
                Xin chào, tôi là Hoàng Văn Hiếu
              </h2>
              <p className="text-white/70 font-[var(--font-body)] font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Một Video Editor chuyên nghiệp đến từ Thái Nguyên. Với hơn 2 năm kinh nghiệm trong lĩnh vực sáng tạo nội dung số và hậu kỳ video, tôi luôn ưu tiên kết hợp tư duy nghệ thuật và kỹ năng kể chuyện bằng hình ảnh để tạo ra những sản phẩm giải trí vượt kỳ vọng.
              </p>
            </div>
          </SectionReveal>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 h-full">
                    <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-[var(--font-body)] font-semibold text-base">
                      {item.title}
                    </h3>
                    <p className="text-white/60 font-[var(--font-body)] font-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SectionReveal>
              )
            })}
          </div>

          {/* Tools & Skills */}
          <SectionReveal delay={0.2}>
            <div className="text-center">
              <p className="text-white/50 font-[var(--font-body)] font-light text-xs uppercase tracking-widest mb-6">
                Công cụ & Kỹ năng
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="liquid-glass rounded-full px-4 py-2 text-sm text-white/80 font-[var(--font-body)] font-light"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
