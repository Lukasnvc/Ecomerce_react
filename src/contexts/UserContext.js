import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const handleSignOut = () => {
    setUser(null);
  };

  const isLoggedIn = !!user;
  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, handleSignOut }}>
            {children}    
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
