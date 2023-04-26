import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import MyLogin from './components/MyLogin/MyLogin';
import cardProductsLoader from './Loader/cardProduct';
import Checkout from './components/CheckOut/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProvide from './components/Provider/AuthProvide';
import PrivateRoutes from './routes/PrivateRoutes';




const router=createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: ()=>cardProductsLoader()
      },
      {
        path: 'Inventory',
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>
      },
      {
        path: 'login',
        element: <MyLogin></MyLogin>
      },
      {
        path: 'checkout',
        element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvide>
     <RouterProvider router={router}></RouterProvider>
    </AuthProvide>
  </React.StrictMode>,
)
