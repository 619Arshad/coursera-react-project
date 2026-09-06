import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowProductList(true);
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>

            <p>Where Green Meets Serenity</p>

            <button
              className="get-started-button"
              onClick={handleGetStarted}
            >
              Get Started
            </button>

            <AboutUs />
          </div>
        </div>
      ) : showCart ? (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHomeClick}
        />
      ) : (
        <ProductList onShowCart={handleShowCart} />
      )}
    </div>
  );
}

export default App;

