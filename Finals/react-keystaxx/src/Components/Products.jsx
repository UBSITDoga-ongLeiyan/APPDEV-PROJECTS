import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

const Products = () => {
  return (
    <div className="container">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
