import { motion } from 'motion/react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import BlurText from './BlurText'

const HERO_VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const roles = ['Video Editor', 'VFX Artist', 'Motion Designer', 'Content Creator']

export default function Hero() {
  return (
    <section id="home" className="relative overflow-visible" style={{ height: '100vh' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: '20%' }}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--background))]/30 z-0" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 300,
          background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ paddingTop: 160 }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-7xl md:text-8xl lg:text-[8rem] font-[var(--font-heading)] text-[hsl(var(--foreground))] mb-2 leading-none"
        >
          Hello,
        </motion.div>

        {/* Name */}
        <BlurText
          text="HOANG VAN HIEU"
          delay={300}
          direction="bottom"
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-[var(--font-heading)] text-[hsl(var(--primary))] uppercase tracking-wider mt-4 animate-glow-pulse"
        />

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-16 h-[2px] bg-[hsl(var(--primary))] mx-auto my-8 md:my-10"
        />

        {/* Subtext - Role */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-xs md:text-sm font-[var(--font-body)] text-[hsl(var(--foreground))]/70 uppercase tracking-[0.4em] md:tracking-[0.5em] animate-glow-pulse"
        >
          Video Editor
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-10 flex items-center gap-5"
        >
          <a href="#projects" className="btn-primary">
            Xem dự án
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact" className="btn-secondary">
            <MessageCircle className="w-4 h-4" />
            Liên hệ
          </a>
        </motion.div>

        {/* Roles ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-auto pt-20 pb-8 flex flex-col items-center gap-6"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1">
            <span className="text-xs font-[var(--font-body)] text-[hsl(var(--foreground))]/60">
              Expertise
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {roles.map((role) => (
              <span
                key={role}
                className="text-xl md:text-2xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))]/80"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
