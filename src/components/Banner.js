import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner1.jpeg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Jewelry Banner" />
      <div className="banner-text">
        <h1>Welcome to Our Jewelry Store</h1>
        <p>Discover our exclusive collection</p>
      </div>
    </div>
  );
};

export default Banner;
