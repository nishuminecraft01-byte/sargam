import { IMAGES, BRAND } from '../utils/config';
import './SignatureSection.css';

export default function SignatureSection() {
  return (
    <section id="experience" className="signature section" aria-label="Signature Beauty Experience">
      <div className="container">
        <div className="signature__layout">
          {/* Editorial Content */}
          <div className="signature__text-wrap reveal-left">
            <span className="section-eyebrow">THE SIGNATURE PHILOSOPHY</span>

            <h2 className="signature__headline section-headline">
              Your Style. <span className="editorial-italic">Your Story.</span><br />
              Your Glow.
            </h2>

            <div className="editorial-line" />

            <p className="signature__lead">
              Explore beauty inspiration and personalized styling ideas designed to help
              you express your individual style.
            </p>

            <p className="signature__sub">
              At House of Blush by Sargam, we view makeup and hair styling as an art of subtle elevation.
              Rather than masking your features, every brushstroke, wave, and detail is thoughtfully
              considered to let your authentic elegance shine through effortlessly.
            </p>

            {/* Editorial Quotation Block */}
            <div className="signature__quote">
              <span className="signature__quote-mark">“</span>
              <p className="signature__quote-text">
                True beauty is when you look in the mirror and recognize the most radiant version of yourself.
              </p>
              <cite className="signature__quote-cite">{BRAND.name} — {BRAND.signature}</cite>
            </div>

            {/* Action Buttons */}
            <div className="signature__actions">
              <a href="#gallery" className="btn btn-secondary" id="signature-gallery-btn">
                View Portfolio
              </a>
              <a href="#booking" className="btn btn-primary" id="signature-book-btn">
                Book a Styling Session
              </a>
            </div>
          </div>

          {/* Large Editorial Portrait with Refined Offset Border */}
          <div className="signature__portrait-wrap reveal-right">
            <div className="signature__frame">
              <img
                src={IMAGES.signature}
                alt="Editorial beauty portrait showcasing glowing skin and refined hair styling"
                className="signature__portrait-img"
                loading="lazy"
              />
              <div className="signature__badge-corner">
                <span className="signature__badge-label">HOUSE OF BLUSH</span>
                <span className="signature__badge-sub">{BRAND.signature}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
