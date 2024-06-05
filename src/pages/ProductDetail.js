import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  return (
    <div className="product-detail">
      <h1>Product Detail for {productId}</h1>
      <p>Details about the product will go here.</p>
    </div>
  );
};

export default ProductDetail;

