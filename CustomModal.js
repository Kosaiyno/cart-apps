
import React, { useState } from 'react';

function CustomModal({ updateCartItemsData, product }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button className='add-button' onClick={toggleModal}>Add to Cart</button>
      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content'>
            <h2>Hello Modal</h2>
            <p>Modal popup for items added to cart</p>
            <button className="close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModal;