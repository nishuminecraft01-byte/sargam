import { useState, useEffect } from 'react';
import { SALON_CONFIG, BRAND } from '../utils/config';
import './Booking.css';

const services = [
  'Occasion & Editorial Makeup',
  'Bridal Makeup & Styling',
  'Hair Styling & Draping',
  'Skincare Prep & Facials',
  'Nail Services & Artistry',
  'Bespoke Beauty Treatments',
  'Personalized Beauty Consultation',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM',
];

const initialState = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

function getTodayString() {
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function validateIndianPhone(phone) {
  // Indian mobile numbers: 10 digits starting with 6, 7, 8, or 9
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

function buildWhatsAppMessage(data) {
  return encodeURIComponent(
    `Hello House of Blush by Sargam! ✨\n\n` +
    `I would like to enquire about an appointment:\n` +
    `• Name: ${data.name}\n` +
    `• Phone: +91 ${data.phone}\n` +
    `• Preferred Service: ${data.service}\n` +
    `• Preferred Date: ${data.date}\n` +
    `• Preferred Time: ${data.time}\n` +
    `${data.message ? `• Additional Notes: ${data.message}\n` : ''}` +
    `\nPlease let me know if this slot is available. Thank you!`
  );
}

export default function Booking() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'no-wa'
  const [copied, setCopied] = useState(false);

  // Listen for service selection from Services section
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail) {
        // Find best matching service
        const matched = services.find((s) =>
          s.toLowerCase().includes(e.detail.toLowerCase().split(' ')[0])
        ) || e.detail;
        setForm((prev) => ({ ...prev, service: matched }));
        setErrors((prev) => ({ ...prev, service: '' }));
      }
    };
    window.addEventListener('selectService', handleServiceSelect);
    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required for appointment contact.';
    } else if (!validateIndianPhone(form.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number (starts with 6-9).';
    }
    if (!form.service) {
      errs.service = 'Please select your preferred service.';
    }
    if (!form.date) {
      errs.date = 'Please pick a preferred date.';
    }
    if (!form.time) {
      errs.time = 'Please select a preferred time slot.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(`field-${firstError}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const configuredNumber = SALON_CONFIG.whatsappNumber?.trim();

    if (!configuredNumber) {
      // Prompt requirement: If no number is configured, show helpful message explaining contact details need to be added
      setStatus('no-wa');
      return;
    }

    // Open WhatsApp
    const encoded = buildWhatsAppMessage(form);
    const waUrl = `https://wa.me/${configuredNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  const handleCopyMessage = () => {
    const text = decodeURIComponent(buildWhatsAppMessage(form));
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleReset = () => {
    setForm(initialState);
    setErrors({});
    setStatus('idle');
    setCopied(false);
  };

  return (
    <section id="booking" className="booking section" aria-label="Appointment Enquiry">
      <div className="container">
        <div className="booking__layout">
          {/* Left Context Column */}
          <div className="booking__intro reveal-left">
            <span className="section-eyebrow">APPOINTMENT ENQUIRY</span>
            <h2 className="booking__headline section-headline">
              Begin Your <span className="editorial-italic">Beauty Journey</span>
            </h2>
            <div className="editorial-line" />
            <p className="booking__intro-copy">
              Please share your preferred date, time, and styling needs. We will connect
              with you to confirm slot availability and review trial or styling options.
            </p>

            <div className="booking__features-list">
              <div className="booking__feature-item">
                <div className="booking__feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="booking__feature-title">Direct WhatsApp Dialogue</h4>
                  <p className="booking__feature-desc">Convenient communication directly with our styling team.</p>
                </div>
              </div>

              <div className="booking__feature-item">
                <div className="booking__feature-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div>
                  <h4 className="booking__feature-title">Bespoke Slot Reservation</h4>
                  <p className="booking__feature-desc">Prioritized scheduling for bridal trials and special occasions.</p>
                </div>
              </div>
            </div>

            {/* Crucial Enquiry Disclaimer (Non-invented confirmation) */}
            <div className="booking__disclaimer-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <p>
                <strong>Important Notice:</strong> Submitting this form constitutes an enquiry and does
                not guarantee an appointment until confirmed directly by {BRAND.name}.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="booking__card reveal-right">
            {status === 'idle' && (
              <form
                className="booking__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Appointment enquiry form"
                id="booking-form"
              >
                <div className="booking__form-header">
                  <h3 className="booking__form-title">Enquiry Details</h3>
                  <span className="sample-badge">Validated Form</span>
                </div>

                {/* Name */}
                <div className={`form-group ${errors.name ? 'form-group--error' : ''}`} id="field-name">
                  <label htmlFor="client-name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="client-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Priya Sharma"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                  {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className={`form-group ${errors.phone ? 'form-group--error' : ''}`} id="field-phone">
                  <label htmlFor="client-phone" className="form-label">
                    Phone Number (India) <span className="req">*</span>
                  </label>
                  <div className="phone-input-wrap">
                    <span className="phone-prefix">+91</span>
                    <input
                      id="client-phone"
                      name="phone"
                      type="tel"
                      className="form-input form-input--phone"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={handleChange}
                      maxLength={10}
                      inputMode="numeric"
                      required
                    />
                  </div>
                  {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                </div>

                {/* Preferred Service */}
                <div className={`form-group ${errors.service ? 'form-group--error' : ''}`} id="field-service">
                  <label htmlFor="client-service" className="form-label">
                    Preferred Service <span className="req">*</span>
                  </label>
                  <select
                    id="client-service"
                    name="service"
                    className="form-select"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service category…</option>
                    {services.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error" role="alert">{errors.service}</span>}
                </div>

                {/* Date & Time Row */}
                <div className="form-row">
                  <div className={`form-group ${errors.date ? 'form-group--error' : ''}`} id="field-date">
                    <label htmlFor="client-date" className="form-label">
                      Preferred Date <span className="req">*</span>
                    </label>
                    <input
                      id="client-date"
                      name="date"
                      type="date"
                      className="form-input"
                      value={form.date}
                      onChange={handleChange}
                      min={getTodayString()}
                      required
                    />
                    {errors.date && <span className="form-error" role="alert">{errors.date}</span>}
                  </div>

                  <div className={`form-group ${errors.time ? 'form-group--error' : ''}`} id="field-time">
                    <label htmlFor="client-time" className="form-label">
                      Preferred Time <span className="req">*</span>
                    </label>
                    <select
                      id="client-time"
                      name="time"
                      className="form-select"
                      value={form.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select slot…</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <span className="form-error" role="alert">{errors.time}</span>}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="form-group" id="field-message">
                  <label htmlFor="client-message" className="form-label">
                    Additional Notes <span className="opt">(Optional)</span>
                  </label>
                  <textarea
                    id="client-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us about the occasion, skin preferences, or bridal details…"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary booking__submit-btn"
                  id="booking-submit-enquiry-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  Send Enquiry via WhatsApp
                </button>
              </form>
            )}

            {/* State: WhatsApp Not Configured (Configurable Demo Workflow) */}
            {status === 'no-wa' && (
              <div className="booking__state-card" role="status">
                <div className="booking__state-badge">DEMO CONFIGURATION NOTICE</div>
                <h3 className="booking__state-title">Enquiry Generated Successfully!</h3>
                <p className="booking__state-desc">
                  Because this is a bespoke CREVINOX demonstration for <strong>{BRAND.name}</strong>,
                  the salon's official WhatsApp number has not been populated yet.
                </p>

                <div className="booking__summary-card">
                  <h4 className="booking__summary-heading">Enquiry Summary</h4>
                  <div className="booking__summary-item">
                    <span>Name:</span> <strong>{form.name}</strong>
                  </div>
                  <div className="booking__summary-item">
                    <span>Phone:</span> <strong>+91 {form.phone}</strong>
                  </div>
                  <div className="booking__summary-item">
                    <span>Service:</span> <strong>{form.service}</strong>
                  </div>
                  <div className="booking__summary-item">
                    <span>Date & Time:</span> <strong>{form.date} at {form.time}</strong>
                  </div>
                  {form.message && (
                    <div className="booking__summary-item">
                      <span>Notes:</span> <em>{form.message}</em>
                    </div>
                  )}
                </div>

                <div className="booking__code-block">
                  <div className="booking__code-header">
                    <span>Generated WhatsApp Payload</span>
                    <button
                      type="button"
                      className="booking__copy-btn"
                      onClick={handleCopyMessage}
                    >
                      {copied ? '✓ Copied' : 'Copy Message'}
                    </button>
                  </div>
                  <pre className="booking__code-content">
                    {decodeURIComponent(buildWhatsAppMessage(form))}
                  </pre>
                </div>

                <div className="booking__state-actions">
                  <button className="btn btn-secondary" onClick={handleReset}>
                    Edit Enquiry
                  </button>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-rose"
                  >
                    DM on Instagram
                  </a>
                </div>
              </div>
            )}

            {/* State: Live Success (When WhatsApp number is set) */}
            {status === 'success' && (
              <div className="booking__state-card" role="status">
                <div className="booking__state-icon">✓</div>
                <h3 className="booking__state-title">WhatsApp Opened!</h3>
                <p className="booking__state-desc">
                  Your enquiry has been prepared. Please click send in WhatsApp to share your request
                  with the House of Blush styling team.
                </p>
                <div className="booking__summary-card">
                  <div className="booking__summary-item">
                    <span>Service:</span> <strong>{form.service}</strong>
                  </div>
                  <div className="booking__summary-item">
                    <span>Date:</span> <strong>{form.date}</strong>
                  </div>
                  <div className="booking__summary-item">
                    <span>Time:</span> <strong>{form.time}</strong>
                  </div>
                </div>
                <button className="btn btn-outline" onClick={handleReset}>
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
