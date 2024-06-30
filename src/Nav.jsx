import { useState } from "react";
import ListMenu from "./ListMenu";
import { Link } from "react-router-dom";

function Nav({ bg, p, mp, cartItems, setIsOpen, isOpen, toggleMenu }) {
  return (
    <>
      <div className="menu-list hidden md:block relative">
        <ListMenu active={true} />
      </div>
      <div className="sub-menu block md:hidden bg-sky-500 shadow-2xl shadow-black hover:bg-sky-400 flex items-center p-2 rounded-sm h-10">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="input hidden lg:flex">
        <div className="btn-contain w-24 h-10">
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
        </div>
        <div className="btn-contain w-24 h-10">
          <button
            onClick={toggleMenu}
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
          </button>

          {isOpen && (
            <div className="flex bg-white text-black text center p-2 flex-col absolute right-28 top-20 z-50">
              {cartItems.length === 0 ? (
                <p>No hay items en el carrito</p>
              ) : (
                <div className="flex flex-col items-center">
                  {cartItems.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-row items-center justify-around p-6 h-full flex-nowrap gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.tittle}
                        className=" w-32  h-auto"
                      />
                      <div className="flex flex-col gap-1">
                        <h2>{item.tittle}</h2>
                        <p className="product-price text-lg">{item.price}</p>
                        <p>Quanty: {item.value}</p>
                      </div>
                    </div>
                  ))}
                  {cartItems.length > 4 && (
                    <button>
                      <Link to="/cart">Ver mas</Link>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="block md:hidden mt-2 flex flex-col md:flex-row bg-[#008BBF]">
          {<ListMenu />}
        </div>
      )}
    </>
  );
}
export default Nav;
