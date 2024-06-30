import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Product";
import ProductList from "../Products";
import Header from "../Header";

const ProductPage = ({
  addToCart,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const params = useParams();
  const product = ProductList.find((item) => item.id === params.id);
  //console.log(ProductList);
  return (
    <>
      <Header
        bg="bg-[#FF5C14]"
        p="p-2"
        cartItems={cartItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />
      {product && (
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="w-full h-full">
            <Product
              tittle={product.plate}
              category={product.category}
              price={product.price}
              alt={product.plate}
              image={product.imageUrl}
              addToCart={addToCart}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
