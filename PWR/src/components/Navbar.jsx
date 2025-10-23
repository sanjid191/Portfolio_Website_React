import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar" data-scrolled="false">
      <nav className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__mark glass-icon">S</span>
          <span className="navbar__text">Sanjid Portfolio</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item, index) => (
            <li key={item.label} className="navbar__item" style={{ '--delay': `${index * 60}ms` }}>
              <a href={item.href} className="navbar__link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="navbar__cta">Let's Talk</a>
      </nav>
    </header>
  )
}

export default Navbar
