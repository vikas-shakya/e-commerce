import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner2.jpeg';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-card">
        <div className="banner-text">
          <h1>Welcome to Our Jewelry Store</h1>
          <p>Discover our exclusive collection</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="banner-image">
          <img src={bannerImage} alt="Jewelry Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
