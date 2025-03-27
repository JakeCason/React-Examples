import React from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const products = useOutletContext();
  const navigate = useNavigate();
  
  // Find the product with the matching ID
  const product = products.find(p => p.id === parseInt(productId, 10));
  
  // If product not found
  if (!product) {
    return (
      <div>
        <h3>Product Not Found</h3>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Product Details</h3>
      <p>Product: {product.name}</p>
      <p>ID: {product.id}</p>
      <button onClick={() => navigate('/products')}>Back</button>
    </div>
  );
}

export default ProductDetail; 