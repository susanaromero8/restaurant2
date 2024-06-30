import { useState } from "react";
import Card from "../Card";
import Header from "../Header";
import ProductList from "../Products";
import { useModal } from "../hooks/useModal";

const BestSellersPage = ({
  addToCart,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const bestSeller = ProductList.filter(
    (item) => item.category === "best-seller"
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
      />
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Best Sellers
        </h1>
      </div>
      <div className="card-contain flex justify-around flex-wrap m-10">
        {bestSeller.map((product) => {
          const [isOpenModal, openModal, closeModal] = useModal(false);
          return (
            <Card
              tittle={product.plate}
              price={product.price}
              image={product.imageUrl}
              alt={product.plate}
              id={product.id}
              style={{ backgroundColor: "#008BBF" }}
              isOpenModal={isOpenModal}
              openModal={openModal}
              closeModal={closeModal}
              addToCart={addToCart}
              setIsOpen={setIsOpen}
            />
          );
        })}
        {bestSeller.length === 0 && (
          <h2>No hay Productos disponibles de la categoria bestSeller</h2>
        )}
      </div>
    </>
  );
};

export default BestSellersPage;
