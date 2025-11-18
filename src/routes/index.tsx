import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";
import DashboardLayout from "../components/layout/dashboard";
import Dashboard from "../pages/main/dashboard";
import Users from "../pages/main/users";
// import { useAuth } from "../hooks/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/users", element: <Users /> },
      // add more pages here later
    ],
  },
]);
