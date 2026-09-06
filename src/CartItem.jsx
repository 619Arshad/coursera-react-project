import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping, onHomeClick }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

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

  const handleCheckout = () => {
    alert("Functionality Coming Soon");
  };

  return (
    <div className="cart-page">
      {/* Navbar */}
      <nav className="navbar">
        <button onClick={onHomeClick}>
          🌿 Paradise Nursery
        </button>

        <button onClick={onContinueShopping}>
          🏠 Home
        </button>

        <button>
          🛒 Cart ({totalItems})
        </button>
      </nav>

      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </>
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

                <div>
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
                </div>

                <p>
                  Subtotal: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => handleRemove(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;