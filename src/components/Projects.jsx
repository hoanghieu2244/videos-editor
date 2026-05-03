const projects = [
  { video: 'https://youtu.be/_0Kgh3KXOD0' },
  { video: 'https://youtu.be/sK9A4SvIGg0' },
  { video: 'https://youtu.be/ypJoaA_WQvA' },
  { video: 'https://youtu.be/Epp-XpuTreE' },
  { video: 'https://youtu.be/FscC9nRFpVQ' },
  { video: 'https://youtu.be/zJT_Len7ud4' },
  { video: 'https://youtu.be/9FvZzqlcyOA' },
  { video: 'https://youtu.be/iqNxfTRCjvQ' },
  { video: 'https://youtu.be/RFPQnQbtgXM' },
  { video: 'https://youtu.be/TheQZWfPLAM' },
]

const getYouTubeID = (url) => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

function VideoCard({ project }) {
  const youtubeId = getYouTubeID(project.video)
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-[1px]">
      <div className="relative rounded-2xl overflow-hidden bg-black">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?vq=hd1080&hd=1&rel=0&modestbranding=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 relative overflow-hidden">
      {/* Artistic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Artistic title */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400 inline-block mr-3 align-middle" />
            <span className="text-purple-400 text-xs uppercase tracking-[0.3em] font-[var(--font-body)]">Portfolio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400 inline-block ml-3 align-middle" />
          </div>
          <h2 className="text-5xl md:text-7xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9] mb-6">
            Sản phẩm
          </h2>
          <p className="text-white/40 font-[var(--font-body)] text-sm tracking-wide">
            Nơi nghệ thuật và kỹ thuật gặp gỡ
          </p>
        </div>

        {/* Creative video grid with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <div key={i} className={`${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
              <VideoCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom artistic element */}
        <div className="flex items-center justify-center mt-20 gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <div className="w-1.5 h-1.5 rotate-45 bg-purple-400" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  )
}
