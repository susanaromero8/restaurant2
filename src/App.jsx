import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BestSellersPage from "./pages/BestSellersPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductHome from "./pages/ProductHome";
import Footer from "./Footer";
import { useState } from "react";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const addToCart = (product) => {
    console.log(product);
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.tittle === product.tittle
      );
      console.log("Product", existingProduct);
      if (!existingProduct) {
        return [...prev, product];
      }

      return prev.map((item) =>
        item.tittle === product.tittle
          ? {
              ...item,
              value: item.value + product.value,
            }
          : item
      );
    });
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />

          <Route path="/product" element={<ProductHome />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage
                addToCart={addToCart}
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/best-seller"
            element={
              <BestSellersPage
                addToCart={addToCart}
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/category/:id"
            element={
              <CategoryPage
                addToCart={addToCart}
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                cartItems={cartItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                toggleMenu={toggleMenu}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
