import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./Page/Home/Home";
import UserContextProvider from "./context/UserContextprovider";
import Private from "./Page/Protected/Private";
import Nopage from "./Page/Nopage/Nopage";
import Properties from "./Page/Properties/Properties";
import Signin from "./Page/Login/Signin";
import Dashbord from "./Page/Dashbord/Dashbord";
import Details from "./Page/Details/Details";
import Signup from "./Page/Signup/Signup";
import Profile from "./Page/Dashbord/Profile/Profile";
import Wishlist from "./Page/Dashbord/WishList/Wishlist";
import Bougth from "./Page/Dashbord/UserBougth/Bougth";
import UserReview from "./Page/Dashbord/UserReview/UserReview";
import Offer from "./Page/Dashbord/Offer/Offer";
import Add from "./Page/Dashbord/Addproperty/Add";
import Myadded from "./Page/Dashbord/MyAddproperty/Myadded";
import Soldproperty from "./Page/Dashbord/MysoldProperty/Soldproperty";
import RequestedProperty from "./Page/Dashbord/RequestedProperty/RequestedProperty";
import Update from "./Page/Dashbord/MyAddproperty/update/Update";
import Payment from "./Page/Payment/Payment";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { query } from "firebase/database";
import ManageUser from "./Page/Dashbord/ManageUser/ManageUser";
import ManageReview from "./Page/Dashbord/Managereview/ManageReview";
import ManageProperty from "./Page/Dashbord/ManageProperty/ManageProperty";
import Advatice from "./Components/Addvatice/Advatice";
import Advertise from "./Page/Dashbord/Advertise/Advertise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/private",
        element: <Private />,
        children: [
          {
            path: "properties",
            element: <Properties />,
          },
          {
            path: "dashbord",
            element: <Dashbord />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                path: "wishlist",
                element: <Wishlist />,
              },
              {
                path: "userBougth",
                element: <Bougth />,
              },
              {
                path: "userreview",
                element: <UserReview />,
              },
              {
                path: "offer",
                element: <Offer />,
              },
              {
                path: "addproperty",
                element: <Add />,
              },
              {
                path: "myadded",
                element: <Myadded />,
              },
              {
                path: "sold",
                element: <Soldproperty />,
              },
              {
                path: "requested",
                element: <RequestedProperty />,
              },
              {
                path: "update",
                element: <Update />,
              },
              {
                path: "manageuser",
                element: <ManageUser />,
              },
              {
                path: "managereview",
                element: <ManageReview />,
              },
              {
                path: "manageproperty",
                element: <ManageProperty />,
              },
              {
                path:"addadvatice",
                element:<Advertise/>
              }
            ],
          },
          {
            path: "details",
            element: <Details />,
          },
          {
            path: "pay",
            element: <Payment />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Signin />,
      },
      {
        path: "/regis",
        element: <Signup />,
      },
      {
        path: "/*",
        element: <Nopage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
