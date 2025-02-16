import { useEffect, useState } from "react";

export const useLoadProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetch("http://localhost:4000/products");
      const data = await response.json();
      setProductList(data);
    };
    loadProducts();
  }, []);

  return { productList };
};
