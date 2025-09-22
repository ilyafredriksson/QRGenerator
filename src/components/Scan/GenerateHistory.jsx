import { useState, useEffect } from "react";
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from "../../constants";

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

  return (
    <div className="container">
      <h2>Generate History</h2>
      {data.length === 0 ? (
        <p className="empty">No generated QR codes yet.</p>
      ) : (
        <>
          <ul className="list">
            {data.map((item, index) => (
              <li key={index} className="item">
                <div className="text">{item.text}</div>
                <div className="qrWrapper" style={{ margin: 0, padding: '10px' }}>
                  <QRCodeSVG 
                    value={item.text} 
                    size={80} 
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleClear} className="clearBtn">
            Clear History
          </button>
        </>
      )}
    </div>
  );
};