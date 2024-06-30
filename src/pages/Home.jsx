import Header from "../Header";
import Principal from "../Principal";
import Banner from "../Banner";
import Button from "../Button";
import BestSellers from "../BestSellers";
import Category from "../Category";
import Properties from "../Properties";
import About from "../About";
import Contact from "../Contact";
import "../App.css";

const Home = ({ addToCart, cartItems, isOpen, setIsOpen, toggleMenu }) => {
  return (
    <>
      <div className="bg-[url('/public/backgroundmovil.png')] md:bg-[url('/public/banner.png')] bg-cover h-full md:h-screen flex flex-col">
        <Header
          p="p-4"
          mp="md:p-10"
          cartItems={cartItems}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />

        <Principal />
      </div>
      <Banner text="Disfruta" subtext="de nuestro buen rollo">
        <div className="btn-contain w-48 h-12">
          <Button
            description="ORDER NOW"
            className="bg-[#008BBF] hover:bg-[#00c4ff]"
            url="/product"
          />
        </div>
      </Banner>

      <BestSellers
        addToCart={addToCart}
        setIsOpen={setIsOpen}
        button={
          <Button
            description="SHOP ALL"
            className="bg-[#FFB600] hover:bg-[#FFD700]"
          />
        }
      />

      <Banner text="Connect" subtext="with us">
        <div className="btn-contain h-full flex gap-6">
          <div
            className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer"
          >
            <div className="icon-[ph--instagram-logo-bold] w-20 h-10 "></div>
          </div>
          <div
            className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer"
          >
            <div className="icon-[ph--facebook-logo-bold] w-20 h-10"></div>
          </div>
          <div
            className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center transition duration-150 ease-out hover:ease-in
          hover:scale-110 cursor-pointer"
          >
            <div className="icon-[bi--twitter-x] w-20 h-7"></div>
          </div>
        </div>
      </Banner>
      <Category />
      <Properties />
      <About />
      <Contact />
    </>
  );
};

export default Home;
