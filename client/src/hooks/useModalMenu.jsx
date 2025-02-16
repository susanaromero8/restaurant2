import { useState } from "react";

export const useModalMenu = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuCart = () => {
    setIsOpenCart(!isOpenCart);
  };
  return {
    isOpenCart,
    setIsOpenCart,
    isOpen,
    setIsOpen,
    toggleMenu,
    toggleMenuCart,
  };
};
