import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Best Custom Bikes
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/page2">Gallery</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;