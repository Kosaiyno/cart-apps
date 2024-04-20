import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3500/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"  
          element={<ProductList 
            products={products} 
            cartItems={cartItems} 
            setCartItems={setCartItems} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;