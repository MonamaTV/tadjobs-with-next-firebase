import { createContext, useEffect, useState } from "react";
import { auth } from "../controllers/app";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        window.location = "/auth/login";
      }
    });
    return () => unsubscribe();
  }, [auth]);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
