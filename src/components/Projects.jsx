const valorantProjects = [
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

const adsProjects = [
  // Thêm link video ADS vào đây
  // { video: 'https://youtu.be/xxxxx' },
]

const getYouTubeID = (url) => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

function VideoCard({ project }) {
  const youtubeId = getYouTubeID(project.video)
  return (
    <div 
      className="group relative perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="relative rounded-2xl overflow-hidden bg-black transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        style={{ 
          transform: 'rotateX(0deg) rotateY(0deg)',
          transition: 'transform 0.5s ease-out'
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = ((y - centerY) / centerY) * -5
          const rotateY = ((x - centerX) / centerX) * 5
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-spin-slow" />
        
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?vq=hd1080&hd=1&rel=0&modestbranding=1`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  )
}

const VideoGrid = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
    {projects.map((project, i) => (
      <div key={i} className={`${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
        <VideoCard project={project} />
      </div>
    ))}
  </div>
)

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 relative overflow-hidden">
      {/* Artistic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Valorant Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-400 inline-block mr-3 align-middle" />
              <span className="text-red-400 text-xs uppercase tracking-[0.3em] font-[var(--font-body)]">Gaming</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-400 inline-block ml-3 align-middle" />
            </div>
            <h2 className="text-5xl md:text-7xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9] mb-6">
              Valorant
            </h2>
            <p className="text-white/40 font-[var(--font-body)] text-sm tracking-wide">
              Gaming montage & creative edits
            </p>
          </div>
          <VideoGrid projects={valorantProjects} />
        </div>

        {/* ADS Section */}
        {adsProjects.length > 0 && (
          <div>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400 inline-block mr-3 align-middle" />
                <span className="text-blue-400 text-xs uppercase tracking-[0.3em] font-[var(--font-body)]">Commercial</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400 inline-block ml-3 align-middle" />
              </div>
              <h2 className="text-5xl md:text-7xl font-[var(--font-heading)] italic text-white tracking-tight leading-[0.9] mb-6">
                ADS
              </h2>
              <p className="text-white/40 font-[var(--font-body)] text-sm tracking-wide">
                Advertisement & commercial works
              </p>
            </div>
            <VideoGrid projects={adsProjects} />
          </div>
        )}

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
