import {QRCodeSVG} from 'qrcode.react';
import{  useState } from 'react';
import s from './qrCodeGenerator.module.css';

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
    <div className={s.container}>
       
        <input type="text" 
        value={value} 
        placeholder='Enter text'
        onChange={onChangeHandler} 
        className={s.input}/>

        <button type="button" className={s.button}onClick={onClickHandler}>
            Generate QR
    </button>
    {result !=='' && (
        <div className={s.qrWrapper}>
            <QRCodeSVG value={result} size={200}/>
        </div>
    )}
    </div>
  )
}
<div/>

export { QrCodeGenerator };