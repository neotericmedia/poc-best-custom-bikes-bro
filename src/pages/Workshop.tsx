import React from 'react';
import { Link } from 'react-router-dom';
import './Workshop.css';

const Workshop: React.FC = () => {
  return (
    <div className="workshop-page">
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

      {/* Workshop Hero */}
      <section className="workshop-hero">
        <div className="workshop-hero-image">
          <img src="/figma-assets/4bd640a13c7a000e121b6491f6b4b29ac04a18fa.jpg" alt="Craftsman at work" />
        </div>
        <div className="workshop-hero-content">
          <div className="hero-eyebrow">02 / THE WORKSHOP</div>
          <h1 className="hero-headline">
            DIRTY HANDS.<br />
            CLEAR VISION.
          </h1>
          <p className="hero-description">
            We're a small crew with a big respect for the machine.<br />
            From the first sketch to the last weld, every detail is<br />
            made with intention. Nothing off the shelf. Nothing<br />
            that doesn't belong.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-header">
          <h2 className="section-heading">MEET THE MAKERS</h2>
          <p className="section-description">
            Good people. Honest work. Exceptional motorcycles.
          </p>
        </div>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo"></div>
            <h3 className="member-name">JAKE MORRISON</h3>
            <p className="member-role">Lead Builder & Founder</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3 className="member-name">SARAH CHEN</h3>
            <p className="member-role">Custom Fabrication</p>
          </div>
          <div className="team-member">
            <div className="member-photo"></div>
            <h3 className="member-name">MARCUS DALE</h3>
            <p className="member-role">Paint & Finish</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <h2 className="philosophy-heading">OUR PROCESS</h2>
          <p className="philosophy-text">
            Every bike starts with a conversation. We want to understand who you are,
            how you ride, and what makes you tick. From there, we source the right platform,
            sketch the vision, and get to work. No production lines. No shortcuts. Just hands-on
            craftsmanship and an obsession with getting every detail right.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="workshop-cta">
        <h2 className="cta-heading">
          READY TO START<br />
          YOUR BUILD?
        </h2>
        <Link to="/" className="cta-button">
          <span>Back to builds</span>
          <span className="arrow">↗</span>
        </Link>
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

export default Workshop;
