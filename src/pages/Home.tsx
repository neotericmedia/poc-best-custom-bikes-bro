import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
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

      {/* Hero */}
      <section className="hero">
        <div className="hero-image">
          <img src="/figma-assets/545d7ab798e730ea2aa8015a9701e9a993252347.jpg" alt="Custom motorcycle in workshop" />
          <div className="hero-shadow"></div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">INDEPENDENT SPIRIT. HAND-BUILT MACHINES.</div>
          <h1 className="hero-headline">
            NOT MADE<br />
            FOR EVERYONE.
          </h1>
          <p className="hero-introduction">
            One-of-a-kind motorcycles. Built by hand,<br />
            ridden with purpose. For those who take<br />
            the long way home.
          </p>
          <div className="hero-actions">
            <button className="hero-cta">
              <span>Explore the builds</span>
              <span className="arrow">↗</span>
            </button>
            <Link to="/workshop" className="hero-link">Inside the workshop  ↗</Link>
          </div>
        </div>
        <div className="hero-baseline">
          <div className="hero-baseline-rule"></div>
          <div className="hero-footer-info">
            <div className="hero-origin">BUILT IN AUSTIN, TEXAS. RIDDEN EVERYWHERE.</div>
            <div className="hero-featured">
              <div className="featured-index">001 / THE OUTLAW</div>
              <div className="featured-type">BMW R nineT · Café racer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Strip */}
      <section className="manifesto-strip">
        <div className="manifesto-content">
          <div className="manifesto-item">BUILT, NOT BOUGHT.</div>
          <div className="manifesto-separator">+</div>
          <div className="manifesto-item">NO TWO ALIKE.</div>
          <div className="manifesto-separator">+</div>
          <div className="manifesto-item">ALL SOUL. NO SHORTCUTS.</div>
        </div>
      </section>

      {/* Selected Builds */}
      <section className="selected-builds">
        <div className="builds-header">
          <div className="section-index">01 / THE COLLECTION</div>
          <h2 className="section-heading">ONE OF ONE. EVERY TIME.</h2>
          <div className="builds-tabs">
            <button className="tab tab-active">All builds</button>
            <button className="tab">Available now</button>
            <button className="tab">The archive</button>
          </div>
        </div>

        <div className="builds-grid">
          {/* The Outlaw */}
          <div className="build-card">
            <div className="build-image-wrapper">
              <img src="/figma-assets/236d1609d3d140bfabb06b00489794fac9ef8ce8.jpg" alt="The Outlaw" className="build-image" />
              <div className="build-status">AVAILABLE</div>
            </div>
            <div className="build-info">
              <div className="build-index">BUILD 001</div>
              <div className="build-title-row">
                <h3 className="build-title">THE OUTLAW</h3>
                <span className="build-arrow">↗</span>
              </div>
              <div className="build-platform">BMW R nineT / Café racer</div>
              <div className="build-rule"></div>
              <div className="build-price-row">
                <div className="build-price">$24,500</div>
                <div className="build-price-context">USD / TURNKEY</div>
              </div>
            </div>
          </div>

          {/* The Rambler */}
          <div className="build-card">
            <div className="build-image-wrapper">
              <img src="/figma-assets/da9a865c2f687d0407a1e64896a8bcea5ca0875b.jpg" alt="The Rambler" className="build-image" />
              <div className="build-status">AVAILABLE</div>
            </div>
            <div className="build-info">
              <div className="build-index">BUILD 002</div>
              <div className="build-title-row">
                <h3 className="build-title">THE RAMBLER</h3>
                <span className="build-arrow">↗</span>
              </div>
              <div className="build-platform">Triumph Scrambler / Street tracker</div>
              <div className="build-rule"></div>
              <div className="build-price-row">
                <div className="build-price">$21,800</div>
                <div className="build-price-context">USD / TURNKEY</div>
              </div>
            </div>
          </div>

          {/* The Ghost */}
          <div className="build-card">
            <div className="build-image-wrapper">
              <img src="/figma-assets/e8ddda38f922c31b67544638156a7ad7c5a3f56d.jpg" alt="The Ghost" className="build-image" />
              <div className="build-status build-status-sold">SOLD · ONE OF ONE</div>
            </div>
            <div className="build-info">
              <div className="build-index">BUILD 003</div>
              <div className="build-title-row">
                <h3 className="build-title">THE GHOST</h3>
                <span className="build-arrow">↗</span>
              </div>
              <div className="build-platform">Honda CB750 / Café racer</div>
              <div className="build-rule"></div>
              <div className="build-price-row">
                <div className="build-price">Commissioned</div>
                <div className="build-price-context">A rider's original</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workshop */}
      <section className="workshop">
        <div className="workshop-image">
          <img src="/figma-assets/4bd640a13c7a000e121b6491f6b4b29ac04a18fa.jpg" alt="Workshop craftsman" />
        </div>
        <div className="workshop-content">
          <div className="workshop-index">02 / THE WORKSHOP</div>
          <h2 className="workshop-headline">
            DIRTY HANDS.<br />
            CLEAR VISION.
          </h2>
          <p className="workshop-story">
            We're a small crew with a big respect for the machine.<br />
            From the first sketch to the last weld, every detail is<br />
            made with intention. Nothing off the shelf. Nothing<br />
            that doesn't belong.
          </p>
          <div className="workshop-signature">Good people. Honest work. Exceptional motorcycles.</div>
          <Link to="/workshop" className="workshop-action">Meet the makers   ↗</Link>
        </div>
      </section>

      {/* How We Build */}
      <section className="how-we-build">
        <div className="process-header">
          <div className="process-index">03 / YOUR MACHINE, YOUR WAY</div>
          <h2 className="process-heading">
            FROM WHAT IF.<br />
            TO WHAT'S NEXT.
          </h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-rule"></div>
            <div className="step-number">01</div>
            <h3 className="step-title">THE CONVERSATION</h3>
            <p className="step-description">
              Tell us how you ride. We'll find the<br />
              right platform, direction, and budget.
            </p>
          </div>
          <div className="process-step">
            <div className="step-rule"></div>
            <div className="step-number">02</div>
            <h3 className="step-title">THE CRAFT</h3>
            <p className="step-description">
              Metal, leather, and a little obsession.<br />
              Follow your build as it comes to life.
            </p>
          </div>
          <div className="process-step">
            <div className="step-rule"></div>
            <div className="step-number">03</div>
            <h3 className="step-title">THE OPEN ROAD</h3>
            <p className="step-description">
              Tested. Tuned. Yours. Pick up the keys<br />
              and write the rest of the story.
            </p>
          </div>
        </div>
      </section>

      {/* Rider Story */}
      <section className="rider-story">
        <div className="story-content">
          <div className="story-label">WORDS FROM THE ROAD</div>
          <div className="quote-mark">"</div>
          <blockquote className="rider-quote">
            THEY DIDN'T JUST BUILD MY BIKE.<br />
            THEY BUILT THE BIKE I COULDN'T<br />
            GET OUT OF MY HEAD.
          </blockquote>
          <div className="rider-attribution">JAMES R.  /  THE OUTLAW'S FIRST BELIEVER</div>
        </div>
      </section>

      {/* Start Your Build */}
      <section className="start-build">
        <div className="start-content">
          <div className="invitation-label">YOUR NEXT CHAPTER STARTS HERE.</div>
          <h2 className="invitation-heading">
            LET'S BUILD SOMETHING<br />
            THAT FEELS LIKE YOU.
          </h2>
          <button className="start-cta">
            <span>Start the conversation</span>
            <span className="arrow">↗</span>
          </button>
          <div className="no-pressure">Big ideas welcome. No pressure, ever.</div>
          <div className="build-availability">Now booking custom commissions for spring 2027.</div>
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

export default Home;
