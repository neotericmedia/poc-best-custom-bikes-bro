import React from 'react';
import '../styles/Gallery.css';

const Gallery: React.FC = () => {
  const bikes = [
    { id: 1, name: 'Urban Cruiser', color: 'Matte Black' },
    { id: 2, name: 'Mountain Beast', color: 'Deep Red' },
    { id: 3, name: 'Road Racer', color: 'Metallic Blue' },
    { id: 4, name: 'Vintage Classic', color: 'Cream White' },
  ];

  return (
    <section className="gallery">
      <h2>Our Custom Fleet</h2>
      <div className="gallery-grid">
        {bikes.map((bike) => (
          <div key={bike.id} className="gallery-card">
            <div className="gallery-card-image"></div>
            <h3>{bike.name}</h3>
            <p>{bike.color}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;