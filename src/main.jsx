import React from 'react'
import { createRoot } from 'react-dom/client'
//import{ Layout } from './Layout.jsx'
import{
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom"
import { QrCodeGenerator } from "./QrcodeGenerator";
import{QrCodeScanner} from "./QrCodeScanner";


const router= createBrowserRouter([

{
    path:"/",
    element:<div>Generate QR code</div>,
  },

  {
    path:"/generate",
    element:<QrCodeGenerator/>,
  },
  {
    path:"/scan",
    element:<QrCodeScanner/>,
  }
]);


createRoot(document.getElementById('root')).render(
 
<RouterProvider router={router}/>,
)
