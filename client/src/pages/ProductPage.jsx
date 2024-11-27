import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Product from "../components/Product";

const ProductPage = ({
  addToCart,
  addToWishList,
  wishList,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  isOpenCart,
  setIsOpenCart,
  toggleMenuCart,
  qualityTotal,
  onQualityTotal,
}) => {
  const [productList, setProductList] = useState([]);

  const params = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("http://localhost:4000/products");
      const data = await response.json();
      setProductList(data);
    };
    loadProducts();
  }, []);
  const product = productList.find(
    (item) => item.id === Number.parseInt(params.id)
  );
  console.log(product);

  return (
    <>
      <Header
        bg="bg-[#FF5C14]"
        p="p-2"
        cartItems={cartItems}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
        toggleMenuCart={toggleMenuCart}
        qualityTotal={qualityTotal}
      />
      {product && (
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="w-full h-full">
            <Product
              tittle={product.plate_pd}
              category={product.category_name}
              price={product.price_pd}
              alt={product.plate_pd}
              stock={product.stock_pd}
              image={`http://localhost:4000/${product.img_pd}`}
              addToCart={addToCart}
              addToWishList={addToWishList}
              wishList={wishList}
              setIsOpen={setIsOpen}
              onQualityTotal={onQualityTotal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
