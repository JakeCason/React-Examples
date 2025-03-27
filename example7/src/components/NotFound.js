import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

function NotFound() {
  const { userName } = useContext(AppContext);
  
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      
      {userName && (
        <p>Sorry {userName}, the page you are looking for doesn't exist.</p>
      )}
      
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound; 