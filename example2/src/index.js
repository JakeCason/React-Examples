import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*   This is how you list pages 
    <App /> is a refrence to './App.js'   */}
    <App />
  </React.StrictMode>
);