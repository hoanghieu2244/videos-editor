import { motion, useInView, useAnimation } from 'motion/react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import BlurText from './BlurText'

const HERO_VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const roles = ['Video Editor', 'VFX Artist', 'Motion Designer', 'Content Creator']
const greetings = ['Hello,', 'Xin chào,', 'Hey,']

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden" style={{ height: '100vh' }}>
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Gradient Overlays - Dark fade to background */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 400,
          background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: 200,
          background: 'linear-gradient(to top, transparent, hsl(var(--background)))',
        }}
      />

      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ paddingTop: 180 }}
      >
        {/* Animated Greeting */}
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-7xl md:text-8xl lg:text-[8rem] font-[var(--font-heading)] text-[hsl(var(--foreground))] mb-2 leading-none"
        >
          {greetings[currentGreeting]}
        </motion.div>

        {/* Name with Stagger Animation */}
        <BlurText
          text="HOANG VAN HIEU"
          delay={300}
          direction="bottom"
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-[var(--font-heading)] text-[hsl(var(--primary))] uppercase tracking-wider mt-4 animate-glow-pulse"
        />

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent mx-auto my-8 md:my-10"
        />

        {/* Role with Shimmer Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="relative text-xs md:text-sm font-[var(--font-body)] text-[hsl(var(--foreground)/0.7)] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden"
        >
          <span className="relative z-10">Video Editor & Motion Designer</span>
          <div className="absolute inset-0 shimmer-effect" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex items-center gap-5"
        >
          <motion.a
            href="#projects"
            className="btn-primary relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-hover
          >
            <span className="relative z-10">Xem dự án</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.8)] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-hover
          >
            <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>Liên hệ</span>
          </motion.a>
        </motion.div>

        {/* Expertise Tags with Slide-up Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-auto pt-20 pb-8 flex flex-col items-center gap-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="liquid-glass rounded-full px-3.5 py-1"
          >
            <span className="text-xs font-[var(--font-body)] text-[hsl(var(--foreground)/0.6)]">
              Expertise
            </span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {roles.map((role, index) => (
              <motion.span
                key={role}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.1,
                  color: 'hsl(var(--primary))',
                  transition: { duration: 0.2 }
                }}
                className="text-xl md:text-2xl font-[var(--font-heading)] italic text-[hsl(var(--foreground)/0.8)] cursor-pointer"
                data-hover
              >
                {role}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
