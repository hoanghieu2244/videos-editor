import { useState } from 'react'

export default function StudentCard() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-[calc(33.33%-80px)] left-6 z-[90] group cursor-pointer">
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--foreground)/0.6)] hover:text-[hsl(var(--foreground))] transition z-10"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative">
        {/* Gradient glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.5)] rounded-2xl blur opacity-50 group-hover:opacity-75 transition" />
        
        {/* Card content */}
        <div className="relative bg-[hsl(var(--card))] rounded-2xl p-[1px] border border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary)/0.3)] transition-all">
          <div className="bg-[hsl(var(--card))] rounded-2xl p-4 flex items-center gap-3">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.3)] flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="/z7787721189860_84548bc1368874ed16f36a0bd27ef067.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div className="hidden w-full h-full items-center justify-center text-2xl">👤</div>
            </div>
            
            {/* Info */}
            <div className="text-left">
              <p className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-medium text-sm">Hoàng Văn Hiếu</p>
              <p className="text-[hsl(var(--foreground)/0.5)] text-xs mt-0.5">Video Editor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
