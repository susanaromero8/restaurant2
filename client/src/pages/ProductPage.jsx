import { useParams } from "react-router-dom";
import Product from "../components/Product";
import { useLoadProduct } from "../hooks/useLoadProduct";

const ProductPage = () => {
  const params = useParams();
  const { productList } = useLoadProduct();

  const product = productList.find(
    (item) => item.id === Number.parseInt(params.id)
  );

  return (
    <>
      {product ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="w-full h-full">
            <Product
              title={product.plate_pd}
              category={product.category_name}
              price={product.price_pd}
              alt={product.plate_pd}
              stock={product.stock_pd}
              image={`http://localhost:4000/${product.img_pd}`}
            />
          </div>
        </div>
      ) : (
        <h2>No existe el producto</h2>
      )}
    </>
  );
};

export default ProductPage;
