import Button from "./Button";
import Nav from "./Nav";
import logo from "/g658.png";
import logoSimple from "/logosimple.png";

const Header = ({ bg, p, mp, cartItems, setIsOpen, isOpen, toggleMenu }) => {
  return (
    <>
      <nav
        className={`flex items-center justify-between lg:justify-around ${p} ${mp}  ${bg} relative `}
      >
        <div className="max-w-40">
          <img src={logo} className="hidden md:block" alt="Logo Desktop" />
          <img
            src={logoSimple}
            className="block md:hidden w-20"
            alt="Logo Simple"
          />
        </div>
        <Nav
          cartItems={cartItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Header;
