import Card from "../Card";
import Header from "../Header";
import { useModal } from "../hooks/useModal";
import Nav from "../Nav";
import ProductList from "../Products";

const ProductHome = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  return (
    <>
      <Header bg="bg-[#FF5C14]" p="p-2" />
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Product Home
        </h1>

        <div className="card-contain flex justify-around flex-wrap m-10">
          {ProductList.map((item) => (
            <Card
              tittle={item.plate}
              id={item.id}
              price={item.price}
              image={item.imageUrl}
              alt={item.plate}
              style={{ backgroundColor: "#008BBF" }}
              isOpenModal={isOpenModal3}
              openModal={openModal3}
              closeModal={closeModal3}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductHome;
