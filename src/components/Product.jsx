import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price} so'm</p>
      <button onClick={() => addToCart(product)}>Sotib olish</button>
    </div>
  );
};

export default Product;