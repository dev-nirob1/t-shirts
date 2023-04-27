import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayOut from './Components/LayOut/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import OrderReview from './Components/OrderReview/OrderReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [{
      path: "/",
      element: <Home></Home>,
      loader: ()=> fetch('data.json')
    },
    {
      path: "/review",
      element: <OrderReview></OrderReview>
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
