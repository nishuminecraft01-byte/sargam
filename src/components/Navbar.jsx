import { useState, useEffect } from 'react';
import './Navbar.css';
import { BRAND } from '../utils/config';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active link detection based on scroll position
      const sections = ['contact', 'gallery', 'experience', 'services', 'about', 'home'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const section = href.replace('#', '');
    setActiveLink(section);
  };

  return (
    <>
      {/* Discreet Demo Concept Bar */}
      <div className="demo-topbar">
        <div className="container demo-topbar__inner">
          <span className="demo-topbar__tag">CREVINOX DEMO CONCEPT</span>
          <span className="demo-topbar__text">
            Bespoke Website Experience for <strong>{BRAND.name}</strong> ({BRAND.signature})
          </span>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-topbar__ig"
          >
            <span>{BRAND.instagramHandle}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>

      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__container">
          {/* Editable Typographic Wordmark */}
          <a
            href="#home"
            className="navbar__brand"
            aria-label={`${BRAND.name} ${BRAND.signature} — Home`}
            onClick={() => handleNavClick('#home')}
          >
            <span className="navbar__wordmark">{BRAND.name}</span>
            <span className="navbar__signature">{BRAND.signature}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar__nav" aria-label="Primary navigation">
            <ul className="navbar__links">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeLink === sectionId;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Area */}
          <div className="navbar__action-group">
            <a
              href="#booking"
              className="navbar__cta btn btn-primary"
              onClick={() => handleNavClick('#booking')}
              id="nav-book-appointment-btn"
            >
              Book Appointment
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <div className="navbar__mobile-header">
            <div className="navbar__brand navbar__brand--mobile">
              <span className="navbar__wordmark">{BRAND.name}</span>
              <span className="navbar__signature">{BRAND.signature}</span>
            </div>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <li key={link.label} style={{ transitionDelay: `${i * 0.05}s` }}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={() => handleNavClick(link.href)}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ transitionDelay: `${navLinks.length * 0.05}s` }}>
                <a
                  href="#booking"
                  className="btn btn-primary navbar__mobile-cta"
                  onClick={() => handleNavClick('#booking')}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar__mobile-footer">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-ig-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>{BRAND.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Darkened Backdrop for Mobile Menu */}
        {menuOpen && (
          <div
            className="navbar__backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
}
