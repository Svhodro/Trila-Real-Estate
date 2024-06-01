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
            element:<Dashbord/>

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
