import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const { category } = useParams();
  return (
    <div className="category">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <p>Explore our {category} collection</p>
    </div>
  );
};

export default Category;
