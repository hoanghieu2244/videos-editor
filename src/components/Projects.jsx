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
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?vq=hd1080&hd=1&rel=0`}
        className="w-full h-full rounded-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <VideoCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}
