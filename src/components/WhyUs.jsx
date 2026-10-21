import './WhyUs.css';
import { BRAND } from '../utils/config';

const features = [
  {
    id: 'personal-touch',
    num: '01',
    title: 'Beauty with a Personal Touch',
    description:
      'We believe the most memorable beauty experiences start with genuine listening. Every consultation explores your style, comfort, and preferences to shape an artistry that feels intimately yours.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    id: 'every-detail',
    num: '02',
    title: 'Attention to Every Detail',
    description:
      'From the precise symmetry of liner and brow placement to the delicate draping of your dupatta or hairpins, we dedicate unhurried care to the subtleties that complete your look.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    id: 'feels-like-you',
    num: '03',
    title: 'A Style That Feels Like You',
    description:
      'Rather than overpowering your identity with cookie-cutter trends, we enhance your natural grace. When you step out, you feel confident, radiant, and undeniably yourself.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    id: 'curated-experiences',
    num: '04',
    title: 'Thoughtfully Curated Experiences',
    description:
      'An intimate, peaceful studio atmosphere where time is taken to ensure your beauty ritual is relaxing, enjoyable, and completely stress-free.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="whyus section" aria-label="Why Choose House of Blush">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-eyebrow centered reveal">THE HOUSE OF BLUSH STANDARD</span>
          <h2 className="section-headline reveal reveal-delay-1">
            Artistry Grounded in <span className="editorial-italic">Care & Intention</span>
          </h2>
          <div className="editorial-line center reveal reveal-delay-2" />
          <p className="section-description reveal reveal-delay-2">
            Designed to offer a refined alternative to rushed beauty services,
            celebrating your individuality in every detail.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="whyus__grid">
          {features.map((item, index) => (
            <div
              key={item.id}
              className={`whyus__block reveal reveal-delay-${index + 1}`}
              id={`whyus-${item.id}`}
            >
              <div className="whyus__block-top">
                <span className="whyus__block-num">{item.num}</span>
                <div className="whyus__icon-box" aria-hidden="true">
                  {item.icon}
                </div>
              </div>

              <h3 className="whyus__title">{item.title}</h3>
              <p className="whyus__desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Configurable Note */}
        <div className="whyus__note reveal">
          <span className="sample-badge">Configurable Brand Pillars</span>
          <span className="whyus__note-text">
            These editorial blocks represent proposed pillars for {BRAND.name} and can be adjusted with Sargam's specific salon highlights.
          </span>
        </div>
      </div>
    </section>
  );
}
