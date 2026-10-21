import { BRAND, SUGGESTED_SERVICES, SALON_CONFIG } from '../utils/config';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Brand Story', href: '#about' },
  { label: 'Beauty Services', href: '#services' },
  { label: 'Signature Experience', href: '#experience' },
  { label: 'Portfolio Gallery', href: '#gallery' },
  { label: 'Contact & Hours', href: '#contact' },
  { label: 'Book Appointment', href: '#booking' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand Presentation Column */}
          <div className="footer__brand-col">
            <a href="#home" className="footer__brand-link" aria-label="House of Blush by Sargam — Back to top">
              <span className="footer__wordmark">{BRAND.name}</span>
              <span className="footer__signature">{BRAND.signature}</span>
            </a>

            <p className="footer__tagline">“{BRAND.tagline}”</p>

            <p className="footer__bio">
              A bespoke luxury beauty experience celebrating personal style, thoughtful artistry,
              and serene pampering moments.
            </p>

            {/* Social Connection */}
            <div className="footer__social-row">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label={`Follow ${BRAND.name} on Instagram`}
                id="footer-ig-link"
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

          {/* Quick Navigation */}
          <nav className="footer__nav-col" aria-label="Footer quick navigation">
            <h4 className="footer__col-heading">Explore</h4>
            <ul className="footer__nav-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Suggested Services */}
          <nav className="footer__nav-col" aria-label="Services navigation">
            <h4 className="footer__col-heading">Experiences</h4>
            <ul className="footer__nav-list">
              {SUGGESTED_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="footer__nav-link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Consultation & Demo Notice */}
          <div className="footer__notice-col">
            <h4 className="footer__col-heading">Appointment Bookings</h4>
            <p className="footer__notice-text">
              Consultations and trial sessions scheduled by advance enquiry.
            </p>
            <div className="footer__hours-card">
              <span>{SALON_CONFIG.hours.weekdays}</span>
              <span>{SALON_CONFIG.hours.sunday}</span>
            </div>

            <a href="#booking" className="btn btn-blush footer__book-btn" id="footer-book-appointment-btn">
              Book Appointment
            </a>

            <div className="footer__demo-pill">
              <span className="sample-badge">CREVINOX Demo</span>
              <span className="footer__demo-pill-sub">Custom Concept for Sargam</span>
            </div>
          </div>
        </div>
      </div>

      {/* Understated Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {CURRENT_YEAR} {BRAND.name} ({BRAND.signature}). All rights reserved.
          </p>

          <p className="footer__crevinox-credit">
            {BRAND.developerCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}
