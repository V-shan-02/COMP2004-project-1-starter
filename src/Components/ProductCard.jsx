import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    } else {
      alert("Please add a quantity before adding to the cart.");
    }
  };

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.quantity}</p>
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
