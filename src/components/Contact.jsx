import { SALON_CONFIG, BRAND } from '../utils/config';
import './Contact.css';

export default function Contact() {
  const hasPhone = Boolean(SALON_CONFIG.phone?.trim() && !SALON_CONFIG.phone.includes('Demo'));
  const hasAddress = Boolean(SALON_CONFIG.address?.trim() && !SALON_CONFIG.address.includes('Demo'));
  const hasWhatsApp = Boolean(SALON_CONFIG.whatsappNumber?.trim());

  const directionsUrl = hasAddress
    ? `https://maps.google.com/?q=${encodeURIComponent(SALON_CONFIG.address)}`
    : null;

  const phoneUrl = hasPhone ? `tel:${SALON_CONFIG.phone}` : null;
  const waUrl = hasWhatsApp ? `https://wa.me/${SALON_CONFIG.whatsappNumber}` : '#booking';

  return (
    <section id="contact" className="contact section" aria-label="Contact and Salon Information">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-eyebrow centered reveal">STUDIO & ENQUIRIES</span>
          <h2 className="section-headline reveal reveal-delay-1">
            Connect with <span className="editorial-italic">{BRAND.name}</span>
          </h2>
          <div className="editorial-line center reveal reveal-delay-2" />
          <p className="section-description reveal reveal-delay-2">
            Have questions regarding bridal dates, service pricing, or trial bookings?
            Reach out through our verified Instagram or schedule an enquiry.
          </p>
        </div>

        <div className="contact__grid">
          {/* Studio Location Card */}
          <div className="contact__card reveal reveal-delay-1">
            <div className="contact__card-header">
              <div className="contact__icon-bubble">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span className="sample-badge">Configurable Field</span>
            </div>
            <h3 className="contact__card-title">Studio Location</h3>
            <p className="contact__card-content">
              {hasAddress ? SALON_CONFIG.address : 'Salon address to be configured upon official launch'}
            </p>
            <p className="contact__card-subtext">
              Private studio appointments and on-location bridal bookings.
            </p>
            {hasAddress ? (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact__card-action"
                id="contact-directions-btn"
              >
                Get Directions ↗
              </a>
            ) : (
              <button
                className="btn btn-secondary contact__card-action btn--disabled"
                disabled
                title="Directions button will activate once salon address is confirmed"
              >
                Get Directions (Pending Address)
              </button>
            )}
          </div>

          {/* Contact & Phone Card */}
          <div className="contact__card reveal reveal-delay-2">
            <div className="contact__card-header">
              <div className="contact__icon-bubble">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.7 16z"/>
                </svg>
              </div>
              <span className="sample-badge">Configurable Field</span>
            </div>
            <h3 className="contact__card-title">Phone & Call</h3>
            <p className="contact__card-content">
              {hasPhone ? SALON_CONFIG.phone : 'Phone number to be configured by Sargam'}
            </p>
            <p className="contact__card-subtext">
              Direct voice consultations for wedding and occasion arrangements.
            </p>
            {hasPhone ? (
              <a
                href={phoneUrl}
                className="btn btn-secondary contact__card-action"
                id="contact-call-btn"
              >
                Call Now
              </a>
            ) : (
              <button
                className="btn btn-secondary contact__card-action btn--disabled"
                disabled
                title="Call Now button will activate once phone number is provided"
              >
                Call Now (Pending Phone)
              </button>
            )}
          </div>

          {/* WhatsApp Enquiry Card */}
          <div className="contact__card reveal reveal-delay-3">
            <div className="contact__card-header">
              <div className="contact__icon-bubble">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
              <span className="sample-badge">Configurable Field</span>
            </div>
            <h3 className="contact__card-title">WhatsApp Desk</h3>
            <p className="contact__card-content">
              {hasWhatsApp ? `WhatsApp: +${SALON_CONFIG.whatsappNumber}` : 'Number pending setup'}
            </p>
            <p className="contact__card-subtext">
              Quick enquiries, bridal quote requests, and appointment discussions.
            </p>
            {hasWhatsApp ? (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact__card-action"
                id="contact-whatsapp-chat-btn"
              >
                WhatsApp Enquiry
              </a>
            ) : (
              <a
                href="#booking"
                className="btn btn-primary contact__card-action"
                id="contact-booking-jump-btn"
              >
                Use Booking Form
              </a>
            )}
          </div>

          {/* Social & Hours Card (Verified Info) */}
          <div className="contact__card contact__card--featured reveal reveal-delay-4">
            <div className="contact__card-header">
              <div className="contact__icon-bubble">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <span className="sample-pill" style={{ color: 'var(--rose)', borderColor: 'var(--rose)' }}>
                Verified Profile
              </span>
            </div>
            <h3 className="contact__card-title">Instagram Social</h3>
            <p className="contact__card-content">
              <strong>{BRAND.instagramHandle}</strong>
            </p>
            <div className="contact__hours-block">
              <span className="contact__hours-line">{SALON_CONFIG.hours.weekdays}</span>
              <span className="contact__hours-line">{SALON_CONFIG.hours.sunday}</span>
              <span className="contact__hours-note">*{SALON_CONFIG.hours.note}</span>
            </div>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-rose contact__card-action"
              id="contact-visit-ig-btn"
            >
              Visit Instagram Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
