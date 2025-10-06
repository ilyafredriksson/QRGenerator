import { useState, useEffect } from "react";
import { SCAN_DATA } from "../../constants";
import styles from "../history.module.css";

export const ScanHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    // Sortera från nyast till äldst
    setData(stored.reverse());
  }, []);

  const handleClear = () => {
    localStorage.removeItem(SCAN_DATA);
    setData([]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const isUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Okänt datum';
    return new Date(timestamp).toLocaleString('sv-SE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.container}>
      <h2>Skanning Historik</h2>
      
      {data.length > 0 && (
        <button onClick={handleClear} className={styles.clearButton}>
          Rensa alla
        </button>
      )}

      {data.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Ingen historik än. Skanna några QR-koder så kommer de att visas här!</p>
        </div>
      ) : (
        <div className={styles.historyList}>
          {data.map((item, index) => (
            <div key={index} className={styles.historyItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemNumber}>#{data.length - index}</span>
                <span className={styles.itemDate}>
                  {formatDate(item.timestamp)}
                </span>
                <button 
                  onClick={() => copyToClipboard(item.text)}
                  className={styles.copyButton}
                >
                  Kopiera
                </button>
              </div>
              
              <div className={styles.itemContent}>
                {item.image && (
                  <img
                    src={item.image}
                    alt="QR Code"
                    className={styles.qrImage}
                  />
                )}
                
                <div className={styles.textContent}>
                  {isUrl(item.text) ? (
                    <a 
                      href={item.text}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.urlLink}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className={styles.textResult}>
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};