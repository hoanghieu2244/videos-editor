import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Sun, Moon } from 'lucide-react'

export default function App() {
  const [theme, setTheme] = useState('light')

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

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen transition-colors duration-300" data-theme={theme}>
      <div className="relative z-10">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          title={theme === 'light' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng'}
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-300 group-hover:text-yellow-200" />
          )}
        </button>

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
