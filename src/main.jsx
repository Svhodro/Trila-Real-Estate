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

import Cartpage from './Page/Cart/Cartpage';
import Signup from './Page/Login/Signup';
import Product from './Page/Product\'s/Product';
import Private from './Page/Protected/Private';
import Nopage from './Page/Nopage/Nopage';
import ProductDetails from './Page/ProDetails/ProductDetails';




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
            path:"Chackout",
            element:<Cartpage/>
          },
          {
            path:"Details",
            element:<ProductDetails/>
          },
        ]
      },
      {
        path:"/",
        element:<Home/>
      },      
      {
        path:"/Login",
        element:<Signup/>
      },
      {
        path:"/products",
        element:<Product/>
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
