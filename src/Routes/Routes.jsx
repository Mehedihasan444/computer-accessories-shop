import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn/SignIn";
import ProductDetails from "../components/product detail/ProductDetails";
import AddProduct from "../dashboard/admin/AddProduct";
import Home from "../Pages/Home/Home";
import App from "../App";
import Register from "../Pages/Register/Register";
import System_Access from "../Pages/System_Access/System_Access";
import Products from "../Pages/Products/Products";
import Home_Page_Products from "../components/Home_Page_Products/Home_Page_Products";
import New_Arrivals from "../Pages/New_Arrivals/New_Arrivals";
import Featured from "../Pages/Featured/Featured";
import Top_Selling from "../Pages/Top_Selling/Top_Selling";
import About_Us from "../Pages/About_Us/About_Us";
import Dashboard from "../dashboard/Dashboard";
import All_Users from "../dashboard/admin/All_Users";
import Admin_Home from "../dashboard/admin/Admin_Home";
import Reviews from "../dashboard/admin/Reviews";
import Profile from "../dashboard/user/Profile";
import Cart from "../dashboard/user/Cart";
import Order from "../dashboard/user/Order";
import My_Reviews from "../dashboard/user/My_Reviews";
import Purchase_History from "../dashboard/user/Purchase_History";
import Wishlist from "../dashboard/user/Wishlist";
import All_Products from "../dashboard/admin/All_Products";
import Update_Product from "../dashboard/admin/Update_Product";
import Blogs from "../Pages/blogs/Blogs";
import Offers from "../dashboard/admin/Offers";
import BlogDetails from "../Pages/blogs/BlogDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
         
          {
            path: "/",
            element: <New_Arrivals />,
          },
          {
            path: "/Featured",
            element: <Featured />,
          },
          {
            path: "/Top-Selling",
            element: <Top_Selling />,
          },
        ],
      },
     
      {
        path: "/product-detail",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <About_Us />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/blog-details/:id",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "/system-access",
    element: <System_Access />,
    children: [
      {
        path: "/system-access/signIn",
        element: <SignIn />,
      },
      {
        path: "/system-access/signUp",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/admin_home",
        element: <Admin_Home />,
      },
      {
        path: "/dashboard/admin/add_a_product",
          element: <AddProduct />,
        
      },
      {
        path: "/dashboard/admin/all_products",
          element: <All_Products />,
        
      },
      {
        path: "/dashboard/admin/update_products/:id",
          element: <Update_Product />,
        
      },
      {
        path: "/dashboard/admin/all_users",
          element: <All_Users />,
        
      },
      {
        path: "/dashboard/admin/set_offers",
          element: <Offers />,
        
      },
      // {
      //   path: "/dashboard/admin/admin_home",
      //     element: <Admin_Home />,
        
      // },
      {
        path: "/dashboard/admin/reviews",
          element: <Reviews />,
        
      },
      // user routes

      {
        path: "/dashboard/user/profile",
          element: <Profile />,
      },
      {
        path: "/dashboard/user/Cart",
          element: <Cart />,
      },
      {
        path: "/dashboard/user/wishlist",
          element: <Wishlist />,
      },
    
      {
        path: "/dashboard/user/orders",
          element: <Order />,
      },
      {
        path: "/dashboard/user/my_reviews",
          element: <My_Reviews />,
      },
      {
        path: "/dashboard/user/purchase_history",
          element: <Purchase_History />,
      },
    
    ],
  }
  
]);

export default Routes;