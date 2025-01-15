import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/basket", element: <Basket /> },
        { path: "/productdetail/:id", element: <ProductDetail /> },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
