import React from "react";
import Header from "../Header";

const SearchPage = ({ cartItems, isOpen, setIsOpen, toggleMenu }) => {
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
      <div className="p-10 flex flex-col justify-center">
        <h2>Search Page</h2>
        <div>
          <input type="text" className="text-black" />
          <button type="submit">Enviar</button>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
