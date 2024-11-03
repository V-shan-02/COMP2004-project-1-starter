import React from "react";
import emptyCartImage from "../assets/cart-empty.png";
import filledCartImage from "../assets/cart-full.png";

export default function NavBar({ cart }) {
  const cartNotEmpty = cart.length > 0;

  return (
    <nav className="NavBar">
      <span className="NavUser">Welcome, User!</span>
      <div className="NavTitle">Groceries App 🍎</div>
      <div className="NavCart">
        <img
          src={cartNotEmpty ? filledCartImage : emptyCartImage}
          alt={cartNotEmpty ? "Filled Cart" : "Empty Cart"}
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </nav>
  );
}
