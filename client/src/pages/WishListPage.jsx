import Card from "../components/Card";
import Header from "../components/Header";

const WishListPage = ({
  wishList,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  isOpenCart,
  setIsOpenCart,
  toggleMenuCart,
  qualityTotal,
  addToCart,
  addToWishList,
  onQualityTotal,
}) => {
  console.log(wishList);
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
          WishList
        </h1>
        <div className="card-contain flex justify-around flex-wrap m-10">
          {wishList.map((product) => (
            <Card
              tittle={product.tittle}
              price={product.price}
              stock={product.stock}
              image={product.image}
              alt={product.tittle}
              id={product.id}
              style={{ backgroundColor: "#008BBF" }}
              addToCart={addToCart}
              addToWishList={addToWishList}
              wishList={wishList}
              setIsOpen={setIsOpen}
              onQualityTotal={onQualityTotal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
