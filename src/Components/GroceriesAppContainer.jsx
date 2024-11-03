import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "./data/products";

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]); // State to manage the cart

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <NavBar cart={cart} />
      <div className="Products-Container">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}
