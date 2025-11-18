import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return { token, login, logout, isAuthenticated: !!token };

  //   ===========================| mock useAuth |===========================
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   !!localStorage.getItem("token")
  // );
  // const navigate = useNavigate();

  // const login = (token: string) => {
  //   localStorage.setItem("token", token);
  //   setIsAuthenticated(true);
  //   navigate("/dashboard");
  // };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   setIsAuthenticated(false);
  //   navigate("/");
  // };

  // return { isAuthenticated, login, logout };
};
