import { ArrowUpRight, Play, Pause, Film, Bot, Code, BookOpen, Sparkles, Clapperboard, Video, Tv, Wand2, Monitor, Maximize } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { useState, useRef } from 'react'

/*
 * ═══════════════════════════════════════════════════════════════
 *   HƯỚNG DẪN: Thêm video dự án
 * ═══════════════════════════════════════════════════════════════
 *
 *   1. Copy file video (MP4) vào thư mục:  public/videos/
 *   2. Đổi tên file theo thứ tự:
 *        - project-1.mp4
 *        - project-2.mp4
 *        - project-3.mp4
 *        - ... (thêm bao nhiêu cũng được)
 *
 *   3. Cập nhật mảng `projects` bên dưới:
 *        - Thay `video: '/videos/project-1.mp4'` bằng path file video
 *        - Đổi title, desc, tags theo dự án thật
 *
 *   4. Xóa bớt hoặc thêm object vào mảng nếu cần
 *
 * ═══════════════════════════════════════════════════════════════
 */

const getYouTubeID = (url) => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const projects = [
  // ─── Featured Projects (hiện lớn, 2 cột) ─────────────
  {
    title: 'Poster Boi Visuals',
    desc: 'Các ấn phẩm visual và motion poster chuyển động độc đáo.',
    tags: ['After Effects', 'Motion Design', 'Poster'],
    icon: Wand2,
    video: 'https://youtu.be/_0Kgh3KXOD0',
    category: 'Visuals',
    featured: true,
  },
  {
    title: 'Nguyễn Thương Highlight',
    desc: 'Cinematic highlight edit với transitions mượt mà và color grading đặc sắc.',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading'],
    icon: Film,
    video: 'https://youtu.be/sK9A4SvIGg0',
    category: 'Featured Edit',
    featured: true,
  },

  // ─── Video Editing Showcase (các dự án edit video) ─────
  {
    title: 'JC Edit',
    desc: 'Video montage kết hợp sound design chuyên nghiệp và nhịp điệu cuốn hút.',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'Sound Design'],
    icon: Tv,
    video: 'https://youtu.be/ypJoaA_WQvA',
    category: 'Montage',
    featured: false,
  },
  {
    title: 'yOKAM Commercial 5',
    desc: 'Video thương mại với kỹ xảo hình ảnh và phong cách dựng hiện đại.',
    tags: ['After Effects', 'Commercial', 'VFX'],
    icon: Clapperboard,
    video: 'https://youtu.be/Epp-XpuTreE',
    category: 'Commercial',
    featured: false,
  },
  {
    title: 'Rather Lie Edit',
    desc: 'Video edit mang phong cách nghệ thuật với typography và color grading ấn tượng.',
    tags: ['Premiere Pro', 'Typography', 'Creative'],
    icon: Video,
    video: 'https://youtu.be/FscC9nRFpVQ',
    category: 'Creative Edit',
    featured: false,
  },
  {
    title: 'Happier Motion',
    desc: 'Motion graphics và visual effects đồng bộ với âm nhạc, tạo hiệu ứng thị giác mạnh mẽ.',
    tags: ['After Effects', 'Motion Design', 'VFX'],
    icon: Sparkles,
    video: 'https://youtu.be/zJT_Len7ud4',
    category: 'Motion Graphics',
    featured: false,
  },
  {
    title: 'Comms 01',
    desc: 'Dự án thương mại với các hiệu ứng chuyển cảnh mượt mà và nội dung hấp dẫn.',
    tags: ['Premiere Pro', 'Commercial', 'Editing'],
    icon: Tv,
    video: 'https://youtu.be/9FvZzqlcyOA',
    category: 'Commercial',
    featured: false,
  },
  {
    title: 'yOKAM Commercial 3',
    desc: 'Dự án thương mại cho yOKAM với phong cách cắt ghép nhịp độ nhanh.',
    tags: ['Premiere Pro', 'Fast-paced', 'Promo'],
    icon: Clapperboard,
    video: 'https://youtu.be/iqNxfTRCjvQ',
    category: 'Commercial',
    featured: false,
  },
  {
    title: 'Hoang Hieu Comms 02',
    desc: 'Dự án cá nhân thể hiện kỹ năng dựng video giải trí chuyên nghiệp.',
    tags: ['CapCut', 'Premiere Pro', 'Entertainment'],
    icon: Video,
    video: 'https://youtu.be/RFPQnQbtgXM',
    category: 'Personal Project',
    featured: false,
  },
  {
    title: 'yOKAM Commercial 2',
    desc: 'Phiên bản edit khác cho chiến dịch yOKAM với màu sắc và âm thanh tùy chỉnh.',
    tags: ['After Effects', 'Color Grading', 'Commercial'],
    icon: Sparkles,
    video: 'https://youtu.be/TheQZWfPLAM',
    category: 'Commercial',
    featured: false,
  },
]

function VideoCard({ project, large = false, index }) {
  const Icon = project.icon
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [hasError, setHasError] = useState(false)
  const youtubeId = getYouTubeID(project.video)
  const isYouTube = !!youtubeId
  const [showModal, setShowModal] = useState(false)

  const togglePlay = () => {
    if (isYouTube) {
      setShowModal(true)
      return
    }
    if (!videoRef.current) return
    if (isPlaying && !isMuted) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.muted = false
      setIsMuted(false)
      videoRef.current.play().catch(() => setHasError(true))
      setIsPlaying(true)
    }
  }

  const toggleFullScreen = (e) => {
    e.stopPropagation()
    if (isYouTube) {
      setShowModal(true)
      return
    }
    if (!videoRef.current) return
    
    const el = videoRef.current
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen()
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen()
    }
  }

  return (
    <>
      <div className={`group ${large ? '' : 'h-full'}`}>
        {/* Video Frame */}
        <div
          className="video-frame cursor-pointer mb-5 relative overflow-hidden"
          onClick={togglePlay}
        >
          {/* Scanline decoration */}
          <div className="scanline" />

          {/* Volume/Play Indicator */}
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">
                {isYouTube ? 'Click to Watch' : (isPlaying && !isMuted ? 'Click to Pause' : 'Click for Sound')}
              </span>
            </div>
          </div>

          {/* Fullscreen/Play Button */}
          <button
            onClick={toggleFullScreen}
            title={isYouTube ? "Xem trên YouTube" : "Phóng to video"}
            className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 liquid-glass rounded-full p-2 hover:bg-white/20"
          >
            {isYouTube ? <ArrowUpRight className="w-4 h-4 text-white" /> : <Maximize className="w-4 h-4 text-white" />}
          </button>

          {isYouTube ? (
            <div className="w-full h-full relative aspect-video bg-black">
              <img 
                src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                  e.target.onerror = () => {
                    e.target.style.display = 'none'
                  }
                }}
              />
            </div>
          ) : (
            !hasError ? (
              <video
                ref={videoRef}
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onError={() => setHasError(true)}
                onMouseEnter={() => {
                  if (videoRef.current && (!isPlaying || isMuted)) {
                    videoRef.current.muted = true
                    setIsMuted(true)
                    videoRef.current.play().catch(() => {})
                  }
                }}
                onMouseLeave={() => {
                  if (videoRef.current && (!isPlaying || isMuted)) {
                    videoRef.current.pause()
                    videoRef.current.currentTime = 0
                  }
                }}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : null
          )}

        {/* Placeholder khi chưa có video */}
        {hasError && (
          <div className="video-placeholder">
            <div className="placeholder-icon">
              <Icon className="w-6 h-6 text-white/40" />
            </div>
            <p className="placeholder-text">
              Copy video vào <code>public/videos/</code>
            </p>
          </div>
        )}

        {/* Play/Pause overlay */}
        {!hasError && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center z-[1] bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <Play className="w-6 h-6 text-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Playing indicator */}
        {!hasError && isPlaying && (
          <div className="absolute bottom-3 right-3 z-[3] flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="flex items-center gap-[2px]">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block w-[3px] rounded-full bg-white/80"
                  style={{
                    height: `${8 + Math.random() * 6}px`,
                    animation: `eq-bar 0.8s ease-in-out ${i * 0.15}s infinite alternate`,
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/60 font-[var(--font-body)]">Playing</span>
          </div>
        )}

        {/* Category badge */}
        {project.category && (
          <div
            className="absolute top-3 left-3 z-[3] px-3 py-1 rounded-full text-[10px] font-[var(--font-body)] font-semibold uppercase tracking-wider text-white/70"
            style={{
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {project.category}
          </div>
        )}

        {/* Index number */}
        <div
          className="absolute top-3 right-3 z-[3] w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span className="text-[10px] font-[var(--font-body)] font-bold text-white/40">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className="rounded-full w-8 h-8 flex items-center justify-center shrink-0"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Icon className="w-4 h-4 text-white/70" />
          </div>
          <h3
            className={`text-white font-[var(--font-heading)] italic tracking-tight leading-tight ${
              large ? 'text-2xl md:text-3xl' : 'text-lg'
            }`}
          >
            {project.title}
          </h3>
        </div>
        <p className="text-white/50 font-[var(--font-body)] font-light text-sm leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3 py-1 text-xs text-white/60 font-[var(--font-body)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
      {/* Modal for YouTube */}
      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
          onClick={() => setShowModal(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={project.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <button 
              className="absolute top-4 right-4 liquid-glass rounded-full p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
            >
              <ArrowUpRight className="w-6 h-6 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 px-8 lg:px-16">
      {/* Equalizer bar animation */}
      <style>{`
        @keyframes eq-bar {
          0% { height: 4px; }
          100% { height: 14px; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="inline-block liquid-glass rounded-full px-3.5 py-1 mb-6">
              <span className="text-xs font-medium text-white font-[var(--font-body)]">
                Dự án
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9]">
              Những gì tôi đã xây dựng.
            </h2>
            <p className="mt-6 text-white/60 font-[var(--font-body)] font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Mỗi dự án là một câu chuyện — từ ý tưởng đến sản phẩm hoàn chỉnh,
              kết hợp sáng tạo và công nghệ.
            </p>
          </div>
        </SectionReveal>

        {/* Featured - large 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {featured.map((project, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <VideoCard project={project} large index={i} />
            </SectionReveal>
          ))}
        </div>

        {/* Divider */}
        <SectionReveal>
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="flex items-center gap-3">
              <Film className="w-4 h-4 text-white/30" />
              <p className="text-white/40 font-[var(--font-body)] font-light text-xs uppercase tracking-[0.3em]">
                Video Editing Showcase
              </p>
              <Film className="w-4 h-4 text-white/30" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </SectionReveal>

        {/* Other projects - 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((project, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <VideoCard project={project} index={featured.length + i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
