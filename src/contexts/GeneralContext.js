import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

const GeneralContext = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};

export default GeneralContext;
