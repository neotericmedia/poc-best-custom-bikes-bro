import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import '../styles/Page2.css';

const Page2: React.FC = () => {
  return (
    <div className="page2">
      <Header />
      <Gallery />
      <section className="page2-nav">
        <Link to="/" className="link-button">
          Back to Home
        </Link>
      </section>
    </div>
  );
};

export default Page2;