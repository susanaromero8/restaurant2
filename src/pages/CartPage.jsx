import React from "react";
import Header from "../Header";

const CartPage = ({ cartItems, isOpen, setIsOpen, toggleMenu }) => {
  console.log(cartItems);
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
      <div>
        {cartItems.map((item) => (
          <div className="flex flex-row items-center justify-around p-6 h-full flex-nowrap gap-4">
            <img
              src={item.image}
              alt={item.tittle}
              className=" w-96  h-32 w-96 h-full"
            />
            <div className="flex flex-col gap-1">
              <h2>{item.tittle}</h2>
              <p className="product-price text-lg">{item.price}$</p>
              <p>Quanty: {item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
