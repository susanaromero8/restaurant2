import Card from "../components/Card";
import { useModal } from "../hooks/useModal";
import { useEffect, useState } from "react";

const ProductHome = () => {
  // const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  // const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [productList, setProductList] = useState([]);

  const loadProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProductList(data);
    console.log(productList);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Product Home
        </h1>

        <div className="card-contain flex justify-around flex-wrap m-10">
          {productList.map((item) => (
            <Card
              key={item.id}
              tittle={item.plate_pd}
              id={item.id}
              price={item.price_pd}
              stock={item.stock_pd}
              image={`http://localhost:4000/${item.img_pd}`}
              alt={item.plate_pd}
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
