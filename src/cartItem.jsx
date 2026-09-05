import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>

                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.quantity - 1
                    )
                  }
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

                <br />

                <button onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <button>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartItem;