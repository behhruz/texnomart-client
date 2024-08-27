import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.url} alt={item.title} style={{ width: '50px', height: '50px' }} />
              <div>{item.title}</div>
              <div>{item.oldprice}</div>
              <div>{item.price} сўм</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
