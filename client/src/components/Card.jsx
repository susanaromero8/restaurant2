import { useState } from "react";
import Modal from "./Modal";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useModal } from "../hooks/useModal";

function Card({ title, id, price, stock, image, alt, style }) {
  const [showButton, setShowButton] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <>
      <div
        className="card-contain"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card">
          <div className="product text-center">
            <div
              className={`product-image max-w-80 h-full max-h-80 p-10 py-20 rounded-lg 
						cursor-pointer flex items-center justify-center relative overflow-hidden
						${showButton && "transition-opacity duration-500 group "}`}
              style={style}
            >
              <img
                src={`http://localhost:4000/${image}`}
                alt={alt}
                className=" w-60 max-h-32"
              />
              {showButton && (
                <button
                  className="flex absolute
							items-center justify-center bg-gray-500 w-40 
							border-1 rounded p-2 group-hover:opacity-100 text-lg"
                  onClick={openModal}
                >
                  Quick view
                </button>
              )}
            </div>
            <div className="product-info p-6">
              <Link
                className="product-tittle lg:text-xl p-2 font-arco"
                to={`/product/${id}`}
              >
                {title}
              </Link>
              <p className="product-price">${price}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="">
          <Product
            title={title}
            price={price}
            stock={stock}
            image={`http://localhost:4000/${image}`}
            alt={alt}
            id={id}
            modal
          />
        </div>
      </Modal>
    </>
  );
}

export default Card;
