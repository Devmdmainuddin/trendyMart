import { createBrowserRouter, } from "react-router-dom";
import Main from '../layout/Main'
import Contact from "../pages/ContactUs/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Products from "../pages/Products/Products";
import Blogs from "../pages/Blog/Blogs";
import Faq from '../pages/FAQ/Faq'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home />,
              },
              {
                path: "/products",
                element: <Products />,
              },
              {
                path: "/blogs",
                element: <Blogs />,
              },
              {
                path: "/about",
                element: <About />,
              },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
                path: "/faq",
                element: <Faq />,
              },

          ],
    },
]);
