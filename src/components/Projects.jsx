import { useState } from 'react'
import { ArrowRight, X, Play } from 'lucide-react'

const valorantProjects = [
  { video: 'https://youtu.be/_0Kgh3KXOD0', title: 'Valorant Montage #1' },
  { video: 'https://youtu.be/sK9A4SvIGg0', title: 'Epic Plays Compilation' },
  { video: 'https://youtu.be/ypJoaA_WQvA', title: 'Agent Highlights' },
  { video: 'https://youtu.be/Epp-XpuTreE', title: 'Cinematic Edit' },
  { video: 'https://youtu.be/FscC9nRFpVQ', title: 'Pro Plays Montage' },
  { video: 'https://youtu.be/zJT_Len7ud4', title: 'Operator Moments' },
  { video: 'https://youtu.be/9FvZzqlcyOA', title: 'Clutch Plays' },
  { video: 'https://youtu.be/iqNxfTRCjvQ', title: 'Ace Moments' },
  { video: 'https://youtu.be/RFPQnQbtgXM', title: 'Team Tactics' },
  { video: 'https://youtu.be/TheQZWfPLAM', title: 'Best Plays 2024' },
]

const adsProjects = []

const getYouTubeID = (url) => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

export default function Projects() {
  const [showAllVideos, setShowAllVideos] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section id="projects" className="py-32 px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] mb-4">
            Projects
          </h2>
          <p className="text-[hsl(var(--foreground)/0.6)] text-sm">
            Gaming montage & creative edits
          </p>
        </div>

        {/* Compact Valorant Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {(showAllVideos ? valorantProjects : valorantProjects.slice(0, 4)).map((p, i) => (
            <div key={i} onClick={() => setSelectedVideo(p)} className="cursor-pointer">
              <div className="aspect-video rounded-xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] transition-all">
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeID(p.video)}/maxresdefault.jpg`}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-[hsl(var(--foreground))] font-[var(--font-body)] font-medium text-sm">{p.title}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAllVideos && valorantProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllVideos(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] transition-all text-sm"
            >
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] bg-[hsl(var(--background)/0.95)] backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedVideo(null)}>
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeID(selectedVideo.video)}?autoplay=1&vq=hd1080&hd=1&rel=0&modestbranding=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
