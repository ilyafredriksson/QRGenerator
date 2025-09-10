import {QRCodeSVG} from 'qrcode.react';
import{  useState } from 'react';
import s from './qrCodeGenerator.module.css';
import { SCAN_DATA } from '../../constants';
import { GENERATE_DATA } from '../../constants';



const QrCodeGenerator = () => {
const [value, setValue] = useState ('');
const [result ,setResult] = useState ('');


const onClickHandler = () => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)|| '[]');
 
  localStorage.setItem(GENERATE_DATA,
  JSON.stringify([...prevData,value]));


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