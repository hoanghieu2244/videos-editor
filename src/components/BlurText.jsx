import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function BlurText({
  text = '',
  delay = 200,
  className = '',
  direction = 'bottom',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const getInitial = () => {
    switch (direction) {
      case 'bottom':
        return { filter: 'blur(10px)', opacity: 0, y: 50 }
      case 'top':
        return { filter: 'blur(10px)', opacity: 0, y: -50 }
      case 'left':
        return { filter: 'blur(10px)', opacity: 0, x: -50 }
      case 'right':
        return { filter: 'blur(10px)', opacity: 0, x: 50 }
      default:
        return { filter: 'blur(10px)', opacity: 0, y: 50 }
    }
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={getInitial()}
          animate={
            inView
              ? [
                  {
                    filter: 'blur(5px)',
                    opacity: 0.5,
                    ...(direction === 'bottom' || direction === 'top'
                      ? { y: -5 }
                      : { x: direction === 'left' ? 5 : -5 }),
                  },
                  {
                    filter: 'blur(0px)',
                    opacity: 1,
                    ...(direction === 'bottom' || direction === 'top'
                      ? { y: 0 }
                      : { x: 0 }),
                  },
                ]
              : getInitial()
          }
          transition={{
            duration: 0.35,
            delay: i * (delay / 1000),
            times: [0, 0.5, 1],
          }}
          style={{ display: 'inline-block', willChange: 'filter, opacity, transform' }}
        >
          {word}
          {i < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  )
}
