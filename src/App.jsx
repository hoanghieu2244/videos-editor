import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import { Sun, Moon } from 'lucide-react'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [ripple, setRipple] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback((e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    setRipple({ x, y, theme: newTheme })
    setTheme(newTheme)

    setTimeout(() => setRipple(null), 1000)
  }, [theme])

  return (
    <div className="min-h-screen transition-colors duration-300 cursor-none" data-theme={theme}>
      <CustomCursor />

      {/* Ripple Effect */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed pointer-events-none z-[99] w-32 h-32 rounded-full"
            style={{
              left: ripple.x - 64,
              top: ripple.y - 64,
              background: ripple.theme === 'dark'
                ? 'radial-gradient(circle, hsl(213 45% 67%) 0%, transparent 70%)'
                : 'radial-gradient(circle, hsl(120 40% 45%) 0%, transparent 70%)',
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-[hsl(var(--glass-bg))] backdrop-blur-[var(--glass-blur)] border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary)/0.1)] transition-all duration-300 overflow-hidden"
          title={theme === 'light' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          data-hover
        >
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="w-5 h-5 text-[hsl(var(--foreground))]" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="w-5 h-5 text-yellow-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <Navbar />
        <Hero />
        <div data-theme={theme}>
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}
