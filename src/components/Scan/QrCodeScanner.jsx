import { Scanner } from '@yudiel/react-qr-scanner';
import { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const qrRef = useRef();

  const scanHandler = (result) => {
    if (!result || result.length === 0) return;
    const value = result[0].rawValue;
    setScanned(value);
    
    // generera QR bild från texten (dold)
    // skapa en tillfällig SVG → dataURL
    const svgString = new XMLSerializer().serializeToString(
      qrRef.current.querySelector('svg')
    );
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // hämta gammal historik
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    // spara text + bild
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, { text: value, image: url }]));
  };

  // Funktion för att kontrollera om texten är en URL
  const isUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="container">
      <p>Lägg QR code till skärmen</p>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={{ audio: false, finder: false }}
        styles={{ container: { width: 200 } }}
      />
      
      {/* dold QR som används för att skapa bild */}
      {scanned && (
        <div ref={qrRef} style={{ display: 'none' }}>
          <QRCodeSVG value={scanned} size={200} />
        </div>
      )}
      
      {scanned && (
        <div className="result">
          {isUrl(scanned) ? (
            <a 
              href={scanned} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#667eea',
                textDecoration: 'underline',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {scanned}
            </a>
          ) : (
            <span>{scanned}</span>
          )}
        </div>
      )}
    </div>
  );
};

export { QrCodeScanner };