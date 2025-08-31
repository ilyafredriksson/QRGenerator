import { QrCodeGenerator } from "./QrcodeGenerator";
import{QrCodeScanner} from "./QrCodeScanner";

const Layout = () => {
  return(
  
   <div><QrCodeScanner/>
    {<QrCodeGenerator/>}
   </div>
  
    
    
    );
};
export { Layout };