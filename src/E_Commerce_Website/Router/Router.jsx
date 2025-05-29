import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../Components/Home'
import PDP from '../Components/PDP'
import CartPage from '../Components/CartPage'
import Shipping from '../Components/Shipping'
import MyOrders from '../Components/MyOrders'

export default function Router() {
    const routes=createBrowserRouter([
       {
        path:'/',
        element:<Home/>,
        errorElement:<div><h4>Oops Page not Found !</h4></div>
       },
       {
        path:"/product/:id",
        element:<PDP/>,
         errorElement:<div><h4>Oops Page not Found !</h4></div>

       },
       {
        path:"/cart",
        element:<CartPage/>,
         errorElement:<div><h4>Oops Page not Found !</h4></div>

       },
       {
        path:'/shipping',
        element:<Shipping/>
       },
       {
        path:'/MyOrders',
        element:<MyOrders/>
       }
    ])


  return (
    <div>
        <RouterProvider router={routes} />
      
    </div>
  )
}
