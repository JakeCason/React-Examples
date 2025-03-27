import React, { useContext } from 'react';
import { AppContext } from '../App';

function ProductsHome() {
  const { selectedProducts, userName } = useContext(AppContext);
  
  return (
    <div>
      <h3>Products Home</h3>
      <p>Select a product from the list to view details</p>
      
      {userName && (
        <p>Hi {userName}, you can browse our products here.</p>
      )}
      
      {selectedProducts.length > 0 ? (
        <div className="selected-info">
          <p>You have selected {selectedProducts.length} products.</p>
          <p>This information is shared across all pages.</p>
        </div>
      ) : (
        <p>You haven't selected any products yet.</p>
      )}
    </div>
  );
}

export default ProductsHome; 