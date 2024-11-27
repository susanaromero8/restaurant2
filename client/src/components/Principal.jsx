import Point from "./Point";
import Button from "./Button";
import menu from "/menu.png";
import { useIntl } from "react-intl";

function Principal() {
  const intl = useIntl();
  return (
    <>
      <section className="h-full">
        <div className="h-full contain-info lg:flex lg:flex-row lg:justify-around items-center md:flex md:justify-center md:flex-col">
          <div className="info-menu lg:w-2/5 p-4 flex flex-col gap-10 items-center">
            <h1 className="lg:text-6xl md:text-4xl text-xl font-bold">
              {intl.formatMessage({ id: "principal.title" })}
            </h1>
            <p className="text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <Point />
            <div className="btn-contain w-48 h-12 flex justify-center">
              <Button
                description={intl.formatMessage({ id: "button.join" })}
                className="bg-[#FF5C14] hover:bg-[#ff4e00]"
              />
            </div>
          </div>
          <div className="contain-image p-4 flex justify-center">
            <div className="imagen-menu bg-orange-500 rounded-full min-w-10 max-w-96 m-10 lg:m-0">
              <img src={menu} className=" max-w-96 w-full max-h-96" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Principal;
