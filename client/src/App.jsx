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
import { useContext, useEffect, useState } from "react";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import WishListPage from "./pages/WishListPage";
import LanguageContext from "./components/LanguageContext";
import "./css/App.css";
import ProductForm from "./components/ProductForm";
import CategoryForm from "./components/CategoryForm";

function App() {
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [search, setSearch] = useState("");
  const [qualityTotal, setQualityTotal] = useState(0);

  const { language, messages } = useContext(LanguageContext);

  const loadProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.tittle === product.tittle
      );
      console.log("Product", existingProduct);
      if (!existingProduct) {
        return [...prev, product];
      }

      return prev.map((item) =>
        item.tittle === product.tittle && item.value <= item.stock
          ? {
              ...item,
              value: item.value + product.value,
            }
          : item
      );
    });
  };

  const addToWishList = (product) => {
    const isProductInWishList = wishList.find(
      (item) => item.tittle === product.tittle
    );
    if (!isProductInWishList) {
      // Si no está, lo agregamos
      setWishList((prevWishList) => [...prevWishList, product]);
      console.log("Producto agregado a la wish list:", product);
    } else {
      // Si ya está, lo eliminamos
      setWishList((prevWishList) =>
        prevWishList.filter((item) => item.tittle !== product.tittle)
      );
      console.log("Producto eliminado de la wish list:", product);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuCart = () => {
    setIsOpenCart(!isOpenCart);
  };

  const onSearchChange = (event) => {
    const searchfield = event.target.value;
    setSearch(searchfield);
  };
  //console.log("Texto que va escribiendo", search);

  const filteredSearch = productList.filter((item) =>
    item.plate_pd.toLowerCase().includes(search.toLowerCase())
  );

  const onQualityTotal = (e) => {
    console.log(e);
    const newQuality = (prev) => parseInt(prev) + parseInt(e);
    setQualityTotal(newQuality);
  };

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  wishList={wishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
                />
              }
            />
            <Route
              path="/product"
              element={
                <ProductHome
                  addToWishList={addToWishList}
                  wishList={wishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                />
              }
            />
            <Route
              path="/product/add"
              element={
                <ProductForm
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductPage
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  wishList={wishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
                />
              }
            />
            <Route
              path="/best-seller"
              element={
                <BestSellersPage
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  wishList={wishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
                />
              }
            />
            <Route path="/category/add" element={<CategoryForm />} />
            <Route
              path="/category/:id"
              element={
                <CategoryPage
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  wishList={wishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
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
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
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
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
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
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/wishlist"
              element={
                <WishListPage
                  wishList={wishList}
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  cartItems={cartItems}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  toggleMenu={toggleMenu}
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
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
                  isOpenCart={isOpenCart}
                  setIsOpenCart={setIsOpenCart}
                  toggleMenuCart={toggleMenuCart}
                  searchChange={onSearchChange}
                  filteredSearch={filteredSearch}
                  qualityTotal={qualityTotal}
                  onQualityTotal={onQualityTotal}
                  addToWishList={addToWishList}
                  wishList={wishList}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </IntlProvider>
    </>
  );
}

export default App;
