import { useState } from 'react'
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
          <img src={logoIcon} alt="HVH Logo" className="h-10 w-10 rounded-lg" />
          <span className="hidden sm:block font-medium text-sm text-[hsl(var(--foreground))] transition-colors">
            Hoàng Văn Hiếu
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center rounded-full bg-[hsl(var(--glass-bg))] backdrop-blur-[var(--glass-blur)] border border-[hsl(var(--border))] px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-[hsl(var(--foreground)/0.9)] hover:text-[hsl(var(--foreground))] transition-colors rounded-full hover:bg-[hsl(var(--primary)/0.1)] relative"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link)
              }}
            >
              {link}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(var(--primary))] scale-x-0 hover:scale-x-100 transition-transform origin-center" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('Contact')
            }}
          >
            Hire Me
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-[hsl(var(--glass-bg))] border border-[hsl(var(--border))]"
        >
          {isOpen ? <X className="w-5 h-5 text-[hsl(var(--foreground))]" /> : <Menu className="w-5 h-5 text-[hsl(var(--foreground))]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-4 py-3 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link)
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 block px-4 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-xl text-center font-medium"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('Contact')
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
