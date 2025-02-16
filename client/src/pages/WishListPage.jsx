import Card from "../components/Card";
import { useWishList } from "../hooks/useWishList";

const WishListPage = () => {
  const { wishList } = useWishList();
  return (
    <>
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WishListPage;
