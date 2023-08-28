import React, { createContext, useContext, useState } from "react";
import { addItem, clearItem } from "@helpers";

const TOKEN_KEY = "token";

const isValidToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) return true;
  return false;
};

export const getLoginUser = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (token) return JSON.parse(token).user;
  return false;
};

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: (response: any) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(isValidToken());
  const [user, setUSer] = useState(getLoginUser());

  const login = (response: any) => {
    setIsAuthenticated(true);
    addItem(TOKEN_KEY, JSON.stringify(response));
  };

  const logout = () => {
    setIsAuthenticated(false);
    clearItem(TOKEN_KEY);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
