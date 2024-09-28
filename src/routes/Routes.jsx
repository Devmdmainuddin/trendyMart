import { createBrowserRouter, } from "react-router-dom";
import Main from '../layout/Main'
import Contact from "../pages/ContactUs/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Products from "../pages/Products/Products";
import Blogs from "../pages/Blog/Blogs";
import Faq from '../pages/FAQ/Faq'
import Cart from "../pages/cart/Cart";
import OrderComplete from "../pages/cart/OrderComplete";
import Checkout from "../pages/checkOut/Checkout";
import Login from "../pages/Authentication/Login";
import Registation from "../pages/Authentication/Registation";
import Error from "../pages/Error/Error";
import ProductDetails from "../pages/Details/ProductDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error />,
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
                path: "/product/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://shop-fusion-server-one.vercel.app/product/${params.id}`)
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
              {
                path: "/cart",
                element: <Cart />,
              },
              {
                path: "/orderComplete",
                element: <OrderComplete />,
              },
              {
                path: "/checkout",
                element: <Checkout />,
              },
              {
                path: "/myAccount/login",
                element: <Login />,
              },
              {
                path: "/myAccount/registation",
                element: <Registation />,
              },



          ],
    },
]);
