import { UserProvider } from "./UserContext";

const GeneralContext = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default GeneralContext;
