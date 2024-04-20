import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Header = () => {
  const LocationIcon = () => <FaMapMarkerAlt />;
  const SearchIcon = () => <FaSearch />;
  const CartIcon = () => <FaShoppingCart />;

  const [welcomeMessage, setWelcomeMessage] = useState('Discover exclusive deals and discounts today!!');
 
  useEffect(() => {
    const messages = ['Explore our new arrivals!', 'Get free shipping on orders over $50!', 'Limited time offer - Shop now!'];
    let index = 0;

    const interval = setInterval(() => {
      setWelcomeMessage(messages[index]);
      index = (index + 1) % messages.length;
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  return (
    <header>
      <div className="welcome-message">
        <p className="message-text">{welcomeMessage}</p>
      </div>
      
      <ul className='menu-container'>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className='location-icon'>
          <LocationIcon />
        </div>
        <div className='image-icon'>
          <img className='image-logo' src="https://cdn11.bigcommerce.com/s-7c08qbh/stencil/4f6e6c20-a2a5-013c-3ce8-2e0c63e598be/e/6e77b230-af27-013c-ae45-5219de8bb861/img/dibruno-bros-logo.png" alt="logo" />
        </div>
        <div className='search-icon'>
          <SearchIcon />
        </div>
        <div> 
          <Link className='cart-icon' to="/cart"><CartIcon /></Link>
        </div>
      </ul>
    </header>
  );
}

export default Header;