import { useContext } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (accumulator, item) =>
      accumulator + parseInt(item.price) * parseInt(item.value),
    0
  );

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMax = (id) => {
    setCartItems((prev) =>
      prev.map((prevItem) => {
        if (prevItem.id === id) {
          const value =
            prevItem.value + 1 > prevItem.stock
              ? prevItem.value
              : prevItem.value + 1;
          return { ...prevItem, value };
        }
        return prevItem;
      })
    );
  };

  const handleMenos = (id) => {
    setCartItems((prev) =>
      prev.map((prevItem) => {
        if (prevItem.id === id) {
          const value =
            prevItem.value - 1 < 1 ? prevItem.value : prevItem.value - 1;
          return { ...prevItem, value };
        }
        return prevItem;
      })
    );
  };

  const handleChange = (e, id) => {
    setCartItems((prev) =>
      prev.map((prevItem) =>
        prevItem.id === id ? { ...prevItem, value: e.target.value } : prevItem
      )
    );
  };

  return (
    <>
      <div className="p-10 flex flex-col items-center justify-center ">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Cart
        </h1>
        {cartItems.length > 0 ? (
          <div className="md:grid w-full lg:px-28 my-10 gap-2">
            <div className="hidden md:none md:grid  md:grid-cols-6 font-bold p-2">
              <h3 className="col-span-3">Product</h3>
              <h3 className="text-center w-40">Quantity</h3>
              <h3 className="text-end">Total</h3>
              <h3 className="text-center">Delete</h3>
            </div>
            <hr className="bg-gray-500 text-slate-400" />
            {cartItems.map((item) => (
              <div className="" key={item.id}>
                <div className="md:grid md:grid-cols-6 items-center w-3/4 h-80 md:h-20 md:w-full my-6 justify-center">
                  <div className="nombre flex flex-col w-auto h-32 md:h-20 md:flex-row justify-center items-center md:gap-6 md:col-span-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" w-full h-full"
                    />
                    <div className="description w-full">
                      <Link to={`/product/${item.id}`}>
                        <h2 className="text-lg">{item.title}</h2>
                      </Link>
                    </div>
                  </div>
                  <div className="md:grid md:grid-flow-col md:items-center md:col-span-4 gap-6">
                    <p className="product-price text-lg col-span-1 h-20 w-20 flex items-center justify-center">
                      {item.price} $
                    </p>
                    <div className="Cantidad text-center col-span-1">
                      <div className="button-contain flex w-full h-auto">
                        <button
                          onClick={() => handleMenos(item.id)}
                          className="border p-2 w-8 bg-white text-gray-500 border-gray-300"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          max="99"
                          step="1"
                          value={item.value}
                          className="w-20 text-black border text-center 
                                border-slate-300 text-center"
                          onChange={(e) => handleChange(e, item.id)}
                        />
                        <button
                          onClick={() => handleMax(item.id)}
                          className="border p-2 w-8 bg-white text-gray-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="precio text-center col-span-1">
                      <p className="product-total text-lg">
                        {parseInt(item.price) * parseInt(item.value)}$
                      </p>
                    </div>
                    <div className="delete text-center flex items-center justify-center col-span-1">
                      <div className="btn-contain w-12 h-12 flex items-center justify-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="delete text-sm cursor-pointer shadow-lg hover:shadow-black rounded-md text-center w-full	h-full bg-blue-500 font-bold p-4"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr className="bg-gray-500 text-slate-400" />
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-end items-end w-full h-20 gap-6">
              <p className="h-full text-lg">SubTotal: {total}$</p>
              <div className="h-full">
                <Button description="CHECKOUT" className="bg-slate-500" />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[70vh] flex items-center justify-center">
            <h2 className="text-2xl">No hay ningún producto en el carrito</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
