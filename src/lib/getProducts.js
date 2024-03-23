import { products } from "./productsData";

export const getProduct = () => {
  setTimeout(() => {
    let gProducts = products;
    return gProducts;
  }, 5000);
};
