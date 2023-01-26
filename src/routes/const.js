import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

export const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:category",
    Component: Products,
  },
];
