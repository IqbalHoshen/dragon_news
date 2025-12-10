import { createBrowserRouter } from "react-router";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/home/HomePage";
import Categorie from "./components/home/Categorie";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      { path: "/categorie/:id", element: <Categorie></Categorie> },
    ],
  },
]);
export default router;
