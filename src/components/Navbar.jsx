import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (link) => {
    setIsOpen(false)
    const element = document.querySelector(`#${link.toLowerCase()}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12">
      <div className="flex items-center justify-between w-full">
        <a
          href="#home"
          className="flex items-center gap-3 shrink-0 group"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <motion.img
            src={logoIcon}
            alt="HVH Logo"
            className="h-10 w-10 rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          <span className="hidden sm:block font-medium text-sm text-[hsl(var(--foreground))] transition-colors">
            Hoàng Văn Hiếu
          </span>
        </a>

        <div className="hidden md:flex items-center rounded-full bg-[hsl(var(--glass-bg))] backdrop-blur-[var(--glass-blur)] border border-[hsl(var(--border))] px-2 py-1">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-[hsl(var(--foreground)/0.9)] rounded-full overflow-hidden group"
              whileHover={{ color: 'hsl(var(--foreground))' }}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link)
              }}
              data-hover
            >
              <span className="relative z-10">{link}</span>
              <motion.div
                className="absolute inset-0 bg-[hsl(var(--primary)/0.1)] rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(var(--primary))]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="ml-2 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full text-sm font-medium flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('Contact')
            }}
            data-hover
          >
            <span className="relative z-10">Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))]"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
              >
                <X className="w-5 h-5 text-[hsl(var(--foreground))]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
              >
                <Menu className="w-5 h-5 text-[hsl(var(--foreground))]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 backdrop-blur-xl"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link)
                }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-2 block px-4 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl text-center font-medium"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('Contact')
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
