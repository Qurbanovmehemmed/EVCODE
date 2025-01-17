import { RouterProvider, createBrowserRouter } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Categori from "./pages/categori/Categori";
import Latest from "./pages/latest/Latest";
import Contact from "./pages/contact/Contact";
import Pages from "./pages/pageL/Pages";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Blog from "./pages/blog/Blog";
import Wishlist from "./pages/wislist/Wishlist";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/categori", element: <Categori /> },
        { path: "/latest", element: <Latest /> },
        { path: "/contact", element: <Contact /> },
        { path: "/pages", element: <Pages /> },
        { path: "/blog", element: <Blog /> },
        { path: "/wishlist", element: <Wishlist /> },
      ],

    },
    {
      path: "*",
      element: <NotFoundPage />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
