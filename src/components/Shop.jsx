import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { name: 'Maxsulot 1', price: 100 },
    { name: 'Maxsulot 2', price: 200 },
    { name: 'Maxsulot 3', price: 300 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Onlayn Magazin</h1>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Shop;