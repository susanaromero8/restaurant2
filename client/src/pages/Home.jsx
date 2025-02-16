import Banner from "../components/Banner";
import Button from "../components/Button";
import BestSellers from "../components/BestSellers";
import Category from "../components/Category";
import Properties from "../components/Properties";
import About from "../components/About";
import Contact from "../components/Contact";
import "../css/App.css";
import { useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();
  return (
    <>
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
