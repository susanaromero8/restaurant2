import Contact from "../Contact";
import Header from "../Header";

const ContactPage = ({ cartItems, isOpen, setIsOpen, toggleMenu }) => {
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
      <Contact />
    </>
  );
};

export default ContactPage;
