import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const [cartItemsData, setCartItemsData] = useState([]);

  React.useEffect(() => {
    setCartItemsData(cartItems);
  }, [cartItems]);

  const updateCartItemsData = (item, quantityChange) => {
    const existingItemIndex = cartItemsData.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedData = cartItemsData.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + quantityChange, 1), total: cartItem.total + (quantityChange * item.price) }
          : cartItem
      );
      setCartItemsData(updatedData);
    }
  };

  const removeItem = (item) => {
    const updatedData = cartItemsData.filter((cartItem) => cartItem.id !== item.id);
    setCartItemsData(updatedData);
  };

  const calculateSubtotal = () => {
    return cartItemsData.reduce((acc, item) => acc + item.total, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.03; // 3% tax rate
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className="cart-page">
     <div>
      <button><Link className="home-buuton"  to="/">Home</Link></button>
      <p>/Your Cart</p>
     </div>
      <p className="cart-header">CART</p>
      
      {cartItemsData.length > 0 ? (
        <>
          {cartItemsData.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Item details */}
              <div>
                <p>{item.name}</p>
                <div className='price'>Price:<div> ${item.price}</div></div>
                <div className='quantity-box'>
                  Quantity: 
                  <div className='quantity-container'>
                    <div className='quantity-number'>{item.quantity}</div>
                    <div className='quantity-signs'>
                      <button onClick={() => updateCartItemsData(item, 1)}>+</button>
                      <button onClick={() => updateCartItemsData(item, -1)} disabled={item.quantity <= 1}>-</button>
                    </div>
                  </div>
                </div>
                <div className='total'>Total: <div>${item.total.toFixed(2)}</div></div>
                <button className='remove-button' onClick={() => removeItem(item)}>Remove</button>
              </div>
            </div>
          ))}
          {/* Subtotal, Tax, and Grand Total */}
          <div className="totals">
            <div>
              <p>SUBTOTAL:<div className='subtotal'> ${calculateSubtotal().toFixed(2)}</div></p>
              <p>TAX (3%): <div className='tax'>${calculateTax().toFixed(2)}</div></p>
              <p>GRAND TOTAL: <div className='total'>${calculateGrandTotal().toFixed(2)}</div></p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;