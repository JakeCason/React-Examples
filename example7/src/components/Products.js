import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppContext } from '../App';

function Products() {
  const { selectedProducts, setSelectedProducts } = useContext(AppContext);
  
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const toggleProductSelection = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      // Remove from selected
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      // Add to selected
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const isSelected = (productId) => {
    return selectedProducts.some(p => p.id === productId);
  };

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px' }}>
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <h3>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p>Price: ${product.price}</p>
                <button 
                  onClick={() => toggleProductSelection(product)}
                >
                  {isSelected(product.id) ? 'Remove from selection' : 'Add to selection'}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Outlet context={products} />
        </div>
      </div>

      {selectedProducts.length > 0 && (
        <div className="selected-info">
          <h3>Selected Products ({selectedProducts.length})</h3>
          <ul>
            {selectedProducts.map(product => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${selectedProducts.reduce((sum, product) => sum + product.price, 0).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Products; 