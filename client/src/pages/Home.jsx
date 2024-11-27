import Header from "../components/Header";
import Principal from "../components/Principal";
import Banner from "../components/Banner";
import Button from "../components/Button";
import BestSellers from "../components/BestSellers";
import Category from "../components/Category";
import Properties from "../components/Properties";
import About from "../components/About";
import Contact from "../components/Contact";
import "../css/App.css";
import { useIntl } from "react-intl";

const Home = ({
  addToCart,
  addToWishList,
  wishList,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  toggleMenuCart,
  setIsOpenCart,
  isOpenCart,
  onQualityTotal,
  qualityTotal,
}) => {
  const intl = useIntl();
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
          isOpenCart={isOpenCart}
          setIsOpenCart={setIsOpenCart}
          toggleMenuCart={toggleMenuCart}
          qualityTotal={qualityTotal}
        />

        <Principal />
      </div>
      <Banner
        text={intl.formatMessage({ id: "banner.title" })}
        subtext={intl.formatMessage({ id: "banner.subtitle" })}
      >
        <div className="btn-contain w-48 h-12">
          <Button
            description={intl.formatMessage({ id: "button.order" })}
            className="bg-[#008BBF] hover:bg-[#00c4ff]"
            url="/product"
          />
        </div>
      </Banner>

      <BestSellers
        addToWishList={addToWishList}
        wishList={wishList}
        addToCart={addToCart}
        setIsOpen={setIsOpen}
        onQualityTotal={onQualityTotal}
        button={
          <Button
            description={intl.formatMessage({ id: "button.shop" })}
            className="bg-[#FFB600] hover:bg-[#FFD700]"
          />
        }
      />

      <Banner
        text={intl.formatMessage({ id: "banner.title.1" })}
        subtext={intl.formatMessage({ id: "banner.subtitle.1" })}
      >
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
