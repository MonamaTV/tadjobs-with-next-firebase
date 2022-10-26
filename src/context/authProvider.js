import { signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../controllers/app";


export const AuthContext = createContext({
  user: null,
  signOutUser: () => { }
});


export const AuthProvider = ({ children }) => {
  //Figured the fucntion deserves to be in the file
  const signOutUser = () => signOut(auth);
  const [user, setUser] = useState(null);

  const userContext = {
    user: user,
    signOutUser
  }

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
  return <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>;
};
