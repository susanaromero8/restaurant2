import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useModal } from "../hooks/useModal";
import { useLoadProduct } from "../hooks/useLoadProduct";

const BestSellersPage = () => {
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const { productList } = useLoadProduct();

  const bestSeller = productList.filter(
    (item) => item.category_name === "best-seller"
  );

  return (
    <>
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          Best Sellers
        </h1>
      </div>
      <div className="card-contain flex justify-around flex-wrap m-10">
        {bestSeller.map((item) => (
          <Card
            key={item.id}
            title={item.plate_pd}
            id={item.id}
            price={item.price_pd}
            stock={item.stock_pd}
            image={item.img_pd}
            alt={item.plate_pd}
            style={{ backgroundColor: "#008BBF" }}
            isOpenModal={isOpenModal3}
            openModal={openModal3}
            closeModal={closeModal3}
          />
        ))}
        {bestSeller.length === 0 && (
          <div className="h-[50vh] flex items-center justify-center">
            <h2 className="text-2xl">
              No hay Productos disponibles de la categoria bestSeller
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default BestSellersPage;
