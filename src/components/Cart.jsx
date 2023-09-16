import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Korzinka</h2>
      {cartItems.length === 0 ? (
        <p>Korzinka bo'sh</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} so'm
              <button onClick={() => removeFromCart(index)}>Olib tashlash</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;