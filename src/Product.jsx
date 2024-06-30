import { useState } from "react";

import Loader from "./Loader";

const Product = ({
  image,
  category,
  alt,
  tittle,
  price,
  modal,
  addToCart,
  setIsOpen,
}) => {
  const [value, setValue] = useState(1);
  const [add, setAdd] = useState(false);

  const handleMax = () => {
    let newValue = value + 1;
    setValue(newValue);
  };

  const handleMenos = () => {
    let newValue = value - 1;
    setValue(newValue);
  };

  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  const handleAdd = () => {
    setAdd(true);
    setTimeout(() => setAdd(false), 5000);
    addToCart({ image, category, alt, tittle, price, value });
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={`flex flex-row items-center justify-around p-6 h-full flex-nowrap ${
          modal ? "text-black" : "text-white"
        }`}
      >
        <img
          src={image}
          alt={alt}
          className={modal ? " w-96  h-32" : "w-96 h-full"}
        />
        <div className={`p-6 flex flex-col ${modal ? "gap-4" : "gap-8"} `}>
          <div>
            {!modal && (
              <h3 className="bg-red-400 opacity-90 rounded w-auto">
                #{category}
              </h3>
            )}
            <h2
              className={modal ? "text-black text-4xl" : "text-white text-4xl"}
            >
              {tittle}
            </h2>
            <p className="product-price text-lg">{price}$</p>
          </div>
          <div>
            <p className="text-lg">Quantity</p>
            <div className="button-contain flex">
              <button
                onClick={handleMenos}
                className="border p-2 w-10 bg-white text-gray-500 border-gray-300"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                max="99"
                step="1"
                value={value}
                className="w-20 text-black border text-center 
                                border-slate-300 text-center"
                onChange={handleChange}
              />
              <button
                onClick={handleMax}
                className="border p-2 w-10 bg-white text-gray-500"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={handleAdd}
            type="submit"
            className="bg-[#008BBF] hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-48 h-12 cursor-pointer flex items-center justify-center"
          >
            {add ? <Loader /> : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
