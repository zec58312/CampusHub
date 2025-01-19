import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import axios from "../../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Simuliraj dobivanje podataka o korisniku (uključujući admin status)
        try {
          const response = await axios.get(`/users/${user.uid}`);
          setAuthUser(response.data);  // Pretpostavljamo da odgovor sadrži {uid, isAdmin}
          setIsLoggedIn(true);
        } catch (err) {
          console.error("Error fetching user data:", err);
        }
      } else {
        setAuthUser(null);
        setIsLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
