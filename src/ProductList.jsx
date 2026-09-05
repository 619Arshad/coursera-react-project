import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image: "/plants/aloe-vera.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image: "/plants/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "/plants/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 12,
    image: "/plants/spider-plant.jpg",
  },
  {
    id: 5,
    name: "Money Plant",
    price: 14,
    image: "/plants/money-plant.jpg",
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 22,
    image: "/plants/zz-plant.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
            />

            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;