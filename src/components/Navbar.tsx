import { useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { HiBars3, HiXMark } from 'react-icons/hi2'

type Theme = 'light' | 'dark'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(href: string) {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)]"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(15,15,26,0.80)' : 'rgba(250,250,250,0.80)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Monogram logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNavClick('#hero') }}
          className="text-xl font-bold text-[var(--accent)] tracking-tight select-none"
          style={{ fontFamily: 'var(--font-heading)' }}
          aria-label="Silvia Scano – back to top"
        >
          SS
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => { e.preventDefault(); handleNavClick(href) }}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors duration-200"
          >
            {theme === 'dark'
              ? <HiSun  className="w-5 h-5" />
              : <HiMoon className="w-5 h-5" />
            }
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors duration-200"
          >
            {menuOpen
              ? <HiXMark className="w-5 h-5" />
              : <HiBars3 className="w-5 h-5" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[var(--border)]',
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="flex flex-col list-none m-0 p-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={e => { e.preventDefault(); handleNavClick(href) }}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
