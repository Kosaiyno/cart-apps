import React, { useState } from 'react';
import Product from './Product';
import Intro from './Intro';






const ProductList = ({ products, cartItems, setCartItems }) => {
  
    const updateCartItemsData = (item) => {
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1, total: cartItem.total + item.price }
            : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        const newCartItem = { ...item, quantity: 1, total: item.price };
        setCartItems([...cartItems, newCartItem]);
      }
    };


    return (
      <div>
        <div className='product-list'>
        <Intro />
          {products.map((product) => (
            <Product 
               key={product.id}
               product={product} 
               updateCartItemsData={updateCartItemsData}
               />
               
          ))}
         
        </div>
        
      </div>
    );
  };
export default ProductList;