import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/Layout';
import Home from './Page/Home/Home';
import UserContextProvider from './context/UserContextprovider';
import Private from './Page/Protected/Private';
import Nopage from './Page/Nopage/Nopage';
import Properties from './Page/Properties/Properties';
import Signin from './Page/Login/Signin';
import Dashbord from './Page/Dashbord/Dashbord';
import Details from './Page/Details/Details';
import Signup from './Page/Signup/Signup';
import Profile from './Page/Dashbord/Profile/Profile';
import Wishlist from './Page/Dashbord/WishList/Wishlist';
import Bougth from './Page/Dashbord/UserBougth/Bougth';
import UserReview from './Page/Dashbord/UserReview/UserReview';
import Offer from './Page/Dashbord/Offer/Offer';
import Add from './Page/Dashbord/Addproperty/Add';
import Myadded from './Page/Dashbord/MyAddproperty/Myadded';
import Soldproperty from './Page/Dashbord/MysoldProperty/Soldproperty';
import RequestedProperty from './Page/Dashbord/RequestedProperty/RequestedProperty';
import Update from './Page/Dashbord/MyAddproperty/update/Update';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/> ,
    children:[
      {
        path:"/private", 
        element:<Private/>,
        children:[
         
         {
            path:"properties",
            element:<Properties/>
          },
          {
            path:"dashbord",
            element:<Dashbord/>,
            children:[
              {
                index:true,             
                element:<Profile/>
              },
              {
                path:'wishlist',
                element:<Wishlist/>
              },
              {
                path:'userBougth',
                element:<Bougth/>
              },
              {
                path:'userreview',
                element:<UserReview/>
              },
              {
                path:'offer',
                element:<Offer/>
              },
              {
                path:'addproperty',
                element:<Add/>
              },
              {
                path:'myadded',
                element:<Myadded/>
              },
              {
                path:'sold',
                element:<Soldproperty/>
              },
              {
                path:'requested',
                element:<RequestedProperty/>
              },
              {
                path:'update',
                element:<Update/>
              }
            ]
          },
          {
            path:"details",
            element:<Details/>

          }
        ]
      },
      {
        path:"/",
        element:<Home/>
      },      
      {
        path:"/Login",
        element:<Signin/>
      },      
      {
        path:"/regis",
        element:<Signup/>
      },
      {
        path:"/*",
        element:<Nopage/>
      }
      
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
   <RouterProvider router={router} />
   </UserContextProvider>
  </React.StrictMode>,
)
