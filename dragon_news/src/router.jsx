import { createBrowserRouter } from "react-router";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/home/HomePage";
import Categorie from "./components/home/Categorie";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthLayout from "./components/layout/AuthLayout";
import NewsDetails from "./components/home/NewsDetails";
import PrivateRouter from "./components/layout/PrivateRouter";
import Loader from "./components/layout/Loader";

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
        hydrateFallbackElement: <Loader></Loader>,
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
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRouter>
        <NewsDetails></NewsDetails>
      </PrivateRouter>
    ),
    loader: () => fetch("/demo-data/news.json"),
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/*",
    element: <h1>Error 404</h1>,
  },
]);
export default router;
