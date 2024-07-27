// src/components/Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

export default function Products({ genderproducts }) {
  return (
    <div className='grid grid-cols-3 gap-5 p-5'>
      {genderproducts.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Product data={product} />
        </Link>
      ))}
    </div>
  );
}
