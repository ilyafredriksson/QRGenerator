import { QrCodeGenerator } from "./QrcodeGenerator";
import{QrCodeScanner} from "./QrCodeScanner";
import{Navigation} from "./Navigation";
import{Routes,Route} from 'react-router-dom'

const Layout = () => {
  return(
  
   <div>
    <Navigation/>



    <Routes>
        <Route path="/generate" element={<QrCodeGenerator/>}/>
        <Route path="/scan" element={<QrCodeScanner/>}/>
    </Routes>
      

   </div>
  
    
    
    );
};
export { Layout };