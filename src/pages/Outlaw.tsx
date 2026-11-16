import React from 'react';
import { Link } from 'react-router-dom';
import './Outlaw.css';

const Outlaw: React.FC = () => {
  return (
    <div className="outlaw-page">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <Link to="/" className="nav-wordmark">
            <div className="wordmark">IRON & GRIT</div>
            <div className="wordmark-descriptor">CUSTOM MOTORCYCLES</div>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">The builds</Link>
            <Link to="/workshop" className="nav-link">Our workshop</Link>
            <a href="#journal" className="nav-link">The journal</a>
          </div>
          <button className="nav-cta">
            <span>Start a build</span>
            <span className="arrow">↗</span>
          </button>
        </div>
        <div className="nav-rule"></div>
      </nav>

      {/* Build Overview */}
      <section className="build-overview">
        <div className="overview-content">
          <div className="breadcrumb-section">
            <Link to="/" className="back-link">←  The builds</Link>
            <div className="breadcrumb">/    The Outlaw</div>
          </div>

          <h1 className="build-title">THE OUTLAW</h1>

          <div className="overview-main">
            <div className="overview-image-section">
              <div className="main-image">
                <img src="/figma-assets/236d1609d3d140bfabb06b00489794fac9ef8ce8.jpg" alt="The Outlaw motorcycle" />
              </div>
              <div className="build-identifier">001 / ONE OF ONE</div>
              <div className="gallery-thumbnails">
                <div className="thumbnail selected">
                  <img src="/figma-assets/236d1609d3d140bfabb06b00489794fac9ef8ce8.jpg" alt="Full profile" />
                </div>
                <div className="thumbnail">
                  <img src="/figma-assets/61c877ca4493ef9159538fae788ebc65f6f1b0e3.jpg" alt="Engine detail" />
                </div>
                <div className="thumbnail">
                  <img src="/figma-assets/1652d1666182a8bc39667c102955a70f853a7edb.jpg" alt="Saddle detail" />
                </div>
              </div>
              <div className="gallery-info">
                <div className="gallery-caption">THE FULL PICTURE.<br />DOWN TO THE LAST DETAIL.</div>
                <div className="gallery-index">01 / 03</div>
              </div>
            </div>

            <div className="build-inquiry-panel">
              <div className="availability-badge">●  AVAILABLE NOW</div>
              <h2 className="product-pitch">A REBEL.<br />REFINED.</h2>
              <div className="product-subtitle">2018 BMW R nineT · Custom café racer</div>
              <p className="build-story">
                Less weight. More character. A stripped-back<br />
                boxer with a raw aluminum tank, hand-stitched<br />
                leather, and an unmistakable presence.
              </p>
              <div className="summary-divider"></div>
              <div className="specs-summary">
                <div className="spec-item">
                  <div className="spec-label">ENGINE</div>
                  <div className="spec-value">1,170 cc</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">POWER</div>
                  <div className="spec-value">110 hp</div>
                </div>
                <div className="spec-item">
                  <div className="spec-label">BUILD MILES</div>
                  <div className="spec-value">420 mi</div>
                </div>
              </div>
              <div className="price-section">
                <div className="price">$24,500</div>
                <div className="price-unit">USD</div>
                <div className="price-terms">One original. Ready for its next chapter.</div>
              </div>
              <button className="inquire-button">
                <span>Inquire about this build</span>
                <span className="arrow">↗</span>
              </button>
              <div className="viewing-action">Book a workshop viewing   ↗</div>
              <div className="shipping-note">Worldwide shipping can be arranged.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Specifications */}
      <section className="build-specifications">
        <div className="specs-content">
          <div className="specs-header">
            <div className="section-index">01 / UNDER THE SKIN</div>
            <h2 className="section-heading">ALL SUBSTANCE.<br />NO EXCESS.</h2>
            <p className="specs-intro">The right foundation. Refined by hand.</p>
          </div>

          <div className="specs-grid">
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">PLATFORM</div>
              <div className="spec-value-text">2018 BMW R nineT</div>
            </div>
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">ENGINE</div>
              <div className="spec-value-text">1,170 cc boxer twin</div>
            </div>
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">POWER</div>
              <div className="spec-value-text">110 hp @ 7,750 rpm</div>
            </div>
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">TRANSMISSION</div>
              <div className="spec-value-text">6-speed manual</div>
            </div>
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">FINISH</div>
              <div className="spec-value-text">Brushed alloy / satin black</div>
            </div>
            <div className="spec-group">
              <div className="spec-divider"></div>
              <div className="spec-label-text">EXHAUST</div>
              <div className="spec-value-text">Hand-built stainless 2–1</div>
            </div>
          </div>
        </div>
      </section>

      {/* Built Differently */}
      <section className="built-differently">
        <div className="details-header">
          <div className="section-index">02 / BUILT DIFFERENTLY</div>
          <h2 className="details-heading">THE DETAILS MAKE THE DIFFERENCE.</h2>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <div className="detail-image">
              <img src="/figma-assets/61c877ca4493ef9159538fae788ebc65f6f1b0e3.jpg" alt="Engine detail" />
            </div>
            <h3 className="detail-title">01 / MECHANICAL HONESTY</h3>
            <p className="detail-description">
              The iconic boxer, exposed and celebrated. A hand-built exhaust<br />
              and a meticulous tune let the character of the engine come through.
            </p>
          </div>

          <div className="detail-item">
            <div className="detail-image">
              <img src="/figma-assets/1652d1666182a8bc39667c102955a70f853a7edb.jpg" alt="Saddle detail" />
            </div>
            <h3 className="detail-title">02 / NOTHING WITHOUT INTENTION</h3>
            <p className="detail-description">
              Raw aluminum. Hand-stitched leather. A clean, shortened rear end.<br />
              Every surface considered. Every unnecessary ounce left behind.
            </p>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section className="ownership">
        <div className="ownership-header">
          <div className="section-index">03 / MORE THAN THE KEYS</div>
          <h2 className="ownership-heading">READY FOR<br />THE REAL WORLD.</h2>
        </div>

        <div className="ownership-grid">
          <div className="ownership-item">
            <div className="ownership-number">01</div>
            <h3 className="ownership-title">ROAD-TESTED</h3>
            <p className="ownership-description">
              Every build is thoroughly inspected,<br />
              serviced, and put through its paces.
            </p>
          </div>

          <div className="ownership-item">
            <div className="ownership-number">02</div>
            <h3 className="ownership-title">PERSONAL HANDOVER</h3>
            <p className="ownership-description">
              A proper introduction to your bike.<br />
              Setup, care, and every question covered.
            </p>
          </div>

          <div className="ownership-item">
            <div className="ownership-number">03</div>
            <h3 className="ownership-title">A LIFETIME OF KNOW-HOW</h3>
            <p className="ownership-description">
              We're a call away for advice, servicing,<br />
              or whatever the next mile brings.
            </p>
          </div>
        </div>
      </section>

      {/* Next Build */}
      <section className="next-build">
        <div className="next-build-content">
          <div className="next-build-text">
            <div className="section-index">KEEP YOUR OPTIONS WIDE OPEN.</div>
            <h2 className="next-heading">DIFFERENT MACHINE.<br />SAME RESTLESS SOUL.</h2>
            <p className="next-description">Meet The Rambler. Built for the road less ridden.</p>
            <Link to="/" className="back-to-builds">Back to all builds   ↗</Link>
          </div>
          <div className="next-build-image">
            <img src="/figma-assets/da9a865c2f687d0407a1e64896a8bcea5ca0875b.jpg" alt="The Rambler" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-wordmark">IRON & GRIT</div>
            <div className="footer-motto">Built with intent. Ridden with soul.</div>
          </div>
          <div className="footer-contact">
            <div className="footer-email">hello@ironandgrit.co</div>
            <div className="footer-location">
              East Austin, Texas<br />
              Workshop visits by appointment.
            </div>
          </div>
          <div className="footer-links">
            <a href="#instagram" className="footer-link">Instagram  ↗</a>
            <a href="#contact" className="footer-link">Get in touch  ↗</a>
          </div>
        </div>
        <div className="footer-rule"></div>
        <div className="footer-legal">
          <div className="footer-copyright">© 2026 Iron & Grit Motor Co.</div>
          <div className="footer-terms">Privacy     /     Terms</div>
        </div>
      </footer>
    </div>
  );
};

export default Outlaw;