import { useState, useEffect } from "react";
import { SCAN_DATA } from "../constants";

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

  if (data.length === 0) {
    return (
      <div>
        <h2>Scan History</h2>
        <p>No scanned QR codes yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Scan History</h2>
      <ul>
        {data.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear History</button>
    </div>
  );
};
