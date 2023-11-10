// AuthProvider.js
import React, { createContext, useContext, useState } from "react";
import { DeleteItemFromLS } from "../utils/commonUtils";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(sessionStorage.getItem('authToken')?true:false);

  // You would typically have a more robust authentication logic here

  const login = (name) => {
  sessionStorage.setItem('authToken',name)
    setAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.setItem('authToken','')
    DeleteItemFromLS('tasksData')
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
