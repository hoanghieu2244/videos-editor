import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import BlurText from './BlurText'

const HERO_VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4'

const roles = ['Video Editor', 'VFX Artist', 'Motion Designer', 'Content Creator']
const greetings = ['Hello,', 'Xin chào,', 'Hey,']

export default function Hero() {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
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

      {/* Gradient Overlays */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 400, background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }}
      />
      <div
        className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: 200, background: 'linear-gradient(to top, transparent, hsl(var(--background)))' }}
      />

      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 flex flex-col items-center text-center px-8"
        style={{ paddingTop: 180 }}
      >
        {/* Animated Greeting */}
        <div
          key={currentGreeting}
          className="text-7xl md:text-8xl lg:text-[8rem] font-[var(--font-heading)] text-[hsl(var(--foreground))] mb-2 leading-none"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            filter: isInView ? 'blur(0px)' : 'blur(10px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease',
          }}
        >
          {greetings[currentGreeting]}
        </div>

        {/* Name */}
        <BlurText
          text="HOANG VAN HIEU"
          delay={300}
          direction="bottom"
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-[var(--font-heading)] text-[hsl(var(--primary))] uppercase tracking-wider mt-4 animate-glow-pulse"
        />

        {/* Animated Divider */}
        <div
          className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent mx-auto my-8 md:my-10"
          style={{
            transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.8s 0.8s ease, opacity 0.8s 0.8s ease',
          }}
        />

        {/* Role */}
        <div
          className="relative text-xs md:text-sm font-[var(--font-body)] text-[hsl(var(--foreground)/0.7)] uppercase tracking-[0.4em] md:tracking-[0.5em] overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s 1.0s ease, transform 0.6s 1.0s ease',
          }}
        >
          <span className="relative z-10">Video Editor & Motion Designer</span>
          <div className="absolute inset-0 shimmer-effect" />
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-10 flex items-center gap-5"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s 1.2s ease, transform 0.6s 1.2s ease',
          }}
        >
          <a
            href="#projects"
            className="btn-primary relative overflow-hidden group hover:scale-105 active:scale-95 transition-transform"
            data-hover
          >
            <span className="relative z-10">Xem dự án</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.8)] to-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="btn-secondary hover:scale-105 active:scale-95 transition-transform"
            data-hover
          >
            <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>Liên hệ</span>
          </a>
        </div>

        {/* Expertise Tags */}
        <div
          className="mt-auto pt-20 pb-8 flex flex-col items-center gap-6"
          style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.8s 1.6s ease' }}
        >
          <div
            className="liquid-glass rounded-full px-3.5 py-1"
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              opacity: isInView ? 1 : 0,
              transition: 'transform 0.6s 1.7s ease, opacity 0.6s 1.7s ease',
            }}
          >
            <span className="text-xs font-[var(--font-body)] text-[hsl(var(--foreground)/0.6)]">Expertise</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {roles.map((role, index) => (
              <span
                key={role}
                className="text-xl md:text-2xl font-[var(--font-heading)] italic text-[hsl(var(--foreground)/0.8)] cursor-pointer hover:text-[hsl(var(--primary))] hover:scale-110 transition-all"
                style={{
                  transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                  opacity: isInView ? 1 : 0,
                  transition: `transform 0.5s ${1.8 + index * 0.1}s ease, opacity 0.5s ${1.8 + index * 0.1}s ease`,
                }}
                data-hover
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
