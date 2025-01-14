import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/", element: <Home /> },
    ],
  }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
