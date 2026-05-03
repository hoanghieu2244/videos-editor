import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StudentCard from './components/StudentCard'

export default function App() {
  return (
    <div className="min-h-screen" data-theme="dark">
      <StudentCard />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
