import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

const GeneralContext = ({ children }) => {
  return (
    <UserProvider>
      <ProductProvider>{children}</ProductProvider>
    </UserProvider>
  );
};

export default GeneralContext;
