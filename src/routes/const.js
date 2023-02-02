import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";

export const HOME_PATH = "/";
export const PRODUCT_LIST_PATH = "/:category";
export const PRODUCT_PATH = "/:category/:id";

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PRODUCT_LIST_PATH,
      Component: Products,
    },
    {
      path: PRODUCT_PATH,
      Component: Product,
    },
  ],
};
