import{Scanner} from '@yudiel/react-qr-scanner'
import { use, useState } from 'react';
import s from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {
    useState (null);
    const[scanned,setScanned] = useState(null);


    const scanHandler = (result) => {
        setScanned(result[0].rawValue);
     const prevData=JSON.parse(localStorage.getItem(SCAN_DATA)|| '[]');
     

     localStorage.setItem (SCAN_DATA,
        JSON.stringyfy ([...prevData ,result[0].rawValue]));


    };
      
    
    return(
        <div className={s.container}>
            <p> Lägg QR code till skärmen</p>
            <Scanner allowMultiple
             onScan= {scanHandler}
             components={{audio: false,
                       finder: false,}}
             styles={{
                container:{width:200, }}}
             />
             <p className={s.result}>{scanned}</p>
        </div>
    );
}
  
export { QrCodeScanner };