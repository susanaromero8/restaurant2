import { useState } from "react";

import Loader from "./Loader";
import { Link } from "react-router-dom";

const Product = ({
  image,
  category,
  id,
  alt,
  tittle,
  price,
  stock,
  modal,
  addToCart,
  setIsOpen,
  onQualityTotal,
  addToWishList,
  wishList,
}) => {
  const [value, setValue] = useState(1);
  const [add, setAdd] = useState(false);
  const [addSaveProduct, setAddSaveProduct] = useState(false);
  const isProductInWishList = wishList.find((item) => item.tittle === tittle);
  console.log(wishList);

  const handleMax = () => {
    let newValue = value > stock ? value : value + 1;
    setValue(newValue);
  };

  const handleMenos = () => {
    let newValue = value < 2 ? value : value - 1;
    setValue(newValue);
  };

  const handleChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
  };

  const handleAdd = () => {
    if (value < stock) {
      setAdd(true);
      onQualityTotal(value);
      addToCart({ image, category, alt, tittle, price, value, id, stock });
      //console.log(addToCart);
      setTimeout(() => setAdd(false), 500);
      setIsOpen(true);
    }
  };

  const handleSaveProduct = () => {
    if (stock > 0) {
      setAddSaveProduct(true);
      addToWishList({ image, category, alt, tittle, price, value, id, stock });
      setTimeout(() => setAddSaveProduct(false), 500);
    }
  };

  return (
    <>
      <div
        className={`flex flex-row items-center justify-around p-6 h-full flex-nowrap ${
          modal ? "text-black" : "text-white"
        }`}
      >
        {/*Imagen Mitad Pantalla*/}
        <img
          src={image}
          alt={alt}
          className={modal ? " w-96  h-32" : "w-96 h-full"}
        />

        {/*Container Info Producto Mitad Pantalla*/}
        <div
          className={`p-6 flex flex-col items-start ${
            modal ? "gap-4" : "gap-8"
          } `}
        >
          {/*Container Encabezado Producto Titulo, Categoria y Precio*/}
          <div className="flex items-start flex-col gap-1">
            {/*Categoria*/}
            {!modal && (
              <Link to={`/category/${category}`}>
                <h3 className="bg-red-400 opacity-90 rounded w-auto">
                  #{category}
                </h3>
              </Link>
            )}
            {/*Titulo*/}
            <h2
              className={
                modal
                  ? "text-black text-4xl text-left"
                  : "text-white text-4xl text-left"
              }
            >
              {tittle}
            </h2>

            {/*Precio*/}
            <p className="product-price text-lg">{price}</p>
          </div>

          {/*Container Medio Stock Cantidad y Numero de Productos a añadir*/}
          <div className="flex flex-col items-start gap-2">
            {/*Container Stock*/}
            {stock > 0 ? (
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-500 w-2 h-2"></div>
                <p>In Stock: {stock}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-red-500 w-2 h-2"></div>
                <p>Out of Stock</p>
              </div>
            )}

            {/*Cantidad*/}
            <p className="text-lg">Quantity</p>

            {/*Container Boton Productos a añadir*/}
            <div className="button-contain flex">
              {/*Boton Menos*/}
              <button
                onClick={handleMenos}
                className="border p-2 w-10 bg-white text-gray-500 border-gray-300"
              >
                -
              </button>

              {/*Boton Numero*/}
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

              {/*Boton Mas*/}
              <button
                onClick={handleMax}
                className="border p-2 w-10 bg-white text-gray-500"
              >
                +
              </button>
            </div>
          </div>

          {/*Container Boton Añadir al Carrito*/}
          <button
            onClick={handleAdd}
            disabled={stock < 1}
            type="submit"
            className="bg-[#008BBF] enabled:hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-48 h-12 cursor-pointer flex items-center justify-center disabled:opacity-75 disabled:cursor-default disabled:bg-slate-600"
          >
            {add ? <Loader /> : "Add to Cart"}
          </button>

          {/*Container Boton Añadir a Favoritos*/}
          {isProductInWishList ? (
            <div>
              <button
                onClick={handleSaveProduct}
                type="submit"
                className="bg-[#008BBF] enabled:hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-48 h-12 cursor-pointer flex items-center justify-center disabled:opacity-75 disabled:cursor-default disabled:bg-slate-600"
              >
                {addSaveProduct ? (
                  <Loader />
                ) : (
                  <div className="flex items-center gap-1">
                    <span class="icon-[mdi--heart]"></span>
                    <p>Added to Wishlist</p>
                  </div>
                )}
              </button>
              <Link to="/wishlist">
                <h2>View</h2>
              </Link>
            </div>
          ) : (
            <button
              onClick={handleSaveProduct}
              type="submit"
              className="bg-[#008BBF] enabled:hover:bg-[#00c4ff] text-white 
                        font-bold rounded-lg w-48 h-12 cursor-pointer flex items-center justify-center disabled:opacity-75 disabled:cursor-default disabled:bg-slate-600"
            >
              {addSaveProduct ? (
                <Loader />
              ) : (
                <div className="flex items-center gap-1">
                  <span class="icon-[bi--heart]"></span>
                  <p>Add to Wishlist</p>
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
