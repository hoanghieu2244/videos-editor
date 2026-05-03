import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react'
import HlsVideo from './HlsVideo'

const CTA_VIDEO_URL = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hoanghieu2244@gmail.com', href: 'mailto:hoanghieu2244@gmail.com' },
  { icon: Phone, label: 'Điện thoại', value: '+84 348 622 159', href: 'tel:+84348622159' },
  { icon: MapPin, label: 'Địa chỉ', value: 'Phường Quyết Thắng, TP. Thái Nguyên', href: null },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative overflow-hidden">
      <HlsVideo src={CTA_VIDEO_URL} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.25 }} />

      <div className="absolute top-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to top, transparent, hsl(var(--background)))' }} />
      <div className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none" style={{ height: 200, background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />

      <div ref={sectionRef} className="relative z-10 px-8 lg:px-16 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
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
              <span className="text-xs font-medium font-[var(--font-body)] text-[hsl(var(--foreground))]">Liên hệ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] leading-[0.85] max-w-3xl mx-auto"
            >
              Hãy cùng tạo nên điều tuyệt vời.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-[hsl(var(--foreground)/0.6)] font-[var(--font-body)] font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            >
              Bạn có dự án cần thực hiện? Muốn hợp tác sáng tạo nội dung hoặc biên tập video? Liên hệ ngay — tôi luôn sẵn sàng lắng nghe.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const Wrapper = item.href ? 'a' : 'div'
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Wrapper
                    href={item.href || undefined}
                    className="liquid-glass rounded-2xl p-7 flex flex-col items-center text-center gap-4 h-full cursor-pointer group"
                    style={{ textDecoration: 'none' }}
                    data-hover
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-[hsl(var(--foreground))]" />
                    </motion.div>
                    <p className="text-[hsl(var(--foreground)/0.5)] font-[var(--font-body)] font-light text-xs uppercase tracking-widest">{item.label}</p>
                    <p className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-medium text-sm group-hover:text-[hsl(var(--primary))] transition-colors">{item.value}</p>
                  </Wrapper>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <motion.a
              href="mailto:hoanghieu2244@gmail.com"
              className="liquid-glass-strong rounded-full px-6 py-3 flex items-center gap-2 text-[hsl(var(--foreground))] text-sm font-[var(--font-body)] font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover
            >
              <span className="relative z-10">Gửi Email</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <div className="absolute inset-0 bg-[hsl(var(--primary)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="tel:+84348622159"
              className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-6 py-3 text-sm font-[var(--font-body)] font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover
            >
              <span className="relative z-10">Gọi ngay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4 flex-wrap mt-8"
          >
            {[
              { href: 'https://www.facebook.com/hoang.hieu.617168/', icon: <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-1.1 0-2 .9-2 2v1h3l-1 3h-2v6.8C18.56 20.87 22 16.84 22 12z"/></svg>, label: 'Facebook' },
              { href: 'https://www.tiktok.com/@yyokam04', icon: <svg className="w-4 h-4 text-[hsl(var(--foreground))]" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a8.19 8.19 0 0 0-4.77 1.52v-7.15a8.19 8.19 0 0 0 4.77 1.52V2h3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a8.19 8.19 0 0 0-4.77 1.52v-7.15a8.19 8.19 0 0 0 4.77 1.52z" /></svg>, label: 'TikTok' },
              { href: 'https://www.youtube.com/@hieuhoangg2017', icon: <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/></svg>, label: 'YouTube' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:bg-[hsl(var(--foreground)/0.1)] transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 + i * 0.1 }}
                data-hover
              >
                {social.icon}
                <span className="text-sm text-[hsl(var(--foreground)/0.8)] font-[var(--font-body)]">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="mt-28 pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-[hsl(var(--foreground)/0.4)] text-xs font-[var(--font-body)]">© 2026 Hoàng Văn Hiếu. All rights reserved.</p>
            <p className="text-[hsl(var(--foreground)/0.4)] text-xs font-[var(--font-body)]">ICTU — ĐH CNTT&TT Thái Nguyên</p>
            <div className="flex items-center gap-6">
              {[
                { href: 'https://github.com/', icon: ExternalLink },
                { href: 'https://instagram.com/', icon: Globe },
                { href: 'mailto:hoanghieu2244@gmail.com', icon: Mail },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--foreground)/0.4)] hover:text-[hsl(var(--foreground)/0.7)] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  data-hover
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
