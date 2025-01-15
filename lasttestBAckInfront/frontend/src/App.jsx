import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/basket", element: <Basket /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
