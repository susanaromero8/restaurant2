import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useModal } from "../hooks/useModal";

const BestSellersPage = ({
  addToCart,
  addToWishList,
  wishList,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  isOpenCart,
  setIsOpenCart,
  toggleMenuCart,
  qualityTotal,
  onQualityTotal,
}) => {
  const [productList, setProductList] = useState([]);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  const loadProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  const bestSeller = productList.filter(
    (item) => item.category_name === "best-seller"
  );

  return (
    <>
      <Header
        bg="bg-[#FF5C14]"
        p="p-2"
        cartItems={cartItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
        toggleMenuCart={toggleMenuCart}
        qualityTotal={qualityTotal}
      />
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Best Sellers
        </h1>
      </div>
      <div className="card-contain flex justify-around flex-wrap m-10">
        {bestSeller.map((item) => (
          <Card
            key={item.id}
            tittle={item.plate_pd}
            id={item.id}
            price={item.price_pd}
            stock={item.stock_pd}
            image={`http://localhost:4000/${item.img_pd}`}
            alt={item.plate_pd}
            style={{ backgroundColor: "#008BBF" }}
            isOpenModal={isOpenModal3}
            openModal={openModal3}
            closeModal={closeModal3}
            addToWishList={addToWishList}
            wishList={wishList}
          />
        ))}
        {bestSeller.length === 0 && (
          <div className="h-[50vh] flex items-center justify-center">
            <h2 className="text-2xl">
              No hay Productos disponibles de la categoria bestSeller
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default BestSellersPage;
