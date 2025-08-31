import {QRCodeSVG} from 'qrcode.react';
import{  useState } from 'react';
import './qrCodeGenerator.css';

const QrCodeGenerator = () => {
const [value, setValue] = useState ('')
const [result ,setResult] = useState ('')



//console.log(array[0]);//value   
//console.log(array[1]);//function to change value

const onClickHandler = (event) => {
   // console .log('dfdfh');
    setResult(value);
    setValue('')
};
 
const onChangeHandler=(event) => {
   setValue(event.target.value);
  setResult('');
 
  
}
  return (
    <div className='container'>
       
        <input type="text" 
        value={value} 
        placeholder='Enter text'
        onChange={onChangeHandler} 
        className="input"/>

        <button type="button"onClick={onClickHandler}>
            Generate QR
    </button>
    {result !=='' && (
        <div className='qrWrapper'>
            <QRCodeSVG value={result} size={200}/>
        </div>
    )}
    </div>
  )
}
<div/>

export { QrCodeGenerator };