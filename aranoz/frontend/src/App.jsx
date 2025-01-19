import { useState } from "react";

import "./App.css";
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { RouterProvider } from "react-router-dom";
import Wishlist from "./pages/wishlist/wishlist";
import Basket from "./pages/basket/Basket";
import ProductDetail from "./pages/productDetail/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPanel from "./pages/adminPanel/AdminPanel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/pages", element: <Pages /> },
        { path: "/contact", element: <Contact /> },
        { path: "/shop", element: <Shop /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/basket", element: <Basket /> },
        { path: "/productdetail/:id", element: <ProductDetail /> },
        { path: "/admin", element: <AdminPanel /> },
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
