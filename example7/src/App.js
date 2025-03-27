import React, { useState } from 'react';
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

// Create context for global state
export const AppContext = React.createContext();

function App() {
  // State to share between pages
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [userName, setUserName] = useState('');
  
  // Context value that will be shared with all components
  const contextValue = {
    selectedProducts,
    setSelectedProducts,
    userName,
    setUserName
  };

  return (
    <div>
      <AppContext.Provider value={contextValue}>
        <BrowserRouter>
          <h1>React Router with State Demo</h1>
          <Navigation />
          
          <div className="content-area">
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
      </AppContext.Provider>
    </div>
  );
}

export default App;
