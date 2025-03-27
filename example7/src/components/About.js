import React, { useContext } from 'react';
import { AppContext } from '../App';

function About() {
  const { userName, selectedProducts } = useContext(AppContext);

  return (
    <div>
      <h2>About Page</h2>
      <p>This is a simple about page that shows how state is shared between components.</p>
      
      {userName && (
        <div className="selected-info">
          <p>Hello, {userName}! This data was entered on the Home page.</p>
        </div>
      )}
      
      {selectedProducts.length > 0 && (
        <div className="selected-info">
          <p>You have selected {selectedProducts.length} products:</p>
          <ul>
            {selectedProducts.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default About; 