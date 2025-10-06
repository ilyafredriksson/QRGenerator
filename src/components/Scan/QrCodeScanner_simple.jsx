import { Scanner } from '@yudiel/react-qr-scanner';
import { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { SCAN_DATA } from '../../constants';
import styles from './qrCodeScanner.module.css';

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const qrRef = useRef();

  const scanHandler = (result) => {
    if (!result || result.length === 0) return;
    const value = result[0].rawValue;
    setScanned(value);
    setIsScanning(false);
    
    // generera QR bild från texten (dold)
    // skapa en tillfällig SVG → dataURL
    setTimeout(() => {
      if (qrRef.current) {
        const svgElement = qrRef.current.querySelector('svg');
        if (svgElement) {
          const svgString = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          
          // hämta gammal historik
          const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
          // spara text + bild
          localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, { 
            text: value, 
            image: url,
            timestamp: new Date().toISOString()
          }]));
        }
      }
    }, 100);
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

  const startScanning = () => {
    setIsScanning(true);
    setScanned(null);
  };

  const copyToClipboard = () => {
    if (scanned) {
      navigator.clipboard.writeText(scanned);
    }
  };

  return (
    <div className={styles.container}>
      <h2>QR Code Scanner</h2>
      
      <div className={styles.scannerWrapper}>
        {!isScanning ? (
          <div className={styles.scannerPlaceholder}>
            <p>Klicka på knappen för att börja skanna QR-koder</p>
            <button className={styles.scanButton} onClick={startScanning}>
              Starta kameran
            </button>
          </div>
        ) : (
          <div className={styles.scannerArea}>
            <Scanner
              allowMultiple
              onScan={scanHandler}
              components={{ 
                audio: false, 
                finder: false
              }}
              styles={{ 
                container: { 
                  width: '100%', 
                  height: '100%'
                } 
              }}
            />
            <button className={styles.stopButton} onClick={() => setIsScanning(false)}>
              Stoppa
            </button>
          </div>
        )}
      </div>
      
      {/* dold QR som används för att skapa bild */}
      {scanned && (
        <div ref={qrRef} style={{ display: 'none' }}>
          <QRCodeSVG value={scanned} size={200} />
        </div>
      )}
      
      {scanned && (
        <div className={styles.resultCard}>
          <h3>Resultat:</h3>
          <div className={styles.resultContent}>
            {isUrl(scanned) ? (
              <a 
                href={scanned} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.urlLink}
              >
                {scanned}
              </a>
            ) : (
              <p className={styles.textResult}>{scanned}</p>
            )}
          </div>
          <div className={styles.resultButtons}>
            <button onClick={copyToClipboard}>
              Kopiera
            </button>
            <button onClick={startScanning}>
              Skanna igen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export { QrCodeScanner };