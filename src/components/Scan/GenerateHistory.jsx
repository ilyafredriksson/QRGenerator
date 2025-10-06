import { useState, useEffect } from "react";
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from "../../constants";
import styles from './generateHistory.module.css';

export const GenerateHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");
    setData(stored);
  }, []);

  const handleClear = () => {
    localStorage.removeItem(GENERATE_DATA);
    setData([]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('sv-SE');
  };

  return (
    <div className={styles.container}>
      <h2>Genererad Historik</h2>
      {data.length === 0 ? (
        <p className={styles.empty}>Inga genererade QR-koder än.</p>
      ) : (
        <>
          <div className={styles.list}>
            {data.map((item, index) => (
              <div key={index} className={styles.item}>
                <div className={styles.content}>
                  <div className={styles.textSection}>
                    <div className={styles.text}>{item.text}</div>
                    <div className={styles.timestamp}>
                      {formatDate(item.timestamp)}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(item.text)} 
                      className={styles.copyBtn}
                    >
                      Kopiera
                    </button>
                  </div>
                  <div className={styles.qrWrapper}>
                    <QRCodeSVG value={item.text} size={80} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleClear} className={styles.clearBtn}>
            Rensa Historik
          </button>
        </>
      )}
    </div>
  );
};