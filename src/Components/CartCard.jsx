import React from "react";
import QuantityCounter from "./QuantityCounter";

export default function CartCard({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-card">
      <div className="cart-card-image-container">
        <img src={item.image} alt={item.productName} />
      </div>
      <div className="cart-info">
        <h3>{item.productName}</h3>
        <p>{item.price}</p>
        <p>
          Total: ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
        </p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(qty) => updateQuantity(item.id, qty)} // Call updateQuantity with item id and new quantity
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}
