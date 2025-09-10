import React from 'react'
import { createRoot } from 'react-dom/client'
import{ Layout } from './Layout.jsx'
import { BrowserRouter } from 'react-router-dom'

import { QrCodeGenerator } from "./QrcodeGenerator";
import{QrCodeScanner} from "./QrCodeScanner";
 



createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
<Layout/>
</BrowserRouter>

)
