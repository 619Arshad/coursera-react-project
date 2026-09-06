import { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
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
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>

            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;