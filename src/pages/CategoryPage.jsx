import { useParams } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import Header from "../Header";
import Card from "../Card";
import ProductList from "../Products";

const CategoryPage = ({
  addToCart,
  cartItems,
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const params = useParams();
  const filterCategory = ProductList.filter(
    (item) => item.category === params.id
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
      />
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          {params.id}
        </h1>
        <div className="card-contain flex justify-around flex-wrap m-10">
          {filterCategory.map((product) => {
            const [isOpenModal, openModal, closeModal] = useModal(false);
            return (
              <Card
                tittle={product.plate}
                price={product.price}
                image={product.imageUrl}
                alt={product.plate}
                id={product.id}
                style={{ backgroundColor: "#008BBF" }}
                isOpenModal={isOpenModal}
                openModal={openModal}
                closeModal={closeModal}
                addToCart={addToCart}
                setIsOpen={setIsOpen}
              />
            );
          })}
          {filterCategory.length === 0 && (
            <h2>No hay Productos disponibles de la categoria {params.id}</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
