import React from 'react';
import Banner from '../components/Banner';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <section className="intro">
        <h2>Our Collections</h2>
        <p>Explore our wide range of jewelry items</p>
      </section>
    </div>
  );
};

export default Home;
