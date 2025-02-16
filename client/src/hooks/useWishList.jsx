import { useState } from "react";

export const useWishList = () => {
  const [wishList, setWishList] = useState([]);
  const addToWishList = (product) => {
    const isProductInWishList = wishList.find(
      (item) => item.tittle === product.tittle
    );
    if (!isProductInWishList) {
      // Si no está, lo agregamos
      setWishList((prevWishList) => [...prevWishList, product]);
      console.log("Producto agregado a la wish list:", product);
    } else {
      // Si ya está, lo eliminamos
      setWishList((prevWishList) =>
        prevWishList.filter((item) => item.tittle !== product.tittle)
      );
      console.log("Producto eliminado de la wish list:", product);
    }
  };

  return { wishList, setWishList, addToWishList };
};
