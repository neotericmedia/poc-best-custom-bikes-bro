import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import '../styles/Page1.css';

const Page1: React.FC = () => {
  return (
    <div className="page1">
      <Header />
      <Hero />
      <section className="page1-cta">
        <h2>Explore Our Custom Builds</h2>
        <Link to="/page2" className="link-button">
          View Gallery
        </Link>
      </section>
    </div>
  );
};

export default Page1;