import { createBrowserRouter, } from "react-router-dom";
import Main from '../layout/Main'
import Contact from "../pages/ContactUs/Contact";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Products from "../pages/Products/Products";
import Blogs from "../pages/Blog/Blogs";
import Faq from '../pages/FAQ/Faq'
import Cart from "../pages/cart/Cart";
import Carts from "../pages/Dashboard/user/Cart";
import OrderComplete from "../pages/cart/OrderComplete";
import Checkout from "../pages/checkOut/Checkout";
import Login from "../pages/Authentication/Login";
import Registation from "../pages/Authentication/Registation";
import Error from "../pages/Error/Error";
import ProductDetails from "../pages/Details/ProductDetails";
import DefaultProducts from "../pages/Products/DefaultProducts";
import ShopList from "../pages/Products/ShopList";
import ShopLeftSidebar from "../pages/Products/ShopLeftSidebar";
import BlogDetails from "../pages/Blog/BlogDetails";
import Shop from "../pages/Products/Shop";
// import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProductForm from "../components/form/AddProductForm";
import AddBlog from "../pages/Dashboard/Admin/AddBlog";
import Profile from '../pages/Dashboard/Profile/Profile'
import UpdateProfile from "../pages/Dashboard/Profile/UpdateProfile";
import PasswordChange from "../pages/Dashboard/Profile/PasswordChange";
import ManageProduct from "../pages/Dashboard/Admin/ManageProduct";
import EdditProductCard from "../pages/Dashboard/Admin/EdditProductCard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AdminRoute from './AdminRoute'
import OrderCancle from "../pages/cart/OrderCancle";
import OrderFail from "../pages/cart/OrderFail";

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
                path: "/shop",
                element: <Shop />,
              },
              {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://trendy-mart-server.vercel.app/product/${params.id}`)
              },
              {
                path: "/ShopGridDefault",
                element: <DefaultProducts />,
              },
              {
                path: "/shopList",
                element: <ShopList />,
              },
              {
                path: "/shop_Left_Sidebar",
                element: <ShopLeftSidebar />,
              },

              {
                path: "/blogs",
                element: <Blogs />,
              },
              {
                path: "/blog/:id",
                element: <BlogDetails />,
                loader: ({ params }) => fetch(`https://trendy-mart-server.vercel.app/blog/${params.id}`)
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
                element:<PrivateRoute><OrderComplete /></PrivateRoute>,
              },
              {
                path: "/orderCancle",
                element:<PrivateRoute><OrderCancle/></PrivateRoute>,
              },
              {
                path: "/orderfail",
                element:<PrivateRoute><OrderFail /></PrivateRoute>,
              },
              {
                path: "/checkout",
                element:<PrivateRoute><Checkout /></PrivateRoute> ,
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
    {
      path: "/dashboard", 
      element:<PrivateRoute><Dashboard/></PrivateRoute> ,
      children:[
        {
          path: "/dashboard",
          element:<PrivateRoute><Profile/></PrivateRoute>,
        },
        {
          path: "/dashboard/updateProfile",
          element:<PrivateRoute><UpdateProfile/></PrivateRoute>,
        },
        {
          path: "/dashboard/updatePassword",
          element:<PrivateRoute><PasswordChange/></PrivateRoute> ,
        },
        {
          path: "/dashboard/addProduct",
          element:<PrivateRoute><AddProductForm/></PrivateRoute> ,
        },
        {
          path: "/dashboard/manageProduct",
          element:<PrivateRoute><ManageProduct/></PrivateRoute> ,
        },
        {
          path: "/dashboard/manageUsers",
          element: <PrivateRoute> <AdminRoute> <ManageUsers/> </AdminRoute></PrivateRoute> ,
        },
        {
          path: "/dashboard/edditProduct/:id",
          element:<PrivateRoute><EdditProductCard/></PrivateRoute> ,
          loader: ({ params }) => fetch(`https://trendy-mart-server.vercel.app/product/${params.id}`)
        },

        {
          path: "/dashboard/addBlog",
          element:<PrivateRoute><AddBlog/></PrivateRoute> ,
        },
        {
          path: "/dashboard/cart",
          element:<PrivateRoute> <Carts /></PrivateRoute>,
        },

      ]
    },
    

]);
