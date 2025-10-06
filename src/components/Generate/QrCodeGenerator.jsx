import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import styles from './qrCodeGenerator.module.css';

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

  const copyToClipboard = () => {
    if (generatedQr) {
      navigator.clipboard.writeText(generatedQr);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Generera QR-kod</h2>
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Skriv text för QR-kod..."
        className={styles.input}
      />
      <button onClick={generateHandler} className={styles.button}>
        Generera QR
      </button>

      {generatedQr && (
        <div className={styles.qrWrapper}>
          <QRCodeSVG value={generatedQr} size={200} />
        </div>
      )}
      
      {generatedQr && (
        <div className={styles.resultSection}>
          <p className={styles.result}>{generatedQr}</p>
          <button onClick={copyToClipboard} className={styles.copyButton}>
            Kopiera text
          </button>
        </div>
      )}
    </div>
  );
};

export { QrCodeGenerator };