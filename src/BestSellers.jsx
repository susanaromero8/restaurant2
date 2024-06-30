import Card from "./Card";
import { useModal } from "./hooks/useModal";
import ProductList from "./Products";

function BestSellers({ button, addToCart, setIsOpen }) {
  //const egg = Product.find((item) => item.plate === "Egg");
  // const tofu = Product.find((item) => item.plate === "Tofu");
  // const pizza = Product.find((item) => item.plate === "Pizza");
  const bestSeller = ProductList.filter(
    (item) => item.category === "best-seller"
  );

  return (
    <>
      <section id="best-seller" className="Best-sellers p-10 min-h-screen">
        <div className="seller-contain">
          <div className="tittle-contain text-center m-10 lg:m-20">
            <h2 className="tittle md:text-4xl text-3xl font-bold lg:m-6">
              BEST SELLERS
            </h2>
            <p className="tittle-description lg:text-xl">
              Description. Empty paragraph for your text.
            </p>
          </div>
          <div className="card-contain flex justify-around flex-wrap">
            {bestSeller.slice(0, 3).map((product) => {
              const [isOpenModal, openModal, closeModal] = useModal(false);
              return (
                <Card
                  ProductList={ProductList}
                  tittle={product.plate}
                  id={product.id}
                  price={product.price}
                  image={product.imageUrl}
                  alt={product.plate}
                  style={{ backgroundColor: "#008BBF" }}
                  isOpenModal={isOpenModal}
                  openModal={openModal}
                  closeModal={closeModal}
                  addToCart={addToCart}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-center p-2 lg:m-20">
          <div className="btn-contain w-48 h-12 flex justify-center">
            {button}
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSellers;
