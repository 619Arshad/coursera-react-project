import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const categories = [
  {
    name: "Indoor Plants",
    plants: [
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
    ],
  },
  {
    name: "Flowering Plants",
    plants: [
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
    ],
  },
  {
    name: "Decorative Plants",
    plants: [
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
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedItems((prev) => [...prev, product.id]);
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery</h1>
      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div className="plant-category" key={category.name}>
          <h2>{category.name}</h2>

          <div className="products">
            {category.plants.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  width="200"
                />

                <h3>{product.name}</h3>
                <p>${product.price}</p>

                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems.includes(product.id)}
                >
                  {addedItems.includes(product.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;