import { useContext } from "react";
import ListMenu from "./ListMenu";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useIntl } from "react-intl";
import LanguageContext from "./LanguageContext";
import { useModalMenu } from "../hooks/useModalMenu";
import CartContext from "../context/CartContext";

function Nav() {
  const intl = useIntl();
  const { changeLanguage, language, handleButtonLanguage, openButtonLanguage } =
    useContext(LanguageContext);
  const { cartItems } = useContext(CartContext);
  const { toggleMenuCart, isOpenCart } = useModalMenu();

  const total = cartItems.reduce(
    (accumulator, item) => accumulator + parseInt(item.value),
    0
  );

  return (
    <>
      {/* Contenedor Header List Pages */}
      <div className="menu-list hidden lg:block relative">
        <ListMenu active={true} />
      </div>
      <div>
        {/* Contenedor Header Derecho Search, Cart y Languaje*/}
        <div className="input flex">
          {/* Contenedor Header Search */}
          <div className="btn-contain-search w-24 h-10">
            <Link to="/search">
              <button
                type="submit"
                className="bg-[#008BBF] hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-20 h-12 cursor-pointer flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </Link>
          </div>
          {/* Contenedor Header Cart */}
          <div className="btn-contain-cart w-24 h-10">
            <button
              onClick={toggleMenuCart}
              type="submit"
              className="bg-[#008BBF] hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-20 h-12 cursor-pointer flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="rounded-full bg-green-500 w-6 h-6 flex items-center justify-center">
                <p className="text-sm">{total}</p>
              </div>
            </button>

            {isOpenCart && (
              <div className="flex bg-white text-black text center p-2 flex-col absolute right-28 top-20 z-50">
                {cartItems.length === 0 ? (
                  <p>No hay items en el carrito</p>
                ) : (
                  <div className="flex flex-col items-start">
                    {cartItems.slice(0, 3).map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-row items-center justify-around p-6 h-full flex-nowrap gap-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className=" w-32  h-auto"
                        />
                        <div className="flex flex-col gap-1">
                          <Link to={`/product/${item.id}`}>
                            <h2>{item.title}</h2>
                          </Link>
                          <p className="product-price text-lg">{item.price}</p>
                          <p>Quantity: {item.value}</p>
                        </div>
                      </div>
                    ))}
                    <div className="p-6 w-full flex justify-center">
                      {cartItems.length < 4 && (
                        <div className="btn-contain w-40 h-auto flex justify-center">
                          <Button
                            description="Ir al carrito"
                            className="bg-[#FFB600] hover:bg-[#FFD700]"
                            url="/cart"
                          />
                        </div>
                      )}
                      {cartItems.length > 3 && (
                        <div className="btn-contain w-40 h-12">
                          <Button
                            description="Ver mas"
                            className="bg-[#FFB600] hover:bg-[#FFD700]"
                            url="/cart"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Contenedor Header Languaje */}
          <div
            className="btn-contain-lang w-24 h-10"
            onMouseEnter={handleButtonLanguage}
            onMouseLeave={handleButtonLanguage}
          >
            {/* Boton para abrir */}
            <button
              type="submit"
              className="bg-[#008BBF] hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-20 h-12 cursor-pointer flex items-center justify-center gap-2"
            >
              {language === "en" ? (
                <span className="icon-[flagpack--us]"></span>
              ) : (
                <span className="icon-[flagpack--ve]"></span>
              )}
              <p>{intl.formatMessage({ id: "app.button" })}</p>
            </button>
            {/* Boton para Cambiar Lenguaje */}
            {openButtonLanguage === true && (
              <button
                type="submit"
                onClick={changeLanguage}
                className="bg-[#008BBF] hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-20 h-12 cursor-pointer flex items-center justify-center gap-2"
              >
                {language === "en" ? (
                  <span className="icon-[flagpack--ve]"></span>
                ) : (
                  <span className="icon-[flagpack--us]"></span>
                )}
                {language === "en" ? <p>ES</p> : <p>US</p>}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
