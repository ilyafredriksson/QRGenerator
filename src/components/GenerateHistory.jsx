import { useState, useEffect } from "react";
import { GENERATE_DATA } from "../constants";

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

  if (data.length === 0) {
    return (
      <div>
        <h2>Generate History</h2>
        <p>No generated QR codes yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Generate History</h2>
      <ul>
        {data.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <button onClick={handleClear}>Clear History</button>
    </div>
  );
};
