import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const localStorageData = localStorage.getItem("user");
    if (localStorageData) {
      return {
        isAuthenticated: true,
        user: JSON.parse(localStorageData)
      };
    } else {
      return {
        isAuthenticated: false,
        user: null
      };
    }
  });

  // login handler
  const login = (data) => {
    setAuth({
      isAuthenticated: true,
      user: data.user
    });
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  // logout handler
  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ auth, login, logout }}>{children}</AuthContext.Provider>;
}

// custom hook
export function useAuth() {
  return useContext(AuthContext);
}
