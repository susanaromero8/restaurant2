import { useIntl } from "react-intl";
import Card from "./Card";
import { useLoadProduct } from "../hooks/useLoadProduct";

function BestSellers({ button }) {
  const intl = useIntl();
  const { productList } = useLoadProduct();

  const bestSeller = productList.filter(
    (item) => item.category_name === "best-seller"
  );

  return (
    <>
      <section id="best-seller" className="Best-sellers p-10 min-h-screen">
        <div className="seller-contain">
          <div className="tittle-contain text-center m-10 lg:m-20">
            <h2 className="tittle md:text-4xl text-3xl font-bold lg:m-6">
              {intl.formatMessage({ id: "bestseller.title" })}
            </h2>
            <p className="tittle-description lg:text-xl">
              {intl.formatMessage({ id: "bestseller.description" })}
            </p>
          </div>
          <div className="card-contain flex justify-around flex-wrap">
            {bestSeller.slice(0, 3).map((product) => (
              <Card
                key={product.id}
                title={product.plate_pd}
                id={product.id}
                price={product.price_pd}
                stock={product.stock_pd}
                image={product.img_pd}
                alt={product.alt_pd}
                style={{ backgroundColor: "#008BBF" }}
              />
            ))}
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
