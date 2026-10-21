import { SUGGESTED_SERVICES, BRAND } from '../utils/config';
import './Services.css';

export default function Services() {
  const handleEnquireService = (serviceTitle) => {
    // Notify Booking component of preselection
    window.dispatchEvent(new CustomEvent('selectService', { detail: serviceTitle }));
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services section" aria-label="Beauty Services Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-eyebrow centered reveal">SUGGESTED BEAUTY EXPERIENCES</span>
          <h2 className="section-headline reveal reveal-delay-1">
            Artistry Tailored to <span className="editorial-italic">Your Individuality</span>
          </h2>
          <div className="editorial-line center reveal reveal-delay-2" />
          <p className="section-description reveal reveal-delay-2">
            Explore curated beauty treatments designed for personal style, special moments,
            and refined self-care. Every service is customized to your unique preferences.
          </p>
          <div className="services__demo-note reveal reveal-delay-3">
            <span className="sample-badge">Configurable Services</span>
            <span className="services__demo-note-text">
              Suggested categories for demo showcase — exact service menu & prices to be confirmed by {BRAND.signature}.
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="services__grid">
          {SUGGESTED_SERVICES.map((service, index) => {
            // Give specific cards distinctive editorial layout roles
            const isFeatured = service.id === 'bridal';
            const isWide = service.id === 'treatments';
            const gridClass = isFeatured
              ? 'service-card--featured'
              : isWide
              ? 'service-card--wide'
              : '';

            return (
              <article
                key={service.id}
                className={`service-card ${gridClass} reveal reveal-delay-${(index % 3) + 1}`}
                id={`service-${service.id}`}
              >
                <div className="service-card__media">
                  <img
                    src={service.image}
                    alt={`${service.title} — House of Blush beauty service`}
                    className="service-card__img"
                    loading="lazy"
                  />
                  <div className="service-card__overlay" />
                  {service.badge && (
                    <span className="service-card__badge">{service.badge}</span>
                  )}
                </div>

                <div className="service-card__body">
                  <div className="service-card__header">
                    <span className="service-card__num">0{index + 1}</span>
                    <span className="service-card__tag">House of Blush</span>
                  </div>

                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.shortDesc}</p>

                  <div className="service-card__meta">
                    {/* Price field hidden / labeled until confirmed by Sargam */}
                    <div className="service-card__pricing">
                      <span className="service-card__price-label">Pricing</span>
                      <span className="service-card__price-val">Upon Consultation</span>
                      <span className="service-card__price-sub">*Confirmed after personal trial</span>
                    </div>

                    <button
                      className="btn btn-secondary service-card__btn"
                      onClick={() => handleEnquireService(service.title)}
                      aria-label={`Enquire about ${service.title}`}
                      id={`enquire-${service.id}`}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Consultation Callout */}
        <div className="services__callout reveal">
          <div className="services__callout-content">
            <span className="section-eyebrow">PERSONALIZED BEAUTY CONSULTATION</span>
            <h3 className="services__callout-title">Looking for a custom bridal or event package?</h3>
            <p className="services__callout-desc">
              We collaborate closely with every client to develop customized hair, skin, and makeup itineraries.
            </p>
          </div>
          <a href="#booking" className="btn btn-primary" id="services-custom-enquiry-btn">
            Request Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
