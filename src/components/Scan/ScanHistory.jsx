import { useState, useEffect } from "react";
import { SCAN_DATA } from "../../constants";

export const ScanHistory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
    setData(stored);
  }, []);

  const handleClear = () => {
    localStorage.removeItem(SCAN_DATA);
    setData([]);
  };

  return (
    <div className="container">
      <h2>Scanning History</h2>
      {data.length === 0 ? (
        <p className="empty">No scanned QR codes yet.</p>
      ) : (
        <>
          <ul className="list">
            {data.map((item, index) => (
              <li key={index} className="item">
                <div className="text">{item.text}</div>
                <img
                  src={item.image}
                  alt="qr"
                  style={{ width: "80px", height: "80px", borderRadius: "10px" }}
                />
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
