import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../App';

function Navigation() {
  const { userName, selectedProducts } = useContext(AppContext);

  return (
    <nav>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Products {selectedProducts.length > 0 && `(${selectedProducts.length})`}
            </NavLink>
          </li>
        </ul>
        
        {userName && (
          <div>Welcome, {userName}!</div>
        )}
      </div>
    </nav>
  );
}

export default Navigation; 