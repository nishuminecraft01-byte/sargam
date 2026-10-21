import { useState, useCallback, useEffect } from 'react';
import { IMAGES, BRAND } from '../utils/config';
import './Gallery.css';

const categories = [
  'All',
  'Bridal Beauty',
  'Makeup Looks',
  'Hair Styling',
  'Close-up Details',
  'Salon Atmosphere',
  'Behind-the-Scenes',
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? IMAGES.gallery
    : IMAGES.gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = useCallback((item) => {
    const fullIndex = IMAGES.gallery.findIndex((img) => img.id === item.id);
    setLightboxIndex(fullIndex !== -1 ? fullIndex : 0);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + IMAGES.gallery.length) % IMAGES.gallery.length);
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % IMAGES.gallery.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, next, prev, closeLightbox]);

  return (
    <section id="gallery" className="gallery section" aria-label="Portfolio & Beauty Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-eyebrow centered reveal">PORTFOLIO & ARTISTRY</span>
          <h2 className="section-headline reveal reveal-delay-1">
            Moments of <span className="editorial-italic">Radiance & Style</span>
          </h2>
          <div className="editorial-line center reveal reveal-delay-2" />
          <p className="section-description reveal reveal-delay-2">
            An editorial glimpse into our bridal transformations, textured hair designs,
            and celebratory looks created with delicate precision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery__filters reveal reveal-delay-3" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`gallery__filter-btn ${selectedCategory === cat ? 'gallery__filter-btn--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Editorial Grid */}
        <div className="gallery__masonry reveal reveal-delay-4">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className={`gallery__card gallery__card--${item.aspect}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item);
                }
              }}
              aria-label={`View ${item.alt} in full screen`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery__image"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__category-pill">{item.category}</span>
                <p className="gallery__caption">{item.caption || item.alt}</p>
                <span className="gallery__zoom-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Inspiration CTA Block */}
        <div className="gallery__instagram-cta reveal">
          <div className="gallery__instagram-cta-text">
            <span className="section-eyebrow">INSTAGRAM INSPIRATION</span>
            <h3 className="gallery__instagram-cta-title">More Beauty. More Inspiration.</h3>
            <p className="gallery__instagram-cta-sub">
              Follow our daily artistry, behind-the-scenes moments, and client transformations on Instagram.
            </p>
          </div>
          <div className="gallery__instagram-cta-action">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-rose"
              id="gallery-follow-ig-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Accessible Click-to-Expand Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={closeLightbox}
        >
          <div className="lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__media">
              <img
                src={IMAGES.gallery[lightboxIndex].src.replace('w=900', 'w=1400')}
                alt={IMAGES.gallery[lightboxIndex].alt}
                className="lightbox__img"
              />
            </div>

            <div className="lightbox__footer">
              <div className="lightbox__meta">
                <span className="lightbox__category">
                  {IMAGES.gallery[lightboxIndex].category}
                </span>
                <p className="lightbox__desc">
                  {IMAGES.gallery[lightboxIndex].caption || IMAGES.gallery[lightboxIndex].alt}
                </p>
              </div>
              <span className="lightbox__counter">
                {lightboxIndex + 1} / {IMAGES.gallery.length}
              </span>
            </div>

            {/* Lightbox Controls */}
            <button
              className="lightbox__close-btn"
              onClick={closeLightbox}
              aria-label="Close lightbox (Esc)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <button
              className="lightbox__arrow lightbox__arrow--left"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image (Left arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <button
              className="lightbox__arrow lightbox__arrow--right"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image (Right arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
