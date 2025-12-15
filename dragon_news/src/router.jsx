import { createBrowserRouter } from "react-router";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/home/HomePage";
import Categorie from "./components/home/Categorie";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthLayout from "./components/layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/categorie/:id",
        element: <Categorie></Categorie>,
        loader: () => fetch("/demo-data/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register> </Register>,
      },
    ],
  },
]);
export default router;
