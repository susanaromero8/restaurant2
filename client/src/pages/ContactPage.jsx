import Contact from "../components/Contact";
import Header from "../components/Header";

const ContactPage = ({
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  isOpenCart,
  setIsOpenCart,
  toggleMenuCart,
  qualityTotal,
}) => {
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
      <Contact />
    </>
  );
};

export default ContactPage;
