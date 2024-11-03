import React from "react";
import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  removeFromCart,
  emptyCart,
  setCart,
}) {
  // Calculate total price of items in the cart
  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  // Function to update the quantity of a specific item in the cart
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <h2>Cart Items</h2>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity} // Pass updateQuantity function to CartCard
            />
          ))}
          <p>Total: ${total.toFixed(2)}</p>
          <div className="lastChoice">
            <button style={{ backgroundColor: "red" }} onClick={emptyCart}>
              Empty Cart
            </button>
            <button style={{ backgroundColor: "green" }}>Buy</button>
          </div>
        </>
      )}
    </div>
  );
}
