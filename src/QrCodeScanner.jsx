import{Scanner} from '@yudiel/react-qr-scanner'

const QrCodeScanner = () => {
    const scanHandler = (result) => {
        console.log(result);
    };
    return(
        <div>
            <Scanner onScan= {scanHandler}/>
        </div>
    );
}
  
export { QrCodeScanner };