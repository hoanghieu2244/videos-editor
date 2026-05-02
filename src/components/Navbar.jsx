import { ArrowUpRight } from 'lucide-react'
import logoIcon from '../assets/logo-icon.png'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-0 right-0 z-50 py-3 px-6 md:px-12"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <img src={logoIcon} alt="HVH Logo" className="h-10 w-10 rounded-lg" />
          <span
            className="hidden sm:block text-white font-medium text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Hoàng Văn Hiếu
          </span>
        </a>

        {/* Center Nav Links - Desktop */}
        <div
          className="hidden md:flex items-center rounded-full"
          style={{
            background: 'rgba(255, 255, 255, 0.01)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '4px 6px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#fff')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.9)')}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '9999px',
              padding: '6px 16px',
              fontSize: '14px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              marginLeft: '4px',
              transition: 'background-color 0.2s',
            }}
          >
            Hire Me
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <a
            href="#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Hire Me
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    </nav>
  )
}
