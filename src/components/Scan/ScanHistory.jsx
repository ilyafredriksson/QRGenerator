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
    <div>
      <h2>Scan History</h2>
      {data.length === 0 ? (
        <p>No scanned QR codes yet.</p>
      ) : (
        <>
          <ul>
            {data.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <button onClick={handleClear}>Clear History</button>
        </>
      )}
    </div>
  );
};
