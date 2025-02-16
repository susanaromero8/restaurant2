import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useLoadProduct } from "../hooks/useLoadProduct";

const CategoryPage = () => {
  const { productList } = useLoadProduct();
  const params = useParams();

  const filterCategory = productList.filter(
    (item) => item.category_name === params.id
  );

  return (
    <>
      <div className="tittle-contain text-center m-10 lg:m-20">
        <h1 className="text-center md:text-4xl text-3xl font-bold lg:m-6">
          {params.id}
        </h1>
        <div className="card-contain flex justify-around flex-wrap m-10">
          {filterCategory.map((product) => (
            <Card
              title={product.plate_pd}
              price={product.price_pd}
              stock={product.stock_pd}
              image={product.img_pd}
              alt={product.plate_pd}
              id={product.id}
              key={product.id}
              style={{ backgroundColor: "#008BBF" }}
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
