import { motion, useInView } from 'motion/react'
import { Clapperboard, MonitorPlay, GraduationCap, Sparkles } from 'lucide-react'
import { useRef } from 'react'
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
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative overflow-hidden">
      <HlsVideo src={START_VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.2 }} />

      <div className="absolute top-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to top, transparent, hsl(var(--background)))' }} />
      <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />

      <div ref={sectionRef} className="relative z-10 px-8 lg:px-16 py-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6"
            >
              <span className="text-xs font-medium font-[var(--font-body)] text-[hsl(var(--foreground))]">Giới thiệu</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] tracking-tight leading-tight mb-6"
            >
              Xin chào, tôi là Hoàng Văn Hiếu
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[hsl(var(--foreground)/0.7)] font-[var(--font-body)] font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Một Video Editor chuyên nghiệp đến từ Thái Nguyên. Với hơn 2 năm kinh nghiệm trong lĩnh vực sáng tạo nội dung số và hậu kỹ video, tôi luôn ưu tiên kết hợp tư duy nghệ thuật và kỹ năng kể chuyện bằng hình ảnh để tạo ra những sản phẩm giải trí vượt kỳ vọng.
            </motion.p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 h-full cursor-pointer group"
                  data-hover
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-5 h-5 text-[hsl(var(--foreground))]" />
                  </motion.div>
                  <h3 className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-semibold text-base group-hover:text-[hsl(var(--primary))] transition-colors">{item.title}</h3>
                  <p className="text-[hsl(var(--foreground)/0.6)] font-[var(--font-body)] font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[hsl(var(--foreground)/0.5)] font-[var(--font-body)] font-light text-xs uppercase tracking-widest mb-6">Công cụ & Kỹ năng</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary)/0.1)' }}
                  className="liquid-glass rounded-full px-4 py-2 text-sm text-[hsl(var(--foreground)/0.8)] font-[var(--font-body)] font-light cursor-pointer"
                  data-hover
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
