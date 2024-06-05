import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Jewelry Store</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/category/rings">Rings</Link>
        <Link to="/category/necklaces">Necklaces</Link>
        <Link to="/category/earrings">Earrings</Link>
        <Link to="/category/bracelets">Bracelets</Link>
        <Link to="/category/watches">Watches</Link>
      </div>
    </nav>
  );
};

export default Navbar;
