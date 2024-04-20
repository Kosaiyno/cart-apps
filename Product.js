import React from 'react';
import { FaStar } from 'react-icons/fa';




const Product = ({ product, updateCartItemsData}) => {
  const renderStars = () => {
    const starsArray = Array.from({ length: product.stars }, (_, index) => index + 1);
    return starsArray.map((star) => <FaStar key={star} className="star-icon" />);
  };

 const handleAddToCart = () => {
    updateCartItemsData(product);
  };

  return (
    <div className="product">
      <img className='product-img' src={product.img} alt={product.name} />
      <h3 className='product-name'>{product.name}</h3>
      <p className='product-details'>{product.details}</p>
      <div className='star-rating'>{renderStars()}</div>
      <p className='product-price'>${product.price}</p>
      <button className='add-button' 
      onClick={ handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;