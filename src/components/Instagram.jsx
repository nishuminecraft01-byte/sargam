import { IMAGES, BRAND } from '../utils/config';
import './Instagram.css';

export default function Instagram() {
  return (
    <section className="instagram section" aria-label="Instagram Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-eyebrow centered reveal">INSTAGRAM SPOTLIGHT</span>
          <h2 className="section-headline reveal reveal-delay-1">
            Follow <span className="editorial-italic">{BRAND.instagramHandle}</span>
          </h2>
          <div className="editorial-line center reveal reveal-delay-2" />
          <p className="section-description reveal reveal-delay-2">
            Join our online community for bridal beauty previews, backstage styling clips,
            and daily beauty inspiration curated by {BRAND.signature}.
          </p>
          <div className="instagram__demo-tag reveal reveal-delay-3">
            <span className="sample-badge">Curated Static Preview</span>
            <span className="instagram__demo-tag-text">
              Demonstrating direct integration with Sargam's active Instagram presence.
            </span>
          </div>
        </div>

        {/* 6-Item Instagram Visual Grid */}
        <div className="instagram__grid reveal reveal-delay-3">
          {IMAGES.instagram.map((post) => (
            <a
              key={post.id}
              href={BRAND.instagramUrl}
              className="instagram__card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${post.alt} on Instagram @houseofblush_by_sargam`}
              id={`instagram-post-${post.id}`}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="instagram__img"
                loading="lazy"
              />
              <div className="instagram__overlay">
                <span className="instagram__icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </span>
                <span className="instagram__tag-text">{post.likes}</span>
                <span className="instagram__view-label">View on Instagram ↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Action Row */}
        <div className="instagram__action-bar reveal">
          <a
            href={BRAND.instagramUrl}
            className="btn btn-rose"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-profile-link-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow {BRAND.instagramHandle}
          </a>

          <a href="#gallery" className="btn btn-secondary" id="instagram-view-gallery-btn">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
