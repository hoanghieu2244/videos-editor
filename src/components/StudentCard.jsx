import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function StudentCard() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed top-[calc(33.33%-80px)] left-6 z-[90]"
      whileHover={{ scale: 1.02 }}
    >
      <motion.button
        onClick={() => setIsVisible(false)}
        className="absolute -top-3 -right-3 p-1.5 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary)/0.1] text-[hsl(var(--foreground)/0.6)] hover:text-[hsl(var(--foreground))] transition z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="w-3.5 h-3.5" />
      </motion.button>

      <div className="relative group cursor-pointer">
        <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/0.5)] rounded-2xl blur opacity-50 group-hover:opacity-75 transition" />
        <div className="relative bg-[hsl(var(--card))] rounded-2xl p-[1px] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.3)] transition-all">
          <div className="bg-[hsl(var(--card))] rounded-2xl p-4 flex items-center gap-3">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-xl bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.3)] flex items-center justify-center overflow-hidden shrink-0">
              <img
                src="/z7787721189860_84548bc1368874ed16f36a0bd27ef067.jpg"
                alt="Avatar"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            
            {/* Info */}
            <div className="text-left">
              <p className="text-[hsl(var(--foreground))] font-[var(--font-body)] font-medium text-sm">Hoàng Văn Hiếu</p>
              <p className="text-[hsl(var(--foreground)/0.5)] text-xs mt-0.5">Video Editor</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
