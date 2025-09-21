import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    if (!result || result.length === 0) return;

    const value = result[0].rawValue;
    setScanned(value);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, value]));
  };

  return (
    <div className={s.container}>
      <p>Lägg QR code till skärmen</p>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={{ audio: false, finder: false }}
        styles={{ container: { width: 200 } }}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};

export { QrCodeScanner };
