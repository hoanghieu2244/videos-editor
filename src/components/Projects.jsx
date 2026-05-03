import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
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

function VideoCard({ project, index }) {
  const youtubeId = getYouTubeID(project.video)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative aspect-video rounded-xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      data-hover
    >
      {/* Thumbnail with Play Button */}
      <div className="absolute inset-0">
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-[hsl(var(--primary)/0.3)] backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
        >
          <Play className="w-8 h-8 text-white ml-1" />
        </motion.div>
      </motion.div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-[var(--font-body)] font-medium text-sm">{project.title}</h3>
      </div>
    </motion.div>
  )
}

function VideoModal({ project, onClose }) {
  const youtubeId = getYouTubeID(project.video)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&vq=hd1080&hd=1&rel=0&modestbranding=1`}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAllVideos, setShowAllVideos] = useState(false)

  return (
    <section id="projects" className="py-32 px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] mb-4">
            Projects
          </h2>
          <p className="text-[hsl(var(--foreground)/0.6)] text-sm">
            Gaming montage & creative edits
          </p>
        </motion.div>

        {/* Compact Valorant Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {(showAllVideos ? valorantProjects : valorantProjects.slice(0, 4)).map((p, i) => (
            <div key={i} onClick={() => setSelectedVideo(p)}>
              <VideoCard project={p} index={i} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAllVideos && valorantProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAllVideos(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))] text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary)/0.1)] transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-hover
            >
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* ADS Section */}
        {adsProjects.length > 0 && (
          <div className="mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-[var(--font-heading)] italic text-[hsl(var(--foreground))] mb-4">
                ADS
              </h2>
              <p className="text-[hsl(var(--foreground)/0.6)] text-sm">Advertisement & commercial works</p>
            </motion.div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {adsProjects.map((p, i) => (
                <div key={i} onClick={() => setSelectedVideo(p)}>
                  <VideoCard project={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        )}

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoModal project={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>

      {/* Student Card Modal - Removed per user request */
    </section>
  )
}
// Force Vercel rebuild - remove student card
