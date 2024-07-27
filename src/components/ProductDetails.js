// src/components/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails({ data }) {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Gender: {product.gender}</p>
      <div style={{ backgroundColor: product.backgroundColor, width: '100px', height: '100px' }}></div>
    </div>
  );
}
