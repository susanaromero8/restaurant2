import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import ProductList from "../components/Products";
import { useEffect, useState } from "react";

const CategoryPage = ({
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

  const loadProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const filterCategory = productList.filter(
    (item) => item.category_name === params.id
  );

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
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          {params.id}
        </h1>
        <div className="card-contain flex justify-around flex-wrap m-10">
          {filterCategory.map((product) => (
            <Card
              tittle={product.plate_pd}
              price={product.price_pd}
              stock={product.stock_pd}
              image={`http://localhost:4000/${product.img_pd}`}
              alt={product.plate_pd}
              id={product.id}
              key={product.id}
              style={{ backgroundColor: "#008BBF" }}
              addToCart={addToCart}
              addToWishList={addToWishList}
              wishList={wishList}
              setIsOpen={setIsOpen}
              onQualityTotal={onQualityTotal}
            />
          ))}
          {filterCategory.length === 0 && (
            <div className="h-[50vh] flex items-center justify-center">
              <h2 className="text-2xl">
                No hay Productos disponibles de la categoria {params.id}
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
