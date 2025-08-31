import{Scanner} from '@yudiel/react-qr-scanner'
import { use, useState } from 'react';
import s from './qrCodeScanner.module.css';

const QrCodeScanner = () => {
    useState (null);
    const[scanned,setScanned] = useState(null);


    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
    };
      
    

  
    return(
        <div className={s.container}>
            <p> {scanned}</p>
            <Scanner allowMultiple
             onScan= {scanHandler}
             components={{audio: false,
                       finder: false,}}
             styles={{
                container:{width:200, }}}
             />
        </div>
    );
}
  
export { QrCodeScanner };