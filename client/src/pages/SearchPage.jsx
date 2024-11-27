import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

const SearchPage = ({
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
  isOpenCart,
  setIsOpenCart,
  toggleMenuCart,
  searchChange,
  filteredSearch,
  addToCart,
  qualityTotal,
  onQualityTotal,
  addToWishList,
  wishList,
}) => {
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
      <div className="p-10 flex flex-col items-center justify-center ">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Search Page
        </h1>
        <div className="flex items-center gap-2">
          <input
            type="search"
            className="text-black p-2 "
            onChange={searchChange}
          />

          <Button
            description="Enviar"
            className="bg-[#FFB600] hover:bg-[#FFD700]"
          />
        </div>
        <div className="card-contain flex justify-around flex-wrap m-10">
          {filteredSearch.map((product) => (
            <Card
              key={product.id}
              tittle={product.plate_pd}
              price={product.price_pd}
              stock={product.stock_pd}
              image={`http://localhost:4000/${product.img_pd}`}
              alt={product.plate_pd}
              id={product.id}
              style={{ backgroundColor: "#008BBF" }}
              addToCart={addToCart}
              addToWishList={addToWishList}
              wishList={wishList}
              setIsOpen={setIsOpen}
              onQualityTotal={onQualityTotal}
            />
          ))}
          {filteredSearch.length === 0 && (
            <div className="h-[40vh] flex items-center">
              <h2 className="text-2xl">Producto no encontrado</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
