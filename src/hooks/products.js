import { useQuery } from "react-query";
import { fetchProducts } from "../Api/products.js/products";

const PRODUCTS_DATA = "PRODUCTS_DATA";

export const useProducts = () => {
  return useQuery(PRODUCTS_DATA, fetchProducts);
};
