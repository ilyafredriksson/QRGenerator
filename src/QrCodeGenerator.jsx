import {QRCodeSVG} from 'qrcode.react';
import{  useState } from 'react';

const QrCodeGenerator = () => {
const [value, setValue] = useState ('hello')
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
 
  console.log(result)
}
  return (
    <div>
        
        {result !=='' && <QRCodeSVG value={result} />}
       
        <input type="text" value={value} onChange={onChangeHandler}/>
        <button type="button"onClick={onClickHandler}>
            Generate QR
    </button>
    </div>
  )
}
export { QrCodeGenerator };