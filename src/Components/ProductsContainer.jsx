// Importing React for building the component
import React from "react";
// Importing ProductCard to display individual product information
import ProductCard from "./ProductCard";

// Component to render and manage a list of products
export default function ProductsContainer({ products, addToCart }) {
  return (
    <div className="ProductsContainer">
      {/* Mapping through the products array and rendering a ProductCard 
          for each product. Passing product details and addToCart function 
          to each ProductCard */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
