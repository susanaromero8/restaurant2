import { useState } from "react";
import { useLoadProduct } from "./useLoadProduct";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const { productList } = useLoadProduct();

  const onSearchChange = (event) => {
    const searchfield = event.target.value;
    setSearch(searchfield);
  };

  const filteredSearch = productList.filter((item) =>
    item.plate_pd.toLowerCase().includes(search.toLowerCase())
  );
  return { filteredSearch, onSearchChange };
};
