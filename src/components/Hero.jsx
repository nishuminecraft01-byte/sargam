import { useRef } from 'react';
import { IMAGES, BRAND } from '../utils/config';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Welcome to House of Blush">
      {/* Background with luxury editorial imagery */}
      <div className="hero__media-wrapper">
        <img
          src={IMAGES.hero}
          alt="Refined beauty portrait with soft natural lighting and radiant makeup styling"
          className="hero__image"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__vignette" aria-hidden="true" />
      </div>

      {/* Hero Content — Flex Column Layout to avoid overlap */}
      <div className="container hero__content">
        {/* Main Text Content */}
        <div className="hero__center-box">
          <div className="hero__eyebrow-wrap">
            <span className="hero__eyebrow-tag">House of Blush</span>
            <span className="hero__eyebrow-author">{BRAND.signature}</span>
          </div>

          <h1 className="hero__headline">
            Beauty That Feels<br />
            <span className="hero__headline-emphasis">Uniquely You.</span>
          </h1>

          <p className="hero__subtext">
            Discover your beauty moments at House of Blush by Sargam, where personal
            style meets thoughtful beauty experiences.
          </p>

          <div className="hero__cta-group">
            <a href="#services" className="btn btn-blush hero__btn-primary" id="hero-services-cta">
              Explore Our Services
            </a>
            <a href="#booking" className="btn btn-light-outline hero__btn-secondary" id="hero-book-cta">
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Bottom Bar: Hallmarks & Scroll Indicator */}
        <div className="hero__bottom-bar">
          <div className="hero__hallmarks">
            <span className="hero__hallmark-item">Bespoke Styling</span>
            <span className="hero__hallmark-dot" aria-hidden="true">•</span>
            <span className="hero__hallmark-item">Bridal Artistry</span>
            <span className="hero__hallmark-dot" aria-hidden="true">•</span>
            <span className="hero__hallmark-item">Editorial Beauty</span>
          </div>

          <button
            className="hero__scroll-indicator"
            onClick={handleScrollDown}
            aria-label="Scroll to discover brand story"
          >
            <span className="hero__scroll-text">DISCOVER</span>
            <span className="hero__scroll-track">
              <span className="hero__scroll-thumb"></span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
