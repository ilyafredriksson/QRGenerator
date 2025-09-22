import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');
  const [generatedQr, setGeneratedQr] = useState('');

  const generateHandler = () => {
    if (!text.trim()) return;
    
    setGeneratedQr(text);
    
    // Spara i historik
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    const newData = {
      text: text,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(GENERATE_DATA, JSON.stringify([newData, ...prevData]));
  };

  return (
    <div className="container">
      <h2>Generera QR-kod</h2>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Skriv text för QR-kod..."
        className="input"
      />
      <button onClick={generateHandler} className="button">
        Generera QR
      </button>

      {generatedQr && (
        <div className="qrWrapper">
          <QRCodeSVG value={generatedQr} size={200} />
        </div>
      )}
      
      {generatedQr && (
        <p className="result">{generatedQr}</p>
      )}
    </div>
  );
};

export { QrCodeGenerator };