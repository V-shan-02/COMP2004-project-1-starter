import React from "react";

export default function QuantityCounter({ quantity, setQuantity }) {
  const increment = () => setQuantity(quantity + 1); // Increase quantity by 1
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0); // Decrease quantity by 1, ensuring it doesn't go below 0

  return (
    <div className="quantity-counter">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span> {/* Display the current quantity */}
      <button onClick={increment}>+</button>
    </div>
  );
}
