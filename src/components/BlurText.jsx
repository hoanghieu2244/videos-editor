import { useRef, useEffect, useState } from 'react'

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

  const getInitialTransform = () => {
    switch (direction) {
      case 'bottom': return 'translateY(50px)'
      case 'top': return 'translateY(-50px)'
      case 'left': return 'translateX(-50px)'
      case 'right': return 'translateX(50px)'
      default: return 'translateY(50px)'
    }
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            willChange: 'filter, opacity, transform',
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : getInitialTransform(),
            transition: `filter 0.35s ${i * delay}ms, opacity 0.35s ${i * delay}ms, transform 0.35s ${i * delay}ms`,
            marginRight: i < words.length - 1 ? '0.25em' : 0,
          }}
        >
          {word}
        </span>
      ))}
    </p>
  )
}
