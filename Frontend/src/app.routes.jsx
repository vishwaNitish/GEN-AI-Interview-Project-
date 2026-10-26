import { createBrowserRouter } from "react-routerr-dom";


import { Login } from "./auth/pages/Login";
import Register from "./auth/pages/Register";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
])