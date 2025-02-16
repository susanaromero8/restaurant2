import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Home from "./pages/Home";
import BestSellersPage from "./pages/BestSellersPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ProductHome from "./pages/ProductHome";
import Footer from "./components/Footer";
import { useContext, useState } from "react";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import WishListPage from "./pages/WishListPage";
import LanguageContext from "./components/LanguageContext";
import "./css/App.css";
import ProductForm from "./components/ProductForm";
import CategoryForm from "./components/CategoryForm";
import Layout from "./layouts/Layout";
import { CartProvider } from "./context/CartContext";
import { useLoadProduct } from "./hooks/useLoadProduct";

function App() {
  const { language, messages } = useContext(LanguageContext);
  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductHome />} />
                <Route path="/product/add" element={<ProductForm />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/best-seller" element={<BestSellersPage />} />
                <Route path="/category/add" element={<CategoryForm />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishListPage />} />
                <Route path="/search" element={<SearchPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </CartProvider>
      </IntlProvider>
    </>
  );
}

export default App;
