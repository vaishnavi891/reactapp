import React from 'react';
import products from '../data/products';

const Catalog = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Catalog</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price: </strong>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
