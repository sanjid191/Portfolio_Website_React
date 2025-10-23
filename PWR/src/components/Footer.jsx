const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjid191' },
  { label: 'GitHub', href: 'https://github.com/sanjid191' },
  { label: 'Email', href: 'mailto:hello@sanjid.design' }
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__layer" />
      <div className="footer__content">
        <div>
          <h2 className="footer__title">Let us build something remarkable.</h2>
          <p className="footer__subtitle">
            I combine sharp design instincts with thoughtful engineering to craft immersive digital experiences.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="footer__link">
              {link.label}
            </a>
          ))}
        </div>

        <p className="footer__credits">© {new Date().getFullYear()} Sanjid. Crafted with intention and caffeine.</p>
      </div>
    </footer>
  )
}

export default Footer
