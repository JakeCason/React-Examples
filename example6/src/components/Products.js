import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Outlet context={products} />
        </div>
      </div>
    </div>
  );
}

export default Products; 