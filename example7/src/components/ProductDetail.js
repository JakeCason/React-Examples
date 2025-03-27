import React, { useContext } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function ProductDetail() {
  const { productId } = useParams();
  const products = useOutletContext();
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(AppContext);
  
  // Find the product with the matching ID
  const product = products.find(p => p.id === parseInt(productId, 10));
  
  // Check if product is in selected products
  const isSelected = product && selectedProducts.some(p => p.id === product.id);
  
  // Toggle selection function
  const toggleSelection = () => {
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };
  
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
      <p><strong>Product:</strong> {product.name}</p>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      
      <button onClick={toggleSelection}>
        {isSelected ? 'Remove from selection' : 'Add to selection'}
      </button>
      <button onClick={() => navigate('/products')}>Back</button>
      
      {selectedProducts.length > 0 && (
        <div className="selected-info">
          <p>You have {selectedProducts.length} products selected.</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail; 