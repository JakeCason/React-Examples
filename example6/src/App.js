import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductsHome from './components/ProductsHome';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>React Router Demo</h1>
        <Navigation />
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Nested routes */}
            <Route path="/products" element={<Products />}>
              <Route index element={<ProductsHome />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
