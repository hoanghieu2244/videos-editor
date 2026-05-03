import { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClickable, setIsClickable] = useState(false)

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.closest('a, button, [data-hover]')) {
        setIsHovering(true)
        if (target.closest('a, button')) {
          setIsClickable(true)
        }
      }
    }

    const handleMouseOut = () => {
      setIsHovering(false)
      setIsClickable(false)
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [handleMouseMove])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[hsl(var(--primary)/0.5)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[hsl(var(--primary)/0.3)] rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClickable ? 1.5 : 1,
          borderColor: isClickable ? 'hsl(var(--primary))' : 'hsl(var(--primary)/0.3)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  )
}
