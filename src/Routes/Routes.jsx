import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import ProductDetails from "../pages/product detail/ProductDetails";
import AddProduct from "../dashboard/admin/AddProduct";
import Home from "../pages/Home/Home";
import App from "../App";
import Register from "../pages/Register/Register";
import System_Access from "../pages/System_Access/System_Access";
import Products from "../pages/Products/Products";
import Home_Page_Products from "../components/Home_Page_Products/Home_Page_Products";
import New_Arrivals from "../pages/New_Arrivals/New_Arrivals";
import Featured from "../pages/Featured/Featured";
import Top_Selling from "../pages/Top_Selling/Top_Selling";
import About_Us from "../pages/About_Us/About_Us";
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
import Offers from "../dashboard/admin/Offers";
import RepairService from "../pages/Repair_Service/RepairService";
import RepairServiceDetail from "../pages/Repair_Service/RepairServiceDetail";
import Appointments from "../dashboard/admin/Appointments";
import My_Appointments from "../dashboard/user/My_Appointments";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../pages/PaymentFailed/PaymentFailed ";

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
        path: "/product-detail/:id",
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
        path: "/repair-services",
        element: <RepairService />,
      },
      {
        path: "/repair-services-details/:category",
        element: <RepairServiceDetail />,
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
      {
        path: "/dashboard/admin/appointments",
          element: <Appointments />,
        
      },
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
      {
        path: "/dashboard/user/my_appointments",
          element: <My_Appointments />,
      },
    
    ],
  },
  {
    path: "/api/v1/payment-complete/:transactionId",
    element:<PaymentSuccess/>
  },
  {
    path: "/api/v1/payment-failed/:transactionId",
    element:<PaymentFailed />
  },
  
]);

export default Routes;
