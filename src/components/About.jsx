import { IMAGES, BRAND } from '../utils/config';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section" aria-label="Brand Story">
      <div className="container">
        <div className="about__grid">
          {/* Visual Column */}
          <div className="about__media-col reveal-left">
            <div className="about__frame">
              <img
                src={IMAGES.about}
                alt="Intimate beauty consultation and radiant makeup styling session"
                className="about__image"
                loading="lazy"
              />
              {/* Refined Brand Signature Accent */}
              <div className="about__floating-badge">
                <span className="about__floating-sub">{BRAND.signature}</span>
                <span className="about__floating-title">Bespoke Beauty</span>
              </div>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="about__text-col">
            <div className="reveal">
              <span className="section-eyebrow">WELCOME TO HOUSE OF BLUSH</span>
            </div>

            <h2 className="about__headline section-headline reveal reveal-delay-1">
              A Little Moment,<br />
              <span className="about__headline-italic">Just for You.</span>
            </h2>

            <div className="editorial-line reveal reveal-delay-2" />

            <div className="about__copy reveal reveal-delay-2">
              <p className="about__lead">
                Every beauty experience begins with understanding what makes you feel like yourself.
                House of Blush by Sargam is designed to celebrate personal style, thoughtful details,
                and the little moments that make you feel special.
              </p>
              <p className="about__body">
                Whether preparing for your wedding celebrations, an evening celebration, or simply taking time
                for intentional self-care, our approach focuses on enhancing your natural allure with elegance,
                warmth, and unhurried artistry.
              </p>
            </div>

            {/* Editorial Feature List */}
            <div className="about__pillars reveal reveal-delay-3">
              <div className="about__pillar">
                <div className="about__pillar-num">01</div>
                <div className="about__pillar-info">
                  <h3 className="about__pillar-title">Personalized Expression</h3>
                  <p className="about__pillar-desc">
                    No one-size-fits-all looks. We listen and design palettes that elevate your unique essence.
                  </p>
                </div>
              </div>

              <div className="about__pillar">
                <div className="about__pillar-num">02</div>
                <div className="about__pillar-info">
                  <h3 className="about__pillar-title">Thoughtful Attention</h3>
                  <p className="about__pillar-desc">
                    From skin hydration to the finishing hair pin, every element receives meticulous care.
                  </p>
                </div>
              </div>

              <div className="about__pillar">
                <div className="about__pillar-num">03</div>
                <div className="about__pillar-info">
                  <h3 className="about__pillar-title">Calm, Serene Space</h3>
                  <p className="about__pillar-desc">
                    An unhurried experience crafted to let you relax and enjoy your personal beauty ritual.
                  </p>
                </div>
              </div>
            </div>

            {/* Action & Configurable Note */}
            <div className="about__action-row reveal reveal-delay-4">
              <a href="#services" className="btn btn-secondary" id="about-discover-btn">
                Discover House of Blush
              </a>
              <span className="sample-badge" title="This narrative can be updated with Sargam's personal journey">
                Editable Brand Story
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
